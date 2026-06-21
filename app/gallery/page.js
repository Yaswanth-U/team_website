'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/pictures/qubi.jpg', alt: 'Qubi' },
    { src: '/pictures/l3.jpg', alt: 'L3' },
    { src: '/pictures/drone.jpg', alt: 'Drone' },
    { src: '/pictures/pratham.jpg', alt: 'Pratham' },
    { src: '/pictures/team.jpg', alt: 'Team' },
    { src: '/pictures/bot.jpg', alt: 'Bot' },
    { src: '/pictures/android_medium_page1.jpg', alt: 'Android Medium' },
    { src: '/pictures/AE1.jpg', alt: 'Autoexpo2026' },
    { src: '/pictures/AERO1.jpg', alt: 'Aerothon 2026' },
    { src: '/pictures/IGVC1.jpg', alt: 'IGVC OLD' },
    { src: '/pictures/IGVC2.jpg', alt: 'IGVC NEW' },
    { src: '/pictures/ED1.jpg', alt: 'ENGINEERS DAY 2025' },
    { src: '/pictures/ED2.jpg', alt: 'ENGINEERS DAY 2025' },
    { src: '/pictures/ED3.jpg', alt: 'ENGINEERS DAY 2025' },
    { src: '/pictures/IROC1.jpg', alt: 'ISRO DRONE CHALLENGE' },
    { src: '/pictures/IMG_4302.jpg', alt: 'BOARD 2024-2026' }

  ];

  return (
    <div className="flex flex-col h-full w-full p-8 overflow-hidden">
        <div className="flex-grow flex flex-col items-center px-8 py-12 mt-8"></div>
      {/* Heading */}
      <h1 className="text-5xl font-black mb-8">Gallery</h1>

      {/* Image grid */}
      <div className="overflow-y-auto flex flex-wrap gap-6 justify-start">
        {images.map((img, idx) => (
          <GalleryImage
            key={idx}
            src={img.src}
            alt={img.alt}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90vw] h-[90vh] max-w-4xl">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function GalleryImage({ src, alt, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative w-48 h-60 flex-shrink-0 rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform"
    >
      <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
    </div>
  );
}

