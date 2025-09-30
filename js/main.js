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

    if (activeTab === "enseignants") {
      prompt = generatePromptEnseignants();
    } else if (activeTab === "perdir") {
      prompt = generatePromptPerdir();
    } else if (activeTab === "inspection") {
      prompt = generatePromptInspection();
    }

    document.getElementById("result").innerText = (prompt || "").trim();
  });
}

// --- Bouton copier ---
const copyBtn = document.getElementById("copyBtn");
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const resultText = document.getElementById("result").innerText;
    if (!resultText) return alert("Génère d’abord un prompt !");
    navigator.clipboard.writeText(resultText).then(() => alert("Prompt copié ✅"));
  });
}

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
  // Ouvre dans un nouvel onglet (déclenché par un clic utilisateur -> conforme anti-popups)
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
        // On ouvre quand même le GPT, mais on guide l’utilisateur
        alert("Génère d’abord un prompt, il sera copié automatiquement ✅");
        openGpt();
        return;
      }

      await copyToClipboard(prompt);
      openGpt();
      // Optionnel: petit feedback doux sans bloquer
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
