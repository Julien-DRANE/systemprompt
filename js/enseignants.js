// --- Problématiques pédagogiques enrichies ---
const enseignantsPresets = {
  "Hétérogénéité des niveaux": {
    desc: "Répondre à la diversité des niveaux dans une même classe.",
    action: "Propose un plan différencié avec stratégies concrètes adaptées aux différents groupes.",
    example: "Exemple attendu : Groupe faible → activité guidée, Groupe intermédiaire → semi-guidée, Groupe avancé → tâche complexe en autonomie."
  },
  "Différenciation des exercices": {
    desc: "Adapter les exercices selon le niveau des élèves.",
    action: "Crée une série d’exercices différenciés avec trois niveaux de difficulté et corrigés associés.",
    example: "Exemple attendu : facile → exercice simple et guidé, intermédiaire → mise en application, avancé → problème complexe."
  },
  "Activités interdisciplinaires": {
    desc: "Croiser plusieurs disciplines autour d’un même thème.",
    action: "Conçois une activité interdisciplinaire avec objectifs croisés et projet final.",
    example: "Exemple attendu : Thème commun, étape matière A, étape matière B, restitution finale collective."
  },
  "Gestion des comportements difficiles": {
    desc: "Réagir efficacement face aux comportements perturbateurs.",
    action: "Propose un plan de gestion des comportements basé sur la psychologie positive et l’autonomie des élèves.",
    example: "Exemple attendu : situation observée → stratégie appliquée → suivi et évaluation."
  },
  "Organisation de la classe": {
    desc: "Optimiser l’espace et le temps dans la classe.",
    action: "Propose une organisation spatiale et temporelle favorisant coopération et sérénité.",
    example: "Exemple attendu : disposition des tables, transitions ritualisées, rôles d’élèves responsables."
  },
  "Inclusion et diversité": {
    desc: "Adapter les pratiques aux élèves à besoins éducatifs particuliers (EBEP).",
    action: "Propose des adaptations concrètes pour EBEP, allophones, élèves HPI.",
    example: "Exemple attendu : élève DYS → consignes simplifiées, élève allophone → tutorat, élève HPI → activité enrichie."
  },
  "Résolution de conflits entre élèves": {
    desc: "Encadrer la résolution des conflits en classe.",
    action: "Propose une démarche de médiation constructive et progressive.",
    example: "Exemple attendu : étape 1 → mise en mots, étape 2 → recherche de solution commune, étape 3 → accord formalisé."
  },
  "Création de leçons": {
    desc: "Préparer une leçon complète adaptée aux programmes.",
    action: "Conçois une leçon détaillée avec objectifs, activités et évaluation.",
    example: "Exemple attendu : objectif d’apprentissage, activité principale, évaluation formative."
  },
  "Planification hebdomadaire": {
    desc: "Structurer une semaine de cours.",
    action: "Élabore une planification hebdomadaire équilibrée.",
    example: "Exemple attendu : Lundi → découverte, Mardi → entraînement, Vendredi → évaluation."
  },
  "Motivation et engagement": {
    desc: "Encourager la participation active des élèves.",
    action: "Propose des stratégies concrètes pour motiver les élèves, même les moins impliqués.",
    example: "Exemple attendu : activité ludique, défi collectif, valorisation individuelle."
  },
  "Gestion du stress et de l’attention": {
    desc: "Prévenir la fatigue et maintenir l’attention.",
    action: "Propose des techniques pratiques pour améliorer la concentration.",
    example: "Exemple attendu : pause active, activité courte et rythmée, variation de supports."
  },
  "Communication avec les parents": {
    desc: "Établir un dialogue constructif avec les familles.",
    action: "Propose une stratégie de communication claire et bienveillante.",
    example: "Exemple attendu : introduction positive, points de progrès, solutions envisagées."
  },
  "Apprentissage à distance": {
    desc: "Organiser efficacement l’enseignement hybride ou en distanciel.",
    action: "Propose un plan d’enseignement à distance avec outils adaptés.",
    example: "Exemple attendu : visioconférence, travail en autonomie, suivi personnalisé."
  },
  "Éducation socio-émotionnelle": {
    desc: "Développer les compétences sociales et émotionnelles.",
    action: "Propose des activités favorisant empathie, coopération et gestion des émotions.",
    example: "Exemple attendu : cercle de parole, jeu de rôle, résolution collective de problème."
  },
  "Prévention du harcèlement scolaire": {
    desc: "Mettre en place des actions de prévention.",
    action: "Propose un programme complet de prévention du harcèlement scolaire.",
    example: "Exemple attendu : sensibilisation par affiches, jeu de rôle, charte de classe co-construite."
  }
};

// --- Types de production Enseignants enrichis ---
const enseignantsProductions = {
  "Plan d’enseignement (séquence)": 
    "Conçois une séquence pédagogique complète comprenant : "
    + "1) Objectifs d’apprentissage alignés aux programmes officiels. "
    + "2) Compétences visées. "
    + "3) Déroulement séance par séance (découverte, entraînement, évaluation). "
    + "4) Différenciation pour profils variés (élèves en difficulté, allophones, HPI). "
    + "5) Modalités d’évaluation formative et sommative. "
    + "Présentation attendue : plan clair et structuré en plusieurs séances.",

  "Exercices différenciés": 
    "Crée une série d’exercices différenciés avec corrigés, comprenant : "
    + "1) Niveau initiation (guidé, simple). "
    + "2) Niveau intermédiaire (semi-guidé, mise en application). "
    + "3) Niveau avancé (problème complexe, autonomie). "
    + "Inclure des supports variés : texte simplifié, visuels, schémas. "
    + "Chaque exercice doit être accompagné de son corrigé détaillé.",

  "Activité interdisciplinaire": 
    "Propose une activité combinant plusieurs disciplines (ex : français, mathématiques, sciences, histoire). "
    + "Inclure : 1) Thème central. "
    + "2) Objectifs et compétences transversales. "
    + "3) Déroulement des activités par discipline. "
    + "4) Production finale attendue (exposé, maquette, projet collaboratif). "
    + "Préciser les modalités d’évaluation interdisciplinaire.",

  "Activité interactive/numérique": 
    "Propose une activité numérique interactive utilisant des outils adaptés (quiz en ligne, simulations, applications pédagogiques). "
    + "Inclure : consignes claires, étapes d’utilisation des outils, et objectifs pédagogiques. "
    + "Prévoir un retour immédiat aux élèves et un suivi des apprentissages.",

  "Plan de gestion de classe": 
    "Propose un plan organisationnel pour la gestion de classe incluant : "
    + "1) Organisation spatiale (disposition des tables, zones de travail). "
    + "2) Gestion temporelle (transitions, rituels). "
    + "3) Répartition des responsabilités (élèves responsables). "
    + "4) Stratégies de gestion de comportements difficiles. "
    + "Le plan doit être concret et directement applicable.",

  "Stratégie de résolution de conflit": 
    "Propose un protocole de médiation pour résoudre les conflits entre élèves. "
    + "Inclure : 1) Étape de mise en mots du conflit. "
    + "2) Recherche collective de solutions. "
    + "3) Accord formalisé. "
    + "Mettre en avant les compétences socio-émotionnelles développées (empathie, communication non violente).",

  "Projet pédagogique": 
    "Conçois un projet pédagogique complet sur un thème choisi. "
    + "Inclure : 1) Objectifs généraux et spécifiques. "
    + "2) Compétences travaillées. "
    + "3) Déroulement par étapes (préparation, réalisation, restitution). "
    + "4) Ressources nécessaires. "
    + "5) Modalités de restitution finale (exposé, exposition, produit numérique).",

  "Fiche de préparation de séance": 
    "Élabore une fiche de préparation détaillée pour une séance unique. "
    + "Inclure : 1) Objectifs de la séance. "
    + "2) Compétences travaillées. "
    + "3) Matériel nécessaire. "
    + "4) Déroulé minute par minute (accroche, activités, synthèse, évaluation). "
    + "5) Différenciation possible. "
    + "Présentation attendue : tableau structuré et opérationnel.",

  "Évaluation (formative/sommative)": 
    "Propose une évaluation formative et/ou sommative adaptée au sujet. "
    + "Inclure : barème clair, grille de critères, et auto-évaluation par les élèves. "
    + "Format possible : quiz, rédaction, projet, oral. "
    + "Donner aussi des pistes pour la remédiation en cas de difficultés.",

  "Scénario de jeu pédagogique": 
    "Conçois un jeu éducatif (ex : escape game, simulation, jeu de rôle). "
    + "Inclure : 1) Objectifs pédagogiques. "
    + "2) Règles du jeu. "
    + "3) Déroulé de la partie. "
    + "4) Production attendue des élèves. "
    + "5) Débriefing pour relier le jeu aux apprentissages. "
    + "Matériel et ressources à prévoir.",

  "Plan de remédiation": 
    "Propose une remédiation pour une notion non acquise. "
    + "Inclure : diagnostic de la difficulté, activités de reprise, exercices adaptés, suivi personnalisé. "
    + "Exemples concrets et progressifs (du plus simple au plus complexe).",

  "Programme de formation continue": 
    "Propose un plan de formation continue pour enseignants. "
    + "Inclure : objectifs professionnels, modules thématiques, ressources (MOOC, lectures, séminaires), calendrier prévisionnel. "
    + "Prévoir une évaluation des acquis et un suivi.",

  "Planification annuelle": 
    "Propose une progression annuelle alignée sur le programme officiel. "
    + "Inclure : répartition des chapitres ou thèmes par période, compétences ciblées, modalités d’évaluation. "
    + "Présentation attendue : tableau clair par période (trimestre ou semestre)."
};

// --- Audiences Enseignants ---
const enseignantsAudiences = {
  "Élèves": "Production destinée directement aux élèves (supports pédagogiques, exercices, évaluations).",
  "Parents": "Communication adaptée aux parents (suivi, progression, conseils).",
  "Équipe éducative": "Production destinée aux collègues et personnels éducatifs.",
  "Administration": "Production destinée au chef d’établissement ou à la vie scolaire.",
  "Inspecteurs": "Production à destination des corps d’inspection (IEN, IA-IPR).",
  "Partenaires": "Production destinée aux partenaires extérieurs (associations, collectivités, entreprises).",
  "Communauté éducative": "Production valorisant les actions auprès du grand public (journal scolaire, site web, expo)."
};

const audienceBubblesEnseignants = document.getElementById("audienceBubbles-enseignants");
Object.keys(enseignantsAudiences).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  if (label === "Élèves") bubble.classList.add("selected"); // sélection par défaut
  bubble.innerText = label;
  bubble.dataset.audience = label;
  bubble.addEventListener("click", () => bubble.classList.toggle("selected"));
  audienceBubblesEnseignants.appendChild(bubble);
});


// --- Génération bulles problématiques Enseignants ---
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

// --- Génération bulles types de production Enseignants ---
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
  const discipline = document.getElementById("discipline-enseignants").value || "[à préciser]";
  const niveau = document.getElementById("niveau-enseignants").value || "[à préciser]";
  const objectif = document.getElementById("objectif-enseignants").value || "[à préciser]";
  const contraintes = document.getElementById("contraintes-enseignants").value || "[à préciser]";

  const selectedBubbles = Array.from(document.querySelectorAll("#bubbles-enseignants .bubble.selected"))
    .map(b => `- ${b.dataset.label} → ${enseignantsPresets[b.dataset.label].desc}`);

  const productionTasks = Array.from(document.querySelectorAll("#bubbles-enseignants .bubble.selected"))
    .map(b => enseignantsPresets[b.dataset.label].action);

  const selectedExamples = Array.from(document.querySelectorAll("#bubbles-enseignants .bubble.selected"))
    .map(b => enseignantsPresets[b.dataset.label].example);

  const selectedProductions = Array.from(document.querySelectorAll("#productionBubbles-enseignants .bubble.selected"))
    .map(b => enseignantsProductions[b.dataset.type]);

  // --- Audiences sélectionnées ---
  const selectedAudiences = Array.from(document.querySelectorAll("#audienceBubbles-enseignants .bubble.selected"))
    .map(b => b.dataset.audience);

  const detailedAudiences = selectedAudiences.map(
    a => `- ${a} → ${enseignantsAudiences[a]}`
  );

  // --- Texte spécial si audience "Élèves" ---
  const specialNoteForEleves = selectedAudiences.includes("Élèves")
    ? `\nDans chaque réponse, l’assistant doit non seulement s’appuyer sur les programmes officiels et le Code de l’éducation, mais aussi mobiliser explicitement les outils pédagogiques **Eduscol** (tickets de sortie, auto-évaluation, cartes mentales, classe inversée, différenciation, usages numériques validés). Ces outils doivent être intégrés comme leviers pédagogiques transversaux, et signalés comme tels.\n`
    : "";

  return `
Tu es un enseignant de ${discipline} au niveau ${niveau}.
Ton audience principale est : ${selectedAudiences.join(", ") || "[à préciser]"}.
Ta mission : produire un contenu directement exploitable en classe, sans reformuler l’analyse du contexte.
Conformément aux programmes officiels et au Code de l’éducation, propose une production utilisable immédiatement.
${specialNoteForEleves}
🎯 Objectif : ${objectif}
⚖️ Contraintes : ${contraintes}

📌 Problématiques retenues :
${selectedBubbles.join("\n")}

🛠️ Tâches attendues (issues des problématiques) :
${productionTasks.map(task => `- ${task}`).join("\n")}

📂 Type(s) de production à fournir :
${selectedProductions.map(task => `- ${task}`).join("\n")}

👥 Audience ciblée :
${detailedAudiences.join("\n") || "[à préciser]"}

📑 Exemples de sortie attendue :
${selectedExamples.join("\n\n")}
`;
}
