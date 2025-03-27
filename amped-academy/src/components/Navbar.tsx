'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, Cpu, Share2, LucideIcon } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// Navigation items - centralized for both mobile and desktop
const navigation = [
  { name: "Home", href: "/" },
  { name: "Videos", href: "/videos" },
  { name: "Shop", href: "/shop" },
  { name: "AI Tools", href: "/ai-tools", icon: Cpu },
  { name: "Lessons", href: "/lessons" },
];

type NavigationItem = {
  name: string;
  href: string;
  icon?: LucideIcon;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const { totalItems } = useCart();

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out Amped Academy - Revolutionary music learning tools!`;
    
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
            title: 'Amped Academy',
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

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-xl lg:text-2xl text-white">
              Amped Academy
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.icon ? (
                  <span className="flex items-center">
                    {item.icon && <item.icon className="h-5 w-5 mr-2" />}
                    {item.name}
                  </span>
                ) : (
                  item.name
                )}
              </NavLink>
            ))}
            <Link 
              href="/cart" 
              className="flex items-center text-white px-4 py-2 rounded-md hover:bg-gray-800 transition relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>
            <div className="relative">
              <button 
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
                aria-label="Share"
              >
                <Share2 className="h-5 w-5" />
              </button>
              
              {showShareMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg overflow-hidden z-50">
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
          </nav>
          
          {/* Mobile navigation toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <Link 
              href="/cart" 
              className="flex items-center text-white p-2 rounded-md hover:bg-gray-800 transition relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>
            <div className="relative">
              <button 
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-2 rounded-md text-white hover:bg-gray-800 transition"
                aria-label="Share"
              >
                <Share2 className="h-6 w-6" />
              </button>
            </div>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-gray-800 focus:outline-none" 
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && <MobileMenu navigation={navigation} onClose={() => setIsOpen(false)} />}
      
      {/* Mobile share menu */}
      {showShareMenu && (
        <div className="md:hidden absolute right-0 left-0 mt-2 mx-4 bg-gray-800 rounded-md shadow-lg overflow-hidden z-50">
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
    </header>
  );
};

// Mobile menu component
const MobileMenu = memo(({ 
  navigation, 
  onClose 
}: { 
  navigation: NavigationItem[];
  onClose: () => void;
}) => {
  const { totalItems } = useCart();
  
  return (
    <div className="md:hidden absolute top-16 inset-x-0 bg-black shadow-lg rounded-b-lg z-50">
      <div className="pt-2 pb-4 space-y-1 px-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className="flex items-center text-white px-3 py-3 rounded-md hover:bg-gray-800 transition"
          >
            {item.icon && <item.icon className="h-5 w-5 mr-2" />}
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
});

MobileMenu.displayName = 'MobileMenu';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = memo(function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className="text-white hover:text-gray-300 font-medium transition duration-150 ease-in-out"
    >
      {children}
    </Link>
  );
});

NavLink.displayName = 'NavLink';

export default Navbar; 