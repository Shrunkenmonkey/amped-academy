'use client';

import { memo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  webpImage: string;
  popular: boolean;
};

type ProductCardProps = {
  product: Product;
};

function ProductCardComponent({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent navigation from the Link
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    router.push('/cart'); // Navigate to cart page
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <Link 
        href={`/shop/product/${product.id}`}
        className="block"
      >
        <div className="relative">
          <div className="relative w-full pt-[75%]">
            <picture>
              <source 
                srcSet={product.webpImage} 
                type="image/webp"
              />
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-contain bg-gray-700 p-2"
              />
            </picture>
          </div>
          {product.popular && (
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
              Most Popular
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 text-center">{product.name}</h3>
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-white">${product.price}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-gray-300 mb-4 text-center">
            {product.id === "lee-fretmap-piano" 
              ? "Perfect for visual learners looking to master the keyboard quickly."
              : product.id === "lee-fretmap-harmonic-minor"
              ? "For more advanced players looking to take their ideas to the next level."
              : product.id === "lee-fretmap-electric" || product.id === "lee-fretmap-bass-pentatonic"
              ? "Includes the \"blue\" note to really spice up blues improvisations."
              : "This is the starter set for use with the video lessons and ebook."}
          </p>
          <div className="flex space-x-3">
            <div 
              className="flex-1 bg-transparent border border-blue-600 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-center transition-colors duration-200"
            >
              View Details
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export const ProductCard = memo(ProductCardComponent); 