import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CourseImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  fill?: boolean;
}

const CourseImageFallback: React.FC<CourseImageProps> = ({ 
  src, 
  fallbackSrc, 
  alt,
  className = '',
  fill = false
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  // Reset the isLoading state when the src changes
  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
  }, [src]);

  return (
    fill ? (
      <div className={`relative ${className}`}>
        <Image
          src={imgSrc}
          alt={alt}
          className={`object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setImgSrc(fallbackSrc);
          }}
          fill
        />
      </div>
    ) : (
      <img
        src={imgSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-90' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc);
        }}
      />
    )
  );
};

export default CourseImageFallback; 