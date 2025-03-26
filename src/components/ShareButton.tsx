'use client';

import { useState } from 'react';
import { Share2, Facebook, Twitter, Linkedin, Instagram, Video } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  url: string;
  description?: string;
}

export default function ShareButton({ title, url, description }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const shareOptions = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      color: 'bg-[#1877F2] hover:bg-[#1877F2]/90',
      action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
    },
    {
      name: 'X',
      icon: <Twitter className="w-5 h-5" />,
      color: 'bg-black hover:bg-black/90',
      action: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'bg-[#0A66C2] hover:bg-[#0A66C2]/90',
      action: () => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description || '')}`, '_blank')
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      color: 'bg-[#E4405F] hover:bg-[#E4405F]/90',
      action: () => window.open(`https://instagram.com/share?url=${encodeURIComponent(url)}`, '_blank')
    },
    {
      name: 'TikTok',
      icon: <Video className="w-5 h-5" />,
      color: 'bg-[#000000] hover:bg-[#000000]/90',
      action: () => window.open(`https://www.tiktok.com/share?url=${encodeURIComponent(url)}`, '_blank')
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-md font-medium flex items-center justify-center"
        aria-label="Share"
      >
        <Share2 className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2 z-[100]">
          {shareOptions.map((option) => (
            <button
              key={option.name}
              onClick={() => {
                option.action();
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 flex items-center gap-2"
            >
              {option.icon}
              <span>{option.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 