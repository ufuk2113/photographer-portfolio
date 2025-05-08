'use client';

import Image from 'next/image';

interface GalleryProps {
  images: { src: string; alt: string }[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img, index) => (
        <div key={index} className="overflow-hidden rounded-md shadow">
          <Image
            src={img.src}
            alt={img.alt}
            width={600}
            height={400}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
