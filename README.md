# Amped Academy

A modern e-commerce and learning platform for guitar enthusiasts, built with Next.js 14.

## Features

- 🎸 Interactive guitar learning platform
- 🛍️ E-commerce functionality for Fretmap products
- 🎥 Video lessons and backing tracks
- 🎨 Modern, responsive design
- 🔒 Secure shopping cart with Stripe integration
- 🎯 SEO optimized
- 📊 Analytics integration
- ⚡ Performance monitoring

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Stripe Payments
- Vercel Analytics
- Vercel Speed Insights
- Lucide Icons
- YouTube API Integration

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd amped-academy
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```bash
cp .env.example .env.local
```

Required environment variables:
```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
amped-academy/
├── src/
│   ├── app/           # Next.js app router pages
│   │   ├── shop/     # E-commerce section
│   │   ├── videos/   # Video lessons section
│   │   └── api/      # API routes
│   ├── components/    # Reusable UI components
│   ├── constants/     # Constants and configurations
│   ├── context/      # React context providers
│   └── lib/          # Utility functions and services
├── public/           # Static assets
├── next.config.js    # Next.js configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel:
   - `NEXT_PUBLIC_BASE_URL`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is private and confidential.
