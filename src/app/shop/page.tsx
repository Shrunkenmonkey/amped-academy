import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle, ShoppingCart, Play, Zap, Users } from 'lucide-react';
import Image from "next/image";
import BackgroundImage from "@/components/BackgroundImage";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Lee Fretmap Stickers | Guitar Learning Tools | Amped Academy",
  description: "Unleash your inner guitar hero with Lee Fretmap Stickers. Learn guitar faster, create music confidently, and innovate your playing with our color-coded fretboard stickers.",
  keywords: "Lee Fretmap Stickers, guitar learning tools, fretboard stickers, learn guitar faster, color-coded guitar stickers",
};

// Text shadow styles for glow effect
const TEXT_STYLES = {
  shadowHeavy: { 
    textShadow: "0 0 20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 0, 0, 0.5)"
  },
  shadowMedium: { 
    textShadow: "0 0 15px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.7), 0 0 45px rgba(0, 0, 0, 0.6)"
  }
};

// Features of the Lee Fretmap Stickers
const FEATURES = [
  {
    title: "Ultra-Durable Lamination",
    description: "Practice for hours without wear and tear.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    title: "Precision Color-Coding",
    description: "Instantly recognize note relationships, deepening your understanding of music theory.",
    icon: <Star className="h-6 w-6" />,
  },
  {
    title: "Removable & Safe",
    description: "Crafted with a special adhesive that makes peeling them off a breeze, leaving behind almost no mess.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    title: "Full Fretboard Coverage",
    description: "Confidently navigate all positions, unlocking new musical possibilities.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    title: "Visual Learning System",
    description: "Color-coded patterns help you learn faster by engaging your visual memory.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Progress Tracking",
    description: "See real improvement as you master each section of the fretboard.",
    icon: <Star className="h-6 w-6" />,
  },
  {
    title: "Enhanced Practice",
    description: "More enjoyable practice sessions with clear visual feedback.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    title: "Confidence Builder",
    description: "Build confidence as you gain mastery over the entire fretboard.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Color-Coded Clarity",
    description: "Each note has its own color, making it easy to see patterns and relationships across the fretboard.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    title: "Easy to Apply",
    description: "Precision-cut stickers stick perfectly to your fretboard and stay in place.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    title: "Learn Music Theory",
    description: "The Fretmap eBook will show you how to unlock the scales and chords.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    title: "Fits all Guitars",
    description: "Available in Acoustic, Electric, Classical, or Bass guitar options.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
];

// Testimonials
const TESTIMONIALS = [
  {
    name: "Sarah J.",
    title: "Beginner Guitarist",
    text: "These stickers were a game changer for me! As a visual learner, I was struggling with traditional methods, but the color-coding made everything click.",
  },
  {
    name: "Michael T.",
    title: "Self-Taught Musician",
    text: "I was skeptical at first, but these stickers helped me make connections I was missing. The colors make music theory much more intuitive!",
  },
  {
    name: "John Lewis",
    title: "Guitar enthusiast",
    text: "Learning music theory took my guitar playing to the next level. It helped me break through the intermediate hump, and now I can improvise with ease. I feel more confident and free when I play!"
  }
];

// FAQs
const FAQS = [
  {
    question: "How Long Do the Stickers Last?",
    answer: "Get ready to unleash some sticker sorcery! Our premium vinyl stickers are not only top-tier, but they come with a sleek laminated layer—think of it as a superhero cape for your gear, fending off wear and tear like a pro. And the best part? Your fingers never even get to touch the printed surface—talk about VIP treatment! These stickers are designed to outlast the competition. But hey, for the smoothest cleanup, we recommend rocking them on your guitar for no more than 6 months."
  },
  {
    question: "Will they leave residue on my guitar?",
    answer: "Our stickers are like magic—crafted with a special adhesive that makes peeling them off a breeze, leaving behind almost no mess. Cleanup? Practically nonexistent! But here's the deal: don't let them bake in direct sunlight or roast in high heat. Then again, that's a golden rule for any musical instrument, not just our awesome stickers."
  },
  {
    question: "Do they work for left-handed guitars?",
    answer: "Absolutely! They're totally interchangeable and work like a charm on both right-handed AND left-handed guitars. So whether you're strumming with your left or right hand, they've got you covered!"
  },
  {
    question: "Are they easy to apply?",
    answer: "Absolutely! Most users breeze through it in under 15 minutes, and we've got a video to show you the ropes—no stress, just success!"
  }
];

// Product options
const PRODUCTS = [
  {
    id: "price_1R70uCP5sBTJ16iOrCBTKMxq",
    name: "Lee Fretmap for Electric and Acoustic Guitar",
    price: 24.99,
    image: "/images/Product images/products jpg 400px/guitar jpg 400.jpg",
    webpImage: "/images/Product images/products webp 400px/guitar webp 400.webp",
    popular: true,
  },
  {
    id: "price_YOUR_ELECTRIC_PENTATONIC_PRICE_ID",
    name: "Lee Fretmap for Electric Guitar - Pentatonic Blues",
    price: 24.99,
    image: "/images/Product images/products jpg 400px/guitar pentatonic blues jpg 400.jpg",
    webpImage: "/images/Product images/products webp 400px/guitar pentatonic blues webp 400.webp",
    popular: false,
  },
  {
    id: "price_YOUR_CLASSICAL_PRICE_ID",
    name: "Lee Fretmap for Classical Nylon String Guitar",
    price: 24.99,
    image: "/images/Product images/products jpg 400px/guitar classical nylon jpg 400.jpg",
    webpImage: "/images/Product images/products webp 400px/guitar classical nylon webp 400.webp",
    popular: false,
  },
  {
    id: "lee-fretmap-bass",
    name: "Lee Fretmap for Bass Guitar",
    price: 24.99,
    image: "/images/Product images/products jpg 400px/bass jpg 400.jpg",
    webpImage: "/images/Product images/products webp 400px/bass webp 400.webp",
    popular: false,
  },
  {
    id: "lee-fretmap-harmonic-minor",
    name: "Lee Fretmap for Guitar - Harmonic Minor",
    price: 24.99,
    image: "/images/Product images/products jpg 400px/guitar harmonic minor jpg 400.jpg",
    webpImage: "/images/Product images/products webp 400px/guitar harmonic minor webp 400.webp",
    popular: false,
  },
  {
    id: "lee-fretmap-bass-pentatonic",
    name: "Lee Fretmap for Bass - Pentatonic Blues",
    price: 24.99,
    image: "/images/Product images/products jpg 400px/bass pentatonic blues jpg 400.jpg",
    webpImage: "/images/Product images/products webp 400px/bass pentatonic blues webp 400.webp",
    popular: false,
  },
  {
    id: "lee-fretmap-piano",
    name: "Lee Fretmap for Piano/Keyboard",
    price: 24.99,
    image: "/images/Product images/products jpg 400px/piano keyboard jpg 400.jpg",
    webpImage: "/images/Product images/products webp 400px/piano keyboard webp 400.webp",
    popular: false,
  },
  {
    id: "lee-fretmap-ukulele",
    name: "Lee Fretmap for Ukulele",
    price: 24.99,
    image: "/images/Product images/products jpg 400px/ukulele jpg 400.jpg",
    webpImage: "/images/Product images/products webp 400px/ukulele webp 400.webp",
    popular: false,
  },
];

// Define Types
type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Testimonial = {
  name: string;
  title: string;
  text: string;
};

type Faq = {
  question: string;
  answer: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  webpImage: string;
  popular: boolean;
};

// Component for Feature Cards
function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="text-blue-500 mb-4 text-center">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 text-center">{feature.title}</h3>
      <p className="text-gray-300 text-center">{feature.description}</p>
    </div>
  );
}

// Component for Testimonial Cards
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex text-yellow-400 mb-3 justify-center">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" />
        ))}
      </div>
      <p className="text-white mb-6 text-center">"{testimonial.text}"</p>
      <div className="flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-gray-600 mr-4"></div>
        <div>
          <p className="text-white font-medium">{testimonial.name}</p>
          <p className="text-gray-400 text-sm">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}

// Component for FAQ Items
function FaqItem({ faq }: { faq: Faq }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-bold text-white mb-3 text-center">{faq.question}</h3>
      <p className="text-gray-300 text-center">{faq.answer}</p>
    </div>
  );
}

// Main Page Component
export default function ShopPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative text-white py-8">
        <div className="absolute inset-0 z-0 overflow-hidden bg-indigo-900">
          <BackgroundImage 
            src="/images/backgrounds/lightning-background jpg.jpg"
            webpSrc="/images/backgrounds/lightning-background webp.webp"
            alt="Lightning background"
            priority={true}
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white" style={TEXT_STYLES.shadowHeavy}>
              Shop
            </h1>
            <p className="text-3xl md:text-4xl text-white" style={TEXT_STYLES.shadowMedium}>
              Enhance your musical journey
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Product Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Fretmap Stickers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the perfect set for your instrument and learning style. All stickers include free access to our online beginner tutorials, ebook and backing tracks.
            </p>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Features Section */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Why Choose Lee Fretmap Stickers?</h2>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Our color-coded stickers accelerate learning by making music theory visual and intuitive
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURES.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </section>
          
          {/* Testimonials */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">What Our Customers Say</h2>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied guitarists who have transformed their playing
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              </p>
            </div>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {FAQS.map((faq, index) => (
                <FaqItem key={index} faq={faq} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 