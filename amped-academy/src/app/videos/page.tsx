'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, X } from "lucide-react";
import BackgroundImage from "@/components/BackgroundImage";

// Video Types
interface Video {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  thumbnail: string;
  description: string;
  youtubeLink?: string;
}

interface VideoCategory {
  id: string;
  title: string;
  description: string;
  videos: Video[];
}

// Constants
const TEXT_STYLES = {
  shadowHeavy: { 
    textShadow: "0 0 20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 0, 0, 0.6), 0 0 60px rgba(0, 0, 0, 0.5)"
  },
  shadowMedium: { 
    textShadow: "0 0 15px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.7), 0 0 45px rgba(0, 0, 0, 0.6)"
  }
};

// Mock video data - in a real application, this would come from a database or API
const VIDEO_CATEGORIES: VideoCategory[] = [
  {
    id: "beginners",
    title: "Beginner Lessons",
    description: "Perfect for those just starting their musical journey",
    videos: [
      {
        id: "begin-1",
        title: "Getting Started with Guitar",
        instructor: "Mark Thompson",
        duration: "12:45",
        thumbnail: "/images/video-thumb-1.jpg",
        description: "Learn the fundamentals of guitar playing with this comprehensive introduction for absolute beginners."
      },
      {
        id: "begin-2",
        title: "Piano Basics: Hand Positioning",
        instructor: "Sarah Chen",
        duration: "15:30",
        thumbnail: "/images/video-thumb-2.jpg",
        description: "Master the correct hand positioning and posture for piano playing to build a solid foundation."
      },
      {
        id: "begin-3",
        title: "Understanding Music Notation",
        instructor: "David Rodriguez",
        duration: "18:20",
        thumbnail: "/images/video-thumb-3.jpg",
        description: "A complete guide to reading music notation, from notes and rests to time signatures and key signatures."
      },
    ]
  },
  {
    id: "intermediate",
    title: "Intermediate Techniques",
    description: "Take your skills to the next level",
    videos: [
      {
        id: "inter-1",
        title: "Advanced Chord Progressions",
        instructor: "Jennifer Lee",
        duration: "22:15",
        thumbnail: "/images/video-thumb-4.jpg",
        description: "Explore complex chord progressions and learn how to apply them in your compositions and performances."
      },
      {
        id: "inter-2",
        title: "Drumming: Syncopation Techniques",
        instructor: "Marcus Johnson",
        duration: "19:45",
        thumbnail: "/images/video-thumb-5.jpg",
        description: "Master syncopation and complex rhythmic patterns to add sophistication to your drumming."
      },
      {
        id: "inter-3",
        title: "Vocal Training: Expanding Range",
        instructor: "Maria Garcia",
        duration: "24:10",
        thumbnail: "/images/video-thumb-6.jpg",
        description: "Discover effective exercises and techniques to safely expand your vocal range and improve tone quality."
      },
    ]
  },
  {
    id: "advanced",
    title: "Backing Tracks",
    description: "Practice with professional-quality backing tracks",
    videos: [
      {
        id: "adv-1",
        title: "Jazz Improvisation Masterclass",
        instructor: "Robert Hayes",
        duration: "35:20",
        thumbnail: "/images/video-thumb-7.jpg",
        description: "Dive deep into the art of jazz improvisation with techniques from bebop to modern jazz approaches."
      },
      {
        id: "adv-2",
        title: "Classical Composition: Form and Structure",
        instructor: "Elizabeth Chen",
        duration: "42:15",
        thumbnail: "/images/video-thumb-8.jpg",
        description: "Learn the principles of classical composition including sonata form, theme and variations, and more."
      },
      {
        id: "adv-3",
        title: "Studio Production Techniques",
        instructor: "James Wilson",
        duration: "38:30",
        thumbnail: "/images/video-thumb-9.jpg",
        description: "Professional studio production techniques covering mixing, mastering, and advanced sound design."
      },
      {
        id: "adv-4",
        title: "Metal Backing Track in Em",
        instructor: "Amped Academy",
        duration: "5:03",
        thumbnail: "/images/video-thumb-10.jpg",
        description: "Heavy metal backing track in E minor for guitar practice and improvisation",
        youtubeLink: "https://youtu.be/BQq2YNgcgo8"
      },
      {
        id: "adv-5",
        title: "Hard Rock Backing Track in Am",
        instructor: "Amped Academy",
        duration: "6:21",
        thumbnail: "/images/video-thumb-11.jpg",
        description: "Hard rock backing track in A minor perfect for practicing solos and improvisation",
        youtubeLink: "https://youtu.be/BQq2YNgcgo8"
      },
    ]
  },
];

// Video Card Component
function VideoCard({ video, onOpenModal }: { video: Video; onOpenModal: (video: Video) => void }) {
  // Extract YouTube video ID
  const youtubeVideoId = video.youtubeLink?.split('/').pop() || '';

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 relative">
          <div className="absolute inset-0 bg-gray-700 overflow-hidden">
            {video.youtubeLink ? (
              <div className="relative w-full h-full cursor-pointer" onClick={() => onOpenModal(video)}>
                <Image 
                  src={`https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover hover:opacity-80 transition-opacity duration-200"
                />
              </div>
            ) : (
              <div 
                className="w-full h-full flex items-center justify-center bg-gray-700 text-gray-400 cursor-pointer"
                onClick={() => onOpenModal(video)}
              >
                <span className="text-sm">Video Thumbnail</span>
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white text-center">{video.title}</h3>
        <p className="text-sm text-white mb-3 text-center">{video.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-white font-medium">
            By {video.instructor}
          </span>
          <button
            onClick={() => onOpenModal(video)}
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded font-medium transition-colors duration-200"
          >
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
}

// Video Modal Component
function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
  // Extract YouTube video ID
  const youtubeVideoId = video.youtubeLink?.split('/').pop() || '';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col">
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          <div className="text-center flex-grow">
            <h3 className="text-xl font-bold text-white text-center">{video.title}</h3>
            <p className="text-sm text-gray-300">By {video.instructor}</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={onClose} 
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded font-medium transition-colors duration-200"
            >
              Back to Videos
            </button>
            <button 
              onClick={onClose} 
              className="text-gray-300 hover:text-white p-1"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="flex-grow p-0 relative">
          <div className="aspect-w-16 aspect-h-9 w-full h-full">
            {video.youtubeLink ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-400">
                <span className="text-lg">Video not available</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Category Section Component
function CategorySection({ category, onOpenModal }: { category: VideoCategory; onOpenModal: (video: Video) => void }) {
  return (
    <div className="mb-16">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-3 text-center">{category.title}</h2>
        <p className="text-lg text-white opacity-80">{category.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.videos.map(video => (
          <VideoCard key={video.id} video={video} onOpenModal={onOpenModal} />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link 
          href={`/videos/category/${category.id}`} 
          className="inline-flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-200"
        >
          View all {category.title} <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
}

// Main Page Component
export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const openVideoModal = (video: Video) => {
    setActiveVideo(video);
  };

  const closeVideoModal = () => {
    setActiveVideo(null);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
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
              Video Lessons
            </h1>
            <p className="text-3xl md:text-4xl text-white" style={TEXT_STYLES.shadowMedium}>
              Learn from expert instructors
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Video categories */}
        {VIDEO_CATEGORIES.map(category => (
          <CategorySection 
            key={category.id} 
            category={category} 
            onOpenModal={openVideoModal} 
          />
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={closeVideoModal} />
      )}
    </div>
  );
} 