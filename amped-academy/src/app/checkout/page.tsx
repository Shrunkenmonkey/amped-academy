'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import BackgroundImage from '@/components/BackgroundImage';
import { TEXT_STYLES, SECTION_STYLES, CONTAINER_STYLES, CARD_STYLES } from '@/constants/styles';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Here you would typically integrate with your payment processor
      // For now, we'll simulate a successful payment
      await new Promise(resolve => setTimeout(resolve, 2000));
      clearCart();
      router.push('/success');
    } catch (error) {
      console.error('Checkout failed:', error);
      router.push('/cancel');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <BackgroundImage 
        src="/images/backgrounds/lightning-background-jpg.jpg"
        webpSrc="/images/backgrounds/lightning-background-webp.webp"
        alt="Lightning background"
        priority={true}
      />
      <div className={`relative z-10 ${SECTION_STYLES.section}`}>
        <div className={CONTAINER_STYLES.base}>
          <div className={CARD_STYLES.base}>
            <h1 className="text-3xl font-bold mb-8" style={TEXT_STYLES.shadowHeavy}>
              Checkout
            </h1>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4" style={TEXT_STYLES.shadowMedium}>
                  Order Summary
                </h2>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>{item.name} x {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-700 pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'Proceed to Payment'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 