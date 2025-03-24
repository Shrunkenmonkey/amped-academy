'use client';

import Link from 'next/link';
import PageHero from '@/components/PageHero';
import BackgroundImage from "@/components/BackgroundImage";

// Text shadow styles for glow effect
const textShadowHeavy = { 
  textShadow: "0 0 20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 0, 0, 0.5)"
};
const textShadowMedium = { 
  textShadow: "0 0 15px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.7), 0 0 45px rgba(0, 0, 0, 0.6)"
};

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white" style={textShadowHeavy}>
              Lessons
            </h1>
            <p className="text-3xl md:text-4xl text-white" style={textShadowMedium}>
              Your complete guide to the Lee Fretmap system
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">The Lee Fretmap System</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link 
              href="/pdf-viewer" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md text-center hover:bg-blue-700"
            >
              View PDF Guide
            </Link>
          </div>
          
          <div className="text-gray-300">
            <p className="mb-4 text-center">
              The Lee Fretmap guide provides comprehensive lessons for using the 
              fretboard stickers to enhance your guitar learning experience.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2 text-center">What You'll Learn</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>How to apply Lee Fretmap stickers to your guitar</li>
              <li>Understanding the color-coding system</li>
              <li>Basic music theory concepts</li>
              <li>Practice exercises and tips</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Related Resources</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center">Video Tutorials</h3>
              <p className="text-gray-300 mb-3 text-center">
                Watch step-by-step demonstrations and technique guides.
              </p>
              <div className="text-center">
                <Link 
                  href="/videos" 
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  Browse Videos
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center">Backing Tracks</h3>
              <p className="text-gray-300 mb-3 text-center">
                Practice with backing tracks specifically for Lee Fretmap users.
              </p>
              <div className="text-center">
                <Link 
                  href="/resources" 
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  Download Tracks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 