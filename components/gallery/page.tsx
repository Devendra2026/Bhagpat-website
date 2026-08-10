
'use client';

import { Button } from '@/components/ui/button';
import { AnimatePresence, m } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface GalleryItem {
  id: number;
  category: 'Development' | 'Cleanliness' | 'Events';
  imageUrl: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState<'All' | 'Development' | 'Cleanliness' | 'Events'>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'Events',
      imageUrl: '/aminagarsarai.jpg',
    },
    {
      id: 2,
      category: 'Cleanliness',
      imageUrl: '/dustbinphoto.jpg',
    },
    {
      id: 3,
      category: 'Development',
      imageUrl: '/cakecutting.jpg',
    },
    {
      id: 4,
      category: 'Development',
      imageUrl: '/giftceremony.jpg',
    },
    {
      id: 5,
      category: 'Cleanliness',
      imageUrl: '/inaugration.jpg',
    },
    {
      id: 6,
      category: 'Events',
      imageUrl: '/independenceday.jpg',
    },
    {
      id: 7,
      category: 'Development',
      imageUrl: '/intercollege.jpg',
    },
    {
      id: 8,
      category: 'Events',
      imageUrl: '/krishnagod.jpg',
    },
    {
      id: 9,
      category: 'Cleanliness',
      imageUrl: '/officephoto.jpg',
    },
    {
      id: 10,
      category: 'Events',
      imageUrl: '/prozeceremony.jpg',
    },
    {
      id: 11,
      category: 'Events',
      imageUrl: '/ratyatra.jpg',
    },
    {
      id: 12,
      category: 'Events',
      imageUrl: '/ribbioncutting.jpg',
    },
    {
      id: 13,
      category: 'Events',
      imageUrl: '/sammanphoto.jpg',
    },
    {
      id: 14,
      category: 'Events',
      imageUrl: '/saraswatipuja.jpg',
    },
    {
      id: 15,
      category: 'Events',
      imageUrl: '/swachtaphoto.jpg',
    },
    {
      id: 16,
      category: 'Events',
      imageUrl: '/temple.jpg',
    },
    {
      id: 17,
      category: 'Events',
      imageUrl: '/cappp.jpeg',
    },
    {
      id: 18,
      category: 'Events',
      imageUrl: '/copyyy.jpeg',
    },
    {
      id: 19,
      category: 'Events',
      imageUrl: '/giftt.jpeg',
    },
    {
      id: 20,
      category: 'Events',
      imageUrl: '/kalashhh.jpeg',
    },
    {
      id: 21,
      category: 'Events',
      imageUrl: '/ladies.jpeg',
    },
    {
      id: 22,
      category: 'Events',
      imageUrl: '/scissors.jpeg',
    },
    {
      id: 23,
      category: 'Cleanliness',
      imageUrl: '/soill.jpeg',
    },
  ];

  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Title */}
        <div className="text-center space-y-3">
          <span className="text-xs bg-amber-500/10 text-amber-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-amber-500/20">
            Nagar Panchayat , Aminagar Sarai Media
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-serif">
             Gallery Photos
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl mx-auto">
            Visual highlights of developmental works, sanitation campaigns, and official events in Town Panchayat , Aminagar Sarai, Baghpat.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-6">
          {(['All', 'Development', 'Cleanliness', 'Events'] as const).map((cat) => (
            <Button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-md scale-102'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {cat === 'Cleanliness' ? 'Sanitation & Swachhta' : cat}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <m.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActivePhoto(item)}
                className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-2xl overflow-hidden cursor-pointer group relative aspect-video w-full"
              >
                {/* Only Photo Frame */}
                <Image
                  src={item.imageUrl}
                  alt="Gallery Image"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Zoom Badge overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="bg-white/95 text-slate-900 p-3 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5 text-amber-500" />
                  </div>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Overlay Viewer */}
      <AnimatePresence>
        {activePhoto && (
          <div
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 z-50"
            onClick={() => setActivePhoto(null)}
          >
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-transparent rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Only Photo Viewport */}
              <Image
                fill
                src={activePhoto.imageUrl}
                alt="Enlarged Gallery Image"
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />

              {/* Close button top right */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-amber-500 text-white p-2 rounded-full transition-colors border border-white/20 z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
