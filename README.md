# Amped Academy Website

A modern e-commerce and learning platform for guitar enthusiasts, built with Next.js 14.

## Features

- 🎸 Interactive guitar learning platform
- 🛍️ E-commerce functionality for Fretmap products
- 🎥 Video lessons and backing tracks
- 🎨 Modern, responsive design
- 🔒 Secure shopping cart
- 🎯 SEO optimized

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Lucide Icons
- YouTube API Integration

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
cd amped-academy
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
amped-academy/
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable components
│   ├── constants/     # Constants and configurations
│   └── context/       # React context providers
├── public/            # Static assets
└── package.json       # Project dependencies
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

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