// --- Gestion des onglets ---
document.querySelectorAll(".tab-button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});

// --- Bouton générer ---
const generateBtn = document.getElementById("generateBtn");
if (generateBtn) {
  generateBtn.addEventListener("click", () => {
    const activeTab = document.querySelector(".tab-button.active")?.dataset?.target;
    let prompt = "";

    if (activeTab === "enseignants" && typeof generatePromptEnseignants === "function") {
      prompt = generatePromptEnseignants();
    } else if (activeTab === "perdir" && typeof generatePromptPerdir === "function") {
      prompt = generatePromptPerdir();
    } else if (activeTab === "inspection" && typeof generatePromptInspection === "function") {
      prompt = generatePromptInspection();
    }

    const res = document.getElementById("result");
    if (res) res.innerText = (prompt || "").trim();
  });
}

// --- Bouton copier ---
const copyBtn = document.getElementById("copyBtn");
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const resultText = document.getElementById("result")?.innerText || "";
    if (!resultText) return alert("Génère d’abord un prompt !");
    navigator.clipboard.writeText(resultText).then(() => alert("Prompt copié ✅"));
  });
}

//* =========================
   🆕 Bouton Exporter en PDF (avec fallbacks)
   ========================= */
(function () {
  const pdfBtn = document.getElementById("pdfBtn");
  const resultEl = document.getElementById("result");
  if (!pdfBtn || !resultEl) return;

  pdfBtn.addEventListener("click", () => {
    const text = (resultEl.innerText || "").trim();
    if (!text) {
      alert("Aucun prompt à exporter. Générez le prompt d’abord.");
      return;
    }
    const discipline = document.getElementById("discipline-enseignants")?.value || "—";
    const niveau = document.getElementById("niveau-enseignants")?.value || "—";
    const now = formatDateFR(new Date());
    const title = `Prompt — ${discipline} — ${niveau}`;

    const htmlDoc = buildPrintableHtml({
      title,
      discipline,
      niveau,
      now,
      // on exporte le texte tel qu’affiché (monospace + retours à la ligne)
      contentHtml: `<pre>${escapeHtml(text)}</pre>`
    });

    // 1) Tentative nouvelle fenêtre (meilleur isolement CSS)
    const printWin = window.open("", "_blank", "noopener,noreferrer");
    if (printWin) {
      writeAndPrintNewWindow(printWin, htmlDoc);
      return;
    }

    // 2) Fallback iframe caché (contourne la plupart des bloqueurs)
    const iframe = createHiddenIframe();
    if (iframe?.contentWindow) {
      writeAndPrintIframe(iframe, htmlDoc);
      return;
    }

    // 3) Dernier recours : impression dans le même onglet (on clone et on restaure)
    printSameTab(htmlDoc);
  });

  /* -------- Utils impression ---------- */

  function writeAndPrintNewWindow(win, html) {
    const doc = win.document;
    doc.open();
    doc.write(html);
    doc.close();
    win.focus();
    setTimeout(() => {
      win.print();
      // setTimeout(() => win.close(), 250); // optionnel : fermer après impression
    }, 150);
  }

  function createHiddenIframe() {
    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    document.body.appendChild(iframe);
    return iframe;
  }

  function writeAndPrintIframe(iframe, html) {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();
    iframe.onload = () => {
      try {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      } finally {
        // Nettoyage léger après un petit délai
        setTimeout(() => iframe.remove(), 500);
      }
    };
    // certains navigateurs n’appellent pas onload après write() → on force
    setTimeout(() => {
      try {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      } finally {
        setTimeout(() => iframe.remove(), 500);
      }
    }, 200);
  }

  function printSameTab(html) {
    // Sauvegarde DOM visible
    const saved = document.body.innerHTML;
    // On imprime uniquement la racine prévue
    document.body.innerHTML = `
      <div id="__printRoot">
        ${html}
      </div>
    `;
    window.focus();
    setTimeout(() => {
      window.print();
      // Restauration
      document.body.innerHTML = saved;
      // Rebrancher les scripts si besoin (pas nécessaire si SPA légère)
      // location.reload(); // en cas de page complexes, décommentez
    }, 150);
  }

  function buildPrintableHtml({ title, discipline, niveau, now, contentHtml }) {
    return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(title)}</title>
<style>${getPrintCss()}</style>
</head>
<body>
  <div id="__printRoot">
    <div class="print-container">
      <div class="print-header">
        <h1>Générateur de System Prompt — Éducation nationale</h1>
        <div class="print-meta">
          <div><strong>Discipline :</strong> ${escapeHtml(discipline)} &nbsp;&nbsp; <strong>Niveau :</strong> ${escapeHtml(niveau)}</div>
          <div><strong>Exporté le :</strong> ${escapeHtml(now)}</div>
        </div>
      </div>
      <div class="print-content">
        ${contentHtml}
      </div>
    </div>
  </div>
</body>
</html>`;
  }

  function formatDateFR(d) {
    try {
      return new Intl.DateTimeFormat("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }).format(d);
    } catch {
      return d.toLocaleString("fr-FR");
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getPrintCss() {
    return `
      @page { size: A4; margin: 12mm; }
      body { margin: 0; }
      .print-container {
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans",
                     "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        line-height: 1.4;
        color: #111;
        padding: 0;
      }
      .print-header {
        margin: 0 0 12mm 0;
        border-bottom: 1px solid #ddd;
        padding: 0 0 4mm 0;
      }
      .print-header h1 {
        margin: 0 0 4mm 0;
        font-size: 20px;
      }
      .print-meta {
        font-size: 12px;
        color: #666;
      }
      .print-content { font-size: 13px; }
      .print-content pre {
        margin: 0;
        white-space: pre-wrap;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
      }
      @media print {
        body * { visibility: hidden !important; }
        #__printRoot, #__printRoot * { visibility: visible !important; }
        #__printRoot { position: absolute; inset: 0; }
      }
    `;
  }
})();


  // utils
  function formatDateFR(d) {
    try {
      return new Intl.DateTimeFormat("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }).format(d);
    } catch {
      return d.toLocaleString("fr-FR");
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getPrintCss() {
    return `
      @page { size: A4; margin: 12mm; }
      body { margin: 0; }
      .print-container {
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans",
                     "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        line-height: 1.4;
        color: #111;
        padding: 0;
      }
      .print-header {
        margin: 0 0 12mm 0;
        border-bottom: 1px solid #ddd;
        padding: 0 0 4mm 0;
      }
      .print-header h1 {
        margin: 0 0 4mm 0;
        font-size: 20px;
      }
      .print-meta {
        font-size: 12px;
        color: #666;
      }
      .print-content {
        white-space: normal;
        font-size: 13px;
      }
      .print-content pre {
        margin: 0;
        white-space: pre-wrap; /* conserve les retours à la ligne */
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
      }

      /* Si jamais tu choisis d'imprimer la page entière : ne montre que __printRoot */
      @media print {
        body * { visibility: hidden !important; }
        #__printRoot, #__printRoot * { visibility: visible !important; }
        #__printRoot { position: absolute; inset: 0; }
      }
    `;
  }
})();

/* =========================
   🆕 Intégration GPT RAG Expert
   ========================= */
const GPT_URL = 'https://chatgpt.com/g/g-68c928f1c194819181c2ea57265926b9-expert-education-nationale';

function getCurrentPrompt() {
  const result = document.getElementById('result');
  return (result?.innerText || '').trim();
}

async function copyToClipboard(text) {
  if (!text) throw new Error('Rien à copier.');
  await navigator.clipboard.writeText(text);
}

function openGpt() {
  return window.open(GPT_URL, '_blank', 'noopener');
}

// Petit utilitaire d’attente si on relance la génération juste avant copie
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// Bouton: "Ouvrir le GPT"
const openGptBtn = document.getElementById('openGptBtn');
if (openGptBtn) {
  openGptBtn.addEventListener('click', () => {
    openGpt();
  });
}

// Bouton: "Copier puis Ouvrir dans le GPT"
const copyOpenGptBtn = document.getElementById('copyOpenGptBtn');
if (copyOpenGptBtn) {
  copyOpenGptBtn.addEventListener('click', async () => {
    try {
      let prompt = getCurrentPrompt();

      // Si pas de prompt visible, on tente une génération automatique si possible
      if ((!prompt || prompt.length < 8) && generateBtn) {
        generateBtn.click();
        // Laisse le temps aux scripts de remplir #result
        await sleep(200);
        prompt = getCurrentPrompt();
      }

      if (!prompt) {
        alert("Génère d’abord un prompt, il sera copié automatiquement ✅");
        openGpt();
        return;
      }

      await copyToClipboard(prompt);
      openGpt();
      console.log("Prompt copié puis GPT ouvert.");
    } catch (e) {
      console.warn('Copie impossible, ouverture du GPT quand même. Détail :', e);
      openGpt();
    }
  });
}

// (Optionnel) Désactiver le bouton "Copier puis Ouvrir" lorsque #result est vide
const resultNode = document.getElementById('result');
if (resultNode && copyOpenGptBtn) {
  const toggleState = () => {
    const hasText = !!getCurrentPrompt();
    copyOpenGptBtn.disabled = !hasText;
    copyOpenGptBtn.classList.toggle('disabled', !hasText);
  };
  // Init
  toggleState();
  // Observe les changements de contenu
  const mo = new MutationObserver(toggleState);
  mo.observe(resultNode, { childList: true, characterData: true, subtree: true });
}

