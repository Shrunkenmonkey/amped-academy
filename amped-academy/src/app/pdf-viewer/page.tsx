'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import BackgroundImage from '@/components/BackgroundImage';
import { ArrowLeft, Download, FileText } from 'lucide-react';

// Constants - matching videos page
const TEXT_STYLES = {
  shadowHeavy: { 
    textShadow: "0 0 20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 0, 0, 0.5)"
  },
  shadowMedium: { 
    textShadow: "0 0 15px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.7), 0 0 45px rgba(0, 0, 0, 0.6)"
  }
};

export default function PDFViewerPage() {
  const [pdfPath, setPdfPath] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Get PDF path from URL query param if it exists
    const params = new URLSearchParams(window.location.search);
    const path = params.get('path') || '/images/Text/Lee Fretmap Fretboard Mastery.pdf';
    setPdfPath(path);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration errors
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section - exactly matching videos page */}
      <section className="relative text-white py-8">
        <div className="absolute inset-0 z-0 overflow-hidden bg-indigo-900">
          <BackgroundImage 
            src="/images/backgrounds/lightning-background jpg.jpg"
            webpSrc="/images/backgrounds/lightning-background webp.webp"
            alt="Lightning background"
            priority={true}
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white" style={TEXT_STYLES.shadowHeavy}>
              Amped Academy Presents:
            </h1>
            <p className="text-3xl md:text-4xl text-white" style={TEXT_STYLES.shadowMedium}>
              Lee Fretmap Fretboard Mastery
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* PDF Viewer */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {pdfPath ? (
            <object
              data={pdfPath}
              type="application/pdf"
              width="100%"
              height="850"
              className="w-full"
            >
              <div className="p-8 text-center">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-300 mb-4">
                  Your browser doesn't support embedded PDFs or the file could not be found.
                </p>
              </div>
            </object>
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-300">Loading PDF...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 