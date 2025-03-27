'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Star, ShoppingCart, Share2, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BackgroundImage from '@/components/BackgroundImage';
import { useCart } from '@/context/CartContext';

// Product data (same as in shop/page.tsx)
const PRODUCTS = [
  {
    id: "lee-fretmap-acoustic",
    name: "Lee Fretmap for Electric and Acoustic Guitar",
    description: "The Lee Fretmap system is a revolutionary approach to learning the fretboard, designed by musicians for musicians. Each sticker is precisely color-coded to help you visually understand relationships between notes, scales, and chords.\n\nOur stickers are made from high-quality, durable materials that won't damage your instrument and can be easily removed.\n\nWhen you purchase a Lee Fretmap set, you'll also receive access to our online learning resources, including video tutorials, backing tracks and practice exercises designed to help you make the most of your Fretmap stickers.",
    price: 24.99,
    stripePriceId: "price_1R70uCP5sBTJ16iOrCBTKMxq",
    image: "/images/product-images/products-jpg-400px/guitar-jpg-400.jpg",
    webpImage: "/images/product-images/products-webp-400px/guitar-webp-400.webp",
    highResImage: "/images/product-images/products-jpg-800px/guitar-jpg-800.jpg",
    highResWebpImage: "/images/product-images/products-webp-800px/guitar-webp-800.webp",
    popular: true,
    features: [
      "Perfect for electric and acoustic guitars",
      "Color-coded for easy note recognition",
      "Includes free online tutorials",
      "Durable, long-lasting material",
      "Easy to apply and remove"
    ]
  },
  {
    id: "lee-fretmap-electric",
    name: "Lee Fretmap for Electric Guitar - Pentatonic Blues",
    description: "The Lee Fretmap system is a revolutionary approach to learning the fretboard, designed by musicians for musicians. Each sticker is precisely color-coded to help you visually understand relationships between notes, scales, and chords.\n\nOur stickers are made from high-quality, durable materials that won't damage your instrument and can be easily removed.\n\nWhen you purchase a Lee Fretmap set, you'll also receive access to our online learning resources, including video tutorials, backing tracks and practice exercises designed to help you make the most of your Fretmap stickers.",
    price: 24.99,
    stripePriceId: "price_1R70uCP5sBTJ16iOrCBTKMxq",
    image: "/images/product-images/products-jpg-400px/guitar-pentatonic-blues-jpg-400.jpg",
    webpImage: "/images/product-images/products-webp-400px/guitar-pentatonic-blues-webp-400.webp",
    highResImage: "/images/product-images/products-jpg-800px/guitar-pentatonic-blues-jpg-800.jpg",
    highResWebpImage: "/images/product-images/products-webp-800px/guitar-pentatonic-blues-webp-800.webp",
    popular: false,
    features: [
      "Designed for electric guitars",
      "Focuses on pentatonic scales",
      "Perfect for blues and rock",
      "Includes scale patterns",
      "Easy to follow visual guide"
    ]
  },
  {
    id: "lee-fretmap-classical",
    name: "Lee Fretmap for Classical Nylon String Guitar",
    description: "The Lee Fretmap system is a revolutionary approach to learning the fretboard, designed by musicians for musicians. Each sticker is precisely color-coded to help you visually understand relationships between notes, scales, and chords.\n\nOur stickers are made from high-quality, durable materials that won't damage your instrument and can be easily removed.\n\nWhen you purchase a Lee Fretmap set, you'll also receive access to our online learning resources, including video tutorials, backing tracks and practice exercises designed to help you make the most of your Fretmap stickers.",
    price: 24.99,
    image: "/images/product-images/products-jpg-400px/guitar-classical-nylon-jpg-400.jpg",
    webpImage: "/images/product-images/products-webp-400px/guitar-classical-nylon-webp-400.webp",
    highResImage: "/images/product-images/products-jpg-800px/guitar-classical-nylon-jpg-800.jpg",
    highResWebpImage: "/images/product-images/products-webp-800px/guitar-classical-nylon-webp-800.webp",
    popular: false,
    features: [
      "Perfect for classical guitars",
      "Nylon string compatible",
      "Classical music focused",
      "Includes finger positions",
      "Durable material"
    ]
  },
  {
    id: "lee-fretmap-bass",
    name: "Lee Fretmap for Bass Guitar",
    description: "The Lee Fretmap system is a revolutionary approach to learning the fretboard, designed by musicians for musicians. Each sticker is precisely color-coded to help you visually understand relationships between notes, scales, and chords.\n\nOur stickers are made from high-quality, durable materials that won't damage your instrument and can be easily removed.\n\nWhen you purchase a Lee Fretmap set, you'll also receive access to our online learning resources, including video tutorials, backing tracks and practice exercises designed to help you make the most of your Fretmap stickers.",
    price: 24.99,
    image: "/images/product-images/products-jpg-400px/bass-jpg-400.jpg",
    webpImage: "/images/product-images/products-webp-400px/bass-webp-400.webp",
    highResImage: "/images/product-images/products-jpg-800px/bass-jpg-800.jpg",
    highResWebpImage: "/images/product-images/products-webp-800px/bass-webp-800.webp",
    popular: false,
    features: [
      "Bass-specific design",
      "Fits all 4 string basses",
      "Focuses on bass patterns",
      "Perfect for all bass styles"
    ]
  },
  {
    id: "lee-fretmap-harmonic-minor",
    name: "Lee Fretmap for Guitar - Harmonic Minor",
    description: "The Lee Fretmap system is a revolutionary approach to learning the fretboard, designed by musicians for musicians. Each sticker is precisely color-coded to help you visually understand relationships between notes, scales, and chords.\n\nOur stickers are made from high-quality, durable materials that won't damage your instrument and can be easily removed.\n\nWhen you purchase a Lee Fretmap set, you'll also receive access to our online learning resources, including video tutorials, backing tracks and practice exercises designed to help you make the most of your Fretmap stickers.",
    price: 24.99,
    image: "/images/product-images/products-jpg-400px/guitar-harmonic-minor-jpg-400.jpg",
    webpImage: "/images/product-images/products-webp-400px/guitar-harmonic-minor-webp-400.webp",
    highResImage: "/images/product-images/products-jpg-800px/guitar-harmonic-minor-jpg-800.jpg",
    highResWebpImage: "/images/product-images/products-webp-800px/guitar-harmonic-minor-webp-800.webp",
    popular: false,
    features: [
      "Harmonic minor scale focus",
      "Perfect for metal music",
      "Includes exotic patterns",
      "Jazz and classical compatible",
      "Advanced scale visualization"
    ]
  },
  {
    id: "lee-fretmap-bass-pentatonic",
    name: "Lee Fretmap for Bass - Pentatonic Blues",
    description: "The Lee Fretmap system is a revolutionary approach to learning the fretboard, designed by musicians for musicians. Each sticker is precisely color-coded to help you visually understand relationships between notes, scales, and chords.\n\nOur stickers are made from high-quality, durable materials that won't damage your instrument and can be easily removed.\n\nWhen you purchase a Lee Fretmap set, you'll also receive access to our online learning resources, including video tutorials, backing tracks and practice exercises designed to help you make the most of your Fretmap stickers.",
    price: 24.99,
    image: "/images/product-images/products-jpg-400px/bass-pentatonic-blues-jpg-400.jpg",
    webpImage: "/images/product-images/products-webp-400px/bass-pentatonic-blues-webp-400.webp",
    highResImage: "/images/product-images/products-jpg-800px/bass-pentatonic-blues-jpg-800.jpg",
    highResWebpImage: "/images/product-images/products-webp-800px/bass-pentatonic-blues-webp-800.webp",
    popular: false,
    features: [
      "Bass pentatonic focus",
      "Blues and rock patterns",
      "Funk bass compatible",
      "Includes groove guides",
      "Perfect for improvisation"
    ]
  },
  {
    id: "lee-fretmap-piano",
    name: "Lee Fretmap for Piano/Keyboard",
    description: "The Lee Fretmap system is a revolutionary approach to learning the fretboard, designed by musicians for musicians. Each sticker is precisely color-coded to help you visually understand relationships between notes, scales, and chords.\n\nOur stickers are made from high-quality, durable materials that won't damage your instrument and can be easily removed.\n\nWhen you purchase a Lee Fretmap set, you'll also receive access to our online learning resources, including video tutorials, backing tracks and practice exercises designed to help you make the most of your Fretmap stickers.",
    price: 24.99,
    image: "/images/product-images/products-jpg-400px/piano-keyboard-jpg-400.jpg",
    webpImage: "/images/product-images/products-webp-400px/piano-keyboard-webp-400.webp",
    highResImage: "/images/product-images/products-jpg-800px/piano-keyboard-jpg-800.jpg",
    highResWebpImage: "/images/product-images/products-webp-800px/piano-keyboard-webp-800.webp",
    popular: false,
    features: [
      "Piano and keyboard compatible",
      "All major scales included",
      "Chord pattern visualization",
      "Perfect for beginners",
      "Includes practice guides"
    ]
  },
  {
    id: "lee-fretmap-ukulele",
    name: "Lee Fretmap for Ukulele",
    description: "The Lee Fretmap system is a revolutionary approach to learning the fretboard, designed by musicians for musicians. Each sticker is precisely color-coded to help you visually understand relationships between notes, scales, and chords.\n\nOur stickers are made from high-quality, durable materials that won't damage your instrument and can be easily removed.\n\nWhen you purchase a Lee Fretmap set, you'll also receive access to our online learning resources, including video tutorials, backing tracks and practice exercises designed to help you make the most of your Fretmap stickers.",
    price: 24.99,
    image: "/images/product-images/products-jpg-400px/ukulele-jpg-400.jpg",
    webpImage: "/images/product-images/products-webp-400px/ukulele-webp-400.webp",
    highResImage: "/images/product-images/products-jpg-800px/ukulele-jpg-800.jpg",
    highResWebpImage: "/images/product-images/products-webp-800px/ukulele-webp-800.webp",
    popular: false,
    features: [
      "Ukulele-specific design",
      "All common chords included",
      "Perfect for beginners",
      "Includes strum patterns",
      "Easy to follow guide"
    ]
  }
];

// Text shadow styles
const TEXT_STYLES = {
  shadowHeavy: { 
    textShadow: "0 0 20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 0, 0, 0.5)"
  },
  shadowMedium: { 
    textShadow: "0 0 15px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.7), 0 0 45px rgba(0, 0, 0, 0.6)"
  }
};

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [enlargedImage, setEnlargedImage] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    if (params.id) {
      const productId = Array.isArray(params.id) ? params.id[0] : params.id;
      const foundProduct = PRODUCTS.find(p => p.id === productId);
      setProduct(foundProduct || null);
    }
    setLoading(false);
  }, [params.id]);

  const handleAddToCart = () => {
    if (product) {
      // Add the product with the selected quantity
      for (let i = 0; i < quantity; i++) {
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          stripePriceId: product.stripePriceId,
        });
      }
      router.push('/cart'); // Navigate to cart page
    }
  };

  const toggleEnlargedImage = () => {
    setEnlargedImage(!enlargedImage);
  };

  const handleShare = (platform: string) => {
    if (!product) return;

    const url = window.location.href;
    const text = `Check out ${product.name} on Amped Academy!`;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'instagram':
        shareUrl = 'https://www.instagram.com';
        break;
      case 'snapchat':
        shareUrl = `https://www.snapchat.com/share?url=${encodeURIComponent(url)}`;
        break;
      default:
        if (typeof navigator !== 'undefined' && 'share' in navigator) {
          navigator.share({
            title: product.name,
            text: text,
            url: url,
          }).catch(console.error);
          return;
        }
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    
    setShowShareMenu(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link href="/shop" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white" style={TEXT_STYLES.shadowHeavy}>
              {product.name}
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link 
              href="/shop" 
              className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Shop
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
              <div 
                className="relative pt-[75%] w-full cursor-pointer"
                onClick={toggleEnlargedImage}
              >
                <picture>
                  <source 
                    srcSet={product.webpImage} 
                    type="image/webp"
                  />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain bg-gray-700 p-4"
                  />
                </picture>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold">{product.name}</h2>
                <span className="text-3xl font-bold text-blue-400">${product.price}</span>
              </div>

              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
                <span className="text-gray-400 ml-2">4.9 (127 reviews)</span>
              </div>

              <p className="text-gray-300 mb-6 text-lg">
                {product.id === "lee-fretmap-piano" 
                  ? "Perfect for visual learners looking to master the keyboard quickly."
                  : product.id === "lee-fretmap-harmonic-minor"
                  ? "For more advanced players looking to take their ideas to the next level."
                  : product.id === "lee-fretmap-electric" || product.id === "lee-fretmap-bass-pentatonic"
                  ? "Includes the \"blue\" note to really spice up blues improvisations."
                  : "This is the starter set for use with the video lessons and ebook."}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Quantity:</h3>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-gray-700 hover:bg-gray-600 text-white w-10 h-10 rounded-md flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="text-xl font-medium w-8 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gray-700 hover:bg-gray-600 text-white w-10 h-10 rounded-md flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-lg flex-1 flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <div className="relative">
                  <button 
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-md font-medium flex items-center justify-center"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  
                  {showShareMenu && (
                    <div className="absolute bottom-full right-0 mb-2 w-48 bg-gray-800 rounded-md shadow-lg overflow-hidden">
                      <div className="py-1">
                        <button
                          onClick={() => handleShare('facebook')}
                          className="w-full px-4 py-2 text-left hover:bg-gray-700 text-white"
                        >
                          Share on Facebook
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="w-full px-4 py-2 text-left hover:bg-gray-700 text-white"
                        >
                          Share on X
                        </button>
                        <button
                          onClick={() => handleShare('instagram')}
                          className="w-full px-4 py-2 text-left hover:bg-gray-700 text-white"
                        >
                          Share on Instagram
                        </button>
                        <button
                          onClick={() => handleShare('snapchat')}
                          className="w-full px-4 py-2 text-left hover:bg-gray-700 text-white"
                        >
                          Share on Snapchat
                        </button>
                        {typeof navigator !== 'undefined' && 'share' in navigator && (
                          <button
                            onClick={() => handleShare('native')}
                            className="w-full px-4 py-2 text-left hover:bg-gray-700 text-white"
                          >
                            Share...
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Product Description</h2>
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="prose prose-lg prose-invert">
                <p>The Lee Fretmap system is a revolutionary approach to learning the fretboard, designed by musicians for musicians. Each sticker is precisely color-coded to help you visually understand relationships between notes, scales, and chords.</p>
                
                <p className="mt-4">Our stickers are made from high-quality, durable materials that won't damage your instrument and can be easily removed.</p>
                
                <p className="mt-4">When you purchase a Lee Fretmap set, you'll also receive access to our online learning resources, including video tutorials, backing tracks and practice exercises designed to help you make the most of your Fretmap stickers.</p>
              </div>
            </div>
          </section>

          {/* Related Products */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRODUCTS.filter(p => p.id !== product.id).slice(0, 3).map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href={`/shop/product/${relatedProduct.id}`} className="block">
                    <div className="relative pt-[75%] w-full">
                      <picture>
                        <source 
                          srcSet={relatedProduct.webpImage} 
                          type="image/webp"
                        />
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="absolute inset-0 w-full h-full object-contain bg-gray-700 p-2"
                        />
                      </picture>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 text-center">{relatedProduct.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-white">${relatedProduct.price}</span>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <button 
              onClick={toggleEnlargedImage}
              className="absolute top-0 right-0 bg-gray-800 text-white p-2 rounded-full m-4 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="w-full h-full">
              <picture>
                <source 
                  srcSet={product.highResWebpImage} 
                  type="image/webp"
                />
                <Image
                  src={product.highResImage}
                  alt={product.name}
                  width={1200}
                  height={1200}
                  className="w-full h-full object-contain"
                  quality={100}
                  priority
                />
              </picture>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 