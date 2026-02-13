"use client";
import { useState, useCallback } from "react";

/* ═══════════════════════════════════════════
   HELPER: split text into 280-char tweets
   Splits on paragraph breaks, respects word boundaries
   ═══════════════════════════════════════════ */
function splitIntoTweets(text, maxLen = 275) {
  // Split into paragraphs
  const paragraphs = text.split("\n").filter(l => l.trim() !== "");
  const tweets = [];
  let current = "";

  for (const para of paragraphs) {
    const candidate = current ? current + "\n\n" + para : para;
    if (candidate.length <= maxLen) {
      current = candidate;
    } else {
      if (current) tweets.push(current.trim());
      // If single paragraph > maxLen, split on sentences
      if (para.length > maxLen) {
        const sentences = para.match(/[^.!?]+[.!?]+\s*/g) || [para];
        let chunk = "";
        for (const s of sentences) {
          const c2 = chunk ? chunk + " " + s.trim() : s.trim();
          if (c2.length <= maxLen) { chunk = c2; }
          else { if (chunk) tweets.push(chunk.trim()); chunk = s.trim(); }
        }
        current = chunk;
      } else {
        current = para;
      }
    }
  }
  if (current.trim()) tweets.push(current.trim());
  return tweets;
}

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const SERIES = [
  { id: "decode", name: "🔍 DÉCODE", color: "#C9A84C" },
  { id: "capsule", name: "💊 CAPSULE", color: "#4A90D9" },
  { id: "miroir", name: "🪞 MIROIR", color: "#D4534B" },
  { id: "autorite", name: "👔 AUTORITÉ", color: "#1B365D" },
];

const POSTS = [
  {
    id: 1, series: "decode", week: 1, day: "Lun",
    title: "Le système scolaire est programmé pour échouer",
    fmtX: "Thread", fmtLI: "Post texte long",
    ctaX: "Thread à dérouler", ctaLI: "Commentez + Tag un enseignant",
    x: `Le système scolaire français est programmé pour échouer.

Pas par manque de budget.
Pas par manque d'enseignants.

Par un bug dans son « logiciel motivationnel ».

🧵 Thread : je vous explique avec le LAB Profile ↓

---

En LAB Profile, on analyse les métaprogrammes — ces filtres inconscients qui déterminent comment on pense, décide et agit.

J'ai passé le programme de l'Éducation nationale au scanner.

Résultat : 65% de mode « S'éloigner de ».

---

Ça donne quoi concrètement ?

→ « Lutter contre l'illettrisme »
→ « Réduire les inégalités »
→ « Combattre le décrochage »

On ne court pas VERS une vision.
On fuit des problèmes.

---

Un élève motivé par « devenir un lecteur passionné » CONSTRUIT une compétence.

Un élève motivé par « ne pas être en échec » développe une stratégie de SURVIE.

Le premier crée.
Le second survit.

---

Et si on reprogrammait le logiciel ?

« Construire des lecteurs passionnés » au lieu de « lutter contre l'illettrisme ».

L'aspiration mobilise. La peur épuise.

Cette semaine, je décortique chaque métaprogramme du système éducatif. Accrochez-vous.

#LABProfile #ÉducationNationale #NLP`,
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

♻️ Partagez si vous pensez que le regard sur l'éducation doit changer.

💬 Et vous, quel souvenir scolaire ce constat vous évoque ?

#LABProfile #Leadership #Management #Éducation #NLP #PerformanceCollective`,
  },
  {
    id: 2, series: "decode", week: 1, day: "Mer",
    title: "L'école forme des exécutants, pas des penseurs",
    fmtX: "Thread + sondage", fmtLI: "Post texte + sondage natif",
    ctaX: "Sondage : Options ou Procédures ?", ctaLI: "Sondage natif 4 choix",
    x: `L'école française est procédurale à 85%.

« Apprends cette méthode. »
« Suis ce protocole. »
« Respecte cette fréquence. »

En LAB Profile, c'est le métaprogramme « Procédures ». Thread ↓

---

Les profils « Options » — ceux qui cherchent des alternatives, explorent, créent — sont structurellement exclus du système scolaire.

Ils représentent pourtant une part majeure de la population.

---

Le paradoxe ?

On demande aux élèves de « développer leur esprit critique » (Options)…

… dans un cadre qui ne tolère qu'une seule bonne réponse (Procédures).

C'est une double contrainte. Bateson appellerait ça une injonction paradoxale.

---

L'entrepreneur qui a quitté l'école à 16 ans ?

Peut-être juste un profil Options dans un monde Procédures.

Le « bon élève » qui s'effondre en entreprise ?

Peut-être un profil Procédures qui n'a jamais appris à choisir.

---

💡 La question n'est pas : « Est-ce que l'élève est bon ? »

C'est : « Est-ce que le système parle son langage ? »

Sondage : Vous étiez plutôt Options ou Procédures à l'école ?

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

→ L'entrepreneur qui a quitté l'école à 16 ans ? Probablement un profil Options dans un monde Procédures.

→ Le « bon élève » qui s'effondre à son premier poste de management ? Probablement un profil Procédures qui n'a jamais appris à naviguer dans l'incertitude.

La vraie question n'est jamais « Est-ce que cet élève est bon ? »

C'est : « Est-ce que le système parle son langage cognitif ? »

🗳️ Sondage : À l'école, vous étiez plutôt…
→ Options (explorer, questionner)
→ Procédures (suivre, structurer)
→ Un mix selon la matière
→ J'ai changé depuis

#LABProfile #Management #Leadership #Innovation #Éducation #NLP`,
  },
  {
    id: 3, series: "decode", week: 1, day: "Ven",
    title: "60% des élèves dans le mauvais canal",
    fmtX: "Thread", fmtLI: "Carrousel PDF 5 slides",
    ctaX: "Partage si tu te reconnais", ctaLI: "Enregistrez + commentez votre canal",
    x: `Le système éducatif français est calibré à 70% sur le canal « Lecture ».

Lire. Écrire. Manuels. Évaluations écrites.

Problème : ce canal ne correspond qu'à ~40% de la population.

Thread ↓

---

Les 60% restants ?

→ Visuels : besoin de VOIR pour comprendre
→ Auditifs : besoin d'ENTENDRE pour intégrer
→ Kinesthésiques : besoin de FAIRE pour apprendre

Le LAB Profile appelle ça les « canaux de conviction ».

---

Un kinesthésique assis 6h sur une chaise à lire un manuel ?

Ce n'est pas un élève en difficulté.
C'est un apprenant dans le mauvais canal.

On évalue un poisson sur sa capacité à grimper aux arbres.

---

La « reconquête de l'écrit » comme priorité nationale, c'est renforcer le canal dominant…

… et creuser l'écart pour tous les autres.

💡 Et si la vraie réforme, c'était de diversifier les canaux ?

#LABProfile #CanauxDeConviction #Éducation`,
    li: `[CARROUSEL PDF — 5 slides]

Slide 1 — ACCROCHE
« 60% des élèves apprennent dans un canal que l'école ignore. »
Le LAB Profile révèle un angle mort massif du système éducatif.

Slide 2 — LE CONSTAT
Le système éducatif français est calibré à 70% sur le canal « Lecture ».
Or le canal Lecture ne correspond qu'à environ 40% de la population.

Slide 3 — LES 4 CANAUX DU LAB PROFILE
• Visuel — besoin de VOIR pour comprendre
• Auditif — besoin d'ENTENDRE pour intégrer
• Lecture — besoin de LIRE pour apprendre
• Kinesthésique — besoin de FAIRE pour retenir

Slide 4 — LA MÉTAPHORE
Un kinesthésique assis 6h à lire un manuel n'est pas un élève en difficulté.
C'est un apprenant dans le mauvais canal.

Slide 5 — LE LEVIER + CTA
Et si la vraie réforme, c'était de diversifier les canaux ?
C'est exactement ce que le LAB Profile permet en CODIR.
→ NB NEXT STEP accompagne les équipes dirigeantes.

💬 Quel est votre canal dominant ?

#LABProfile #Apprentissage #Leadership #Communication #NLP`,
  },
  {
    id: 4, series: "decode", week: 2, day: "Lun",
    title: "Si l'Éducation nationale était un CODIR",
    fmtX: "Thread + CTA", fmtLI: "Post texte long — viral",
    ctaX: "DM pour diagnostic CODIR", ctaLI: "Commentez le pattern que vous reconnaissez",
    x: `Si l'Éducation nationale était une entreprise, son CODIR serait en crise.

J'ai établi son profil LAB décisionnel.

Thread ↓

---

Source de motivation : Externe à 80%

On se compare aux classements PISA, on attend la validation de l'OCDE.

Le système n'a pas de boussole interne. Il réagit au marché.

---

Facteur de décision : Similitude avec exception à 70%

On « révise » les programmes, on « poursuit » les réformes, on « renforce » les dispositifs.

Jamais de rupture. Toujours de l'ajustement.

---

Scope d'attention : Soi à 60%

On mesure le budget par élève, le taux de réussite, le nombre d'enseignants.

Pas l'expérience vécue par l'élève dans sa classe à 10h du matin.

---

En consulting, quand un CODIR affiche ce profil :

✗ Aucune vision propre
✗ Réaction permanente au marché
✗ KPIs déconnectés du client
✗ Innovation cosmétique

C'est le profil type d'une organisation en survie.

---

Les meilleurs leaders savent POURQUOI ils font ce qu'ils font. Avant de se comparer aux autres.

💡 Et votre organisation ? Quel est son profil LAB ?

📩 DM pour un diagnostic de votre CODIR.

#LABProfile #Leadership #CODIR #NLP`,
    li: `Et si on analysait l'Éducation nationale comme on analyse un comité de direction ?

C'est l'exercice que j'ai fait avec le LAB Profile.

Voici le « profil décisionnel » du système éducatif français :

𝗦𝗼𝘂𝗿𝗰𝗲 𝗱𝗲 𝗺𝗼𝘁𝗶𝘃𝗮𝘁𝗶𝗼𝗻 : Externe à 80%
Le système se légitime par les classements PISA et les benchmarks internationaux. Il n'a pas de boussole interne.

𝗙𝗮𝗰𝘁𝗲𝘂𝗿 𝗱𝗲 𝗱𝗲́𝗰𝗶𝘀𝗶𝗼𝗻 : Similitude avec exception à 70%
On « révise », on « poursuit », on « renforce ». Jamais de rupture.

𝗦𝗰𝗼𝗽𝗲 𝗱'𝗮𝘁𝘁𝗲𝗻𝘁𝗶𝗼𝗻 : Soi à 60%
Les KPIs mesurent le budget par élève. Pas l'expérience vécue.

En consulting, quand je rencontre ce profil dans un CODIR :
→ Aucune vision propre
→ Réactivité permanente
→ KPIs déconnectés du terrain
→ Innovation de façade

Chez NB NEXT STEP, nous accompagnons les comités de direction pour cartographier leur profil LAB collectif et passer du mode « survie » au mode « construction ».

💬 Votre CODIR se reconnaît dans ces patterns ?

📩 Envoyez-moi un message pour un diagnostic.

#CODIR #Leadership #Management #PerformanceCollective #LABProfile #NLP`,
  },
  {
    id: 5, series: "decode", week: 2, day: "Mer",
    title: "L'école vit entre nostalgie et projection",
    fmtX: "Thread", fmtLI: "Post texte long",
    ctaX: "Votre temps dominant ?", ctaLI: "Commentez votre orientation temporelle",
    x: `L'Éducation nationale oscille entre deux temps. Et aucun des deux n'est le bon.

Thread sur l'orientation temporelle en LAB Profile ↓

---

Le Passé (35%) :

« Relever le niveau. »
« Reconquérir l'écrit. »

Comme s'il y avait un âge d'or perdu à retrouver.

---

Le Futur (50%) :

« Plan 2030. »
« Compétences du XXIe siècle. »

Comme si tout était à construire demain.

---

Et le Présent ? 15%.

Ce moment où un élève de CE2 EST assis dans une classe, EN TRAIN d'essayer de comprendre une fraction.

L'apprentissage se fait ICI. MAINTENANT. Pas dans les plans à 5 ans.

---

Un enseignant connecté au présent voit :
— le décrochage d'attention au bout de 12 min
— le regard qui s'illumine
— la frustration qui monte

Un système orienté futur/passé ne voit que des scores.

---

💡 Les meilleurs coachs le savent : la performance se construit dans le présent.

Pas dans les bilans d'hier. Pas dans les plans de demain. Maintenant.

Quel est votre temps dominant ?

#LABProfile #OrientationTemporelle #Éducation #Coaching`,
    li: `L'Éducation nationale française vit entre deux temps. Et aucun des deux n'est le bon.

En LAB Profile, l'orientation temporelle détermine comment une organisation se projette dans le temps.

𝗣𝗮𝘀𝘀𝗲́ (35%) — « Relever le niveau. » « Reconquérir l'écrit. »
Ce langage suppose un âge d'or à retrouver.

𝗙𝘂𝘁𝘂𝗿 (50%) — « Plan 2030. » « Compétences du XXIe siècle. »
Tout est à construire… demain.

𝗣𝗿𝗲́𝘀𝗲𝗻𝘁 (15%) — Ce moment où un élève essaie de comprendre une fraction.

Or l'apprentissage se fait ici. Maintenant.

Les organisations les plus performantes ont un équilibre temporel : le passé comme ressource, le futur comme direction, le présent comme lieu d'action.

Les meilleurs leaders sont ancrés dans le présent.

💬 Quel est votre temps dominant au travail ?

#Leadership #Management #Performance #LABProfile #Coaching #NLP`,
  },
  {
    id: 6, series: "decode", week: 2, day: "Ven",
    title: "5 leviers pour reprogrammer l'éducation",
    fmtX: "Thread", fmtLI: "Carrousel PDF 7 slides",
    ctaX: "Lequel vous parle le plus ? 👇", ctaLI: "Enregistrez + commentez",
    x: `J'ai analysé le programme de l'Éducation nationale avec le LAB Profile.

12 métaprogrammes. Des dizaines de patterns.

Voici les 5 leviers qui changeraient tout. Thread ↓

---

𝟏. Passer de « S'éloigner de » à « Aller vers »

→ « Construire des lecteurs passionnés » au lieu de « lutter contre l'illettrisme »

L'aspiration mobilise. La peur épuise.

---

𝟐. Restaurer le référentiel Interne

→ L'enseignant connaît ses élèves mieux que PISA

Lui rendre le pouvoir de juger, pas seulement d'exécuter.

---

𝟑. Intégrer le pattern Options

→ Pas « choisis dans cette liste »
→ Mais « conçois ton parcours »

Les créatifs ne sont pas en échec. Ils sont dans le mauvais cadre.

---

𝟒. Diversifier les canaux de conviction

→ Visuel, Auditif, Kinesthésique : les évaluer AUSSI dans leur canal

Un kinesthésique évalué par l'écrit = un faux négatif permanent.

---

𝟓. Ancrer dans le Présent

→ L'apprentissage se fait maintenant
→ Les plans 2030 ne servent à rien si le cours de 10h ne capte personne

Ces 5 leviers ne coûtent pas un euro de plus. Ils demandent un changement de logiciel.

---

C'est exactement ce que fait le LAB Profile : reprogrammer les patterns qui bloquent la performance.

En CODIR. En équipe. En classe.

💡 Lequel de ces 5 leviers vous parle le plus ?

#LABProfile #5Leviers #Performance #NLP`,
    li: `[CARROUSEL PDF — 7 slides]

Slide 1 — 5 leviers LAB Profile pour reprogrammer le système éducatif (et votre organisation)

Slide 2 — CONTEXTE : 12 métaprogrammes analysés.

Slide 3 — LEVIER 1 : « S'éloigner de » → « Aller vers »
En CODIR : reformulez vos objectifs en aspiration.

Slide 4 — LEVIER 2 : Restaurer le référentiel Interne
En CODIR : vos managers terrain connaissent vos clients mieux que les benchmarks.

Slide 5 — LEVIER 3 : Intégrer le pattern Options
En CODIR : la créativité est votre avantage compétitif.

Slide 6 — LEVIER 4 : Diversifier les canaux
En CODIR : votre PowerPoint ne convainc que 40% de l'audience.

Slide 7 — LEVIER 5 + CTA : Ancrer dans le Présent
NB NEXT STEP accompagne les CODIRs dans cette reprogrammation.
📩 Message pour un diagnostic.

#Leadership #CODIR #Management #LABProfile #Performance #NLP`,
  },
  {
    id: 7, series: "capsule", week: 3, day: "Mar",
    title: "Aller vers vs S'éloigner de",
    fmtX: "Thread court", fmtLI: "Post texte long",
    ctaX: "Save pour référence", ctaLI: "Enregistrez + taguez un manager",
    x: `Deux personnes. Même objectif. Logiciels différents.

« Je veux être en forme » → Aller vers
« Je ne veux plus être fatigué » → S'éloigner de

Même direction apparente. Énergie totalement différente. ↓

---

Le premier CONSTRUIT quelque chose.
Le second FUIT quelque chose.

En entreprise :
— Un manager « Aller vers » fixe des objectifs inspirants
— Un manager « S'éloigner de » gère des urgences

---

Les deux sont nécessaires.

Mais quand une organisation fonctionne à 65% en « S'éloigner de »…

… elle survit. Elle ne crée pas.

💡 Le LAB Profile identifie ce pattern en 2 questions.

Demain je vous montre comment.

#LABProfile #Direction #Leadership #Communication`,
    li: `Deux collaborateurs. Même objectif annuel. Énergie radicalement différente.

« Je veux faire croître mon portefeuille de 20% » → Aller vers
« Je ne veux pas perdre mes clients clés » → S'éloigner de

En LAB Profile, c'est le métaprogramme « Direction de la motivation ».

La personne « Aller vers » est énergisée par un objectif à atteindre.
La personne « S'éloigner de » est activée par un problème à résoudre.

Les deux sont légitimes et nécessaires dans une équipe.

Mais voici l'erreur que je vois dans 80% des organisations :

On motive un profil « S'éloigner de » avec une vision inspirante → il décroche.
On motive un profil « Aller vers » avec des alertes → il s'ennuie.

Ce n'est pas un problème de motivation. C'est un problème de langage.

Dans mon prochain post, je vous donne les 2 questions pour détecter ce pattern.

💾 Enregistrez ce post.

#Management #Leadership #Communication #LABProfile #NLP #PerformanceCollective`,
  },
  {
    id: 8, series: "capsule", week: 3, day: "Jeu",
    title: "3 questions pour détecter le profil Direction",
    fmtX: "Thread pratique", fmtLI: "Carrousel PDF 4 slides",
    ctaX: "Testez ce soir 👇", ctaLI: "Enregistrez + testez cette semaine",
    x: `Comment savoir si quelqu'un est « Aller vers » ou « S'éloigner de » ?

Posez cette question :
« Qu'est-ce qui est important pour vous dans votre travail ? »

Écoutez la STRUCTURE, pas le contenu. ↓

---

🔵 Aller vers :
« Je veux progresser »
« J'aime atteindre des objectifs »

Vocabulaire : obtenir, atteindre, gagner, réaliser

---

🔴 S'éloigner de :
« Je veux éviter la routine »
« Je ne veux pas stagner »

Vocabulaire : éviter, résoudre, prévenir, éliminer, ne pas

---

💡 L'erreur classique du manager :

Motiver un « S'éloigner de » avec une vision inspirante.
Motiver un « Aller vers » avec des menaces.

Les deux décrochent. Parce qu'on ne parle pas leur langage.

Testez ce soir et dites-moi ce que vous observez 👇

#LABProfile #Communication #Management #NLP`,
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

📩 NB NEXT STEP — Diagnostic LAB Profile pour équipes dirigeantes

#Management #Leadership #Communication #RH #LABProfile #NLP`,
  },
  {
    id: 9, series: "miroir", week: 3, day: "Sam",
    title: "Quel élève étiez-vous ?",
    fmtX: "Thread viral", fmtLI: "Post texte — viral max",
    ctaX: "Quel élève étiez-vous ? 👇", ctaLI: "Commentez + partagez",
    x: `Quel élève étiez-vous ?

Celui qui levait la main pour répondre… ou celui qui regardait par la fenêtre ?

En LAB Profile, votre comportement scolaire révèle vos métaprogrammes dominants ↓

---

🎯 Vous leviez toujours la main ?

→ Référentiel Externe + Procédures

Vous aviez besoin de validation ET vous aimiez suivre les étapes.

---

🪟 Vous rêvassiez en regardant dehors ?

→ Référentiel Interne + Options

Vous n'aviez pas besoin qu'on vous dise que c'était bien. Les procédures vous ennuyaient.

---

📖 Premier à finir puis ennuyé ?

→ Aller vers + Global + Indépendant

Vous captiez l'essentiel vite et le détail vous frustrait.

---

🤝 Vous aidiez toujours les autres ?

→ Scope Autre + Coopératif

Vous sentiez la détresse des autres avant la vôtre.

---

Aucun de ces profils n'est « meilleur ». Mais l'école n'en valorise qu'un seul.

Et si vos « défauts » scolaires étaient vos forces professionnelles ?

Le « rêveur » → entrepreneur
L'« agité » → commercial terrain
Le « rebelle » → innovateur

Quel élève étiez-vous ? 👇

#LABProfile #DéveloppementPersonnel #École`,
    li: `Quel élève étiez-vous ?

Celui qui levait la main… ou celui qui regardait par la fenêtre ?

En LAB Profile, votre comportement scolaire révèle vos métaprogrammes dominants — ces patterns qui déterminent aujourd'hui comment vous managez et décidez.

🎯 𝗩𝗼𝘂𝘀 𝗹𝗲𝘃𝗶𝗲𝘇 𝘁𝗼𝘂𝗷𝗼𝘂𝗿𝘀 𝗹𝗮 𝗺𝗮𝗶𝗻 ?
→ Référentiel Externe + Procédures
Aujourd'hui : excellent exécutant stratégique. Défi : oser décider sans validation.

🪟 𝗩𝗼𝘂𝘀 𝗿𝗲̂𝘃𝗮𝘀𝘀𝗶𝗲𝘇 ?
→ Référentiel Interne + Options
Aujourd'hui : entrepreneur ou visionnaire. Défi : suivre un process quand nécessaire.

📖 𝗣𝗿𝗲𝗺𝗶𝗲𝗿 𝗮̀ 𝗳𝗶𝗻𝗶𝗿, 𝗽𝘂𝗶𝘀 𝗲𝗻𝗻𝘂𝘆𝗲́ ?
→ Aller vers + Global + Indépendant
Aujourd'hui : dirigeant qui voit loin mais délègue mal le détail.

🤝 𝗧𝗼𝘂𝗷𝗼𝘂𝗿𝘀 𝗮̀ 𝗮𝗶𝗱𝗲𝗿 ?
→ Scope Autre + Coopératif
Aujourd'hui : coach, RH ou facilitateur. Défi : ne pas vous oublier.

L'école n'en a valorisé qu'un seul.

Et si vos « défauts » scolaires étaient vos plus grandes forces ?

💬 Quel élève étiez-vous ? ♻️ Partagez.

#Leadership #DéveloppementPersonnel #Management #LABProfile #NLP #CODIR`,
  },
  {
    id: 10, series: "autorite", week: 4, day: "Lun",
    title: "Les patterns de l'Éducation nationale sont dans votre CODIR",
    fmtX: "Thread + offre", fmtLI: "Post texte + CTA fort",
    ctaX: "📩 DM diagnostic 30 min", ctaLI: "📩 Message pour diagnostic",
    x: `J'ai passé le programme de l'Éducation nationale au LAB Profile.

Les mêmes patterns dysfonctionnels que je retrouve dans 80% des CODIRs que j'accompagne. Thread ↓

---

→ Réactivité au lieu de vision (S'éloigner de dominant)
→ Dépendance aux benchmarks (Référentiel Externe)
→ Procédures rigides qui étouffent l'innovation
→ KPIs déconnectés de l'humain

---

La bonne nouvelle ? Ces patterns se reprogramment.

Chez NB NEXT STEP, nous aidons les CODIRs à :

✓ Identifier leurs patterns collectifs
✓ Comprendre pourquoi certaines décisions bloquent
✓ Créer une dynamique « Aller vers » durable

---

Votre CODIR a un profil LAB. Vous ne le connaissez pas encore.

Et c'est peut-être ce qui vous coûte le plus cher.

📩 DM pour un diagnostic gratuit de 30 min.

#LABProfile #CODIR #Performance #NBNextStep`,
    li: `Pendant 4 semaines, j'ai analysé le système éducatif français avec le LAB Profile.

Chaque pattern dysfonctionnel identifié, je le retrouve dans les CODIRs que j'accompagne. Systématiquement.

→ 𝗥𝗲́𝗮𝗰𝘁𝗶𝘃𝗶𝘁𝗲́ au lieu de vision
→ 𝗗𝗲́𝗽𝗲𝗻𝗱𝗮𝗻𝗰𝗲 𝗮𝘂𝘅 𝗯𝗲𝗻𝗰𝗵𝗺𝗮𝗿𝗸𝘀
→ 𝗣𝗿𝗼𝗰𝗲́𝗱𝘂𝗿𝗲𝘀 𝗿𝗶𝗴𝗶𝗱𝗲𝘀
→ 𝗞𝗣𝗜𝘀 𝗱𝗲́𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲́𝘀

Chez NB NEXT STEP, notre méthodologie en 4 étapes :

𝟭. Diagnostic LAB Profile collectif
𝟮. Analyse des patterns de groupe
𝟯. Langage commun
𝟰. Reprogrammation « Aller vers »

📩 Envoyez-moi un message pour un diagnostic exploratoire de 30 minutes — offert.

#CODIR #Leadership #Management #Performance #LABProfile #NLP #Consulting #NBNextStep`,
  },
  {
    id: 11, series: "autorite", week: 4, day: "Jeu",
    title: "Collectivités : votre équipe a un profil LAB",
    fmtX: "Thread", fmtLI: "Post texte — cible DGS/élus",
    ctaX: "📩 Diagnostic Cap Cohésion", ctaLI: "📩 Message + tag décideurs publics",
    x: `Les collectivités territoriales affrontent les mêmes défis que l'Éducation nationale.

Mêmes patterns. Mêmes blocages. Thread ↓

---

→ Des réunions où tout le monde parle mais personne ne décide
→ Des projets qui démarrent fort et s'enlisent
→ Des tensions entre élus, DGS et agents
→ Un sentiment de « on fait toujours pareil »

---

Pourquoi ? Parce que dans une équipe municipale :

— Profils « Aller vers » → les élus porteurs de projets
— Profils « S'éloigner de » → les juristes, les financiers
— Profils « Procédures » → les agents d'exécution
— Profils « Options » → les DGA innovants

---

Sans langage commun, ces profils se percutent.
Avec le LAB Profile, ils se complètent.

C'est ce que propose Cap Cohésion par NB NEXT STEP :

→ Cartographier les métaprogrammes collectifs
→ Créer un langage commun de décision
→ Transformer les tensions en complémentarités

📩 DM pour un diagnostic Cap Cohésion.

#CapCohésion #Collectivités #LABProfile #NBNextStep`,
    li: `Élus, DGS, DGA — ce post est pour vous.

Les collectivités territoriales présentent les mêmes patterns que le système éducatif analysé ces dernières semaines.

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

📩 Envoyez-moi un message pour échanger.

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

  // For X posts: split on "---" delimiter into thread tweets
  const getXThreadTweets = (text) => {
    const parts = text.split(/\n---\n/).map(p => p.trim()).filter(Boolean);
    if (parts.length > 1) return parts;
    // fallback: auto-split if single block > 280
    if (text.length > 280) return splitIntoTweets(text);
    return [text];
  };

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
      minHeight: "100dvh",
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
          11 posts • Threads 280 car. • Prêt à publier
        </p>
        <div style={{ display: "inline-flex", borderRadius: "10px", overflow: "hidden", border: "1px solid #2A3558" }}>
          {[{ id: "x", label: "𝕏 Twitter", c: "#C9A84C" }, { id: "linkedin", label: "in LinkedIn", c: "#0A66C2" }].map(pt => (
            <button key={pt.id} onClick={() => { setPlat(pt.id); setPostIdx(0); }}
              style={{
                padding: "10px 22px", border: "none", cursor: "pointer",
                fontSize: "14px", fontWeight: plat === pt.id ? "700" : "400",
                background: plat === pt.id ? pt.c : "transparent",
                color: plat === pt.id ? "#FFF" : "#6B7A99",
                fontFamily: "inherit", WebkitTapHighlightColor: "transparent",
                minHeight: "44px",
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
            ...pill(view === t.id, accent), minHeight: "44px", flex: 1,
          }}>{t.l}</button>
        ))}
      </div>

      {/* ═══ POSTS ═══ */}
      {view === "posts" && (
        <div style={{ padding: "14px" }}>
          {/* Series filter */}
          <div style={{ display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "8px", WebkitOverflowScrolling: "touch" }}>
            <button onClick={() => { setSeriesF("all"); setPostIdx(0); }}
              style={{ ...pill(seriesF === "all", accent), whiteSpace: "nowrap", fontSize: "12px", minHeight: "40px" }}>Tous</button>
            {SERIES.map(sr => (
              <button key={sr.id} onClick={() => { setSeriesF(sr.id); setPostIdx(0); }}
                style={{ ...pill(seriesF === sr.id, sr.color), whiteSpace: "nowrap", fontSize: "12px", minHeight: "40px" }}>{sr.name}</button>
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
                    fontFamily: "inherit",
                  }}>S{fp.week}·{fp.day}</button>
              );
            })}
          </div>

          {/* Post card */}
          {post && (() => {
            const sr = s(post.series);
            const isX = plat === "x";
            const content = isX ? post.x : post.li;
            const fmt = isX ? post.fmtX : post.fmtLI;
            const cta = isX ? post.ctaX : post.ctaLI;
            const tweets = isX ? getXThreadTweets(post.x) : null;
            const isThread = isX && tweets && tweets.length > 1;

            return (
              <div style={{ ...card, border: `1px solid ${sr.color}44` }}>
                {/* Header */}
                <div style={{ padding: "14px 16px", borderBottom: `1px solid ${sr.color}22`, background: `${sr.color}08` }}>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "6px" }}>
                    <span style={{ padding: "3px 8px", borderRadius: "6px", fontSize: "10px", background: sr.color + "22", color: sr.color }}>{sr.name}</span>
                    <span style={{ padding: "3px 8px", borderRadius: "6px", fontSize: "10px", background: accent + "22", color: accent }}>
                      {isX ? `𝕏 ${fmt}` : `in ${fmt}`}
                    </span>
                    {isThread && (
                      <span style={{ padding: "3px 8px", borderRadius: "6px", fontSize: "10px", background: "#22C55E22", color: "#22C55E" }}>
                        {tweets.length} tweets
                      </span>
                    )}
                  </div>
                  <h2 style={{ fontSize: "17px", color: "#FFF", margin: 0, fontWeight: "600", lineHeight: "1.3" }}>
                    {post.title}
                  </h2>
                </div>

                {/* Content */}
                <div style={{ maxHeight: "55vh", overflowY: "auto", WebkitOverflowScrolling: "touch" }}>
                  {isX && isThread ? (
                    /* THREAD VIEW — individual tweets with copy buttons */
                    <div style={{ padding: "12px" }}>
                      {tweets.map((tweet, i) => {
                        const tweetId = `${post.id}-t${i}`;
                        const charCount = tweet.length;
                        const isOver = charCount > 280;
                        return (
                          <div key={i} style={{
                            background: "#0D1220",
                            borderRadius: "10px",
                            padding: "14px",
                            marginBottom: "8px",
                            borderLeft: `3px solid ${i === 0 ? sr.color : "#2A3558"}`,
                          }}>
                            {/* Tweet header */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                              <span style={{
                                fontSize: "11px", fontWeight: "700",
                                color: i === 0 ? sr.color : "#6B7A99",
                              }}>
                                Tweet {i + 1}/{tweets.length}
                              </span>
                              <span style={{
                                fontSize: "10px",
                                color: isOver ? "#EF4444" : "#22C55E",
                                fontFamily: "monospace",
                              }}>
                                {charCount}/280
                              </span>
                            </div>

                            {/* Tweet content */}
                            <div style={{
                              fontSize: "14px", lineHeight: "1.6",
                              whiteSpace: "pre-line", color: "#D4D0C8",
                              marginBottom: "10px",
                            }}>{tweet}</div>

                            {/* Copy button */}
                            <button onClick={() => copy(tweet, tweetId)}
                              style={{
                                width: "100%", padding: "10px", borderRadius: "8px",
                                cursor: "pointer", fontSize: "12px", fontWeight: "600",
                                minHeight: "40px", fontFamily: "inherit",
                                background: copied === tweetId ? "#22C55E" : `${sr.color}22`,
                                color: copied === tweetId ? "#FFF" : sr.color,
                                border: `1px solid ${copied === tweetId ? "#22C55E" : sr.color + "44"}`,
                                WebkitTapHighlightColor: "transparent",
                              }}>
                              {copied === tweetId ? "✓ Copié !" : `📋 Copier tweet ${i + 1}/${tweets.length}`}
                            </button>
                          </div>
                        );
                      })}

                      {/* Copy all thread */}
                      <button onClick={() => {
                        const allText = tweets.map((t, i) => `[${i+1}/${tweets.length}]\n${t}`).join("\n\n---\n\n");
                        copy(allText, `${post.id}-all`);
                      }}
                        style={{
                          width: "100%", padding: "12px", borderRadius: "8px",
                          cursor: "pointer", fontSize: "13px", fontWeight: "700",
                          minHeight: "44px", fontFamily: "inherit",
                          background: copied === `${post.id}-all` ? "#22C55E" : accent,
                          color: "#FFF", border: "none",
                          WebkitTapHighlightColor: "transparent",
                          marginTop: "4px",
                        }}>
                        {copied === `${post.id}-all` ? "✓ Thread complet copié !" : `📋 Copier le thread complet (${tweets.length} tweets)`}
                      </button>
                    </div>
                  ) : (
                    /* SINGLE POST VIEW (LinkedIn or short X post) */
                    <div style={{
                      padding: "16px", fontSize: "14px", lineHeight: "1.75",
                      whiteSpace: "pre-line", color: "#D4D0C8",
                    }}>{content}</div>
                  )}
                </div>

                {/* Footer */}
                <div style={{
                  padding: "12px 16px", borderTop: `1px solid ${sr.color}22`, background: `${sr.color}06`,
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
                      }}>Version {plat === "x" ? "LinkedIn" : "X"}</button>
                    {!isThread && (
                      <button onClick={() => copy(content, post.id)}
                        style={{
                          flex: 1, padding: "12px", borderRadius: "8px", cursor: "pointer",
                          fontSize: "13px", fontWeight: "700", minHeight: "44px",
                          background: copied === post.id ? "#22C55E" : accent,
                          color: "#FFF", border: "none", fontFamily: "inherit",
                        }}>{copied === post.id ? "✓ Copié !" : "📋 Copier"}</button>
                    )}
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
          <div style={{ display: "flex", gap: "6px", marginBottom: "14px", justifyContent: "center" }}>
            {cal.map((w, i) => (
              <button key={i} onClick={() => setCalW(i)}
                style={{ ...pill(calW === i, accent), minHeight: "44px", flex: 1 }}>S{w.week}</button>
            ))}
          </div>
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
                    const tweets = plat === "x" ? getXThreadTweets(po.x) : null;
                    return (
                      <div key={j} onClick={() => { setView("posts"); setSeriesF("all"); setPostIdx(POSTS.findIndex(pp => pp.id === sl.id)); }}
                        style={{
                          display: "flex", alignItems: "center", gap: "10px",
                          padding: "12px", marginBottom: "6px",
                          background: "#0D1220", borderRadius: "10px",
                          borderLeft: `3px solid ${sr.color}`,
                          cursor: "pointer", minHeight: "44px",
                        }}>
                        <div style={{ minWidth: "50px", fontSize: "12px", fontWeight: "700", color: sr.color }}>{sl.d}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", color: "#FFF", fontWeight: "600", lineHeight: "1.3" }}>{po.title}</div>
                          <div style={{ fontSize: "11px", color: "#6B7A99", marginTop: "2px" }}>
                            {sr.name} • {plat === "x" ? po.fmtX : po.fmtLI}
                            {plat === "x" && tweets && tweets.length > 1 && ` • ${tweets.length} tweets`}
                            {sl.n && ` — ${sl.n}`}
                          </div>
                        </div>
                        <span style={{ color: "#4B5563" }}>→</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          {/* Cross view */}
          <div style={{ ...card, border: `1px solid ${accent}33` }}>
            <div style={{ padding: "14px 16px", borderBottom: "1px solid #1E2A45" }}>
              <h3 style={{ fontSize: "14px", color: accent, fontWeight: "600", margin: 0 }}>Vue croisée S{cal[calW].week}</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div style={{ padding: "12px", borderRight: "1px solid #1E2A45" }}>
                <div style={{ fontSize: "10px", color: "#C9A84C", letterSpacing: "2px", marginBottom: "8px" }}>𝕏 X</div>
                {CAL_X[calW].slots.map((sl, i) => (
                  <div key={i} style={{ padding: "4px 0", fontSize: "12px", color: "#8B9DC3" }}>
                    <strong>{sl.d}</strong> — {p(sl.id).fmtX}
                  </div>
                ))}
              </div>
              <div style={{ padding: "12px" }}>
                <div style={{ fontSize: "10px", color: "#0A66C2", letterSpacing: "2px", marginBottom: "8px" }}>in LI</div>
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
          <div style={{ ...card, border: `1px solid ${accent}44` }}>
            <div style={{ padding: "14px 16px", borderBottom: "1px solid #1E2A45" }}>
              <h3 style={{ fontSize: "15px", color: accent, fontWeight: "600", margin: 0 }}>
                Guide {plat === "x" ? "𝕏 X" : "in LinkedIn"}
              </h3>
            </div>
            <div style={{ padding: "14px 16px" }}>
              {plat === "x" && (
                <div style={{
                  padding: "10px 12px", marginBottom: "14px",
                  background: "#C9A84C11", borderRadius: "8px",
                  border: "1px solid #C9A84C33",
                  fontSize: "12px", color: "#C9A84C", lineHeight: "1.5",
                }}>
                  <strong>⚡ Comment poster un thread sur X (gratuit) :</strong><br/>
                  1. Ouvre x.com dans ton navigateur (pas l'appli)<br/>
                  2. Copie le Tweet 1 → colle → publie<br/>
                  3. Réponds à ton propre tweet avec le Tweet 2<br/>
                  4. Continue jusqu'au dernier tweet<br/>
                  5. Pour programmer : icône calendrier avant de publier
                </div>
              )}

              <div style={{ fontSize: "10px", color: "#6B7A99", letterSpacing: "2px", marginBottom: "6px" }}>HORAIRES</div>
              <div style={{ fontSize: "13px", color: "#D4D0C8", marginBottom: "14px" }}>
                {plat === "x" ? "Lun 7h30 • Mar-Jeu 12h-13h ou 18h-19h • Ven 8h • Sam 9h" : "Mar-Jeu 7h30-8h30 ou 12h-13h • Sam 9h-10h"}
              </div>

              <div style={{ fontSize: "10px", color: "#6B7A99", letterSpacing: "2px", marginBottom: "6px" }}>TACTIQUES</div>
              {(plat === "x" ? [
                "Répondre à chaque commentaire dans les 2 premières heures",
                "Quote-tweeter avec angle complémentaire 24h après",
                "Épingler le thread le plus performant",
                "Programmer via x.com (navigateur) → icône calendrier",
              ] : [
                "Répondre avec une question de suivi",
                "Republier avec commentaire ajouté 48h après",
                "Demander des partages explicitement (♻️)",
                "Sondages natifs pour les posts CAPSULE et MIROIR",
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

          {/* Funnel + KPIs */}
          <div style={card}>
            <div style={{ padding: "14px 16px", borderBottom: "1px solid #1E2A45" }}>
              <h3 style={{ fontSize: "15px", color: "#C9A84C", fontWeight: "600", margin: 0 }}>Entonnoir</h3>
            </div>
            <div style={{ padding: "10px" }}>
              {[
                { icon: "👁️", l: "Impressions", d: "Threads + Posts longs" },
                { icon: "💬", l: "Engagement", d: "Commentaires, RT, partages" },
                { icon: "➕", l: "Follow", d: "Contenu récurrent + valeur" },
                { icon: "📩", l: "DM", d: "CTA posts AUTORITÉ" },
                { icon: "🎯", l: "Diagnostic 30 min", d: "Qualification" },
                { icon: "🤝", l: "Client", d: "NB NEXT STEP / Cap Cohésion" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "8px 12px", marginBottom: "4px",
                  background: "#0D1220", borderRadius: "8px",
                }}>
                  <span style={{ fontSize: "16px" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: "13px", color: "#FFF", fontWeight: "600" }}>{item.l}</div>
                    <div style={{ fontSize: "11px", color: "#6B7A99" }}>{item.d}</div>
                  </div>
                </div>
              ))}
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
        <div style={{ fontSize: "8px", letterSpacing: "4px", color: "#C9A84C22", textTransform: "uppercase" }}>NB NEXT STEP</div>
      </div>
    </div>
  );
}
