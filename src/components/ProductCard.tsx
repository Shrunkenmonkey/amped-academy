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
    router.push('/cart'); // Navigate to cart page after adding item
  };

  // Get description based on product ID
  const getDescription = (productId: string) => {
    // Special descriptions for specific products
    const descriptions: { [key: string]: string } = {
      "price_1R70uCP5sBTJ16iOrCBTKMxq": "This is the sticker set to get for use with the videos and ebook.", // Product 1
      "price_1R7FRZP5sBTJ16iOa9ChfuWG": "This is the sticker set to get for use with the videos and ebook.", // Product 3
      "price_1R7FVaP5sBTJ16iOGhAuuLav": "For more advanced players looking to take their playing to the next level", // Product 4 (Harmonic Minor)
      "price_1R7FTfP5sBTJ16iOcB7zKC39": "This is the sticker set to get for use with the videos and ebook.", // Product 5 (Bass Guitar)
      "price_1R7FYFP5sBTJ16iOSWuvAErj": "This is the sticker set to get for use with the videos and ebook." // Product 8
    };

    return descriptions[productId] || "Perfect for visual learners looking to master the fretboard quickly.";
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <div className="relative">
        <Link href={`/shop/product/${product.id}`} className="block">
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
        </Link>
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
        <p className="text-gray-300 mb-4 text-center">{getDescription(product.id)}</p>
        <div className="flex space-x-3">
          <Link 
            href={`/shop/product/${product.id}`}
            className="flex-1 bg-transparent border border-blue-600 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-center transition-colors duration-200"
          >
            View Details
          </Link>
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
    </div>
  );
}

export const ProductCard = memo(ProductCardComponent); 