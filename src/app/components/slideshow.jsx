'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {link: '/event-gallery/IMG_6619.jpg', mid: "center 45%"}, {link:  '/event-gallery/IMG_6489.jpg', mid: "center 31%"}, {link: '/event-gallery/gbmshot.png', mid: "center center"}, 
];

export default function Slideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="" style={{width: '100%', height: '100%', position: 'absolute'}}>
      <div className="h-full w-full absolute bg-black  opacity-45 z-[2]"></div>
      {images.map((src, index) => (
        <Image
          key={src.link}
          src={src.link}
          alt={`Slide ${index + 1}`}
          layout="fill"
          objectFit="cover"
          objectPosition={src.mid}
          className={`transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>

    
  );
}