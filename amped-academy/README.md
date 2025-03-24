# Amped Academy

A modern web platform for music education, built with Next.js and React.

## Features

- **Video Lessons**: Browse and watch video lessons categorized by skill level
- **Shop**: Purchase music learning tools like Lee Fretmap Stickers
- **Responsive Design**: Optimized for all devices - mobile, tablet, and desktop
- **YouTube Integration**: Watch embedded YouTube videos directly on the platform

## Project Structure

- `/src/app/` - Main application pages using Next.js App Router
  - `/shop/` - E-commerce section for music learning products
  - `/videos/` - Video lessons section with categories and video player
- `/src/components/` - Reusable UI components
- `/public/` - Static assets and images

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **React**: Frontend UI library
- **TypeScript**: Static type-checking
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Beautiful icon set

## Code Quality

The codebase has been optimized with:
- Reusable component extraction
- TypeScript type definitions
- Consistent naming conventions
- Clean code organization

## Deployment

The site is configured for deployment to any platform that supports Next.js. For production deployment:

```bash
npm run build
npm start
```

## Directory Structure

```
amped-academy/
├── public/           # Static assets
├── src/
│   ├── app/          # Pages using App Router
│   ├── components/   # Shared UI components
│   └── types/        # TypeScript type definitions
├── next.config.js    # Next.js configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
