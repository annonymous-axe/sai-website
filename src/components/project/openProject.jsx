import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

function OpenProject({ item }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});

  if (!item) return null;

  const images = item.imgs.map(img => item.path + img);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="w-full">
      {/* Main Image Viewer */}
      <div className="relative mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-bg-alt shadow-glass group">
        {/* Image Container */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center">
          {/* Loading Skeleton */}
          {!imageLoaded[currentIndex] && (
            <div className="absolute inset-0 bg-gradient-to-r from-bg-alt via-primary-50 to-bg-alt animate-pulse" />
          )}
          
          {/* Main Image */}
          <img
            src={images[currentIndex]}
            alt={`${item.title} - Image ${currentIndex + 1}`}
            onLoad={() => handleImageLoad(currentIndex)}
            className={cn(
              "w-full h-full object-contain transition-all duration-500",
              imageLoaded[currentIndex] ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          />

          {/* Image Counter */}
          <div className={cn(
            "absolute top-3 right-3 sm:top-4 sm:right-4",
            "px-3 py-1.5 sm:px-4 sm:py-2 rounded-full",
            "bg-black/60 backdrop-blur-md text-white",
            "text-xs sm:text-sm font-semibold",
            "shadow-lg"
          )}>
            {currentIndex + 1} / {images.length}
          </div>

          {/* Navigation Arrows - Only show if more than 1 image */}
          {images.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className={cn(
                  "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2",
                  "w-10 h-10 sm:w-12 sm:h-12 rounded-full",
                  "bg-white/90 hover:bg-white backdrop-blur-sm",
                  "text-primary shadow-lg",
                  "flex items-center justify-center",
                  "transition-all duration-300",
                  "opacity-0 group-hover:opacity-100",
                  "hover:scale-110 active:scale-95",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                )}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className={cn(
                  "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2",
                  "w-10 h-10 sm:w-12 sm:h-12 rounded-full",
                  "bg-white/90 hover:bg-white backdrop-blur-sm",
                  "text-primary shadow-lg",
                  "flex items-center justify-center",
                  "transition-all duration-300",
                  "opacity-0 group-hover:opacity-100",
                  "hover:scale-110 active:scale-95",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                )}
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Thumbnail Gallery - Only show if more than 1 image */}
      {images.length > 1 && (
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-primary-300 scrollbar-track-primary-50">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={cn(
                "relative flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden",
                "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24",
                "transition-all duration-300",
                "border-2",
                "hover:scale-105 hover:shadow-md",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                currentIndex === index
                  ? "border-primary shadow-lg scale-105 ring-2 ring-primary ring-offset-2"
                  : "border-primary-100 opacity-60 hover:opacity-100 hover:border-primary-300"
              )}
            >
              {/* Thumbnail Loading Skeleton */}
              {!imageLoaded[`thumb-${index}`] && (
                <div className="absolute inset-0 bg-gradient-to-r from-bg-alt via-primary-50 to-bg-alt animate-pulse" />
              )}
              
              {/* Thumbnail Image */}
              <img
                src={src}
                alt={`Thumbnail ${index + 1}`}
                onLoad={() => handleImageLoad(`thumb-${index}`)}
                className="w-full h-full object-cover"
              />

              {/* Active Indicator */}
              {currentIndex === index && (
                <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Keyboard Navigation Hint */}
      {images.length > 1 && (
        <div className="mt-4 text-center">
          <p className="text-xs sm:text-sm text-text-secondary">
            Use arrow keys ← → or swipe to navigate
          </p>
        </div>
      )}
    </div>
  );
}

export default OpenProject;