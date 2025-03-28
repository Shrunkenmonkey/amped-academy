'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import BackgroundImage from "@/components/BackgroundImage";
import { CheckCircle } from 'lucide-react';
import Hero from '@/components/Hero';

// Text shadow styles for glow effect
const TEXT_STYLES = {
  shadowHeavy: { 
    textShadow: "0 0 20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 0, 0, 0.5)"
  },
  shadowMedium: { 
    textShadow: "0 0 15px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.7), 0 0 45px rgba(0, 0, 0, 0.6)"
  }
};

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-2xl">Loading...</div>
    </div>}>
      <SuccessContent />
    </Suspense>
  );
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      // Clear the cart on successful payment
      clearCart();
    }
  }, [sessionId, clearCart]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero 
        title="Thank You!"
        subtitle="Your order has been confirmed"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Payment Successful</h2>
          <p className="text-gray-300 mb-8">
            Thank you for your purchase! You will receive a confirmation email shortly.
          </p>
          <a
            href="/guitar-learning-tools"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors duration-200"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
} 