# GitHub Pages Setup for Rental Map App

This document provides instructions for setting up this SvelteKit application on GitHub Pages.

## Prerequisites

1. A GitHub repository for your project
2. Firebase project with configuration values

## Setup Steps

### 1. Configure GitHub Repository Secrets

In your GitHub repository, go to Settings > Secrets and variables > Actions and add the following secrets:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

These values should come from your Firebase project configuration.

### 2. Update Repository Name in Configuration Files

If your repository name is not `rental-map`, you need to update the following files:

- `svelte.config.js`: Update the `base` path
  ```js
  paths: {
    base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
  }
  ```

- `static/404.html`: Update the repo variable
  ```js
  var repo = '/your-repo-name'; // Replace with your repo name
  ```

### 3. Push to GitHub and Deploy

1. Push your code to the main branch of your GitHub repository
2. GitHub Actions will automatically build and deploy your application
3. Visit `https://your-username.github.io/your-repo-name/` to see your deployed application

### 4. Enable GitHub Pages

In your GitHub repository:

1. Go to Settings > Pages
2. Set Source to "Deploy from a branch"
3. Select the "gh-pages" branch
4. Click Save

## Testing Locally

To test your build locally with the production configuration:

```bash
# Build with production environment
NODE_ENV=production npm run build

# Preview the build
npm run preview
```

## Troubleshooting

If you encounter issues:

1. Check if all Firebase environment secrets are correctly set in GitHub repository
2. Ensure the base path and repository names match in all configuration files
3. Check GitHub Actions logs for any build errors
4. Verify GitHub Pages is enabled and pointing to the correct branch 