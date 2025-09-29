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
  "Plan de pilotage pédagogique": "Conçois un plan stratégique aligné au projet d’établissement.",
  "Stratégie de communication interne": "Propose un plan de communication pour renforcer la coopération entre personnels.",
  "Stratégie de communication externe": "Propose un plan de communication institutionnelle avec familles et partenaires.",
  "Programme de prévention": "Élabore un programme de prévention (harcèlement, absentéisme, climat scolaire).",
  "Plan d’action climat scolaire": "Conçois un plan d’amélioration du climat scolaire.",
  "Plan de gestion de crise": "Propose un protocole de gestion de crise (sanitaire, sécuritaire).",
  "Projet partenarial": "Élabore un projet d’ouverture en partenariat avec des acteurs externes.",
  "Analyse des évaluations nationales": "Propose une exploitation des résultats d’évaluations avec recommandations.",
  "Plan d’inclusion et diversité": "Élabore un plan d’adaptation pour EBEP, ULIS, allophones.",
  "Plan de prévention du décrochage": "Propose un dispositif de suivi et de prévention du décrochage.",
  "Note de communication institutionnelle": "Propose une note ou un discours institutionnel.",
  "Plan budgétaire et logistique": "Élabore une projection des besoins financiers et matériels.",
  "Planification des examens": "Propose une organisation détaillée des examens et certifications.",
  "Kit de réunion pédagogique": "Prépare l’ordre du jour, les supports et la synthèse attendue d’un conseil pédagogique.",
  "Tableau de bord de pilotage": "Conçois un tableau de bord avec indicateurs et reporting."
};

// --- Génération bulles ---
const bubblesPerdir = document.getElementById("bubbles-perdir");
Object.keys(perdirPresets).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  if (["Pilotage pédagogique", "Climat scolaire", "Gestion des ressources humaines"].includes(label)) {
    bubble.classList.add("selected");
  }
  bubble.innerText = label;
  bubble.dataset.label = label;
  bubble.addEventListener("click", () => bubble.classList.toggle("selected"));
  bubblesPerdir.appendChild(bubble);
});

const prodBubblesPerdir = document.getElementById("productionBubbles-perdir");
Object.keys(perdirProductions).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  if (label === "Plan de pilotage pédagogique") bubble.classList.add("selected");
  bubble.innerText = label;
  bubble.dataset.type = label;
  bubble.addEventListener("click", () => bubble.classList.toggle("selected"));
  prodBubblesPerdir.appendChild(bubble);
});

// --- Génération du prompt PERDIR ---
function generatePromptPerdir() {
  const contexte = document.getElementById("contexte-perdir").value;
  const cadre = document.getElementById("cadre-perdir").value;
  const objectif = document.getElementById("objectif-perdir").value;
  const contraintes = document.getElementById("contraintes-perdir").value;

  const selectedBubbles = Array.from(document.querySelectorAll("#bubbles-perdir .bubble.selected"))
    .map(b => `- ${b.dataset.label} → ${perdirPresets[b.dataset.label].desc}`);

  const productionTasks = Array.from(document.querySelectorAll("#bubbles-perdir .bubble.selected"))
    .map(b => perdirPresets[b.dataset.label].action);

  const selectedExamples = Array.from(document.querySelectorAll("#bubbles-perdir .bubble.selected"))
    .map(b => perdirPresets[b.dataset.label].example);

  const selectedProductions = Array.from(document.querySelectorAll("#productionBubbles-perdir .bubble.selected"))
    .map(b => perdirProductions[b.dataset.type]);

  return `
Tu es un personnel de direction d’un établissement scolaire.
Contexte : ${contexte}
Cadre d’action : ${cadre}

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
