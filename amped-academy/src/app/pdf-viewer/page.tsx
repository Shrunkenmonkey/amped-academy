'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Hero from '@/components/Hero';

// Default PDF path
const DEFAULT_PDF_PATH = '/images/Text-files/Lee-Fretmap-Fretboard-Mastery.pdf';

export default function PDFViewerPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the standalone HTML PDF viewer after a short delay
    // Adding a small delay to ensure the hero section is visible briefly
    const redirectTimer = setTimeout(() => {
      window.location.href = '/pdf-viewer.html';
    }, 1500);
    
    return () => clearTimeout(redirectTimer);
  }, []);

  // This component will show briefly before the redirect
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero 
        title="PDF Viewer"
        subtitle="Loading your document..."
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <div className="animate-pulse flex space-x-4 mb-4 justify-center">
            <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
          </div>
          <p className="text-white text-xl">Preparing your document...</p>
          <p className="text-gray-400 mt-2">You will be redirected automatically</p>
        </div>
      </div>
    </div>
  );
} 