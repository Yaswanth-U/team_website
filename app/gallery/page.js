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
    { src: '/pictures/AE1.jpeg', alt: 'Autoexpo2026' },
    { src: '/pictures/AERO1.jpeg', alt: 'Aerothon 2026' },
    { src: '/pictures/IGVC1.jpeg', alt: 'IGVC OLD' },
    { src: '/pictures/IGVC2.jpeg', alt: 'IGVC NEW' },
    { src: '/pictures/ED1.jpeg', alt: 'ENGINEERS DAY 2025' },
    { src: '/pictures/ED2.jpeg', alt: 'ENGINEERS DAY 2025' },
    { src: '/pictures/ED3.jpeg', alt: 'ENGINEERS DAY 2025' },
    { src: '/pictures/IROC1.jpeg', alt: 'ISRO DRONE CHALLENGE' },
    { src: '/pictures/IMG_4302.JPG', alt: 'BOARD 2024-2026' }

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
      <section>
        {/* Footer stays at the bottom of this section */}
        <footer className="mt-auto w-full border-t border-slate-200 px-6 py-5">
          <div className="mx-auto flex w-3/4 items-center justify-center gap-4">
            <p className="text-justify text-sm font-medium leading-6 text-slate-600">
              Made with ❤️ by Team AutoZ at ALM 313,
              Vellore Institute of Technology-Vellore
            </p>
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MnJyc3hkOWtxbDJneHk5bHF0N3VidXlvcTc4Yjlwand5anhjaWx6ZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/jj8MZzaOJc8MTDRGcL/giphy.gif" 
              alt="Dancing Sheep Sticker" 
              className="h-10 w-auto object-contain dynamic-sheep"
            />
          </div>
        </footer>
      </section>
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

