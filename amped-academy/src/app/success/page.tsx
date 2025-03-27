'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import BackgroundImage from '@/components/BackgroundImage';
import { TEXT_STYLES } from '@/constants/styles';

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear the cart when the success page is loaded
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <BackgroundImage 
        src="/images/backgrounds/lightning-background-jpg.jpg"
        webpSrc="/images/backgrounds/lightning-background-webp.webp"
        alt="Lightning background"
        priority={true}
      />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4" style={TEXT_STYLES.shadowHeavy}>
            Thank You for Your Purchase!
          </h1>
          <p className="text-xl mb-8" style={TEXT_STYLES.shadowMedium}>
            Your order has been successfully processed.
          </p>
          <Link 
            href="/shop"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
} 