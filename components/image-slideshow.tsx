"use client"

import { useState, useEffect } from "react"

interface ImageSlideshowProps {
  images: string[]
  alt: string
  className?: string
}

export function ImageSlideshow({ images, alt, className = "" }: ImageSlideshowProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={images[currentImageIndex]}
        alt={`${alt} - Image ${currentImageIndex + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
