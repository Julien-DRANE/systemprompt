/*! © 2025 Académie de La Réunion – DRANE | MIT */
/*! SPDX-License-Identifier: MIT */

// === PERDIR enrichi ===

// --- Problématiques de pilotage étoffées ---
const perdirPresets = {
  "Pilotage pédagogique": { desc: "Orienter et accompagner les pratiques pédagogiques.", action: "Propose un plan de pilotage pédagogique aligné au projet d’établissement.", example: "Objectifs pédagogiques, calendrier, indicateurs de réussite." },
  "Gestion des ressources humaines": { desc: "Organisation des personnels et suivi RH.", action: "Propose une répartition et un suivi RH adaptés.", example: "Répartition des services, accompagnement, suivi des absences." },
  "Climat scolaire": { desc: "Améliorer le climat de confiance.", action: "Propose un plan d’action pour le climat scolaire.", example: "Médiation, rituels, prévention des violences." },
  "Relations avec les parents": { desc: "Renforcer le dialogue école-famille.", action: "Propose une stratégie de communication adaptée.", example: "Calendrier de réunions, outils de communication." },
  "Prévention du harcèlement et sécurité": { desc: "Assurer un climat sûr.", action: "Propose un protocole de prévention du harcèlement et sécurité.", example: "Référent harcèlement, PPMS, sensibilisation." },
  "Partenariats et ouverture": { desc: "Développer les partenariats externes.", action: "Propose un plan d’ouverture de l’établissement.", example: "Associations, entreprises, collectivités locales." },
  "Gestion de crise": { desc: "Réagir face à une crise.", action: "Propose un protocole de gestion de crise.", example: "Cellule de crise, communication interne/externe." },
  "Pilotage des projets d’établissement": { desc: "Concevoir et suivre les projets d’établissement.", action: "Propose un plan de mise en œuvre et d’évaluation.", example: "Objectifs, actions, indicateurs de réussite." },
  "Suivi des évaluations nationales": { desc: "Exploiter les résultats d’évaluations.", action: "Propose une analyse et un plan d’action pédagogique.", example: "Analyse des résultats, comparaison, recommandations." },
  "Inclusion et diversité": { desc: "Accueillir et inclure tous les élèves.", action: "Propose des aménagements pour EBEP, ULIS, allophones.", example: "Supports adaptés, tutorat, sensibilisation." },
  "Communication interne": { desc: "Améliorer la communication entre personnels.", action: "Propose des outils et rituels de communication interne.", example: "Réunions régulières, outils collaboratifs." },
  "Communication externe": { desc: "Valoriser l’établissement à l’extérieur.", action: "Propose un plan de communication externe.", example: "Communiqués, site web, presse locale." },
  "Prévention du décrochage scolaire": { desc: "Éviter le décrochage des élèves fragiles.", action: "Propose un plan de prévention du décrochage.", example: "Tutorat, dispositifs relais, partenariats sociaux." },
  "Gestion budgétaire et matérielle": { desc: "Optimiser l’utilisation des moyens.", action: "Propose un plan budgétaire et logistique.", example: "Répartition des ressources, priorités d’investissement." },
  "Organisation des examens": { desc: "Assurer une organisation fluide des examens.", action: "Propose un planification et protocole d’examens.", example: "Rétroplanning, sécurité, logistique." }
};

// --- Types de production PERDIR étoffés ---
const perdirProductions = {
  "Plan de pilotage pédagogique": 
    "Conçois un plan stratégique aligné au projet d’établissement. "
    + "Inclure : 1) Objectifs pédagogiques prioritaires, 2) Axes stratégiques, "
    + "3) Actions concrètes, 4) Indicateurs de suivi, 5) Calendrier de mise en œuvre.",

  "Stratégie de communication interne": 
    "Propose un plan de communication interne pour renforcer la coopération entre personnels. "
    + "Inclure : 1) Objectifs de communication, 2) Moyens (réunions, ENT, mails), "
    + "3) Fréquence, 4) Responsabilités, 5) Modalités d’évaluation de l’efficacité.",

  "Stratégie de communication externe": 
    "Élabore un plan de communication institutionnelle avec familles et partenaires. "
    + "Inclure : 1) Objectifs, 2) Cibles (parents, collectivités, associations), "
    + "3) Outils (site web, courriers, réunions, presse), 4) Planning, 5) Exemples de messages clés.",

  "Programme de prévention": 
    "Conçois un programme de prévention (harcèlement, absentéisme, climat scolaire). "
    + "Inclure : 1) Diagnostic, 2) Objectifs, 3) Actions de sensibilisation, "
    + "4) Protocoles de suivi, 5) Acteurs impliqués, 6) Indicateurs d’évaluation.",

  "Plan d’action climat scolaire": 
    "Élabore un plan d’amélioration du climat scolaire. "
    + "Inclure : 1) Diagnostic initial, 2) Objectifs mesurables, 3) Actions concrètes, "
    + "4) Suivi et évaluation, 5) Rôle des élèves et des adultes.",

  "Plan de gestion de crise": 
    "Propose un protocole de gestion de crise (sanitaire, sécuritaire). "
    + "Inclure : 1) Types de crises, 2) Chaîne de commandement, "
    + "3) Procédures immédiates, 4) Communication interne/externe, 5) Retour d’expérience.",

  "Projet partenarial": 
    "Élabore un projet d’ouverture partenarial avec acteurs externes (collectivités, associations, entreprises). "
    + "Inclure : 1) Objectifs, 2) Partenaires, 3) Modalités de coopération, "
    + "4) Plan d’action, 5) Bilan attendu.",

  "Analyse des évaluations nationales": 
    "Analyse et exploite les résultats des évaluations nationales. "
    + "Inclure : 1) Résultats chiffrés, 2) Comparaison aux moyennes académiques/nationales, "
    + "3) Analyse des écarts, 4) Recommandations pédagogiques, 5) Indicateurs de progrès.",

  "Plan d’inclusion et diversité": 
    "Conçois un plan d’inclusion et de diversité pour EBEP, ULIS, allophones. "
    + "Inclure : 1) Diagnostic des besoins, 2) Mesures pédagogiques et organisationnelles, "
    + "3) Ressources humaines et matérielles, 4) Suivi et évaluation.",

  "Plan de prévention du décrochage": 
    "Propose un dispositif de suivi et de prévention du décrochage scolaire. "
    + "Inclure : 1) Identification des élèves à risque, 2) Actions de remédiation, "
    + "3) Partenariats mobilisés (CIO, associations), 4) Indicateurs de suivi.",

  "Note de communication institutionnelle": 
    "Rédige une note ou un discours institutionnel clair et professionnel. "
    + "Inclure : 1) Contexte, 2) Messages clés, 3) Ton institutionnel, 4) Conclusion mobilisatrice.",

  "Plan budgétaire et logistique": 
    "Élabore un plan budgétaire et logistique. "
    + "Inclure : 1) Recensement des besoins, 2) Planification des dépenses, "
    + "3) Optimisation des ressources, 4) Échéancier, 5) Indicateurs financiers.",

  "Planification des examens": 
    "Propose une organisation détaillée des examens et certifications. "
    + "Inclure : 1) Calendrier précis, 2) Répartition des salles et surveillants, "
    + "3) Protocole logistique, 4) Gestion des imprévus, 5) Communication aux équipes.",

  "Kit de réunion pédagogique": 
    "Prépare un kit complet pour une réunion pédagogique. "
    + "Inclure : 1) Ordre du jour détaillé, 2) Supports de présentation (diaporama), "
    + "3) Documents préparatoires, 4) Modèle de compte rendu.",

  "Tableau de bord de pilotage": 
    "Conçois un tableau de bord de pilotage. "
    + "Inclure : 1) Indicateurs clés (absentéisme, résultats, climat scolaire), "
    + "2) Fréquence de mise à jour, 3) Visualisation graphique, "
    + "4) Analyse automatique, 5) Recommandations de pilotage."
};


// --- Fonction couleur bulles problématiques PERDIR (alignée aux libellés perdirPresets) ---
function getBubbleColorClassPerdir(label) {
  // Pilotage / stratégie
  const bleu = [
    "Pilotage pédagogique",
    "Pilotage des projets d’établissement"
  ];

  // Ressources humaines / développement pro / inclusion
  const vert = [
    "Gestion des ressources humaines",
    "Inclusion et diversité"
  ];

  // Climat / prévention / sécurité / crise / décrochage
  const jaune = [
    "Climat scolaire",
    "Prévention du harcèlement et sécurité",
    "Gestion de crise",
    "Prévention du décrochage scolaire"
  ];

  // Communication (interne/externe) & relations familles
  const orange = [
    "Communication interne",
    "Communication externe",
    "Relations avec les parents"
  ];

  // Données / évaluations nationales
  const violet = [
    "Suivi des évaluations nationales"
  ];

  // Partenariats & ouverture
  const turquoise = [
    "Partenariats et ouverture"
  ];

  // Gestion matérielle / budget / examens (opérationnel)
  const brun = [
    "Gestion budgétaire et matérielle",
    "Organisation des examens"
  ];

  if (bleu.includes(label)) return "bubble-soft-blue";
  if (vert.includes(label)) return "bubble-soft-green";
  if (jaune.includes(label)) return "bubble-soft-yellow";
  if (orange.includes(label)) return "bubble-soft-orange";
  if (violet.includes(label)) return "bubble-soft-purple";
  if (turquoise.includes(label)) return "bubble-soft-teal";
  if (brun.includes(label)) return "bubble-soft-brown";
  return "bubble-soft-grey"; // secours si libellé inattendu
}


// --- Génération bulles problématiques PERDIR ---
const bubblesPerdir = document.getElementById("bubbles-perdir");

Object.keys(perdirPresets).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble", getBubbleColorClassPerdir(label));

  if (["Pilotage pédagogique", "Climat scolaire", "Gestion des ressources humaines"].includes(label)) {
    bubble.classList.add("selected");
  }

  bubble.innerText = label;
  bubble.dataset.label = label;
  bubble.addEventListener("click", () => bubble.classList.toggle("selected"));

  bubblesPerdir.appendChild(bubble);
});

// --- Fonction couleur bulles types de production PERDIR (alignée) ---
function getProdColorClassPerdir(label) {
  // Pilotage / stratégie
  const bleu = [
    "Plan de pilotage pédagogique",
    "Tableau de bord de pilotage"
  ];

  // Inclusion / diversité
  const vert = [
    "Plan d’inclusion et diversité"
  ];

  // Climat / prévention / sécurité / crise / décrochage
  const jaune = [
    "Plan d’action climat scolaire",
    "Programme de prévention",
    "Plan de gestion de crise",
    "Plan de prévention du décrochage"
  ];

  // Communication (interne/externe) & outils de réunion
  const orange = [
    "Stratégie de communication interne",
    "Stratégie de communication externe",
    "Note de communication institutionnelle",
    "Kit de réunion pédagogique"
  ];

  // Données / évaluations
  const violet = [
    "Analyse des évaluations nationales"
  ];

  // Partenariats & ouverture
  const turquoise = [
    "Projet partenarial"
  ];

  // Opérationnel logistique / examens
  const brun = [
    "Plan budgétaire et logistique",
    "Planification des examens"
  ];

  if (bleu.includes(label)) return "bubble-soft-blue";
  if (vert.includes(label)) return "bubble-soft-green";
  if (jaune.includes(label)) return "bubble-soft-yellow";
  if (orange.includes(label)) return "bubble-soft-orange";
  if (violet.includes(label)) return "bubble-soft-purple";
  if (turquoise.includes(label)) return "bubble-soft-teal";
  if (brun.includes(label)) return "bubble-soft-brown";
  return "bubble-soft-grey"; // secours si libellé inattendu
}


// --- Génération bulles types de production PERDIR ---
const prodBubblesPerdir = document.getElementById("productionBubbles-perdir");

Object.keys(perdirProductions).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble", getProdColorClassPerdir(label));

  if (label === "Plan de pilotage pédagogique") {
    bubble.classList.add("selected"); // sélection par défaut
  }

  bubble.innerText = label;
  bubble.dataset.type = label;
  bubble.addEventListener("click", () => bubble.classList.toggle("selected"));
  prodBubblesPerdir.appendChild(bubble);
});

// --- Audiences PERDIR ---
const perdirAudiences = {
  "Enseignants": "Communication et cadrage à destination des professeurs.",
  "Équipe éducative": "Production partagée avec CPE, AED, AESH et autres personnels.",
  "Parents": "Communication claire et adaptée aux familles.",
  "Élèves": "Production directe pour les élèves (climat scolaire, prévention).",
  "Partenaires": "Communication destinée aux collectivités, associations ou acteurs locaux.",
  "Autorités académiques": "Production destinée à l’institution académique (rectorat, IA-IPR)."
};

const audienceBubblesPerdir = document.getElementById("audienceBubbles-perdir");
Object.keys(perdirAudiences).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  if (label === "Enseignants") bubble.classList.add("selected"); // par défaut
  bubble.innerText = label;
  bubble.dataset.audience = label;
  bubble.addEventListener("click", () => bubble.classList.toggle("selected"));
  audienceBubblesPerdir.appendChild(bubble);
});

// --- Génération du prompt PERDIR ---
function generatePromptPerdir() {
  const contexte = document.getElementById("contexte-perdir").value || "[à préciser]";
  const cadre = document.getElementById("cadre-perdir").value || "[à préciser]";
  const objectif = document.getElementById("objectif-perdir").value || "[à préciser]";
  const contraintes = document.getElementById("contraintes-perdir").value || "[à préciser]";

  const selectedBubbles = Array.from(document.querySelectorAll("#bubbles-perdir .bubble.selected"))
    .map(b => `- ${b.dataset.label} → ${perdirPresets[b.dataset.label].desc}`);

  const productionTasks = Array.from(document.querySelectorAll("#bubbles-perdir .bubble.selected"))
    .map(b => perdirPresets[b.dataset.label].action);

  const selectedExamples = Array.from(document.querySelectorAll("#bubbles-perdir .bubble.selected"))
    .map(b => perdirPresets[b.dataset.label].example);

  const selectedProductions = Array.from(document.querySelectorAll("#productionBubbles-perdir .bubble.selected"))
    .map(b => perdirProductions[b.dataset.type]);

  // Audiences sélectionnées
  const selectedAudiences = Array.from(document.querySelectorAll("#audienceBubbles-perdir .bubble.selected"))
    .map(b => b.dataset.audience);

  const detailedAudiences = Array.from(document.querySelectorAll("#audienceBubbles-perdir .bubble.selected"))
    .map(b => `- ${b.dataset.audience} → ${perdirAudiences[b.dataset.audience]}`);

  return `
Tu es un personnel de direction d’un établissement scolaire.
🎯 Contexte : ${contexte}
⚖️ Cadre d’action : ${cadre}

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

