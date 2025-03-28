'use client';

import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import BackgroundImage from "@/components/BackgroundImage";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stripe, setStripe] = useState<any>(null);

  useEffect(() => {
    // Initialize Stripe
    const initStripe = async () => {
      try {
        console.log('Initializing Stripe...');
        const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
        console.log('Publishable key exists:', !!publishableKey);
        console.log('Publishable key length:', publishableKey?.length);
        
        if (!publishableKey) {
          console.error('Stripe publishable key is missing');
          setError('Payment system is not properly configured. Please try again later.');
          return;
        }
        
        console.log('Loading Stripe instance...');
        const stripeInstance = await loadStripe(publishableKey);
        console.log('Stripe instance loaded:', !!stripeInstance);
        
        if (!stripeInstance) {
          console.error('Failed to initialize Stripe');
          setError('Failed to initialize payment system. Please try again later.');
          return;
        }
        
        setStripe(stripeInstance);
        console.log('Stripe initialized successfully');
      } catch (err) {
        console.error('Error initializing Stripe:', err);
        setError('Error initializing payment system. Please try again later.');
      }
    };

    initStripe();
  }, []);

  const handleCheckout = async () => {
    console.log('Checkout button clicked');
    console.log('Stripe instance exists:', !!stripe);
    console.log('Cart items:', items);
    
    if (!stripe) {
      console.error('Stripe not initialized');
      setError('Payment system is not ready. Please try again in a moment.');
      return;
    }

    if (!items || items.length === 0) {
      console.error('No items in cart');
      setError('Your cart is empty. Please add items before checking out.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      console.log('Creating checkout session with items:', items);

      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: items.map(item => ({
            id: item.id,
            quantity: item.quantity,
          })),
        }),
      });

      console.log('Checkout session response status:', response.status);
      const responseText = await response.text();
      console.log('Checkout session response text:', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        console.error('Failed to parse response as JSON:', e);
        throw new Error('Invalid response from server');
      }

      if (!response.ok) {
        console.error('Checkout session error:', data);
        throw new Error(data.error || 'Failed to create checkout session');
      }

      console.log('Checkout session created:', data);

      const { sessionId } = data;

      if (!sessionId) {
        throw new Error('No session ID received from server');
      }

      // Redirect to Stripe Checkout
      console.log('Redirecting to Stripe Checkout with session:', sessionId);
      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
        mode: 'payment',
      });

      if (stripeError) {
        console.error('Stripe redirect error:', stripeError);
        throw new Error(stripeError.message);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred during checkout');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-300">Add some products to your cart before checking out.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="relative text-white py-8">
        <div className="absolute inset-0 z-0 overflow-hidden bg-indigo-900">
          <BackgroundImage 
            src="/images/backgrounds/lightning-background-jpg.jpg"
            webpSrc="/images/backgrounds/lightning-background-webp.webp"
            alt="Lightning background"
            priority={true}
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Checkout
            </h1>
            <p className="text-3xl md:text-4xl text-white">
              Complete your purchase
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-700 pb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain bg-gray-700 rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-300">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <p className="text-sm text-gray-300">${item.price} each</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-gray-700 pt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-semibold">Total</span>
              <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
            </div>

            {error && (
              <div className="mb-4 p-4 bg-red-900 text-white rounded-md">
                {error}
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Proceed to Payment'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 