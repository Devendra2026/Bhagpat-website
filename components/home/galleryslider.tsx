'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, ExternalLink, X } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const certificationsData: Certification[] = [
  {
    id: 1,
    title: 'Aminagar Sarai View',
    category: 'Events',
    image: '/aminagarsarai.jpg',
    description: 'Scenic view and community moments at Aminagar Sarai.',
  },
  {
    id: 2,
    title: 'Dustbin & Sanitation Initiative',
    category: 'Cleanliness',
    image: '/dustbinphoto.jpg',
    description: 'Distribution and placement of dustbins for clean surroundings.',
  },
  {
    id: 3,
    title: 'Celebration & Cake Cutting',
    category: 'Development',
    image: '/cakecutting.jpg',
    description: 'Celebrating milestones and successful community programs.',
  },
  {
    id: 4,
    title: 'Gift Distribution Ceremony',
    category: 'Development',
    image: '/giftceremony.jpg',
    description: 'Honoring participants and citizens during the special ceremony.',
  },
  {
    id: 5,
    title: 'Ribbon Cutting Ceremony',
    category: 'Happiness',
    image: '/inaugration.jpg',
    description: 'Inaugurating new municipal and cleanliness initiatives.',
  },
  {
    id: 6,
    title: 'Janmashtami Celebration',
    category: 'Happiness',
    image: '/krishnagod.jpg',
    description: 'Inaugurating new municipal and cleanliness initiatives.',
  },
  {
    id: 7,
    title: 'Office Inauguration',
    category: 'Happiness',
    image: '/officephoto.jpg',
    description: 'Inaugurating new municipal and cleanliness initiatives.',
  },
  {
    id: 8,
    title: 'Independence Day Celebration',
    category: 'Aajadi ka Amrit Mahotsav',
    image: '/independenceday.jpg',
    description: 'Inaugurating new municipal and cleanliness initiatives.',
  },{
    id: 9,
    title: 'Rathyatra Celebration',
    category: 'Events',
    image: '/ratyatra.jpg',
    description: 'Inaugurating new municipal and cleanliness initiatives.',
  },
  {
    id: 10,
    title: 'Temple Festival',
    category: 'Events',
    image: '/temple.jpg',
    description: 'Inaugurating new municipal and cleanliness initiatives.',
  },
];

export default function CertificationsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<Certification | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, certificationsData.length - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // ऑटो-स्लाइड लॉजिक (हर 2 सेकंड में)
  useEffect(() => {
    if (isPaused || selectedImage) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [maxIndex, isPaused, selectedImage]);

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-slate-100/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Our Nagar Panchayat Achievements & Recognitions
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-2 font-medium">
            Achievements and recognitions for excellence, compliance, and quality service delivery.
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative px-2 md:px-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-5 z-10 w-11 h-11 bg-white hover:bg-blue-600 hover:text-white text-slate-700 rounded-full shadow-lg border border-slate-200 flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="min-w-full md:min-w-[calc(33.333%-16px)] flex-shrink-0"
                >
                  <div 
                    onClick={() => setSelectedImage(cert)}
                    className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer"
                  >
                    
                    {/* Image Preview Box */}
                    <div className="relative h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100 mb-4">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-xs font-semibold text-white bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1">
                          Click to View <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </div>

                    {/* Content info */}
                    <div>
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                        {cert.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-1 font-serif">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-5 z-10 w-11 h-11 bg-white hover:bg-blue-600 hover:text-white text-slate-700 rounded-full shadow-lg border border-slate-200 flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

      {/* ================================================= */}
      {/* IMAGE POPUP / LIGHTBOX MODAL                      */}
      {/* ================================================= */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative transform animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-slate-100 bg-slate-50">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-9 h-9 bg-slate-200/60 hover:bg-slate-200 text-slate-700 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="p-4 bg-slate-900 flex justify-center items-center max-h-[70vh]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[65vh] w-auto object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 bg-white border-t border-slate-100">
              <p className="text-sm text-slate-600 text-center font-medium">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
