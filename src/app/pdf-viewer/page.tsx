'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import BackgroundImage from '@/components/BackgroundImage';
import { ArrowLeft, Download, FileText, ZoomIn, ZoomOut } from 'lucide-react';

// Constants
const TEXT_STYLES = {
  shadowHeavy: { 
    textShadow: "0 0 20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 0, 0, 0.5)"
  },
  shadowMedium: { 
    textShadow: "0 0 15px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.7), 0 0 45px rgba(0, 0, 0, 0.6)"
  }
};

const DEFAULT_PDF_PATH = '/images/Text/Lee Fretmap Fretboard Mastery.pdf';
const MIN_ZOOM = 50;
const MAX_ZOOM = 200;
const ZOOM_STEP = 25;

export default function PDFViewerPage() {
  const [pdfPath, setPdfPath] = useState<string>(DEFAULT_PDF_PATH);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setMounted(true);
    
    const checkDevice = () => {
      try {
        const userAgent = navigator.userAgent || navigator.vendor;
        const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
        const isAndroid = /Android/i.test(userAgent);
        const isMobileDevice = /webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        
        setIsMobile(isIOS || isAndroid || isMobileDevice);
      } catch (err) {
        console.error('Error detecting device:', err);
        setIsMobile(true); // Fallback to mobile view if detection fails
      }
    };
    
    const initializePDF = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const path = params.get('path');
        if (path) {
          setPdfPath(path);
        }
      } catch (err) {
        console.error('Error initializing PDF:', err);
        setError('Failed to load PDF. Please try again.');
      }
    };

    checkDevice();
    initializePDF();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
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
        <div className="flex justify-between items-center mb-4">
          <Link href="/lessons" className="flex items-center text-blue-400 hover:text-blue-300">
            <ArrowLeft className="h-5 w-5 mr-1" />
            Back to Lessons
          </Link>
          <a 
            href={pdfPath} 
            download 
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF
          </a>
        </div>
        
        {/* PDF Viewer */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {error ? (
            <div className="p-8 text-center">
              <p className="text-red-400 mb-4">{error}</p>
              <a 
                href={pdfPath} 
                download 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
              >
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </a>
            </div>
          ) : (
            <>
              {/* Desktop View */}
              {!isMobile && (
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <button
                      onClick={handleZoomOut}
                      className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={zoom <= MIN_ZOOM}
                      aria-label="Zoom out"
                    >
                      <ZoomOut className="h-5 w-5" />
                    </button>
                    <span className="bg-gray-700 text-white px-3 py-2 rounded-md">
                      {zoom}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={zoom >= MAX_ZOOM}
                      aria-label="Zoom in"
                    >
                      <ZoomIn className="h-5 w-5" />
                    </button>
                  </div>
                  <div 
                    ref={containerRef}
                    className="overflow-auto" 
                    style={{ 
                      height: '850px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'relative'
                    }}
                  >
                    <div 
                      style={{ 
                        transform: `scale(${zoom / 100})`,
                        transformOrigin: 'center center',
                        width: '100%',
                        height: '100%',
                        transition: 'transform 0.2s ease-in-out'
                      }}
                    >
                      <iframe
                        src={`${pdfPath}#toolbar=0&navpanes=0&view=FitH`}
                        width="100%"
                        height="100%"
                        className="w-full"
                        title="PDF Viewer"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Mobile View */}
              {isMobile && (
                <div className="p-8 text-center">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-white mb-6">
                    For the best experience on mobile devices, please download the PDF to view it in your device's native PDF viewer.
                  </p>
                  <a 
                    href={pdfPath} 
                    download 
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download PDF
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
} 