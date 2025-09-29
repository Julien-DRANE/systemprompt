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

// --- Types de production Inspection enrichis ---
const inspectionProductions = {
  "Rapport d’inspection": 
    "Rédige un rapport d’inspection complet et structuré incluant : "
    + "1) Contexte de l’inspection (discipline, niveau, établissement, cadre réglementaire). "
    + "2) Analyse des pratiques pédagogiques (préparation, gestion de classe, différenciation, numérique). "
    + "3) Points forts observés. "
    + "4) Axes d’amélioration. "
    + "5) Conclusion synthétique avec recommandations. "
    + "Le style doit être professionnel, objectif et institutionnel.",

  "Rapport PPCR": 
    "Propose un rapport PPCR complet structuré : "
    + "1) Contexte et cadre. "
    + "2) Analyse des pratiques professionnelles (préparation, conduite de classe, climat scolaire, différenciation, numérique). "
    + "3) Points d’appui détaillés. "
    + "4) Axes de progrès avec pistes concrètes. "
    + "5) Conclusion synthétique et recommandations pour la carrière. "
    + "Texte clair, objectif, environ 2 pages.",

  "Grille d’observation": 
    "Conçois une grille d’observation pédagogique avec critères et indicateurs mesurables : "
    + "préparation, gestion du temps, différenciation, climat scolaire, relation avec les élèves, usage du numérique. "
    + "Format tableau avec colonnes : critère, indicateur, niveau d’évaluation (excellent, satisfaisant, à améliorer).",

  "Plan d’accompagnement post-inspection": 
    "Propose un plan d’accompagnement individualisé comprenant : "
    + "1) Objectifs de développement professionnel. "
    + "2) Actions concrètes (formation, tutorat, visites). "
    + "3) Calendrier prévisionnel. "
    + "4) Modalités de suivi et d’évaluation. "
    + "Texte clair, structuré et exploitable immédiatement.",

  "Recommandations académiques": 
    "Formule des recommandations académiques pour améliorer les pratiques pédagogiques. "
    + "Structure attendue : 1) Constat, 2) Recommandations opérationnelles, 3) Ressources ou accompagnements possibles. "
    + "Texte synthétique et institutionnel.",

  "Analyse de données": 
    "Exploite des résultats chiffrés (ex : évaluations nationales, résultats examens). "
    + "Inclure : tableaux de données, graphiques, analyse des tendances, interprétation pédagogique et recommandations. "
    + "Style clair et accessible.",

  "Compte rendu de réunion": 
    "Rédige un compte rendu structuré comprenant : "
    + "1) Objet et date de la réunion. "
    + "2) Participants. "
    + "3) Points abordés. "
    + "4) Décisions prises. "
    + "5) Suivi et actions à engager. "
    + "Texte clair, concis et institutionnel.",

  "Kit séminaire": 
    "Propose un kit complet pour préparer un séminaire : "
    + "1) Déroulé horaire avec objectifs de chaque séquence. "
    + "2) Plan de présentation (diaporama). "
    + "3) Modèle de courrier d’invitation officiel. "
    + "4) Exemple de mail synthétique pour les participants. "
    + "Texte directement exploitable par un inspecteur.",

  "Analyse d’impact d’une réforme": 
    "Synthétise l’impact de la mise en œuvre d’une réforme dans un établissement. "
    + "Inclure : contexte, constats (points positifs et difficultés), témoignages d’acteurs, "
    + "indicateurs chiffrés si disponibles, et recommandations pour la suite.",

  "Protocole d’évaluation": 
    "Élabore un protocole commun d’évaluation pédagogique. "
    + "Inclure : objectifs, critères d’évaluation, outils, modalités de recueil des données, "
    + "et organisation pratique (fréquence, acteurs impliqués). "
    + "Présenter sous forme structurée et exploitable immédiatement."
};


// --- Génération bulles problématiques Inspection ---
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

// --- Génération bulles types de production Inspection ---
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

// --- Audiences Inspection ---
const inspectionAudiences = {
  "Enseignant": "Production destinée au professeur observé.",
  "Équipe pédagogique": "Production destinée à l’ensemble de l’équipe disciplinaire ou pluridisciplinaire.",
  "Établissement": "Production à usage du chef d’établissement et de son équipe.",
  "Académie": "Production destinée à l’institution académique (IA-IPR, rectorat).",
  "Parents": "Communication adaptée aux familles."
};

const audienceBubblesInspection = document.getElementById("audienceBubbles-inspection");
Object.keys(inspectionAudiences).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  if (label === "Enseignant") bubble.classList.add("selected"); // par défaut
  bubble.innerText = label;
  bubble.dataset.audience = label;
  bubble.addEventListener("click", () => bubble.classList.toggle("selected"));
  audienceBubblesInspection.appendChild(bubble);
});



// --- Génération du prompt Inspection ---
function generatePromptInspection() {
  const contexte = document.getElementById("contexte-inspection").value || "[à préciser]";
  const cadre = document.getElementById("cadre-inspection").value || "[à préciser]";
  const objectif = document.getElementById("objectif-inspection").value || "[à préciser]";
  const contraintes = document.getElementById("contraintes-inspection").value || "[à préciser]";

  const selectedBubbles = Array.from(document.querySelectorAll("#bubbles-inspection .bubble.selected"))
    .map(b => `- ${b.dataset.label} → ${inspectionPresets[b.dataset.label].desc}`);

  const productionTasks = Array.from(document.querySelectorAll("#bubbles-inspection .bubble.selected"))
    .map(b => inspectionPresets[b.dataset.label].action);

  const selectedExamples = Array.from(document.querySelectorAll("#bubbles-inspection .bubble.selected"))
    .map(b => inspectionPresets[b.dataset.label].example);

  const selectedProductions = Array.from(document.querySelectorAll("#productionBubbles-inspection .bubble.selected"))
    .map(b => inspectionProductions[b.dataset.type]);

  // Audiences sélectionnées
  const selectedAudiences = Array.from(document.querySelectorAll("#audienceBubbles-inspection .bubble.selected"))
    .map(b => b.dataset.audience);

  const detailedAudiences = Array.from(document.querySelectorAll("#audienceBubbles-inspection .bubble.selected"))
    .map(b => `- ${b.dataset.audience} → ${inspectionAudiences[b.dataset.audience]}`);

  return `
Tu es un inspecteur de l’Éducation nationale.
🎯 Contexte : ${contexte}
⚖️ Cadre d’évaluation : ${cadre}

👥 Audience principale : ${selectedAudiences.join(", ") || "[à préciser]"}

🎯 Objectif : ${objectif}
⚖️ Contraintes : ${contraintes}

📌 Problématiques retenues :
${selectedBubbles.join("\n")}

🛠️ Actions attendues (issues des problématiques) :
${productionTasks.map(task => `- ${task}`).join("\n")}

📂 Type(s) de production à fournir :
${selectedProductions.map(task => `- ${task}`).join("\n")}

👥 Audience détaillée :
${detailedAudiences.join("\n") || "[à préciser]"}

📑 Exemples de sortie attendue :
${selectedExamples.join("\n\n")}
`;
}
