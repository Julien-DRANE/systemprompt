// === ENSEIGNANTS ===

// --- Problématiques pédagogiques enrichies ---
const enseignantsPresets = {
  "Hétérogénéité des niveaux": {
    desc: "Plan d'enseignement différencié.",
    action: "Propose un plan différencié avec stratégies concrètes.",
    example: "Exemple attendu : Groupe faible → activité guidée, Groupe intermédiaire → semi-guidée, Groupe avancé → autonome."
  },
  "Différenciation des exercices": {
    desc: "Exercices différenciés.",
    action: "Crée une série d’exercices différenciés (facile, intermédiaire, avancé).",
    example: "Exemple attendu : facile → exercice simple, intermédiaire → guidé, avancé → problème complexe."
  },
  "Activités interdisciplinaires": {
    desc: "Activité combinant plusieurs disciplines.",
    action: "Conçois une activité interdisciplinaire avec projet final.",
    example: "Exemple attendu : thème commun, activité matière A, activité matière B, projet final."
  },
  "Gestion des comportements difficiles": {
    desc: "Stratégies positives de gestion de classe.",
    action: "Propose un plan de gestion des comportements difficiles.",
    example: "Exemple attendu : situation → stratégie, suivi → évaluation."
  },
  "Organisation de la classe": {
    desc: "Organisation spatiale et temporelle.",
    action: "Propose une organisation favorisant coopération.",
    example: "Exemple attendu : disposition, transitions, rôles attribués."
  },
  "Inclusion et diversité": {
    desc: "Adaptations pour EBEP.",
    action: "Propose des adaptations concrètes.",
    example: "Exemple attendu : élève DYS → consignes adaptées, allophone → tutorat, HPI → approfondissement."
  },
  "Résolution de conflits entre élèves": {
    desc: "Gestion constructive des conflits.",
    action: "Propose une démarche de médiation concrète.",
    example: "Exemple attendu : mise en mots → recherche de solution → accord écrit."
  },
  "Création de leçons": {
    desc: "Leçon complète avec objectifs et évaluation.",
    action: "Conçois une leçon complète.",
    example: "Exemple attendu : objectif, activité, évaluation."
  },
  "Planification hebdomadaire": {
    desc: "Organisation de la semaine.",
    action: "Élabore une planification hebdomadaire.",
    example: "Exemple attendu : lundi → découverte, mardi → approfondissement, vendredi → évaluation."
  },
  "Motivation et engagement": {
    desc: "Encourager la participation active.",
    action: "Propose des stratégies pour motiver les élèves.",
    example: "Exemple attendu : activité ludique, défi collectif, valorisation."
  },
  "Gestion du stress et de l’attention": {
    desc: "Stratégies de concentration.",
    action: "Propose des techniques pour maintenir l’attention.",
    example: "Exemple attendu : pause active, activité courte, variation."
  },
  "Communication avec les parents": {
    desc: "Dialoguer efficacement.",
    action: "Propose une stratégie de communication adaptée.",
    example: "Exemple attendu : introduction, points positifs, difficultés, solutions."
  },
  "Apprentissage à distance": {
    desc: "Enseignement hybride.",
    action: "Propose un plan pour l’enseignement à distance.",
    example: "Exemple attendu : outil visio, autonomie, suivi."
  },
  "Éducation socio-émotionnelle": {
    desc: "Développer empathie et coopération.",
    action: "Propose des activités socio-émotionnelles.",
    example: "Exemple attendu : cercle de parole, jeu de rôle, résolution collective."
  },
  "Prévention du harcèlement scolaire": {
    desc: "Programme de prévention.",
    action: "Propose un plan anti-harcèlement.",
    example: "Exemple attendu : sensibilisation, jeu de rôle, charte de classe."
  }
};

// --- Types de production ---
const enseignantsProductions = {
  "Plan d’enseignement (séquence)": "Conçois une séquence complète avec plusieurs séances.",
  "Exercices différenciés": "Crée une série d’exercices différenciés avec corrigés.",
  "Activité interdisciplinaire": "Propose une activité interdisciplinaire avec projet final.",
  "Activité interactive/numérique": "Propose une activité numérique interactive.",
  "Plan de gestion de classe": "Propose un plan organisationnel de la classe.",
  "Stratégie de résolution de conflit": "Propose un protocole de médiation.",
  "Projet pédagogique": "Conçois un projet complet avec étapes et livrable.",
  "Fiche de préparation de séance": "Élabore une fiche détaillée minute par minute.",
  "Évaluation (formative/sommative)": "Propose une évaluation adaptée avec barème.",
  "Scénario de jeu pédagogique": "Conçois un jeu éducatif (escape game, simulation).",
  "Plan de remédiation": "Propose une remédiation pour une notion non acquise.",
  "Programme de formation continue": "Propose une formation pour enseignants.",
  "Planification annuelle": "Propose une progression annuelle par compétences."
};

// --- Génération bulles ---
const bubblesEnseignants = document.getElementById("bubbles-enseignants");
Object.keys(enseignantsPresets).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  if (["Hétérogénéité des niveaux", "Différenciation des exercices", "Activités interdisciplinaires"].includes(label)) {
    bubble.classList.add("selected");
  }
  bubble.innerText = label;
  bubble.dataset.label = label;
  bubble.addEventListener("click", () => bubble.classList.toggle("selected"));
  bubblesEnseignants.appendChild(bubble);
});

const prodBubblesEnseignants = document.getElementById("productionBubbles-enseignants");
Object.keys(enseignantsProductions).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  if (label === "Plan d’enseignement (séquence)") bubble.classList.add("selected");
  bubble.innerText = label;
  bubble.dataset.type = label;
  bubble.addEventListener("click", () => bubble.classList.toggle("selected"));
  prodBubblesEnseignants.appendChild(bubble);
});

// --- Génération du prompt enseignants ---
function generatePromptEnseignants() {
  const discipline = document.getElementById("discipline-enseignants").value;
  const niveau = document.getElementById("niveau-enseignants").value;
  const objectif = document.getElementById("objectif-enseignants").value;
  const contraintes = document.getElementById("contraintes-enseignants").value;

  const selectedBubbles = Array.from(document.querySelectorAll("#bubbles-enseignants .bubble.selected"))
    .map(b => `- ${b.dataset.label} → ${enseignantsPresets[b.dataset.label].desc}`);

  const productionTasks = Array.from(document.querySelectorAll("#bubbles-enseignants .bubble.selected"))
    .map(b => enseignantsPresets[b.dataset.label].action);

  const selectedExamples = Array.from(document.querySelectorAll("#bubbles-enseignants .bubble.selected"))
    .map(b => enseignantsPresets[b.dataset.label].example);

  const selectedProductions = Array.from(document.querySelectorAll("#productionBubbles-enseignants .bubble.selected"))
    .map(b => enseignantsProductions[b.dataset.type]);

  return `
Tu es un enseignant de ${discipline || "pédagogie"} au niveau ${niveau || "[à préciser]"}.
Ta mission : répondre à la problématique suivante de manière concrète et exploitable en classe.
Conformément aux programmes officiels et au Code de l’éducation, propose une production directement utilisable.

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
