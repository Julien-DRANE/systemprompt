/*! © 2025 Académie de La Réunion – DRANE | MIT */
/*! SPDX-License-Identifier: MIT */

// === INSPECTION ===

// --- Problématiques spécifiques inspection ---
const inspectionPresets = {
  "Évaluation pédagogique": {
  desc:
    "Analyser la qualité des pratiques à partir d’observables, en référence aux programmes, au socle commun et aux attendus de fin de cycle. " +
    "Prendre en compte la diversité des évaluations (diagnostique, formative, sommative), la différenciation et l’usage raisonné du numérique.",
  action:
    "Utilise la grille ci-dessous : pour chaque critère, produire constats factuels, effets sur les apprentissages et pistes d’amélioration. " +
    "Positionner sur une échelle à 4 niveaux (Insuffisant • À renforcer • Satisfaisant • Très satisfaisant) et citer les preuves (traces/indicateurs).",
  grille_modele: [
    // [Domaine, Critère évalué, Indicateurs observables, Preuves/Traces, Niveau (1-4), Commentaire et pistes]
    ["Préparation/planification",
     "Alignement objectifs–activités–évaluation au regard des attendus de fin de cycle et du socle",
     "Objectifs explicites, critères de réussite, progressivité curriculaire, cohérence séquence/cycle",
     "Séquence, progression, ENT, évaluations préparées",
     "", ""],
    ["Conduite de classe",
     "Clarté cognitive, étayage, gestion du temps et des interactions",
     "Consignes vérifiées, relances, régulations, temps d’apprentissage effectif",
     "Notes d’observation, enregistrements, productions élèves",
     "", ""],
    ["Climat scolaire & exigences",
     "Cadre explicite, sécurité, relation éducative et justice scolaire",
     "Règles connues, prévention incidents, valorisation des réussites",
     "RI/classe, protocole EPS/expériences, carnet/ENT",
     "", ""],
    ["Différenciation",
     "Prise en compte de l’hétérogénéité et besoins spécifiques",
     "Variables didactiques, étayage gradué, adaptations supports, regroupements",
     "Supports aménagés, PAI/PPS le cas échéant, travaux différenciés",
     "", ""],
    ["Évaluation des apprentissages",
     "Combinaison diagnostique • formative • sommative et usages",
     "Diagnostic initial, retours formatifs outillés, critères partagés, remédiations, sommative cohérente",
     "Copies annotées, grilles critériées, tableaux de suivi, LSUN/notes",
     "", ""],
    ["Numérique éducatif (à bon escient)",
     "Usages outillant l’apprentissage et la traçabilité (CRCN si pertinent)",
     "ENT, exerciseurs/quiz, banques de scénarios, données pour remédiation",
     "Captures, exports de résultats, scénarios Édubase",
     "", ""],
    ["Pilotage & coordination",
     "Articulation avec conseils de cycle / conseil pédagogique et projet d’établissement",
     "Co-construction des modalités d’évaluation, continuité inter-degrés (cycle 3), suivi",
     "CR conseil pédagogique/cycle, volets projet, échéancier",
     "", ""]
  ],
  bareme_4_niveaux:
    "1=Insuffisant (écarts majeurs aux références) ; 2=À renforcer (écarts notables, premières preuves) ; " +
    "3=Satisfaisant (conformité globale, effets visibles) ; 4=Très satisfaisant (maîtrise affirmée, effets robustes, transférables).",
  sortie_attendue:
    "1) Grille remplie avec niveaux et preuves ; 2) Synthèse (8–10 lignes) reliant pratiques → effets sur les apprentissages ; " +
    "3) 2–3 actions SMART par critère ≤2 (Action, Ressource, Indicateur, Échéance, Responsable) ; " +
    "4) Références citées et documents consultés. " +
    "Style institutionnel, formulations factuelles, sans jugement de personnes."
}
,
"Conformité aux programmes": {
  desc: "Vérifier l’alignement des enseignements avec les programmes, les attendus de fin de cycle et le socle commun.",
  action:
    "Applique une méthode en 5 étapes : " +
    "1) Cadrage de référence : identifier le cycle/discipline, les attendus de fin de cycle et les domaines du socle commun concernés. " +
    "2) Analyse curriculaire : contrôler l’alignement objectifs ↔ contenus ↔ activités ↔ évaluations (diagnostique, formative, sommative) sur la durée d’une séquence et à l’échelle du cycle (progressivité). " +
    "3) Vérification des repères institutionnels : prise en compte des repères annuels/progressions et ressources d’accompagnement Eduscol. " +
    "4) Pilotage et traçabilité : mentionner les instances (conseil pédagogique / conseils de cycle) mobilisées pour coordonner contenus et modalités d’évaluation, et l’adossement au projet d’établissement. " +
    "5) Conclusion : statuer sur la conformité (Conforme / À consolider / Non conforme) avec preuves observables et jalons de correction.",
  example:
    "Produis : " +
    "A) Un 'Checklist réglementaire' (10 items) ; " +
    "B) Un 'Tableau de conformité' (voir modèle) ; " +
    "C) Une note de conclusion argumentée (8-10 lignes) avec recommandations et jalons (6–12 semaines).",
  checklist:
    [
      "Socle commun : domaines et compétences explicitement visés pour la séquence/cycle.",
      "Attendus de fin de cycle identifiés et reliés aux tâches proposées (progressivité).",
      "Objectifs d’apprentissage formulés et alignés sur les programmes du cycle.",
      "Évaluations : présence et usage des évaluations diagnostique, formative, sommative ; exploitation des résultats pour la régulation.",
      "Différenciation : adaptations prévues en fonction des besoins (supports, étayages).",
      "Ressources d’accompagnement Eduscol mobilisées (repères, exemples, scénarios).",
      "Numérique : usages à bon escient (ENT, ressources validées), traçabilité des apprentissages.",
      "Coordination : validation/partage en conseil pédagogique ou conseils de cycle ; cohérence inter-degrés si cycle 3.",
      "Sécurité et cadre (EPS/expérimentations) le cas échéant ; conformité aux prescriptions spécifiques.",
      "Voie pro/apprentissage : conformité aux référentiels et organisation pédagogique (si pertinent)."
    ],
  tableau_modele:
    [
      ["Composant", "Exigence officielle", "Élément du dispositif", "Preuve/Trace", "Statut", "Correctif/Jalon"],
      ["Socle commun", "Domaines et composantes visés", "Objectifs de séquence", "Programmation / ENT", "Conforme | À consolider | Non conforme", "Action + échéance"],
      ["Attendus de fin de cycle", "Attendus du cycle (BO/Eduscol)", "Tâches / situations", "Séquence / cahier élève", "…", "…"],
      ["Contenus disciplinaires", "Programme du cycle / repères", "Notions, progressivité", "Progression annuelle", "…", "…"],
      ["Évaluations", "Diagnostic / formatif / sommative", "Outils et critères", "Grilles / copies / LSUN", "…", "…"],
      ["Différenciation", "Prise en compte de l’hétérogénéité", "Adaptations prévues", "Supports aménagés", "…", "…"],
      ["Numérique", "Usage raisonné / CRCN", "ENT, ressources", "Captures, exports", "…", "…"],
      ["Pilotage", "Coordination/évaluation (R421-41-3)", "Instances mobilisées", "CR conseil pédagogique", "…", "…"],
      ["Spécifiques", "Sécurité EPS / référentiels pro", "MESURES / référentiels", "PPMS / protocole / référentiel", "…", "…"]
    ],
  sortie_attendue:
    "1) Checklist cochée/argumentée ; 2) Tableau rempli ; 3) Conclusion : bilan de conformité, risques si non-conformité, recommandations SMART (Action, Ressource, Indicateur, Échéance, Responsable). " +
    "Style institutionnel, appui sur preuves observables (documents, traces élèves, ENT)."
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
  desc:
    "Analyser et interpréter des données (évaluations nationales, résultats d’établissements, suivis de cohortes) pour éclairer le pilotage pédagogique et l’accompagnement.",
  action:
    "Appliquer une méthode en 6 étapes : " +
    "1) Cadrage institutionnel : préciser l’objet (évaluations nationales, DNB/bac, diagnostics internes), l’échelle (élève • classe • niveau • établissement • bassin) et les instances de restitution (conseil pédagogique, CA). " +
    "2) Qualité des données : vérifier complétude, cohérence, périodes, comparabilité (années, cohortes), effectifs, et documenter les limites. " +
    "3) Analyses centrales : produire indicateurs clés (réussite, maîtrise socle à 4 niveaux, écarts-types, quartiles, progression intra-annuelle), analyses d’équité (fille/garçon, besoins particuliers), et liaisons interdegrés quand pertinent. " +
    "4) Visualisation : générer graphiques standardisés (voir 'viz_modele') avec commentaires lisibles (pratiques → effets → pistes). " +
    "5) Interprétation pédagogique : croiser résultats avec contenus enseignés, modalités d’évaluation (diagnostique, formative, sommative), différenciation et usages du numérique ; formuler hypothèses étayées par des preuves. " +
    "6) Restitution & pilotage : produire une note courte pour le conseil pédagogique et une synthèse pour le rapport pédagogique du CA avec recommandations SMART et jalons (6–12 semaines). ",
  example:
    "Cas d’usage : Exploitation des évaluations nationales (6e/CM2, 5e, 4e, 2de/CAP) : comparer niveaux de maîtrise, identifier items faibles récurrents, lier aux pratiques (étayage, évaluation formative), proposer un plan d’accompagnement (formation, visites-conseils, ressources Éduscol).",
  indicateurs_cles: [
    "Taux de réussite / part de niveaux 3–4 (échelle de maîtrise du socle)",
    "Écarts médian/écart-type ; dispersion intra-classe",
    "Progression cohortes (N, N-1) et effets d’étape (passerelles CM2→6e, 3e→2de/CAP)",
    "Équité : écarts fille/garçon, besoins particuliers, ruptures d’apprentissage",
    "Impact des dispositifs (AP, Devoirs faits, groupes à effectifs réduits) sur les résultats"
  ],
  viz_modele: [
    // [Titre, Type, Finalité, Commentaire attendu]
    ["Distribution des niveaux de maîtrise", "Barres empilées", "Visualiser la part des niveaux 1–4 par classe/niveau", "Mettre en regard les objectifs de cycle (attendus)"],
    ["Progression cohortes", "Courbes", "Comparer N vs N-1 sur mêmes domaines/compétences", "Signaler éventuels effets de cohorte/méthode"],
    ["Items faibles récurrents", "Barres horizontales", "Prioriser 5–7 items à travailler", "Relier aux pratiques et ressources ciblées"],
    ["Dispersion intra-classes", "Boîtes à moustaches", "Diagnostiquer hétérogénéité et besoins de différenciation", "Proposer regroupements/remédiations"],
    ["Équité des résultats", "Barres groupées", "Comparer sous-groupes (ex. fille/garçon)", "Identifier écarts significatifs et pistes d’ajustement"]
  ],
  check_qualite: [
    "Données complètes et périodes homogènes (mêmes fenêtres de passation)",
    "Échantillons suffisants (effectifs) et définitions constantes des indicateurs",
    "Comparaisons à périmètre constant (classe/niveau/établissement)",
    "Traçabilité des sources (plateforme évaluations nationales, LSUN/ENT)",
    "Limites explicitées (biais de passation, absences, effets d’établissement)"
  ],
  sortie_attendue:
    "1) Tableau de bord commenté (4–6 graphiques standard + lecture pédagogique en 8–12 lignes) ; " +
    "2) Note 'Conseil pédagogique' (2 pages : constats • analyses • actions SMART • indicateurs/jalons) ; " +
    "3) Synthèse 'Rapport pédagogique du CA' (1 page) ; " +
    "4) Annexe : dictionnaire des données, filtres appliqués, limites d’interprétation.",
  contraintes_style:
    "Style institutionnel ; constats sourcés, formuler 'pratique → effets → recommandations'. Anonymiser au besoin ; ne pas publier de données individuelles identifiantes.",
  recommandations:
    "Relier systématiquement les constats à des leviers d’accompagnement (formation ciblée, visites-conseils, mutualisations, ressources Éduscol/ÉduNum) et au calendrier de suivi (6–12 semaines)."
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
  "Rédige un rapport d’inspection complet, objectif et sourcé, structuré en 7 parties (≈ 1 000–1 300 mots). " +
  "Style institutionnel, formulations factuelles (pratiques → effets sur les apprentissages), sans jugement de personnes. " +
  "Chaque sous-partie explicite : constats observables, analyse professionnelle, impact sur les élèves, pistes d’accompagnement. " +

  "1) Contexte et cadre de l’intervention. " +
  "• Type de visite (contrôle/accompagnement), date, lieu, discipline/niveau, durée, documents examinés. " +
  "• Acteurs rencontrés (enseignant, équipe, direction) et rappel du cadre réglementaire (missions inspection, pilotage EPLE). " +

  "2) Observations factuelles de la séance et des supports. " +
  "• Objectifs d’apprentissage, étapes, modalités (organisation du travail, temps d’apprentissage effectif, consignes, transitions). " +
  "• Différenciation (variables, étayages, adaptations), climat scolaire (règles, sécurité, relation éducative), traces (cahier/ENT). " +
  "• Évaluation en situation : repérage des modalités diagnostique, formative, sommative et usages des résultats. " +

  "3) Analyse des pratiques professionnelles selon 6 axes. " +
  "3.1 Préparation/planification : alignement objectifs–activités–évaluation ; prise en compte des attendus de cycle et du projet. " +
  "3.2 Conduite de classe : clarté cognitive, étayage, gestion des interactions, régulations et relances. " +
  "3.3 Climat scolaire/exigence : cadre explicite, justice scolaire, prévention des incidents, inclusion. " +
  "3.4 Différenciation/besoins des élèves : adaptations, supports aménagés, regroupements, remédiations. " +
  "3.5 Évaluation : diagnostic initial, formatif (retours, critères), sommative (cohérence), exploitation des résultats. " +
  "3.6 Usages du numérique à bon escient : ENT, ressources validées, traçabilité, compétences CRCN (si pertinent). " +

  "4) Points d’appui (forces) — 3 à 5 items probants. " +
  "• Pour chaque appui : preuve observable (comportement/production/indicateur) et effet sur les apprentissages. " +

  "5) Axes d’amélioration — 3 à 4 priorités, avec accompagnements opérationnels. " +
  "• Pour chaque axe : 2 à 3 actions SMART (Action/Ressource/Indicateur/Échéance/Responsable). " +
  "• Relier aux dispositifs de pilotage et de formation (conseil pédagogique, pairs, ressources académiques). " +

  "6) Articulation avec le pilotage de l’EPLE et les partenariats. " +
  "• Liaisons : conseil pédagogique (coordination, évaluation), CESCE/CVC si pertinent, coéducation/communication familles. " +
  "• Propositions d’appuis : visites-conseils, mutualisations, formations ciblées, ressources éduscol/Édubase. " +

  "7) Conclusion synthétique. " +
  "• 5–7 lignes : bilan équilibré, priorités partagées, calendrier de suivi. " +

  "Contraintes de rédaction : " +
  "• S’appuyer en priorité sur des preuves observables ; indiquer les documents consultés. " +
  "• Mentionner explicitement inclusion, égalité filles-garçons, sécurité/laïcité quand c’est pertinent. " +
  "• Éviter les appréciations vagues ; privilégier verbes d’action et indicateurs. " +

  "Annexes automatiques (liste à puces) : " +
  "• Références citées (articles/ressources officielles mobilisées). " +
  "• Documents fournis/consultés (séquence, évaluations, ENT, projets). " +
  "• Tableau de suivi (jalons à 6–12 semaines) — format SMART.",

  "Rapport PPCR":
  "Rédige un rapport PPCR complet, objectif et sourcé, structuré en 7 parties, d’environ 2 pages (≈ 1 000–1 400 mots). " +
  "Style institutionnel, phrases claires, vocabulaire professionnel, sans appréciation subjective ni jugement de valeur. " +
  "Chaque sous-partie comporte : constats factuels, analyse professionnelle, effets sur les apprentissages, pistes opérationnelles. " +

  "1) Contexte et cadre de référence. " +
  "• Rappeler l’objet du rendez-vous (observation, entretien, analyse de documents) et la période. " +
  "• Préciser le niveau/discipline, les missions, les particularités éventuelles de l’établissement/du public. " +
  "• Ancrer le rapport dans les principes du service public d’éducation (égalité, réussite de tous, école inclusive). " +

  "2) Observations factuelles de la séance et des documents analysés. " +
  "• Déroulé synthétique (objectif(s) d’apprentissage, étapes, modalités, temps, supports, évaluation). " +
  "• Indices observables : gestion du temps et des transitions, consignes, différenciation, climat, traces écrites, usages du numérique, sécurité et cadre. " +
  "• Pièces consultées : séquence, évaluations, cahier/ENT, projets, documents professionnels (indiquer s’ils existent/ont été fournis). " +

  "3) Analyse des pratiques professionnelles selon 6 axes. " +
  "3.1 Préparation et planification : alignement objectifs/activités/évaluation ; prise en compte des attendus de fin de cycle et du socle ; cohérence des ressources. " +
  "3.2 Conduite de classe et pilotage pédagogique : explicitation, étayage, régulations, gestion des interactions, clarté cognitive. " +
  "3.3 Climat scolaire et exigences : cadre, règles, relation éducative, inclusion, valorisation des réussites, gestion de l’hétérogénéité. " +
  "3.4 Différenciation et besoins des élèves : adaptations, étayage gradué, remédiations, démarches d’évaluation variées (diagnostique, formative, sommative). " +
  "3.5 Intégration du numérique à bon escient : usage raisonné d’ENT/Édubase/exerciseurs/tableur, traçabilité des apprentissages, compétences CRCN si pertinent. " +
  "3.6 Parcours et citoyenneté : articulation avec EMC/EDD/EMI et projets d’établissement (le cas échéant), lien familles/partenaires. " +

  "4) Points d’appui (forces) — détaillés et objectivés. " +
  "• Lister 3 à 5 appuis majeurs, chacun étayé par une preuve (comportement observable, trace écrite, résultat d’élève, indicateur). " +
  "• Expliquer en quoi ces appuis favorisent les apprentissages et la progression de tous les élèves. " +

  "5) Axes de progrès avec pistes concrètes (SMART). " +
  "• Formuler 3 à 4 axes priorisés ; pour chaque axe, proposer 2 à 3 actions opérationnelles (qui fait quoi, quand, avec quelles ressources/indicateurs de suivi). " +
  "• Préciser les modalités d’évaluation de l’impact (ex. critères de réussite, données à recueillir, échéance). " +

  "6) Éléments de carrière et accompagnements envisageables. " +
  "• Recommandations professionnelles : formations ciblées (ressources éduscol/Édubase), visites de pairs, accompagnement par corps d’inspection/équipes. " +
  "• Positionnement littéral attendu d’un rapport PPCR : appréciation argumentée, en lien direct avec les constats (sans notation chiffrée). " +

  "7) Conclusion synthétique. " +
  "• 5 à 7 lignes : bilan équilibré, rappel des priorités, cap partagé et prochaines étapes. " +

  "Contraintes de rédaction : " +
  "• S’appuyer en priorité sur des preuves observables ; bannir les formulations vagues. " +
  "• Mentionner explicitement, quand c’est pertinent, l’inclusion, l’égalité filles-garçons, la sécurité et la laïcité. " +
  "• Faire apparaître les différents types d’évaluation (diagnostique/formative/sommative) et leurs usages. " +
  "• Citer 3 à 5 ressources/protocoles/outils mobilisables (ex. ENT, Édubase, banque d’exercices, vade-mecum). " +

  "Annexes automatiques à générer (liste à puces en fin de rapport) : " +
  "• Références citées (articles et ressources officielles mobilisées). " +
  "• Documents professionnels fournis/consultés (si communiqués). " +
  "• Échéancier de suivi (jalons à 6–12 semaines)." ,

  "Grille d'observation": 
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

  "Analyse d'impact d'une réforme": 
    "Synthétise l’impact de la mise en œuvre d’une réforme dans un établissement. "
    + "Inclure : contexte, constats (points positifs et difficultés), témoignages d’acteurs, "
    + "indicateurs chiffrés si disponibles, et recommandations pour la suite.",

"Protocole d’évaluation": {
  desc:
    "Élaborer un protocole commun d’évaluation, aligné sur les programmes, le socle, et les attendus de fin de cycle, validé en conseil pédagogique et articulé au projet d’établissement.",
  action:
    "Produire un document structuré en 10 volets : " +
    "1) Finalités et périmètre • 2) Références officielles • 3) Principes d’évaluation (diagnostique, formative, sommative) • " +
    "4) Critères et échelles de maîtrise (4 niveaux) • 5) Instruments/outils • 6) Recueil et qualité des données • " +
    "7) Organisation (fréquence, calendrier, acteurs, instances) • 8) Inclusion et aménagements • 9) Numérique et traçabilité • " +
    "10) Restitution (instances, livrables) + Annexes (modèles). " +
    "Style institutionnel, constats sourcés ; bannir tout jugement de personne.",
  structure_detaillee: [
    ["1) Finalités et périmètre",
     "Objectifs du protocole ; niveaux/discipline/cycles couverts ; liens avec projet d’établissement ; usages prévus (régulation, orientation, certification locale)."],
    ["2) Références officielles",
     "Socle commun et attendus de fin de cycle ; textes sur l’évaluation ; compétences du conseil pédagogique (coordination, modalités d’évaluation)."],
    ["3) Principes d’évaluation",
     "Définir la combinatoire diagnostique • formative • sommative et leur articulation dans la progression ; expliciter les usages des résultats (remédiations, régulations)."],
    ["4) Critères et échelles",
     "Rubriques par composantes évaluées ; descripteurs et critères ; échelle à 4 niveaux (1 Insuffisant, 2 À renforcer, 3 Satisfaisant, 4 Très satisfaisant/Très bonne maîtrise)."],
    ["5) Instruments et outils",
     "Banque d’items/épreuves, grilles critériées, rubriques disciplinaires, exemples de barèmes ; formats d’évaluation (orale, écrite, pratique) ; outils numériques autorisés."],
    ["6) Recueil et qualité des données",
     "Modalités de passation et de saisie ; traçabilité (LSUN/ENT) ; contrôles qualité (complétude, cohérence, comparabilité, anonymisation) ; dictionnaire de données."],
    ["7) Organisation",
     "Fréquence par période ; calendrier (jalons diagnostique/formative/sommative) ; rôles (enseignants, coordo., chef d’établissement, corps d’inspection) ; instances de validation."],
    ["8) Inclusion et aménagements",
     "Prise en compte de l’hétérogénéité ; aménagements (PPS/PAI/PAP, temps supplémentaire, supports adaptés) ; sécurité (EPS/expérimentations)."],
    ["9) Numérique et traçabilité",
     "ENT, exerciseurs, plateformes académiques ; export de résultats ; tableaux de bord ; sobriété numérique et RGPD ; compétences CRCN (si pertinent)."],
    ["10) Restitution et pilotage",
     "Formats de restitution : note ‘Conseil pédagogique’, contribution au rapport pédagogique du CA ; plan d’amélioration (actions SMART, indicateurs, jalons 6–12 semaines)."]
  ],
  frequences_recommandees:
    "Par période : au moins 1 diagnostique d’ouverture, 2 à 3 formatives outillées (feedbacks exploitables), 1 sommative alignée. Ajuster selon la discipline et le cycle.",
  annexes_a_generer: {
    "A) Grille critériée (modèle)": [
      ["Compétence/Objet évalué", "Descripteurs (attendus)", "Critères", "Échelle (1–4)", "Preuves/Traces", "Remédiations/Prolongements"]
    ],
    "B) Rubrique à 4 niveaux (modèle)":
      "1=Insuffisant (écarts majeurs) • 2=À renforcer (écarts notables) • 3=Satisfaisant (conformité globale, effets visibles) • 4=Très bonne maîtrise (maîtrise affirmée, transférable).",
    "C) Modèle de calendrier annuel":
      ["Période", "Évaluation diagnostique (objets/outils)", "Formatives (x2–3) et feedbacks", "Sommative (objet/poids)", "Instance de régulation", "Jalon de suivi"],
    "D) Dictionnaire des données (modèle)":
      ["Indicateur", "Définition", "Source", "Niveau (élève/classe/niveau)", "Période", "Alerte/Seuil", "Commentaires"],
    "E) Procédure d’assurance qualité":
      ["Étape", "Contrôle (étalonnage, calibration, double lecture)", "Responsable", "Trace", "Échéance"]
  },
  sortie_attendue:
    "1) Protocole rédigé (10 volets) ; 2) Grille(s) critériée(s) prêtes à l’emploi ; 3) Calendrier et jalons ; 4) Tableau de bord minimal (distribution des niveaux 1–4, items faibles, progression).",
  contraintes:
    "Valider le protocole en conseil pédagogique ; publier sur l’ENT ; expliciter sources et limites ; anonymiser les données ; articuler avec liaison interdegrés si cycle 3."
}

};


function getBubbleColorClassInspection(label) {
  const bleu = [
    "Évaluation pédagogique", "Conformité aux programmes", "Évaluation des apprentissages", "Protocole d’évaluation"
  ];
  const vert = [
    "Différenciation pédagogique", "Accompagnement des enseignants", "Préparation d’un séminaire", "Plan d’accompagnement post-inspection"
  ];
  const jaune = [
    "Climat scolaire et gestion de classe", "Suivi des réformes", "Évaluation des personnels (PPCR)"
  ];
  const orange = [
    "Synthèse de réunions", "Compte rendu de réunion", "Kit séminaire"
  ];
  const violet = [
    "Exploitation de données", "Analyse de données"
  ];

  if (bleu.includes(label)) return "bubble-soft-blue";
  if (vert.includes(label)) return "bubble-soft-green";
  if (jaune.includes(label)) return "bubble-soft-yellow";
  if (orange.includes(label)) return "bubble-soft-orange";
  if (violet.includes(label)) return "bubble-soft-purple";
  return "bubble-soft-grey"; // fallback
}


// --- Génération bulles problématiques Inspection ---
const bubblesInspection = document.getElementById("bubbles-inspection");
Object.keys(inspectionPresets).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble", getBubbleColorClassInspection(label));
  bubble.innerText = label;
  bubble.dataset.label = label;
  bubble.addEventListener("click", () => bubble.classList.toggle("selected"));
  bubblesInspection.appendChild(bubble);
});

function getProdColorClassInspection(label) {
  const bleu = [
    "Rapport d’inspection", "Note d'observation pédagogique"
  ];
  const vert = [
    "Plan d’accompagnement post-inspection", "Préparation d’un séminaire"
  ];
  const jaune = [
    "Protocole d’évaluation", "Kit d'observation"
  ];
  const orange = [
    "Synthèse de réunions", "Compte rendu de réunion"
  ];
  const violet = [
    "Exploitation de données", "Analyse de résultats"
  ];

  if (bleu.includes(label)) return "bubble-soft-blue";
  if (vert.includes(label)) return "bubble-soft-green";
  if (jaune.includes(label)) return "bubble-soft-yellow";
  if (orange.includes(label)) return "bubble-soft-orange";
  if (violet.includes(label)) return "bubble-soft-purple";
  return "bubble-soft-grey"; // fallback
}



// --- Génération bulles types de production Inspection ---
const prodBubblesInspection = document.getElementById("productionBubbles-inspection");

function getProdColorClassInspection(label) {
  const bleu = [
    "Rapport d’inspection", "Note d'observation pédagogique", "Rapport PPCR"
  ];
  const vert = [
    "Plan d’accompagnement post-inspection", "Kit séminaire"
  ];
  const jaune = [
    "Protocole d’évaluation", "Grille d'observation"
  ];
  const orange = [
    "Synthèse de réunions", "Compte rendu de réunion"
  ];
  const violet = [
    "Exploitation de données", "Analyse de données", "Analyse d'impact d'une réforme"
  ];

  if (bleu.includes(label)) return "bubble-soft-blue";
  if (vert.includes(label)) return "bubble-soft-green";
  if (jaune.includes(label)) return "bubble-soft-yellow";
  if (orange.includes(label)) return "bubble-soft-orange";
  if (violet.includes(label)) return "bubble-soft-purple";
  return "bubble-soft-grey";
}

Object.keys(inspectionProductions).forEach(label => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble", getProdColorClassInspection(label));
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

// === Filtrage Inspection : si "Parents" est sélectionné, ne laisser visibles que :
// - PROBLÉMATIQUES : "Climat scolaire et gestion de classe"
// - PRODUCTIONS : "Compte rendu de réunion"

function isParentsSelectedInspection() {
  return Array.from(document.querySelectorAll("#audienceBubbles-inspection .bubble.selected"))
    .some(b => (b.dataset.audience || "").toLowerCase() === "parents");
}

const INSPECTION_PARENTS_KEEP_PRESETS = new Set([
  "Climat scolaire et gestion de classe"
]);

const INSPECTION_PARENTS_KEEP_PRODUCTIONS = new Set([
  "Compte rendu de réunion"
]);

function hideBubble(b){ b.style.display = "none"; b.classList.remove("selected"); }
function showBubble(b){ b.style.display = ""; }

function applyInspectionParentsFilter() {
  const parentsOn = isParentsSelectedInspection();

  // Problématiques : tout cacher sauf la/les whitelists si Parents est sélectionné
  document.querySelectorAll("#bubbles-inspection .bubble").forEach(b => {
    const label = b.dataset.label || "";
    if (parentsOn) {
      INSPECTION_PARENTS_KEEP_PRESETS.has(label) ? showBubble(b) : hideBubble(b);
    } else {
      showBubble(b);
    }
  });

  // Types de production : idem
  document.querySelectorAll("#productionBubbles-inspection .bubble").forEach(b => {
    const label = b.dataset.type || "";
    if (parentsOn) {
      INSPECTION_PARENTS_KEEP_PRODUCTIONS.has(label) ? showBubble(b) : hideBubble(b);
    } else {
      showBubble(b);
    }
  });
}

// Refiltrer quand on clique sur les audiences + appel initial
const audienceBubblesInspectionEl = document.getElementById("audienceBubbles-inspection");
audienceBubblesInspectionEl.addEventListener("click", applyInspectionParentsFilter);
applyInspectionParentsFilter();



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
