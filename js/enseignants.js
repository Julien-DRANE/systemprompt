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
  "Création de leçon": {
  "desc": "Préparer une leçon complète conforme aux programmes, avec objectifs mesurables, activités structurées et évaluations (diagnostique, formative, sommative).",
  "action": "Produis une leçon prête à l’emploi comprenant : 1) Contexte (cycle/niveau, thème du programme) ; 2) Objectifs d’apprentissage et compétences ; 3) Évaluation diagnostique d’entrée ; 4) Déroulé détaillé (durées, supports, consignes, activité principale, trace écrite) ; 5) Évaluation formative intégrée (indicateurs/feedback) ; 6) Évaluation sommative avec critères ; 7) Différenciation en trois paliers (facile, intermédiaire, avancé) avec critères de réussite.",
  "example": "Exemple attendu : Objectif d’apprentissage + Activité principale (étapes, supports) + Évaluation formative (indicateurs) + Évaluation sommative (tâche finale + critères) + Différenciation F/I/A."
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
  },

  // --- Ajout : brique optionnelle Partenariats & sorties ---
  "Ouverture partenariale & sorties (optionnelle)": {
    desc: "Identifier et proposer des partenariats (local/DAAC/monde pro) et des sorties/voyages adaptés 4e SEGPA, dans le cadre officiel.",
    action: "Ajoute une brique « Partenariats & sorties » : 3 partenaires/dispositifs + 2 idées de sorties/voyages (1 journée, 2–3 jours) avec objectifs, étapes, budget indicatif et conformité juridique.",
    example: "Ex. : 1 partenaire local (atelier/asso), 1 partenaire académique (DAAC/EAC), 1 partenaire monde pro (séquence d’observation) + 1 sortie courte + 1 voyage 2–3 jours ; pour chacun : objectifs SEGPA, différenciation, outils Éduscol, convention si pro, vote CA si voyage."
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
    + "Présentation attendue : tableau clair par période (trimestre ou semestre).",

  // --- Ajout : type de production dédié à la brique Partenariats & sorties (texte affiné) ---
  "Brique partenariats & sorties":
    "Module prêt à l’emploi, livrant : "
    + "A) 3 partenariats/dispositifs ciblés (équilibrés) : 1 partenaire local (structure culturelle/atelier/association), 1 partenaire académique via DAAC/EAC (piliers rencontre–pratique–connaissances), 1 partenaire monde professionnel (Parcours Avenir : visite ou séquence d’observation conventionnée) ; "
    + "pour chacun : objectifs pédagogiques SEGPA, tâches élèves, différenciation (difficultés, allophones, HPI), intégration des outils Eduscol (tickets de sortie, auto-évaluation, cartes mentales, classe inversée, usages numériques validés), prise en compte du créole si contexte Réunion ; "
    + "B) 2 propositions de sorties/voyages : 1 sortie journée (proche, faible coût) et 1 séjour 2–3 jours (cohérent avec les programmes) ; pour chacune : objectifs d’apprentissage, étapes (avant/pendant/après), estimation budgétaire indicative (transport/hébergement/repas/assurances), organisation (accompagnateurs, accessibilité EBEP), documents familles ; "
    + "C) Cadre légal explicite : conventions en milieu professionnel (D.331-1 à D.331-4, statut scolaire maintenu), décision du conseil d’administration pour le financement des voyages (R.421-54), prise en compte du calendrier DOM si Réunion (D.521-6), rappel des exigences de laïcité et de sécurité hors les murs ; "
    + "D) Livrables concrets : tableau comparatif des partenaires, planning rétro (J-60 à J+7), modèles prêts à l’emploi (courrier familles, convention-type, autorisation parentale, fiche sécurité/soins, check-list laïcité), trames Eduscol (ticket de sortie, auto-évaluation), et grille d’évaluation interdisciplinaire des productions élèves."
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

// Fonction pour appliquer une couleur douce à chaque bulle selon le thème
function getBubbleColorClass(label) {
  const bleu = [
    "Hétérogénéité des niveaux", "Différenciation des exercices", "Inclusion et diversité"
  ];
  const vert = [
    "Création de leçon", "Planification hebdomadaire", "Activités interdisciplinaires"
  ];
  const jaune = [
    "Gestion des comportements difficiles", "Éducation socio-émotionnelle", "Résolution de conflits entre élèves", "Prévention du harcèlement scolaire"
  ];
  const orange = [
    "Organisation de la classe", "Gestion du stress et de l’attention"
  ];
  const violet = [
    "Communication avec les parents", "Ouverture partenariale & sorties (optionnelle)"
  ];
  const rose = [
    "Apprentissage à distance"
  ];
  const turquoise = [
    "Motivation et engagement"
  ];

  if (bleu.includes(label)) return "bubble-soft-blue";
  if (vert.includes(label)) return "bubble-soft-green";
  if (jaune.includes(label)) return "bubble-soft-yellow";
  if (orange.includes(label)) return "bubble-soft-orange";
  if (violet.includes(label)) return "bubble-soft-purple";
  if (rose.includes(label)) return "bubble-soft-pink";
  if (turquoise.includes(label)) return "bubble-soft-teal";
  return "bubble-soft-grey"; // fallback si aucun groupe ne correspond
}

// Création des bulles
Object.keys(enseignantsPresets).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble", getBubbleColorClass(label));

  // Bulles sélectionnées par défaut
  if (["Hétérogénéité des niveaux", "Différenciation des exercices", "Activités interdisciplinaires"].includes(label)) {
    bubble.classList.add("selected");
  }

  bubble.innerText = label;
  bubble.dataset.label = label;

  bubble.addEventListener("click", () => bubble.classList.toggle("selected"));

  bubblesEnseignants.appendChild(bubble);
});

// --- Fonction couleur bulles "Types de production" ENSEIGNANTS (alignée aux thématiques) ---
function getProdColorClassEnseignants(label) {
  // Différenciation / évaluation / remédiation
  const bleu = [
    "Exercices différenciés",
    "Plan de remédiation",
    "Évaluation (formative/sommative)"
  ];


  // Conception pédagogique / planification / interdisciplinarité
  const vert = [
    "Plan d’enseignement (séquence)",
    "Fiche de préparation de séance",
    "Planification annuelle",
    "Projet pédagogique",
    "Activité interdisciplinaire"
  ];

  // Climat / gestion de classe / conflits
  const jaune = [
    "Plan de gestion de classe",
    "Stratégie de résolution de conflit"
  ];

  // Outils / numérique / développement pro
  const orange = [
    "Activité interactive/numérique",
    "Programme de formation continue"
  ];

  // Partenariats & sorties
  const violet = [
    "Brique partenariats & sorties"
  ];

  // Engagement ludo-pédagogique
  const turquoise = [
    "Scénario de jeu pédagogique"
  ];

  if (bleu.includes(label)) return "bubble-soft-blue";
  if (vert.includes(label)) return "bubble-soft-green";
  if (jaune.includes(label)) return "bubble-soft-yellow";
  if (orange.includes(label)) return "bubble-soft-orange";
  if (violet.includes(label)) return "bubble-soft-purple";
  if (turquoise.includes(label)) return "bubble-soft-teal";
  return "bubble-soft-grey"; // secours si libellé inattendu
}


// --- Génération bulles types de production Enseignants ---
const prodBubblesEnseignants = document.getElementById("productionBubbles-enseignants");

// On mémorise les bulles créées pour pouvoir en cibler une par son label
const prodBubbleByLabel = {};

Object.keys(enseignantsProductions).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble", getProdColorClassEnseignants(label));
  if (label === "Plan d’enseignement (séquence)") bubble.classList.add("selected"); // sélection par défaut
  bubble.innerText = label;
  bubble.dataset.type = label;
  bubble.addEventListener("click", () => bubble.classList.toggle("selected"));
  prodBubblesEnseignants.appendChild(bubble);
  prodBubbleByLabel[label] = bubble;
});

// --- Références Socle commun ---
const socleCommunDomains = {
  "Domaine 1 - Langages": "Maîtriser la langue française, langues vivantes, langages mathématiques, scientifiques, informatiques, artistiques et corporels.",
  "Domaine 2 - Méthodes et outils": "Organisation du travail, coopération, projets, médias, information et numérique.",
  "Domaine 3 - Personne et citoyen": "Sensibilité, expression, règles de droit, engagement, réflexion éthique.",
  "Domaine 4 - Systèmes naturels et techniques": "Sciences, environnement, santé, développement durable, objets techniques.",
  "Domaine 5 - Représentations du monde": "Espaces, temps, sociétés, organisations, diversité culturelle."
};

const socleBubbles = document.getElementById("socleBubbles");
socleBubbles.innerHTML = ""; // 🔑 supprime les anciennes bulles avant de regénérer

Object.keys(socleCommunDomains).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Ajout de la bonne couleur selon le domaine
  if (label.startsWith("Domaine 1")) bubble.classList.add("bubble-socle-langages");
  if (label.startsWith("Domaine 2")) bubble.classList.add("bubble-socle-methodes");
  if (label.startsWith("Domaine 3")) bubble.classList.add("bubble-socle-citoyen");
  if (label.startsWith("Domaine 4")) bubble.classList.add("bubble-socle-techniques");
  if (label.startsWith("Domaine 5")) bubble.classList.add("bubble-socle-monde");

  bubble.innerText = label;
  bubble.dataset.domain = label;
  bubble.addEventListener("click", () => bubble.classList.toggle("selected"));
  socleBubbles.appendChild(bubble);
});


// --- UI dynamique : sélecteur d'académie + ville si Partenariats actif (pédago OU production OU toggle) ---
// Liste des académies métropole + DROM
const academies = [
  "Aix-Marseille","Amiens","Besançon","Bordeaux","Clermont-Ferrand","Corse","Créteil","Dijon","Grenoble",
  "Guadeloupe","Guyane","La Réunion","Limoges","Lille","Lyon","Martinique","Mayotte","Montpellier",
  "Nancy-Metz","Nantes","Nice","Normandie","Orléans-Tours","Paris","Poitiers","Reims","Rennes","Strasbourg",
  "Toulouse","Versailles"
];

function ensureRegionSelector() {
  // container juste après les bulles de production
  let container = document.getElementById("regionPartenariatsContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "regionPartenariatsContainer";
    container.style.display = "none";
    container.style.marginTop = "8px";
    container.innerHTML = `
      <label style="display:block;margin:.5rem 0 .25rem;">Académie concernée (pour la recherche locale) :</label>
      <select id="region-academique" style="width:100%;padding:.4rem;">
        <option value="">— choisir une académie —</option>
        ${academies.map(a => `<option value="${a}">${a}</option>`).join("")}
      </select>
      <label style="display:block;margin:.75rem 0 .25rem;">Territoire / ville (optionnel) :</label>
      <input id="region-territoire" type="text" placeholder="Ex. : Saint-Denis, Saint-Pierre..." style="width:100%;padding:.4rem;">
    `;
    prodBubblesEnseignants.parentNode.insertBefore(container, prodBubblesEnseignants.nextSibling);
  }
  return container;
}

function isPedagoPartnersSelected() {
  // bulle côté "Problématiques pédagogiques"
  return Array.from(document.querySelectorAll("#bubbles-enseignants .bubble.selected"))
    .some(b => b.dataset.label === "Ouverture partenariale & sorties (optionnelle)");
}

function isProdPartnersSelected() {
  const bubble = prodBubbleByLabel["Brique partenariats & sorties"];
  return !!(bubble && bubble.classList.contains("selected"));
}

function isTogglePartnersOn() {
  return !!document.getElementById("toggle-partenariats")?.checked;
}

function isPartnersActivated() {
  return isPedagoPartnersSelected() || isProdPartnersSelected() || isTogglePartnersOn();
}

function updateRegionVisibility() {
  const container = ensureRegionSelector();
  container.style.display = isPartnersActivated() ? "block" : "none";
}

// Appels initiaux & écoute des clics pour mise à jour
updateRegionVisibility();
prodBubblesEnseignants.addEventListener("click", updateRegionVisibility);
bubblesEnseignants.addEventListener("click", updateRegionVisibility);

// --- Synchronisation avec le toggle partenariats (s’il existe dans le HTML) ---
const togglePartenariats = document.getElementById("toggle-partenariats");
if (togglePartenariats && prodBubbleByLabel["Brique partenariats & sorties"]) {
  if (togglePartenariats.checked) {
    prodBubbleByLabel["Brique partenariats & sorties"].classList.add("selected");
  }
  togglePartenariats.addEventListener("change", (e) => {
    prodBubbleByLabel["Brique partenariats & sorties"].classList.toggle("selected", e.target.checked);
    updateRegionVisibility();
  });
}

// --- Génération du prompt enseignants ---
function generatePromptEnseignants() {
  const discipline = document.getElementById("discipline-enseignants").value || "[à préciser]";
  const niveau = document.getElementById("niveau-enseignants").value || "[à préciser]";
  const objectif = document.getElementById("objectif-enseignants").value || "[à préciser]";
  const contraintes = document.getElementById("contraintes-enseignants").value || "[à préciser]";

  // ✅ Problématiques (enseignantsPresets uniquement)
  const selectedProblemBubbles = Array.from(
    document.querySelectorAll("#bubbles-enseignants .bubble.selected")
  ).filter(b => b.dataset.label && enseignantsPresets[b.dataset.label]);

  const selectedBubbles = selectedProblemBubbles.map(
    b => `- ${b.dataset.label} → ${enseignantsPresets[b.dataset.label].desc}`
  );

  const productionTasks = selectedProblemBubbles.map(
    b => enseignantsPresets[b.dataset.label].action
  );

  const selectedExamples = selectedProblemBubbles.map(
    b => enseignantsPresets[b.dataset.label].example
  );

  // ✅ Productions sélectionnées
  const selectedProductions = [...new Set(
    Array.from(document.querySelectorAll("#productionBubbles-enseignants .bubble.selected"))
      .map(b => enseignantsProductions[b.dataset.type])
      .filter(Boolean) // sécurité
  )];

  // ✅ Audiences sélectionnées
  const selectedAudiences = Array.from(
    document.querySelectorAll("#audienceBubbles-enseignants .bubble.selected")
  ).map(b => b.dataset.audience);

  const detailedAudiences = selectedAudiences.map(
    a => `- ${a} → ${enseignantsAudiences[a]}`
  );

  // ✅ Socle commun sélectionné
  const selectedSocle = Array.from(
    document.querySelectorAll("#socleBubbles .bubble.selected")
  ).map(b => {
    const domain = b?.dataset?.domain || null;
    if (!domain) return null;
    const desc = socleCommunDomains[domain] || "";
    return `- ${domain}${desc ? " → " + desc : ""}`;
  })
  .filter(Boolean)
  .join("\n");

  const socleDirective = selectedSocle 
    ? `\n📘 Références explicites au Socle commun :\n${selectedSocle}\n`
    : "";

  // ✅ Note spéciale si audience "Élèves"
  const specialNoteForEleves = selectedAudiences.includes("Élèves")
    ? `\nDans chaque réponse, l’assistant doit non seulement s’appuyer sur les programmes officiels et le Code de l’éducation, mais aussi mobiliser explicitement les outils pédagogiques **Eduscol** (tickets de sortie, auto-évaluation, cartes mentales, classe inversée, différenciation, usages numériques validés). Ces outils doivent être intégrés comme leviers pédagogiques transversaux, et signalés comme tels.\n`
    : "";

  // ✅ Gestion partenariats (pédago OU production OU toggle)
  const wantsPartners = isPartnersActivated();

  let infoLocalisation = "";
  if (wantsPartners) {
    const regionSel = document.getElementById("region-academique");
    const territoireInp = document.getElementById("region-territoire");
    const academie = regionSel ? (regionSel.value || "") : "";
    const territoire = territoireInp ? (territoireInp.value || "") : "";
    infoLocalisation = (academie || territoire)
      ? `\n📍 Contexte local à privilégier : **Académie ${academie || "à préciser"}**${territoire ? `, territoire/ville : **${territoire}**` : ""}.\n`
      : "";
  }

  // ✅ Bloc complet "Partenariats & sorties"
  const partnersDirective = wantsPartners ? `
📦 Brique « Partenariats & sorties / voyages » (si pertinent pour le thème/niveau) :
- Proposer 3 partenaires/dispositifs ciblés : 1 local (structure culturelle/atelier/association), 1 académique via DAAC (EAC – rencontre/pratique/connaissances), 1 monde professionnel (Parcours Avenir : visite/séquence d’observation).
- Rechercher en priorité des opportunités **locales** selon l’académie/territoire indiqué ci-dessous (si renseigné) et expliciter le **lien avec les programmes** et le **public SEGPA**.
- Proposer 2 idées de sorties/voyages : 1 journée (proche, faible coût) et 1 séjour 2–3 jours (cohérent avec les programmes), avec objectifs pédagogiques, étapes (avant/pendant/après), estimation budgétaire (transport/hébergement/repas/assurances) et calendrier indicatif.
- Pour CHAQUE proposition : différenciation (élèves en difficulté, allophones, HPI) et intégration explicite des outils Éduscol (tickets de sortie, auto-évaluation, cartes mentales, classe inversée, usages numériques validés).
- Cadre officiel à rappeler : D.331-1 à D.331-4 (convention/accueil en milieu pro, statut scolaire), R.421-54 (vote CA pour financement des voyages), D.521-6 (calendrier DOM), rappel laïcité hors les murs.
- Fournir des modèles prêts à l’emploi : courrier familles, convention-type, autorisation parentale, fiche sécurité/soins, check-list laïcité, tickets de sortie & auto-évaluation dédiés.
${infoLocalisation}` : "";

  // ✅ Prompt final
  return `
Tu es un enseignant de ${discipline} au niveau ${niveau}.
Ton audience principale est : ${selectedAudiences.join(", ") || "[à préciser]"}.
Ta mission : produire un contenu directement exploitable en classe, sans reformuler l’analyse du contexte.
Conformément aux programmes officiels et au Code de l’éducation, propose une production utilisable immédiatement.
${specialNoteForEleves}
🎯 Objectif : ${objectif}
⚖️ Contraintes : ${contraintes}
${socleDirective}

📌 Problématiques retenues :
${selectedBubbles.join("\n")}

🛠️ Tâches attendues (issues des problématiques) :
${productionTasks.map(task => `- ${task}`).join("\n")}

📂 Type(s) de production à fournir :
${selectedProductions.map(task => `- ${task}`).join("\n")}
${partnersDirective}

👥 Audience ciblée :
${detailedAudiences.join("\n") || "[à préciser]"}

📑 Exemples de sortie attendue :
${selectedExamples.join("\n\n")}
`;
}





