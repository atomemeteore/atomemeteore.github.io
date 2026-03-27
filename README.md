# Mon Profil GitHub

Page web présentant mon profil GitHub et mes repositories.

## 🚀 Déploiement sur GitHub Pages

### Étapes de configuration

1. **Créer un nouveau repository sur GitHub**
   - Nommez-le par exemple `github-profile` ou `portfolio`
   - Le repository peut être public ou privé

2. **Pousser le code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/atomemeteore/VOTRE-REPO.git
   git push -u origin main
   ```

3. **Activer GitHub Pages**
   - Allez dans Settings > Pages de votre repository
   - Dans "Source", sélectionnez "GitHub Actions"
   - Le workflow se déclenchera automatiquement

4. **Accéder à votre site**
   - Après le déploiement (2-3 minutes), votre site sera disponible à :
   - `https://atomemeteore.github.io/VOTRE-REPO/`

## 📦 Installation locale

```bash
# Installer les dépendances (choisir un gestionnaire)
npm install
# ou
pnpm install
# ou
yarn install

# Lancer en développement
npm run dev    # ou pnpm dev / yarn dev

# Build de production
npm run build  # ou pnpm build / yarn build
```

Le serveur de développement sera accessible sur `http://localhost:5173`

## 🛠️ Technologies utilisées

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui components
- GitHub API

## 📝 Personnalisation

Pour changer le nom d'utilisateur GitHub affiché, modifiez la ligne suivante dans `/src/app/App.tsx` :

```typescript
const githubUsername = 'atomemeteore'; // Changez ici
```

## 📄 License

Ce projet est libre d'utilisation.