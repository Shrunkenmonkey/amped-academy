# Amped Academy

A modern e-commerce platform for guitar learning tools, built with Next.js, Stripe, and Tailwind CSS.

## Features

- Modern, responsive design
- Stripe payment integration
- Shopping cart functionality
- Product catalog
- Social sharing
- Image optimization
- SEO friendly

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Stripe
- React Context API
- Lucide Icons

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Stripe account
- Vercel account (for deployment)

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## Getting Started

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

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel's project settings
4. Deploy!

## Stripe Integration

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Add the keys to your environment variables
4. Create products and prices in your Stripe Dashboard
5. Update the `stripePriceId` in the product data to match your Stripe prices

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 