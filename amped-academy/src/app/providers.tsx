'use client';

import { memo } from 'react';
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
    </CartProvider>
  );
};

export default memo(Providers); 