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
document.getElementById("generateBtn").addEventListener("click", () => {
  const activeTab = document.querySelector(".tab-button.active").dataset.target;
  let prompt = "";

  if (activeTab === "enseignants") {
    prompt = generatePromptEnseignants();
  } else if (activeTab === "perdir") {
    prompt = generatePromptPerdir();
  } else if (activeTab === "inspection") {
    prompt = generatePromptInspection();
  }

  document.getElementById("result").innerText = prompt.trim();
});

// --- Bouton copier ---
document.getElementById("copyBtn").addEventListener("click", () => {
  const resultText = document.getElementById("result").innerText;
  if (!resultText) return alert("Génère d’abord un prompt !");
  navigator.clipboard.writeText(resultText).then(() => alert("Prompt copié ✅"));
});
