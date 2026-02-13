"use client";
import { useState, useCallback } from "react";

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const SERIES = [
  { id: "decode", name: "🔍 DÉCODE", fullName: "Le LAB Profile révèle", color: "#C9A84C", share: "55%" },
  { id: "capsule", name: "💊 CAPSULE", fullName: "Un concept, un post", color: "#4A90D9", share: "20%" },
  { id: "miroir", name: "🪞 MIROIR", fullName: "Et vous ?", color: "#D4534B", share: "10%" },
  { id: "autorite", name: "👔 AUTORITÉ", fullName: "NB NEXT STEP", color: "#1B365D", share: "15%" },
];

const POSTS = [
  {
    id: 1, series: "decode", week: 1, day: "Lun", hook: "Accroche choc",
    title: "Le système scolaire est programmé pour échouer",
    fmtX: "Thread long", fmtLI: "Post texte long",
    ctaX: "Thread à dérouler", ctaLI: "Commentez + Tag un enseignant",
    x: `Le système scolaire français est programmé pour échouer.

Pas par manque de budget.
Pas par manque d'enseignants.

Par un bug dans son « logiciel motivationnel ».

En LAB Profile, on analyse les métaprogrammes — ces filtres inconscients qui déterminent comment on pense, décide et agit.

J'ai passé le programme de l'Éducation nationale au scanner.

Résultat : un système qui fonctionne à 65% en mode « S'éloigner de ».

→ « Lutter contre l'illettrisme »
→ « Réduire les inégalités »
→ « Combattre le décrochage »

On ne court pas VERS une vision.
On fuit des problèmes.

Ça change tout.

Un élève motivé par « devenir un lecteur passionné » n'apprend pas de la même façon qu'un élève motivé par « ne pas être en échec ».

Le premier construit.
Le second survit.

Et si on reprogrammait le logiciel ?

🧵 Cette semaine, je décortique chaque métaprogramme du système éducatif. Accrochez-vous.

#LABProfile #ÉducationNationale #Métaprogrammes #NLP`,
    li: `J'ai analysé le programme de l'Éducation nationale avec un outil de profilage cognitif.

Les résultats sont troublants.

Le LAB Profile identifie les métaprogrammes — ces filtres inconscients qui déterminent comment on pense, décide et agit.

Quand on passe le système éducatif français au scanner, un pattern saute aux yeux :

65% du langage institutionnel fonctionne en mode « S'éloigner de ».

→ « Lutter contre l'illettrisme »
→ « Réduire les inégalités »
→ « Combattre le décrochage scolaire »

Le système ne court pas VERS une vision.
Il fuit des problèmes.

Pourquoi c'est un enjeu majeur ?

Parce que la direction motivationnelle change tout dans l'apprentissage :

• Un élève motivé par « devenir un lecteur passionné » construit une compétence.
• Un élève motivé par « ne pas être en échec » développe une stratégie de survie.

Le premier est en mode création.
Le second est en mode protection.

En 25 ans de recherche sur les métaprogrammes, Shelle Rose Charvet a montré que les organisations dominées par le pattern « S'éloigner de » finissent par s'épuiser.

Elles gèrent des urgences.
Elles ne construisent pas d'avenir.

Et si la vraie réforme éducative commençait par reprogrammer le logiciel motivationnel du système ?

Dans les prochains posts, je décortique chaque métaprogramme de l'Éducation nationale.

Vous allez découvrir pourquoi certains élèves brillants à l'école s'effondrent en entreprise — et pourquoi certains « cancres » deviennent des leaders.

♻️ Partagez si vous pensez que le regard sur l'éducation doit changer.

💬 Et vous, quel souvenir scolaire ce constat vous évoque ?

#LABProfile #Leadership #Management #Éducation #NLP #PerformanceCollective`,
  },
  {
    id: 2, series: "decode", week: 1, day: "Mer", hook: "Insight contre-intuitif",
    title: "L'école forme des exécutants, pas des penseurs",
    fmtX: "Post + sondage", fmtLI: "Post texte + sondage natif",
    ctaX: "Sondage : Options ou Procédures ?", ctaLI: "Sondage natif 4 choix",
    x: `L'école française est procédurale à 85%.

« Apprends cette méthode. »
« Suis ce protocole. »
« Respecte cette fréquence. »

En LAB Profile, c'est le métaprogramme « Procédures ».

Les profils « Options » — ceux qui cherchent des alternatives, explorent, créent — sont structurellement exclus.

Le paradoxe ?

On leur demande de « développer leur esprit critique » (Options)…
… dans un cadre qui ne tolère qu'une seule bonne réponse (Procédures).

C'est une double contrainte.
Gregory Bateson appellerait ça une « injonction paradoxale ».

L'entrepreneur qui a quitté l'école à 16 ans ?
Peut-être juste un profil Options dans un monde Procédures.

Le « bon élève » qui s'effondre en entreprise ?
Peut-être un profil Procédures qui n'a jamais appris à choisir.

💡 La question n'est pas : « Est-ce que l'élève est bon ? »
C'est : « Est-ce que le système parle son langage ? »

#LABProfile #Éducation #Options #Procédures`,
    li: `L'école française fonctionne en mode « Procédures » à 85%.

Apprends cette méthode.
Suis ce protocole.
Respecte cette fréquence d'apprentissage.

En profilage cognitif LAB Profile, les « Procédures » représentent les personnes qui excellent quand on leur donne un cadre clair, des étapes séquentielles, une méthode éprouvée.

À l'opposé, les profils « Options » sont ceux qui cherchent des alternatives, explorent plusieurs chemins, innovent par la divergence.

Le système éducatif français est conçu pour les premiers.
Il exclut structurellement les seconds.

Et voici le paradoxe fascinant :

On demande aux élèves de « développer leur esprit critique » — un comportement 100% Options…

… dans un cadre qui ne tolère qu'une seule bonne réponse — un environnement 100% Procédures.

En psychologie de la communication, Gregory Bateson appellerait ça une « injonction paradoxale » ou double contrainte.

Concrètement, ça donne :

→ L'entrepreneur qui a quitté l'école à 16 ans ? Probablement un profil Options dans un monde Procédures. Le système l'a rejeté.

→ Le « bon élève » qui s'effondre à son premier poste de management ? Probablement un profil Procédures qui n'a jamais appris à naviguer dans l'incertitude.

La vraie question n'est jamais « Est-ce que cet élève est bon ? »

C'est : « Est-ce que le système parle son langage cognitif ? »

Quand j'accompagne des comités de direction avec le LAB Profile, je retrouve exactement ce pattern : des équipes où les profils Options étouffent dans des process rigides, et des profils Procédures paniquent face à l'ambiguïté.

La performance collective commence quand on reconnaît ces différences.

🗳️ Sondage : À l'école, vous étiez plutôt…
→ Options (explorer, questionner)
→ Procédures (suivre, structurer)
→ Un mix selon la matière
→ J'ai changé depuis

#LABProfile #Management #Leadership #Innovation #Éducation #NLP`,
  },
  {
    id: 3, series: "decode", week: 1, day: "Ven", hook: "Révélation data",
    title: "60% des élèves dans le mauvais canal",
    fmtX: "Post visuel", fmtLI: "Carrousel PDF 5 slides",
    ctaX: "Partage si tu te reconnais", ctaLI: "Enregistrez + commentez votre canal",
    x: `Le système éducatif français est calibré à 70% sur le canal « Lecture ».

Lire. Écrire. Bulletin Officiel. Manuels. Évaluations écrites.

Problème : selon le LAB Profile, le canal « Lecture » ne représente qu'environ 40% de la population.

Les 60% restants ?

→ Visuels : ils ont besoin de VOIR pour comprendre
→ Auditifs : ils ont besoin d'ENTENDRE pour intégrer
→ Kinesthésiques : ils ont besoin de FAIRE pour apprendre

Un kinesthésique assis 6h sur une chaise à lire un manuel ?

Ce n'est pas un élève en difficulté.
C'est un apprenant dans le mauvais canal.

Imaginez un instant qu'on évalue un poisson sur sa capacité à grimper aux arbres.

C'est exactement ce que fait l'école.
Chaque jour.
Depuis des décennies.

La « reconquête de l'écrit » comme priorité nationale, c'est renforcer le canal dominant… et creuser l'écart pour tous les autres.

💡 Et si la vraie réforme, c'était de diversifier les canaux ?

#LABProfile #ApprentissageDiversifié #CanauxDeConviction #Éducation`,
    li: `[CARROUSEL PDF — 5 slides]

Slide 1 — ACCROCHE
« 60% des élèves apprennent dans un canal que l'école ignore. »
Le LAB Profile révèle un angle mort massif du système éducatif.

Slide 2 — LE CONSTAT
Le système éducatif français est calibré à 70% sur le canal « Lecture ».
Manuels. Évaluations écrites. Bulletin Officiel.
Or le canal Lecture ne correspond qu'à environ 40% de la population.

Slide 3 — LES 4 CANAUX DU LAB PROFILE
• Visuel — besoin de VOIR pour comprendre (schémas, images, démonstrations)
• Auditif — besoin d'ENTENDRE pour intégrer (discussions, explications orales)
• Lecture — besoin de LIRE pour apprendre (textes, manuels, fiches)
• Kinesthésique — besoin de FAIRE pour retenir (manipulation, mouvement, expérimentation)

Slide 4 — LA MÉTAPHORE
Un kinesthésique assis 6h à lire un manuel n'est pas un élève en difficulté.
C'est un apprenant dans le mauvais canal.
Évaluer un poisson sur sa capacité à grimper aux arbres ne mesure pas son intelligence.

Slide 5 — LE LEVIER + CTA
Et si la vraie réforme, c'était de diversifier les canaux d'apprentissage ET d'évaluation ?
En entreprise, on appelle ça « adapter sa communication au profil de son interlocuteur ».
C'est exactement ce que le LAB Profile permet en CODIR.
→ NB NEXT STEP accompagne les équipes dirigeantes avec cette approche.

💬 Quel est votre canal dominant ? Visuel, Auditif, Lecture ou Kinesthésique ?

#LABProfile #Apprentissage #Leadership #Communication #NLP`,
  },
  {
    id: 4, series: "decode", week: 2, day: "Lun", hook: "Analogie business",
    title: "Si l'Éducation nationale était un CODIR",
    fmtX: "Thread + CTA", fmtLI: "Post texte long — viral",
    ctaX: "DM pour diagnostic CODIR", ctaLI: "Commentez le pattern que vous reconnaissez",
    x: `Si l'Éducation nationale était une entreprise, son CODIR serait en crise.

Voici son profil LAB décisionnel :

→ Source de motivation : Externe à 80%
(On se compare aux classements PISA, on attend la validation de l'OCDE)

→ Facteur de décision : Similitude avec exception à 70%
(On ajuste, on « poursuit », on « renforce » — jamais de rupture)

→ Scope d'attention : Soi à 60%
(On mesure le budget par élève, pas l'expérience vécue)

En consulting, quand un CODIR affiche ce profil, on sait exactement ce qui se passe :

✗ Aucune vision propre
✗ Réaction permanente au marché
✗ KPIs déconnectés du client (l'élève)
✗ Innovation cosmétique

C'est le profil type d'une organisation en survie.
Pas en croissance.

Aucun CODIR performant ne fonctionne avec 80% de référentiel externe.

Les meilleurs leaders savent POURQUOI ils font ce qu'ils font.
Avant de se comparer aux autres.

💡 Et votre organisation ? Quel est son profil LAB décisionnel ?

#LABProfile #Leadership #CODIR #PerformanceCollective #NLP`,
    li: `Et si on analysait l'Éducation nationale comme on analyse un comité de direction ?

C'est l'exercice que j'ai fait avec le LAB Profile — l'outil de profilage cognitif développé par Shelle Rose Charvet.

Voici le « profil décisionnel » du système éducatif français :

𝗦𝗼𝘂𝗿𝗰𝗲 𝗱𝗲 𝗺𝗼𝘁𝗶𝘃𝗮𝘁𝗶𝗼𝗻 : Externe à 80%
Le système se légitime par les classements PISA, les comparaisons OCDE, les benchmarks internationaux. Il n'a pas de boussole interne.

𝗙𝗮𝗰𝘁𝗲𝘂𝗿 𝗱𝗲 𝗱𝗲́𝗰𝗶𝘀𝗶𝗼𝗻 : Similitude avec exception à 70%
On « révise » les programmes, on « poursuit » les réformes, on « renforce » les dispositifs. Jamais de rupture. Toujours de l'ajustement incrémental.

𝗦𝗰𝗼𝗽𝗲 𝗱'𝗮𝘁𝘁𝗲𝗻𝘁𝗶𝗼𝗻 : Soi à 60%
Les KPIs mesurent le budget par élève, le nombre d'enseignants, les taux de réussite. Pas l'expérience vécue par l'élève dans sa classe à 10h du matin.

En consulting, quand je rencontre ce profil dans un CODIR, je sais exactement ce qui se passe :

→ Aucune vision propre — on suit le marché
→ Réactivité permanente — on éteint des feux
→ KPIs déconnectés du terrain — on mesure l'activité, pas l'impact
→ Innovation de façade — on change les mots, pas les pratiques

C'est le profil type d'une organisation en mode survie. Pas en mode croissance.

Chez NB NEXT STEP, nous accompagnons les comités de direction pour :

1. Cartographier leur profil LAB collectif
2. Identifier les patterns qui bloquent les décisions
3. Créer un langage commun qui accélère l'alignement
4. Passer du mode « survie » au mode « construction »

Aucun CODIR performant ne fonctionne avec 80% de référentiel externe.

Les meilleurs leaders savent POURQUOI ils font ce qu'ils font.

💬 Et votre CODIR ? Vous reconnaissez-vous dans l'un de ces patterns ?

📩 Envoyez-moi un message pour un diagnostic LAB Profile de votre équipe dirigeante.

#CODIR #Leadership #Management #PerformanceCollective #LABProfile #NLP #Consulting`,
  },
  {
    id: 5, series: "decode", week: 2, day: "Mer", hook: "Le Présent oublié",
    title: "L'école vit entre nostalgie et projection",
    fmtX: "Post + question", fmtLI: "Post texte long",
    ctaX: "Votre temps dominant ?", ctaLI: "Commentez votre orientation temporelle",
    x: `L'Éducation nationale oscille entre deux temps :

→ Le Passé (35%) : « Relever le niveau », « Reconquérir l'écrit »
Comme s'il y avait un âge d'or perdu.

→ Le Futur (50%) : « Plan 2030 », « Compétences du XXIe siècle »
Comme si tout était à construire demain.

Et le Présent ?

Le Présent — ce moment où un élève de CE2 EST assis dans une classe, EN TRAIN d'essayer de comprendre une fraction — représente 15%.

15%.

L'apprentissage ne se fait ni dans le passé ni dans le futur.
Il se fait ICI. MAINTENANT.

Un enseignant connecté au présent de son élève voit :
— le décrochage d'attention au bout de 12 minutes
— le regard qui s'illumine sur un exemple concret
— la frustration qui monte quand le canal ne correspond pas

Un système orienté futur/passé ne voit que des scores.

💡 Les meilleurs coachs le savent : la performance se construit dans le présent.

Pas dans les bilans d'hier.
Pas dans les plans de demain.

Maintenant.

#LABProfile #OrientationTemporelle #Présent #Éducation #Coaching`,
    li: `L'Éducation nationale française vit entre deux temps. Et aucun des deux n'est le bon.

En LAB Profile, l'orientation temporelle détermine comment une organisation se projette dans le temps.

𝗣𝗮𝘀𝘀𝗲́ (35%) — « Relever le niveau. » « Reconquérir l'écrit. »
Ce langage suppose un âge d'or scolaire qu'il faudrait retrouver.

𝗙𝘂𝘁𝘂𝗿 (50%) — « Plan 2030. » « Compétences du XXIe siècle. »
Tout est à construire… demain.

𝗣𝗿𝗲́𝘀𝗲𝗻𝘁 (15%) — Ce moment où un élève de CE2 essaie de comprendre une fraction.

Or l'apprentissage se fait ici. Maintenant.

Les organisations les plus performantes ont un équilibre temporel : le passé comme ressource, le futur comme direction, le présent comme lieu d'action.

Celles qui s'enlisent oscillent entre nostalgie et projection. Sans jamais être vraiment là.

Les meilleurs leaders — comme les meilleurs enseignants — sont ancrés dans le présent.

💬 Et vous, quel est votre temps dominant au travail ?

#Leadership #Management #Performance #LABProfile #Coaching #NLP`,
  },
  {
    id: 6, series: "decode", week: 2, day: "Ven", hook: "Solution",
    title: "5 leviers pour reprogrammer l'éducation",
    fmtX: "Thread carrousel", fmtLI: "Carrousel PDF 7 slides",
    ctaX: "Lequel vous parle le plus ? 👇", ctaLI: "Enregistrez + commentez le levier clé",
    x: `J'ai analysé le programme de l'Éducation nationale avec le LAB Profile.

12 métaprogrammes. Des dizaines de patterns identifiés.

Voici les 5 leviers qui changeraient tout :

𝟏. Passer de « S'éloigner de » à « Aller vers »
→ « Construire des lecteurs passionnés » au lieu de « lutter contre l'illettrisme »
→ L'aspiration mobilise. La peur épuise.

𝟐. Restaurer le référentiel Interne
→ L'enseignant connaît ses élèves mieux que PISA
→ Lui rendre le pouvoir de juger, pas seulement d'exécuter

𝟑. Intégrer le pattern Options
→ Pas « choisis dans cette liste »
→ Mais « conçois ton parcours »

𝟒. Diversifier les canaux de conviction
→ Visuel, Auditif, Kinesthésique : les évaluer AUSSI dans leur canal

𝟓. Ancrer dans le Présent
→ L'apprentissage se fait maintenant
→ Les plans 2030 ne servent à rien si le cours de 10h ne capte personne

Ces 5 leviers ne coûtent pas un euro de plus.
Ils demandent un changement de logiciel.

💡 Le potentiel est là. Il suffit de parler le bon langage.

#LABProfile #Éducation #5Leviers #Performance #NLP #Consulting`,
    li: `[CARROUSEL PDF — 7 slides]

Slide 1 — 5 leviers LAB Profile pour reprogrammer le système éducatif (et votre organisation)

Slide 2 — CONTEXTE : 12 métaprogrammes analysés. Des dizaines de patterns identifiés.

Slide 3 — LEVIER 1 : Passer de « S'éloigner de » à « Aller vers »
❌ « Lutter contre l'illettrisme » → ✅ « Construire des lecteurs passionnés »
→ En CODIR : reformulez vos objectifs en aspiration, pas en correction.

Slide 4 — LEVIER 2 : Restaurer le référentiel Interne
→ En CODIR : vos managers terrain connaissent vos clients mieux que les benchmarks.

Slide 5 — LEVIER 3 : Intégrer le pattern Options
→ En CODIR : la créativité de vos profils innovants est votre avantage compétitif.

Slide 6 — LEVIER 4 : Diversifier les canaux de conviction
→ En CODIR : votre PowerPoint ne convainc que 40% de votre audience.

Slide 7 — LEVIER 5 + CTA : Ancrer dans le Présent
Avant le prochain plan stratégique, demandez-vous ce qui se passe vraiment aujourd'hui.
NB NEXT STEP accompagne les CODIRs dans cette reprogrammation.
📩 Message pour un diagnostic.

#Leadership #CODIR #Management #LABProfile #Performance #NLP`,
  },
  {
    id: 7, series: "capsule", week: 3, day: "Mar", hook: "Concept pur",
    title: "Aller vers vs S'éloigner de",
    fmtX: "Post éducatif", fmtLI: "Post texte long",
    ctaX: "Save pour référence", ctaLI: "Enregistrez + taguez un manager",
    x: `Deux personnes. Même objectif. Logiciels différents.

« Je veux être en forme » → Aller vers
« Je ne veux plus être fatigué » → S'éloigner de

Même direction apparente.
Énergie totalement différente.

Le premier CONSTRUIT quelque chose.
Le second FUIT quelque chose.

En entreprise :
— Un manager « Aller vers » fixe des objectifs inspirants
— Un manager « S'éloigner de » gère des urgences

Les deux sont nécessaires.
Mais quand une organisation fonctionne à 65% en « S'éloigner de »…

… elle survit. Elle ne crée pas.

💡 Le LAB Profile identifie ce pattern en 2 questions.

Demain je vous montre comment.

#LABProfile #Métaprogramme #Direction #Leadership #Communication`,
    li: `Deux collaborateurs. Même objectif annuel. Énergie radicalement différente.

« Je veux faire croître mon portefeuille de 20% » → Aller vers
« Je ne veux pas perdre mes clients clés » → S'éloigner de

En LAB Profile, c'est le métaprogramme « Direction de la motivation ».

La personne « Aller vers » est énergisée par un objectif à atteindre.
La personne « S'éloigner de » est activée par un problème à résoudre.

Les deux sont légitimes et nécessaires dans une équipe.

Mais voici l'erreur que je vois dans 80% des organisations :

On motive un profil « S'éloigner de » avec une vision inspirante.
→ Il ne se sent pas concerné.

On motive un profil « Aller vers » avec des alertes et des risques.
→ Il décroche.

Ce n'est pas un problème de motivation. C'est un problème de langage.

Le LAB Profile identifie ce pattern en 2 questions simples.

Dans mon prochain post, je vous donne ces 2 questions.

💾 Enregistrez ce post.
💬 Reconnaissez-vous ce pattern chez vos collaborateurs ?

#Management #Leadership #Communication #LABProfile #NLP #PerformanceCollective`,
  },
  {
    id: 8, series: "capsule", week: 3, day: "Jeu", hook: "Pratique",
    title: "3 questions pour détecter le profil Direction",
    fmtX: "Post pratique", fmtLI: "Carrousel PDF 4 slides",
    ctaX: "Testez ce soir 👇", ctaLI: "Enregistrez + testez cette semaine",
    x: `Vous voulez savoir si quelqu'un est « Aller vers » ou « S'éloigner de » ?

Posez cette question :
« Qu'est-ce qui est important pour vous dans votre travail ? »

Écoutez la structure, pas le contenu.

🔵 Aller vers :
« Je veux progresser »
« J'aime atteindre des objectifs »
→ Vocabulaire : obtenir, atteindre, gagner, réaliser

🔴 S'éloigner de :
« Je veux éviter la routine »
« Je ne veux pas stagner »
→ Vocabulaire : éviter, résoudre, prévenir, éliminer

💡 L'erreur classique du manager :

Motiver un « S'éloigner de » avec une vision inspirante.
Motiver un « Aller vers » avec des menaces.

Les deux décrochent.
Parce qu'on ne parle pas leur langage.

Le LAB Profile vous donne le code d'accès à chaque personne.

#LABProfile #Communication #Management #Influence #NLP`,
    li: `[CARROUSEL PDF — 4 slides]

Slide 1 — Guide pratique : Comment détecter le métaprogramme « Direction » en 2 minutes

Slide 2 — LA QUESTION CLÉ
« Qu'est-ce qui est important pour vous dans [votre travail / ce projet] ? »
Écoutez la STRUCTURE, pas le contenu.

Slide 3 — DÉCODER
🔵 ALLER VERS : « progresser / atteindre / obtenir / réaliser / gagner »
→ Mobiliser avec : vision, résultats, opportunités

🔴 S'ÉLOIGNER DE : « éviter / ne pas / résoudre / prévenir / éliminer »
→ Mobiliser avec : risques, problèmes à corriger, urgences

Slide 4 — L'ERREUR + CTA
❌ Vision inspirante → profil S'éloigner de décroche
❌ Alertes → profil Aller vers s'ennuie
✅ Adaptez votre langage au profil

Le LAB Profile identifie 14 métaprogrammes comme celui-ci.
📩 NB NEXT STEP — Diagnostic LAB Profile pour équipes dirigeantes

#Management #Leadership #Communication #RH #LABProfile #NLP`,
  },
  {
    id: 9, series: "miroir", week: 3, day: "Sam", hook: "Viral",
    title: "Quel élève étiez-vous ?",
    fmtX: "Post viral", fmtLI: "Post texte — potentiel viral max",
    ctaX: "Quel élève étiez-vous ? 👇", ctaLI: "Commentez + partagez dans votre réseau",
    x: `Quel élève étiez-vous ?

Celui qui levait la main pour répondre… ou celui qui regardait par la fenêtre ?

En LAB Profile, votre comportement scolaire révèle vos métaprogrammes dominants :

🎯 Vous leviez toujours la main ?
→ Référentiel Externe + Procédures

🪟 Vous rêvassiez en regardant dehors ?
→ Référentiel Interne + Options

📖 Premier à finir puis ennuyé ?
→ Aller vers + Global + Indépendant

🤝 Vous aidiez toujours les autres ?
→ Scope Autre + Coopératif

Aucun de ces profils n'est « meilleur ».
Mais l'école n'en valorise qu'un seul.

💡 Et si vos « défauts » scolaires étaient vos forces professionnelles ?

Le « rêveur » est devenu entrepreneur.
L'« agité » est devenu commercial terrain.
Le « rebelle » est devenu innovateur.

Dites-moi : quel élève étiez-vous ? 👇

#LABProfile #DéveloppementPersonnel #École #MétaprogrammesNLP`,
    li: `Quel élève étiez-vous ?

Celui qui levait la main pour répondre…
Ou celui qui regardait par la fenêtre en attendant que ça passe ?

En LAB Profile, votre comportement scolaire révèle vos métaprogrammes dominants — ces mêmes patterns qui déterminent aujourd'hui comment vous managez, décidez et communiquez.

🎯 𝗩𝗼𝘂𝘀 𝗹𝗲𝘃𝗶𝗲𝘇 𝘁𝗼𝘂𝗷𝗼𝘂𝗿𝘀 𝗹𝗮 𝗺𝗮𝗶𝗻 ?
→ Référentiel Externe + Procédures
Aujourd'hui : excellent exécutant stratégique. Défi : oser décider sans validation.

🪟 𝗩𝗼𝘂𝘀 𝗿𝗲̂𝘃𝗮𝘀𝘀𝗶𝗲𝘇 𝗲𝗻 𝗿𝗲𝗴𝗮𝗿𝗱𝗮𝗻𝘁 𝗱𝗲𝗵𝗼𝗿𝘀 ?
→ Référentiel Interne + Options
Aujourd'hui : entrepreneur ou visionnaire. Défi : suivre un process quand nécessaire.

📖 𝗩𝗼𝘂𝘀 𝗳𝗶𝗻𝗶𝘀𝘀𝗶𝗲𝘇 𝗽𝗿𝗲𝗺𝗶𝗲𝗿 𝗽𝘂𝗶𝘀 𝘃𝗼𝘂𝘀 𝘃𝗼𝘂𝘀 𝗲𝗻𝗻𝘂𝘆𝗶𝗲𝘇 ?
→ Aller vers + Global + Indépendant
Aujourd'hui : dirigeant qui voit loin mais délègue mal le détail.

🤝 𝗩𝗼𝘂𝘀 𝗮𝗶𝗱𝗶𝗲𝘇 𝘁𝗼𝘂𝗷𝗼𝘂𝗿𝘀 𝗹𝗲𝘀 𝗮𝘂𝘁𝗿𝗲𝘀 ?
→ Scope Autre + Coopératif
Aujourd'hui : coach, RH ou facilitateur. Défi : ne pas vous oublier.

L'école n'en a valorisé qu'un seul.

Et si vos « défauts » scolaires étaient vos plus grandes forces professionnelles ?

💬 Quel élève étiez-vous ? Et ça correspond à votre rôle actuel ?

♻️ Partagez — vous serez surpris des réponses.

#Leadership #DéveloppementPersonnel #Management #LABProfile #NLP #CODIR`,
  },
  {
    id: 10, series: "autorite", week: 4, day: "Lun", hook: "Offre CODIR",
    title: "Les patterns de l'Éducation nationale sont dans votre CODIR",
    fmtX: "Post + offre", fmtLI: "Post texte + CTA fort",
    ctaX: "📩 DM diagnostic 30 min", ctaLI: "📩 Message pour diagnostic",
    x: `J'ai passé le programme de l'Éducation nationale au LAB Profile.

Et voici ce qui m'a frappé :

Les mêmes patterns dysfonctionnels que je retrouve dans 80% des CODIRs que j'accompagne.

→ Réactivité au lieu de vision
→ Dépendance aux benchmarks
→ Procédures rigides
→ KPIs déconnectés de l'humain

La bonne nouvelle ? Ces patterns se reprogramment.

Avec un outil précis : le LAB Profile.
Avec un accompagnement ciblé : NB NEXT STEP.

Nous aidons les CODIRs à :
✓ Identifier leurs patterns collectifs
✓ Comprendre pourquoi certaines décisions bloquent
✓ Créer une dynamique « Aller vers » durable

💡 Votre CODIR a un profil LAB.
Vous ne le connaissez pas encore.

📩 DM pour un diagnostic gratuit de 30 min.

#LABProfile #CODIR #Consulting #Performance #NLP #NBNextStep`,
    li: `Pendant 4 semaines, j'ai partagé avec vous l'analyse LAB Profile du système éducatif français.

Chaque pattern dysfonctionnel identifié, je le retrouve dans les comités de direction que j'accompagne. Systématiquement.

→ 𝗥𝗲́𝗮𝗰𝘁𝗶𝘃𝗶𝘁𝗲́ au lieu de vision
→ 𝗗𝗲́𝗽𝗲𝗻𝗱𝗮𝗻𝗰𝗲 𝗮𝘂𝘅 𝗯𝗲𝗻𝗰𝗵𝗺𝗮𝗿𝗸𝘀
→ 𝗣𝗿𝗼𝗰𝗲́𝗱𝘂𝗿𝗲𝘀 𝗿𝗶𝗴𝗶𝗱𝗲𝘀
→ 𝗞𝗣𝗜𝘀 𝗱𝗲́𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲́𝘀

Ces patterns se reprogramment. Chez NB NEXT STEP, notre méthodologie en 4 étapes :

𝟭. Diagnostic LAB Profile collectif
𝟮. Analyse des patterns de groupe
𝟯. Langage commun
𝟰. Reprogrammation « Aller vers »

📩 Envoyez-moi un message pour un diagnostic exploratoire de 30 minutes — offert.

Ce diagnostic vous donnera :
→ Première lecture de vos patterns dominants
→ Identification de votre principal levier caché
→ Pistes concrètes pour votre prochain CODIR

#CODIR #Leadership #Management #Performance #LABProfile #NLP #Consulting #NBNextStep`,
  },
  {
    id: 11, series: "autorite", week: 4, day: "Jeu", hook: "Cap Cohésion",
    title: "Collectivités : votre équipe a un profil LAB",
    fmtX: "Post secteur public", fmtLI: "Post texte — cible DGS/élus",
    ctaX: "📩 Diagnostic Cap Cohésion", ctaLI: "📩 Message + tag décideurs publics",
    x: `Les collectivités territoriales affrontent les mêmes défis que l'Éducation nationale.

→ Des réunions où tout le monde parle mais personne ne décide
→ Des projets qui démarrent fort et s'enlisent
→ Des tensions entre élus, DGS et agents

Pourquoi ? Parce que dans une équipe municipale :
— Des profils « Aller vers » veulent avancer
— Des profils « S'éloigner de » voient les risques
— Des profils « Procédures » veulent un cadre
— Des profils « Options » veulent de la latitude

Sans langage commun, ces profils se percutent.
Avec le LAB Profile, ils se complètent.

C'est ce que propose Cap Cohésion :
→ Cartographier les métaprogrammes collectifs
→ Créer un langage commun de décision
→ Transformer les tensions en complémentarités

📩 Contactez-nous pour un diagnostic Cap Cohésion.

#CapCohésion #Collectivités #LABProfile #CohésionÉquipe #NBNextStep`,
    li: `Élus, DGS, DGA — ce post est pour vous.

Les collectivités territoriales présentent les mêmes patterns que le système éducatif que j'ai analysé ces dernières semaines.

→ Réunions où personne ne décide
→ Projets qui s'enlisent en 18 mois
→ Tensions entre élus, DGS et chefs de service

Ce ne sont pas des problèmes de personnes. Ce sont des problèmes de patterns cognitifs.

Dans une équipe municipale type :
→ Profils « Aller vers » — les élus porteurs de projets
→ Profils « S'éloigner de » — les juristes et financiers
→ Profils « Procédures » — les agents d'exécution
→ Profils « Options » — les DGA innovants

Sans langage commun, ces profils se percutent.
Avec le LAB Profile, ils deviennent complémentaires.

𝗖𝗮𝗽 𝗖𝗼𝗵𝗲́𝘀𝗶𝗼𝗻 par NB NEXT STEP :
✅ Cartographier les métaprogrammes de l'équipe
✅ Créer un langage commun de décision
✅ Transformer les tensions en complémentarités
✅ Aligner l'énergie collective sur les priorités du mandat

📩 Envoyez-moi un message pour échanger sur les enjeux de votre collectivité.

#Collectivités #Management #Leadership #CohésionÉquipe #CapCohésion #LABProfile #NBNextStep`,
  },
];

const CAL_X = [
  { week: 1, theme: "Diagnostic choc", slots: [{ d: "Lun", id: 1 }, { d: "Mer", id: 2 }, { d: "Ven", id: 3 }] },
  { week: 2, theme: "Approfondir + Business", slots: [{ d: "Lun", id: 4 }, { d: "Mer", id: 5 }, { d: "Ven", id: 6 }] },
  { week: 3, theme: "Éduquer + Engager", slots: [{ d: "Mar", id: 7 }, { d: "Jeu", id: 8 }, { d: "Sam", id: 9 }] },
  { week: 4, theme: "Convertir", slots: [{ d: "Lun", id: 10 }, { d: "Jeu", id: 11 }] },
];

const CAL_LI = [
  { week: 1, theme: "Diagnostic choc", slots: [{ d: "Mar 7h30", id: 1, n: "Post texte" }, { d: "Jeu 12h", id: 2, n: "Post + sondage" }, { d: "Sam 9h", id: 3, n: "Carrousel PDF" }] },
  { week: 2, theme: "Approfondir + Business", slots: [{ d: "Mar 7h30", id: 4, n: "Post texte viral" }, { d: "Jeu 12h", id: 5, n: "Post + question" }, { d: "Sam 9h", id: 6, n: "Carrousel PDF" }] },
  { week: 3, theme: "Éduquer + Engager", slots: [{ d: "Mar 7h30", id: 7, n: "Post éducatif" }, { d: "Jeu 12h", id: 8, n: "Carrousel PDF" }, { d: "Sam 9h", id: 9, n: "Post viral max" }] },
  { week: 4, theme: "Convertir", slots: [{ d: "Mar 7h30", id: 10, n: "Post CODIR + CTA" }, { d: "Jeu 12h", id: 11, n: "Cap Cohésion" }] },
];

/* ═══════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════ */

export default function App() {
  const [view, setView] = useState("posts");
  const [plat, setPlat] = useState("x");
  const [postIdx, setPostIdx] = useState(0);
  const [seriesF, setSeriesF] = useState("all");
  const [copied, setCopied] = useState(null);
  const [calW, setCalW] = useState(0);

  const accent = plat === "x" ? "#C9A84C" : "#0A66C2";
  const filtered = seriesF === "all" ? POSTS : POSTS.filter(p => p.series === seriesF);
  const post = filtered[postIdx] || filtered[0];
  const cal = plat === "x" ? CAL_X : CAL_LI;
  const s = (id) => SERIES.find(s => s.id === id);
  const p = (id) => POSTS.find(p => p.id === id);

  const copy = useCallback((text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  }, []);

  // Shared styles
  const pill = (active, color) => ({
    padding: "8px 14px", borderRadius: "8px", cursor: "pointer",
    fontSize: "13px", fontWeight: active ? "700" : "400",
    background: active ? color : "transparent",
    color: active ? "#FFF" : "#8B9DC3",
    border: active ? "none" : "1px solid #2A3558",
    fontFamily: "inherit", WebkitTapHighlightColor: "transparent",
  });

  const card = { background: "#111827", border: "1px solid #1E2A45", borderRadius: "14px", marginBottom: "14px" };

  return (
    <div style={{
      minHeight: "100vh", minHeight: "100dvh",
      background: "#0A0E1A", color: "#E8E0D0",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      maxWidth: "100vw", overflowX: "hidden",
    }}>
      {/* HEADER */}
      <div style={{
        background: `linear-gradient(135deg, #0A0E1A 0%, ${plat === "x" ? "#1a1a2e" : "#0D2137"} 50%, #0A0E1A 100%)`,
        borderBottom: `2px solid ${accent}`,
        padding: "max(env(safe-area-inset-top), 16px) 16px 16px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "9px", letterSpacing: "5px", color: accent, textTransform: "uppercase", marginBottom: "8px" }}>
          NB NEXT STEP × LAB PROFILE
        </div>
        <h1 style={{ fontSize: "20px", fontWeight: "600", color: "#FFF", margin: "0 0 4px" }}>
          Stratégie X + LinkedIn
        </h1>
        <p style={{ fontSize: "12px", color: "#6B7A99", margin: "0 0 14px" }}>
          11 posts × 2 versions • Calendrier 4 semaines
        </p>

        {/* Platform toggle */}
        <div style={{ display: "inline-flex", borderRadius: "10px", overflow: "hidden", border: "1px solid #2A3558" }}>
          {[{ id: "x", label: "𝕏 Twitter", c: "#C9A84C" }, { id: "linkedin", label: "in LinkedIn", c: "#0A66C2" }].map(pt => (
            <button key={pt.id} onClick={() => { setPlat(pt.id); setPostIdx(0); }}
              style={{
                padding: "10px 22px", border: "none", cursor: "pointer",
                fontSize: "14px", fontWeight: plat === pt.id ? "700" : "400",
                background: plat === pt.id ? pt.c : "transparent",
                color: plat === pt.id ? "#FFF" : "#6B7A99",
                fontFamily: "inherit", WebkitTapHighlightColor: "transparent",
                minWidth: "44px", minHeight: "44px",
              }}>{pt.label}</button>
          ))}
        </div>
      </div>

      {/* NAV */}
      <div style={{
        display: "flex", justifyContent: "center", gap: "6px",
        padding: "10px 16px", background: "#0D1220",
        borderBottom: "1px solid #1E2A45",
        position: "sticky", top: 0, zIndex: 10,
      }}>
        {[{ id: "posts", l: "📝 Posts" }, { id: "calendar", l: "📅 Calendrier" }, { id: "guide", l: "📊 Guide" }].map(t => (
          <button key={t.id} onClick={() => setView(t.id)} style={{
            ...pill(view === t.id, accent),
            minHeight: "44px", flex: 1,
          }}>{t.l}</button>
        ))}
      </div>

      {/* ═══ POSTS ═══ */}
      {view === "posts" && (
        <div style={{ padding: "14px" }}>
          {/* Series filter */}
          <div style={{ display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "8px", WebkitOverflowScrolling: "touch" }}>
            <button onClick={() => { setSeriesF("all"); setPostIdx(0); }}
              style={{
                ...pill(seriesF === "all", accent),
                whiteSpace: "nowrap", fontSize: "12px", minHeight: "40px",
              }}>Tous</button>
            {SERIES.map(sr => (
              <button key={sr.id} onClick={() => { setSeriesF(sr.id); setPostIdx(0); }}
                style={{
                  ...pill(seriesF === sr.id, sr.color),
                  whiteSpace: "nowrap", fontSize: "12px", minHeight: "40px",
                }}>{sr.name}</button>
            ))}
          </div>

          {/* Post pills */}
          <div style={{ display: "flex", gap: "5px", overflowX: "auto", padding: "6px 0 10px", WebkitOverflowScrolling: "touch" }}>
            {filtered.map((fp, i) => {
              const sr = s(fp.series);
              return (
                <button key={fp.id} onClick={() => setPostIdx(i)}
                  style={{
                    padding: "6px 12px", borderRadius: "6px", cursor: "pointer",
                    fontSize: "11px", whiteSpace: "nowrap", minHeight: "36px",
                    background: postIdx === i ? sr.color : "#111827",
                    color: postIdx === i ? "#FFF" : "#6B7A99",
                    border: `1px solid ${postIdx === i ? sr.color : "#1E2A45"}`,
                    fontFamily: "inherit", WebkitTapHighlightColor: "transparent",
                  }}>S{fp.week}·{fp.day}</button>
              );
            })}
          </div>

          {/* Post card */}
          {post && (() => {
            const sr = s(post.series);
            const content = plat === "x" ? post.x : post.li;
            const fmt = plat === "x" ? post.fmtX : post.fmtLI;
            const cta = plat === "x" ? post.ctaX : post.ctaLI;
            return (
              <div style={{ ...card, border: `1px solid ${sr.color}44` }}>
                {/* Header */}
                <div style={{ padding: "14px 16px", borderBottom: `1px solid ${sr.color}22`, background: `${sr.color}08` }}>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "6px" }}>
                    <span style={{
                      padding: "3px 8px", borderRadius: "6px", fontSize: "10px",
                      background: sr.color + "22", color: sr.color,
                    }}>{sr.name}</span>
                    <span style={{
                      padding: "3px 8px", borderRadius: "6px", fontSize: "10px",
                      background: accent + "22", color: accent,
                    }}>{plat === "x" ? "𝕏" : "in"} {fmt}</span>
                    <span style={{
                      padding: "3px 8px", borderRadius: "6px", fontSize: "10px",
                      background: "#4A90D922", color: "#4A90D9",
                    }}>S{post.week}·{post.day}</span>
                  </div>
                  <h2 style={{ fontSize: "17px", color: "#FFF", margin: 0, fontWeight: "600", lineHeight: "1.3" }}>
                    {post.title}
                  </h2>
                </div>

                {/* Content */}
                <div style={{
                  padding: "16px", fontSize: "14px", lineHeight: "1.75",
                  whiteSpace: "pre-line", color: "#D4D0C8",
                  maxHeight: "55vh", overflowY: "auto",
                  WebkitOverflowScrolling: "touch",
                }}>{content}</div>

                {/* Actions */}
                <div style={{
                  padding: "12px 16px", borderTop: `1px solid ${sr.color}22`,
                  background: `${sr.color}06`,
                }}>
                  <div style={{ fontSize: "11px", color: "#8B9DC3", marginBottom: "10px" }}>
                    <strong style={{ color: sr.color }}>CTA :</strong> {cta}
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button onClick={() => setPlat(plat === "x" ? "linkedin" : "x")}
                      style={{
                        flex: 1, padding: "12px", borderRadius: "8px", cursor: "pointer",
                        fontSize: "13px", fontWeight: "600", minHeight: "44px",
                        background: "transparent", fontFamily: "inherit",
                        color: plat === "x" ? "#0A66C2" : "#C9A84C",
                        border: `1px solid ${plat === "x" ? "#0A66C244" : "#C9A84C44"}`,
                        WebkitTapHighlightColor: "transparent",
                      }}>Version {plat === "x" ? "LinkedIn" : "X"}</button>
                    <button onClick={() => copy(content, post.id)}
                      style={{
                        flex: 1, padding: "12px", borderRadius: "8px", cursor: "pointer",
                        fontSize: "13px", fontWeight: "700", minHeight: "44px",
                        background: copied === post.id ? "#22C55E" : accent,
                        color: "#FFF", border: "none", fontFamily: "inherit",
                        WebkitTapHighlightColor: "transparent",
                      }}>{copied === post.id ? "✓ Copié !" : "📋 Copier"}</button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* ═══ CALENDAR ═══ */}
      {view === "calendar" && (
        <div style={{ padding: "14px" }}>
          <div style={{ textAlign: "center", marginBottom: "14px" }}>
            <h2 style={{ fontSize: "17px", color: accent, fontWeight: "600", margin: "0 0 4px" }}>
              Calendrier {plat === "x" ? "X" : "LinkedIn"}
            </h2>
            <p style={{ fontSize: "11px", color: "#6B7A99", margin: 0 }}>
              {plat === "x" ? "Lun 7h30 • Mer 12h • Ven 8h • Sam 9h" : "Mar 7h30 • Jeu 12h • Sam 9h"}
            </p>
          </div>

          {/* Week pills */}
          <div style={{ display: "flex", gap: "6px", marginBottom: "14px", justifyContent: "center" }}>
            {cal.map((w, i) => (
              <button key={i} onClick={() => setCalW(i)}
                style={{ ...pill(calW === i, accent), minHeight: "44px", flex: 1 }}>
                S{w.week}
              </button>
            ))}
          </div>

          {/* Week card */}
          {(() => {
            const w = cal[calW];
            return (
              <div style={card}>
                <div style={{ padding: "14px 16px", borderBottom: "1px solid #1E2A45", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "15px", color: "#FFF", fontWeight: "600" }}>Semaine {w.week}</span>
                  <span style={{ padding: "4px 10px", background: accent + "22", borderRadius: "8px", fontSize: "11px", color: accent }}>{w.theme}</span>
                </div>
                <div style={{ padding: "10px" }}>
                  {w.slots.map((sl, j) => {
                    const po = p(sl.id);
                    const sr = s(po.series);
                    return (
                      <div key={j} onClick={() => { setView("posts"); setSeriesF("all"); setPostIdx(POSTS.findIndex(pp => pp.id === sl.id)); }}
                        style={{
                          display: "flex", alignItems: "center", gap: "10px",
                          padding: "12px", marginBottom: "6px",
                          background: "#0D1220", borderRadius: "10px",
                          borderLeft: `3px solid ${sr.color}`,
                          cursor: "pointer", minHeight: "44px",
                          WebkitTapHighlightColor: "transparent",
                        }}>
                        <div style={{ minWidth: "50px", fontSize: "12px", fontWeight: "700", color: sr.color }}>{sl.d}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", color: "#FFF", fontWeight: "600", lineHeight: "1.3" }}>{po.title}</div>
                          <div style={{ fontSize: "11px", color: "#6B7A99", marginTop: "2px" }}>
                            {sr.name} • {plat === "x" ? po.fmtX : po.fmtLI}
                            {sl.n && ` — ${sl.n}`}
                          </div>
                        </div>
                        <span style={{ color: "#4B5563", fontSize: "16px" }}>→</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          {/* Cross-platform comparison */}
          <div style={{ ...card, border: `1px solid ${accent}33` }}>
            <div style={{ padding: "14px 16px", borderBottom: "1px solid #1E2A45" }}>
              <h3 style={{ fontSize: "14px", color: accent, fontWeight: "600", margin: 0 }}>
                Vue croisée S{cal[calW].week}
              </h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
              <div style={{ padding: "12px", borderRight: "1px solid #1E2A45" }}>
                <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#C9A84C", marginBottom: "8px" }}>𝕏 X</div>
                {CAL_X[calW].slots.map((sl, i) => (
                  <div key={i} style={{ padding: "4px 0", fontSize: "12px", color: "#8B9DC3" }}>
                    <strong>{sl.d}</strong> — {p(sl.id).fmtX}
                  </div>
                ))}
              </div>
              <div style={{ padding: "12px" }}>
                <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#0A66C2", marginBottom: "8px" }}>in LINKEDIN</div>
                {CAL_LI[calW].slots.map((sl, i) => (
                  <div key={i} style={{ padding: "4px 0", fontSize: "12px", color: "#8B9DC3" }}>
                    <strong>{sl.d}</strong> — {sl.n}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ GUIDE ═══ */}
      {view === "guide" && (
        <div style={{ padding: "14px" }}>
          {/* Platform tips */}
          <div style={{ ...card, border: `1px solid ${accent}44` }}>
            <div style={{ padding: "14px 16px", borderBottom: "1px solid #1E2A45" }}>
              <h3 style={{ fontSize: "15px", color: accent, fontWeight: "600", margin: 0 }}>
                Guide {plat === "x" ? "𝕏 X / Twitter" : "in LinkedIn"}
              </h3>
            </div>
            <div style={{ padding: "14px 16px" }}>
              <div style={{ fontSize: "10px", color: "#6B7A99", letterSpacing: "2px", marginBottom: "6px" }}>HORAIRES</div>
              <div style={{ fontSize: "13px", color: "#D4D0C8", marginBottom: "14px" }}>
                {plat === "x" ? "Lun 7h30 • Mar-Jeu 12h-13h ou 18h-19h • Ven 8h • Sam 9h" : "Mar-Jeu 7h30-8h30 ou 12h-13h • Sam 9h-10h"}
              </div>

              <div style={{ fontSize: "10px", color: "#6B7A99", letterSpacing: "2px", marginBottom: "6px" }}>FORMATS</div>
              {(plat === "x"
                ? ["Threads longs", "Posts uniques", "Sondages", "Posts visuels"]
                : ["Posts texte longs (70%)", "Carrousels PDF (20%)", "Sondages natifs (10%)"]
              ).map((f, i) => (
                <div key={i} style={{
                  padding: "8px 12px", marginBottom: "4px",
                  background: "#0D1220", borderRadius: "6px",
                  borderLeft: `2px solid ${accent}`,
                  fontSize: "13px", color: "#D4D0C8",
                }}>{f}</div>
              ))}

              <div style={{ fontSize: "10px", color: "#6B7A99", letterSpacing: "2px", marginTop: "14px", marginBottom: "6px" }}>TACTIQUES</div>
              {(plat === "x" ? [
                "Répondre à CHAQUE commentaire dans les 2 premières heures",
                "Quote-tweeter avec angle complémentaire 24h après",
                "Épingler le thread le plus performant",
                "Créer des sondages sur les posts CAPSULE et MIROIR",
              ] : [
                "Répondre avec une question de suivi à chaque commentaire",
                "Republier avec commentaire ajouté 48h après",
                "Demander des partages explicitement (♻️)",
                "Sondages natifs pour les posts CAPSULE et MIROIR",
                "Taguer des profils pertinents dans les commentaires",
                "Carrousels PDF pour les contenus éducatifs",
              ]).map((t, i) => (
                <div key={i} style={{
                  padding: "8px 12px", marginBottom: "4px",
                  background: "#0D1220", borderRadius: "6px",
                  borderLeft: `2px solid ${accent}`,
                  fontSize: "13px", color: "#D4D0C8",
                }}>{t}</div>
              ))}
            </div>
          </div>

          {/* Funnel */}
          <div style={card}>
            <div style={{ padding: "14px 16px", borderBottom: "1px solid #1E2A45" }}>
              <h3 style={{ fontSize: "15px", color: "#C9A84C", fontWeight: "600", margin: 0 }}>Entonnoir de conversion</h3>
            </div>
            <div style={{ padding: "10px" }}>
              {[
                { icon: "👁️", l: "Impressions", d: "Threads DÉCODE + Posts texte longs" },
                { icon: "💬", l: "Engagement", d: "Commentaires, RT, partages, sondages" },
                { icon: "➕", l: "Follow", d: "Profil optimisé + contenu récurrent" },
                { icon: "📩", l: "DM", d: "CTA posts AUTORITÉ" },
                { icon: "🎯", l: "Diagnostic 30 min", d: "Qualification prospect" },
                { icon: "🤝", l: "Client", d: "NB NEXT STEP / Cap Cohésion" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "10px 12px", marginBottom: "4px",
                  background: "#0D1220", borderRadius: "8px",
                }}>
                  <span style={{ fontSize: "18px", width: "28px", textAlign: "center" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: "13px", color: "#FFF", fontWeight: "600" }}>{item.l}</div>
                    <div style={{ fontSize: "11px", color: "#6B7A99" }}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <div style={card}>
            <div style={{ padding: "14px 16px", borderBottom: "1px solid #1E2A45" }}>
              <h3 style={{ fontSize: "15px", color: "#C9A84C", fontWeight: "600", margin: 0 }}>KPIs objectifs</h3>
            </div>
            <div style={{ padding: "10px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
              {[
                { icon: "𝕏", l: "Followers X", v: "5 000" },
                { icon: "in", l: "Connexions LI", v: "2 000+" },
                { icon: "🔥", l: "Engagement", v: ">3% X / >5% LI" },
                { icon: "📩", l: "DMs/semaine", v: "5-10" },
                { icon: "🎯", l: "Diagnostics/mois", v: "4-6" },
                { icon: "🤝", l: "Leads/mois", v: "2-4" },
              ].map((k, i) => (
                <div key={i} style={{
                  padding: "10px", background: "#0D1220",
                  borderRadius: "8px", display: "flex", alignItems: "center", gap: "8px",
                }}>
                  <span style={{ fontSize: "16px" }}>{k.icon}</span>
                  <div>
                    <div style={{ fontSize: "12px", color: "#FFF", fontWeight: "600" }}>{k.l}</div>
                    <div style={{ fontSize: "11px", color: accent }}>{k.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hashtags */}
          <div style={card}>
            <div style={{ padding: "14px 16px", borderBottom: "1px solid #1E2A45" }}>
              <h3 style={{ fontSize: "15px", color: "#C9A84C", fontWeight: "600", margin: 0 }}>Hashtags</h3>
            </div>
            <div style={{ padding: "10px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
              <div style={{ padding: "10px", borderRight: "1px solid #1E2A45" }}>
                <div style={{ fontSize: "10px", color: "#C9A84C", letterSpacing: "2px", marginBottom: "6px" }}>𝕏 4-6/POST</div>
                {["#LABProfile #NLP", "#CODIR #Leadership", "#ÉducationNationale", "#CapCohésion"].map((h, i) => (
                  <div key={i} style={{ fontSize: "11px", color: "#8B9DC3", padding: "3px 0" }}>{h}</div>
                ))}
              </div>
              <div style={{ padding: "10px" }}>
                <div style={{ fontSize: "10px", color: "#0A66C2", letterSpacing: "2px", marginBottom: "6px" }}>in 3-5/POST</div>
                {["#Leadership #Management", "#PerformanceCollective", "#LABProfile #NLP", "#Consulting"].map((h, i) => (
                  <div key={i} style={{ fontSize: "11px", color: "#8B9DC3", padding: "3px 0" }}>{h}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{
        textAlign: "center", padding: "16px",
        paddingBottom: "max(env(safe-area-inset-bottom), 16px)",
        borderTop: "1px solid #1E2A45",
      }}>
        <div style={{ fontSize: "8px", letterSpacing: "4px", color: "#C9A84C22", textTransform: "uppercase" }}>
          NB NEXT STEP
        </div>
      </div>
    </div>
  );
}
