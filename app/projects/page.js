'use client'

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Projects() {
  const elRef = useRef();
  const [selectedImg, setSelectedImg] = useState(null); // state for modal image

  const onRight = () => {
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    elRef.current?.scrollTo({
      left: elRef.current?.scrollLeft + 21 * rem,
      behavior: "smooth",
    });
  };

  const onLeft = () => {
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    elRef.current?.scrollTo({
      left: elRef.current?.scrollLeft - 21 * rem,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col h-full w-full p-4">
      <div className="flex-grow flex flex-col items-center px-8 py-12 mt-8"></div>
      <h1 className="font-black text-5xl mb-6">Projects</h1>

      <div className="relative flex items-center w-full flex-grow">
        {/* Left scroll button */}
        <button
          onClick={onLeft}
          aria-label="Scroll left"
          className="z-20 p-2 bg-black rounded-full text-white absolute left-0 top-1/2 -translate-y-1/2"
          style={{ width: 40, height: 40 }}
        >
          &#8249;
        </button>

        {/* Scroll container */}
        <div
          ref={elRef}
          className="flex overflow-x-auto scroll-smooth space-x-6 py-4 px-12"
          style={{ scrollBehavior: "smooth" }}
        >
          <ProjectCard
            src="/pictures/cbe9457a-8cc9-488f-9a27-3dfe6e32c98a.jpg"
            title="Qubi"
            description="Our latest autonomous ground vehicle. Its smaller and more stable than our previous foray into UGVs."
            onClick={() => setSelectedImg("/pictures/cbe9457a-8cc9-488f-9a27-3dfe6e32c98a.jpg")}
          />
          <ProjectCard
            src="/pictures/drone.jpg"
            title="UAV"
            description="We go flying. Land vehicles get boring over time. We are experimenting with a hexacopter :)"
            onClick={() => setSelectedImg("/pictures/drone.jpg")}
          />
          <ProjectCard
            src="/pictures/pratham.jpg"
            title="Pratham (archived)"
            description="An autonomous ground vehicle developed by our OG group. The spark that started our journey."
            onClick={() => setSelectedImg("/pictures/pratham.jpg")}
          />
          <ProjectCard
            src="/pictures/l3.jpg"
            title="L3 (archived)"
            description="Originally a Maruti Ecco with a custom EV conversion. Now a minivan with a stack ready for level 3 autonomy."
            onClick={() => setSelectedImg("/pictures/l3.jpg")}
          />
        </div>

        {/* Right scroll button */}
        <button
          onClick={onRight}
          aria-label="Scroll right"
          className="z-20 p-2 bg-black rounded-full text-white absolute right-0 top-1/2 -translate-y-1/2"
          style={{ width: 40, height: 40 }}
        >
          &#8250;
        </button>
      </div>

      {/* Modal for enlarged image */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImg(null)} // close on background click
        >
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 h-3/4">
            <Image
              src={selectedImg}
              alt="Enlarged"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ src, title, description, onClick }) {
  return (
    <div className="w-72 flex-shrink-0 rounded-lg shadow-lg bg-white cursor-pointer">
      <div className="w-full h-48 relative" onClick={onClick}>
        <Image
          src={src}
          alt={title}
          fill
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="font-display font-bold text-xl mb-2">{title}</h2>
        <p className="text-slate-600 mb-4 line-clamp-3">{description}</p>
      </div>
    </div>
  );
}
