'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import BackgroundImage from "@/components/BackgroundImage";

export default function FretboardGuidePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <Hero 
        title="Fretboard Guide"
        subtitle="Your complete guide to the Lee Fretmap system"
      />
      
      {/* Topics Section - Centered Text */}
      <div className="max-w-4xl mx-auto px-4 text-center py-8">
        <h2 className="text-3xl font-bold mb-6">Essential Guitar Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <div>
            <p>• Major & Minor Scales</p>
            <p>• Chord Construction</p>
            <p>• Fretboard Navigation</p>
            <p>• Playing by Ear</p>
          </div>
          <div>
            <p>• Music Theory Fundamentals</p>
            <p>• Improvisation</p>
            <p>• Pentatonic Patterns</p>
            <p>• Scale Relationships</p>
          </div>
        </div>
      </div>
      
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
            <Link 
              href="/videos" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md text-center hover:bg-blue-700"
            >
              Watch Videos
            </Link>
          </div>
          
          <div className="text-gray-300">
            <p className="mb-4 text-center">
              The Lee Fretmap guide provides comprehensive lessons for using the 
              fretboard stickers to enhance your guitar learning experience.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2 text-center">What You'll Learn</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>How to navigate the fretboard easily</li>
              <li>Basics of notes and scales</li>
              <li>Simple music theory for guitar</li>
              <li>Playing major and minor scales</li>
              <li>Exercises to improve fretboard skills</li>
              <li>Building common chords</li>
              <li>Using pentatonic scales for solos</li>
              <li>Understanding chord progressions</li>
              <li>Adding advanced chords like 7ths</li>
              <li>Exploring musical modes</li>
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
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center">Backing Tracks</h3>
              <p className="text-gray-300 mb-3 text-center">
                Practice with backing tracks specifically for Lee Fretmap users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 