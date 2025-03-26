# Amped Academy

A Next.js-based web application for guitar learning and music education.

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/amped-academy.git
cd amped-academy
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel
4. Deploy!

### Environment Variables

The following environment variables need to be set in Vercel:

- `NEXT_PUBLIC_BASE_URL`: Your production URL
- `NEXT_PUBLIC_API_URL`: Your API URL

## Features

- Responsive design
- SEO optimized
- Image optimization
- Performance monitoring
- Analytics integration

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Vercel Analytics
- Vercel Speed Insights

## License

This project is private and confidential.

## Project Structure

- `/src/app/` - Main application pages using Next.js App Router
  - `/shop/` - E-commerce section for music learning products
  - `/videos/` - Video lessons section with categories and video player
- `/src/components/` - Reusable UI components
- `/public/` - Static assets and images

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

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
