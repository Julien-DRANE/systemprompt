// === INSPECTION ===

// --- Problématiques spécifiques inspection ---
const inspectionPresets = {
  "Évaluation pédagogique": {
    desc: "Analyser la qualité des pratiques pédagogiques observées.",
    action: "Propose une grille d’analyse pédagogique avec critères clairs.",
    example: "Exemple attendu : gestion de classe, différenciation, usage du numérique."
  },
  "Conformité aux programmes": {
    desc: "Vérifier l’adéquation avec les programmes officiels.",
    action: "Propose une méthode de contrôle de conformité.",
    example: "Exemple attendu : tableau de conformité aux attendus."
  },
  "Différenciation pédagogique": {
    desc: "Observer la prise en compte de l’hétérogénéité.",
    action: "Propose des recommandations concrètes.",
    example: "Exemple attendu : adaptation pour élèves en difficulté, allophones, HPI."
  },
  "Climat scolaire et gestion de classe": {
    desc: "Évaluer le climat de classe et la gestion de l’autorité.",
    action: "Propose une observation structurée.",
    example: "Exemple attendu : climat de confiance, gestion positive, résolution de conflits."
  },
  "Accompagnement des enseignants": {
    desc: "Accompagner le développement professionnel.",
    action: "Propose un plan d’accompagnement post-inspection.",
    example: "Exemple attendu : ressources de formation, mentorat, visites croisées."
  },
  "Suivi des réformes": {
    desc: "Évaluer la mise en œuvre des réformes nationales.",
    action: "Propose un rapport d’évaluation.",
    example: "Exemple attendu : points d’alignement, freins rencontrés."
  },
  "Évaluation des apprentissages": {
    desc: "Contrôler la cohérence des évaluations des élèves.",
    action: "Propose un protocole d’analyse des pratiques d’évaluation.",
    example: "Exemple attendu : typologie des évaluations, feedback aux élèves."
  },
  "Évaluation des personnels (PPCR)": {
    desc: "Accompagner l’évaluation professionnelle des enseignants.",
    action: "Aide à la rédaction d’un rapport PPCR structuré.",
    example: "Exemple attendu : points forts, axes de progrès, objectifs de carrière."
  },
  "Exploitation de données": {
    desc: "Analyser et interpréter des données chiffrées.",
    action: "Propose une méthode d’exploitation des résultats.",
    example: "Exemple attendu : analyse des évaluations nationales, graphiques, recommandations."
  },
  "Synthèse de réunions": {
    desc: "Produire un compte rendu clair et structuré.",
    action: "Aide à la rédaction d’une synthèse de réunion.",
    example: "Exemple attendu : résumé thématique, décisions prises, points de vigilance."
  },
  "Préparation d’un séminaire": {
    desc: "Organiser un séminaire académique ou disciplinaire.",
    action: "Propose un déroulé complet avec supports et communication.",
    example: "Exemple attendu : ordre du jour, diaporama, courrier, mail d’invitation."
  }
};

// --- Types de production Inspection ---
const inspectionProductions = {
  "Rapport d’inspection": "Rédige un rapport complet structuré et argumenté.",
  "Rapport PPCR": "Propose un rapport PPCR avec points d’appui et axes de progrès.",
  "Grille d’observation": "Conçois une grille critériée d’observation pédagogique.",
  "Plan d’accompagnement post-inspection": "Propose un plan d’accompagnement individualisé.",
  "Recommandations académiques": "Formule des recommandations pour améliorer les pratiques.",
  "Analyse de données": "Exploite des résultats chiffrés avec graphiques et interprétation.",
  "Compte rendu de réunion": "Rédige une synthèse claire et structurée d’une réunion.",
  "Kit séminaire": "Propose un déroulé de séminaire avec diaporama, courrier et mail d’invitation.",
  "Analyse d’impact d’une réforme": "Synthétise l’application d’une réforme dans un établissement.",
  "Protocole d’évaluation": "Élabore un protocole commun d’évaluation pédagogique."
};

// --- Génération bulles ---
const bubblesInspection = document.getElementById("bubbles-inspection");
Object.keys(inspectionPresets).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  if (["Évaluation pédagogique", "Différenciation pédagogique", "Accompagnement des enseignants"].includes(label)) {
    bubble.classList.add("selected");
  }
  bubble.innerText = label;
  bubble.dataset.label = label;
  bubble.addEventListener("click", () => bubble.classList.toggle("selected"));
  bubblesInspection.appendChild(bubble);
});

const prodBubblesInspection = document.getElementById("productionBubbles-inspection");
Object.keys(inspectionProductions).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  if (label === "Rapport d’inspection") bubble.classList.add("selected");
  bubble.innerText = label;
  bubble.dataset.type = label;
  bubble.addEventListener("click", () => bubble.classList.toggle("selected"));
  prodBubblesInspection.appendChild(bubble);
});

// --- Génération du prompt Inspection ---
function generatePromptInspection() {
  const contexte = document.getElementById("contexte-inspection").value;
  const cadre = document.getElementById("cadre-inspection").value;
  const objectif = document.getElementById("objectif-inspection").value;
  const contraintes = document.getElementById("contraintes-inspection").value;

  const selectedBubbles = Array.from(document.querySelectorAll("#bubbles-inspection .bubble.selected"))
    .map(b => `- ${b.dataset.label} → ${inspectionPresets[b.dataset.label].desc}`);

  const productionTasks = Array.from(document.querySelectorAll("#bubbles-inspection .bubble.selected"))
    .map(b => inspectionPresets[b.dataset.label].action);

  const selectedExamples = Array.from(document.querySelectorAll("#bubbles-inspection .bubble.selected"))
    .map(b => inspectionPresets[b.dataset.label].example);

  const selectedProductions = Array.from(document.querySelectorAll("#productionBubbles-inspection .bubble.selected"))
    .map(b => inspectionProductions[b.dataset.type]);

  return `
Tu es un inspecteur de l’Éducation nationale.
Contexte : ${contexte}
Cadre d’évaluation : ${cadre}

Objectif : ${objectif}
Contraintes : ${contraintes}

Problématiques retenues :
${selectedBubbles.join("\n")}

Maintenant, PRODUIS directement :
${productionTasks.map(task => `- ${task}`).join("\n")}
${selectedProductions.map(task => `- ${task}`).join("\n")}

Exemples de sortie attendue :
${selectedExamples.join("\n\n")}
`;
}
