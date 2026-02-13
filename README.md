# Stratégie LAB Profile — NB NEXT STEP

Dashboard éditorial dual platform (X + LinkedIn) pour la stratégie de contenu basée sur l'analyse LAB Profile de l'Éducation Nationale.

## Déploiement sur Vercel

### Étape 1 — Push sur GitHub
```bash
cd strategie-labprofile
git init
git add .
git commit -m "Initial commit - Stratégie LAB Profile"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/strategie-labprofile.git
git push -u origin main
```

### Étape 2 — Déployer sur Vercel
1. Va sur [vercel.com](https://vercel.com)
2. Clique **"Add New Project"**
3. Importe ton repo GitHub `strategie-labprofile`
4. Framework Preset : **Next.js** (détecté automatiquement)
5. Clique **"Deploy"**
6. Ton app est en ligne en ~60 secondes ! 🚀

### Installer comme app sur iPhone
Une fois déployé :
1. Ouvre l'URL Vercel dans Safari
2. Tape l'icône **Partager** (carré avec flèche)
3. Choisis **"Sur l'écran d'accueil"**
4. L'app apparaît comme une vraie app sur ton téléphone !

## Fonctionnalités
- 11 posts × 2 versions (X + LinkedIn)
- Toggle instantané entre les plateformes
- Bouton "Copier" sur chaque post
- Calendrier éditorial 4 semaines
- Vue croisée X / LinkedIn
- Guide de publication + KPIs
- 100% optimisé mobile
- PWA installable

## Stack
- Next.js 14
- React 18
- Pas de dépendances CSS externes
