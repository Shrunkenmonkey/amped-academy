'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Trash2, ShoppingCart, CreditCard } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import BackgroundImage from '@/components/BackgroundImage';
import { loadStripe } from '@stripe/stripe-js';
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

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stripe, setStripe] = useState<any>(null);

  useEffect(() => {
    // Initialize Stripe
    const initStripe = async () => {
      try {
        const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
        
        if (!publishableKey) {
          console.error('Stripe publishable key is missing');
          setError('Payment system is not properly configured. Please try again later.');
          return;
        }
        
        const stripeInstance = await loadStripe(publishableKey);
        
        if (!stripeInstance) {
          console.error('Failed to initialize Stripe');
          setError('Failed to initialize payment system. Please try again later.');
          return;
        }
        
        setStripe(stripeInstance);
      } catch (err) {
        console.error('Error initializing Stripe:', err);
        setError('Error initializing payment system. Please try again later.');
      }
    };

    initStripe();
  }, []);

  // Handle checkout button
  const handleCheckout = async () => {
    if (!stripe) {
      setError('Payment system is not ready. Please try again in a moment.');
      return;
    }

    if (!items || items.length === 0) {
      setError('Your cart is empty. Please add items before checking out.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

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

      let data;
      try {
        data = JSON.parse(await response.text());
      } catch (e) {
        throw new Error('Invalid response from server');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      const { sessionId } = data;

      if (!sessionId) {
        throw new Error('No session ID received from server');
      }

      // Redirect to Stripe Checkout
      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
        mode: 'payment',
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred during checkout');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <Hero 
        title="Your Cart"
        subtitle="Review your selections"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link 
            href="/guitar-learning-tools" 
            className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="flex justify-center mb-6">
              <ShoppingCart className="h-16 w-16 text-gray-600" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link 
              href="/guitar-learning-tools" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-lg inline-block"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-semibold mb-4">Cart Items ({totalItems})</h2>
              
              {items.map((item) => (
                <div key={item.id} className="bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-24 h-24 bg-gray-700 rounded flex-shrink-0 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-contain p-2"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-blue-400 font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded-md flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="mx-2 w-6 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded-md flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-300"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Order Summary */}
            <div className="bg-gray-800 rounded-lg p-6 h-fit">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-300">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-gray-700 pt-3 mt-3 flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-xl">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="coupon" className="block text-sm font-medium text-gray-300 mb-2">
                  Coupon Code
                </label>
                <div className="flex">
                  <input 
                    type="text" 
                    id="coupon"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-grow px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter code"
                  />
                  <button className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-r-md">
                    Apply
                  </button>
                </div>
              </div>
              
              {error && (
                <div className="mb-4 p-4 bg-red-900 text-white rounded-md text-sm">
                  {error}
                </div>
              )}
              
              <button 
                onClick={handleCheckout}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  'Processing...'
                ) : (
                  <>
                    <CreditCard className="h-5 w-5" />
                    Proceed to Checkout
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 