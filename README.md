# Amped Academy Website

This repository contains the Amped Academy website built with Next.js.

## Deployment to Vercel

This project is configured for deployment to Vercel via GitHub. Follow these steps to deploy:

### Deploying with GitHub

1. Ensure your code is pushed to a GitHub repository:
   ```
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.

3. Click "Add New" > "Project" and select your GitHub repository.

4. Vercel will automatically detect that this is a Next.js project.

5. Configure your project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: amped-academy/.next

6. Click "Deploy" and Vercel will build and deploy your application.

### Automatic Deployments

With the GitHub integration enabled in `vercel.json`, any commits to your main branch will trigger automatic deployments.

## Local Development

```
npm run dev
```

## Building for Production

```
npm run build
```

## Running Production Build

```
npm run start
``` 