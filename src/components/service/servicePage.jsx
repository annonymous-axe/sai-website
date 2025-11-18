import { useEffect, useRef, useState } from 'react';
import { cn } from "../../lib/utils";
import ServiceBG from '/service-img.png';
import { services } from './services';

// Service Card Component
function ServiceCard({ service, index, isImageRight = false }) {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: '-10px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20",
        "transition-all duration-700"
      )}
    >
      {/* Image Section */}
      <div
        className={cn(
          "lg:col-span-5 order-2 lg:order-1",
          isImageRight && "lg:order-2"
        )}
      >
        <div
          className={cn(
            "group relative overflow-hidden rounded-2xl shadow-card hover:shadow-glass-lg",
            "transition-all duration-700 ease-out",
            "bg-white/50 backdrop-blur-sm border border-primary-100/30",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
          style={{
            transitionDelay: `${100}ms`
          }}
        >
          {/* Decorative Corner */}
          <div className={cn(
            "absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          )} />
          
          <img
            src={service.src}
            alt={service.title}
            className={cn(
              "w-full h-[150px] sm:h-[200px] md:h-[230px] lg:h-[260px] xl:h-[280px]",
              "object-fit",
              "transition-all duration-700 ease-out",
              "group-hover:scale-105 group-hover:brightness-110"
            )}
          />
          
          {/* Gradient Overlay */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          )} />
          
          {/* Service Number Badge */}
          <div className={cn(
            "absolute bottom-4 right-4 w-12 h-12 rounded-full",
            "bg-white/90 backdrop-blur-md shadow-lg",
            "flex items-center justify-center",
            "font-heading font-bold text-primary text-lg",
            "transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
            "transition-all duration-500"
          )}>
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Text Content Section */}
      <div
        className={cn(
          "lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center",
          isImageRight && "lg:order-1"
        )}
      >
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {/* Title with animated underline */}
          <div className="relative inline-block mb-4 sm:mb-6">
          <h2 className={cn(
            "font-heading font-bold text-text-primary",
            "text-xl sm:text-2xl md:text-3xl",
            "relative z-10"
          )}>
            {service.title}
          </h2>
            <div className={cn(
              "absolute bottom-0 left-0 h-3 bg-primary/20 rounded-full",
              "transition-all duration-700 ease-out",
              isInView ? "w-full" : "w-0"
            )}
            style={{ transitionDelay: `${300}ms` }}
            />
          </div>

          {/* Heading */}
          <h3 className={cn(
            "font-semibold text-text-primary mb-4 sm:mb-6",
            "text-base sm:text-lg md:text-xl",
            "leading-relaxed"
          )}>
            {service.heading}
          </h3>

          {/* Details with custom bullets */}
          <div className="space-y-4 sm:space-y-5">
            <div className="flex gap-3 group">
              <div className={cn(
                "flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5",
                "group-hover:scale-150 transition-transform duration-300"
              )} />
              <p className={cn(
                "text-text-secondary text-justify leading-relaxed",
                "text-sm sm:text-base md:text-lg",
                "group-hover:text-text-primary transition-colors duration-300"
              )}>
                {service.detail1}
              </p>
            </div>

            <div className="flex gap-3 group">
              <div className={cn(
                "flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5",
                "group-hover:scale-150 transition-transform duration-300"
              )} />
              <p className={cn(
                "text-text-secondary text-justify leading-relaxed",
                "text-sm sm:text-base md:text-lg",
                "group-hover:text-text-primary transition-colors duration-300"
              )}>
                {service.detail2}
              </p>
            </div>
          </div>

          {/* Decorative line */}
          <div className={cn(
            "mt-6 sm:mt-8 h-1 bg-gradient-to-r from-primary via-primary-300 to-transparent rounded-full",
            "transition-all duration-700 ease-out",
            isInView ? "w-full opacity-100" : "w-0 opacity-0"
          )}
          style={{ transitionDelay: `${500}ms` }}
          />
        </div>
      </div>
    </div>
  );
}

function ServicePage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const serviceIds = [
    'firstService',
    'secondService',
    'thirdService',
    'fourthService',
    'fifthService',
    'sixthService',
    'seventhService',
    'eightethService'
  ];

  return (
    <div className="mb-12 sm:mb-16 md:mb-24 bg-bg-main">
      {/* Progress Bar */}
      <div 
        className={cn(
          "fixed left-0 right-0 z-50 bg-gradient-to-r from-primary via-primary-600 to-primary",
          "h-1.5 md:h-2.5 shadow-lg",
          "top-[80px] md:top-[100px]"
        )}
        style={{
          width: `${scrollProgress}%`,
          transformOrigin: '0%',
          transition: 'width 0.1s ease-out'
        }}
      >
        <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-accent to-transparent" />
      </div>

      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[93vh] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out"
          style={{ 
            backgroundImage: `url(${ServiceBG})`,
            filter: 'brightness(0.6)',
            transform: `scale(${1 + scrollProgress / 1000})`
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />

        {/* Animated Title */}
        <div className="relative z-10 text-center px-4">
          <h1 className={cn(
            "font-heading font-bold text-white",
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
            "tracking-wide sm:tracking-wider md:tracking-widest",
            "drop-shadow-2xl",
            "animate-fade-in"
          )}>
            Our Services
          </h1>
          
          {/* Decorative Underline */}
          <div className="mt-4 sm:mt-6 flex justify-center">
            <div className="h-1 sm:h-1.5 w-24 sm:w-32 md:w-40 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse" />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Services Content */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          {services.map((service, index) => (
            <div key={index}>
              {/* Anchor point for navigation */}
              <div 
                id={serviceIds[index]} 
                className="scroll-mt-[100px] md:scroll-mt-[120px] mb-8 sm:mb-12"
              />
              
              {/* Service Card - Alternate image position */}
              <ServiceCard 
                service={service} 
                index={index}
                isImageRight={index % 2 === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Section */}
      <div className="relative mt-16 sm:mt-20 md:mt-24 py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/50 to-transparent" />
        <div className="relative text-center px-4">
          <h3 className="font-heading font-semibold text-text-primary text-xl sm:text-2xl md:text-3xl mb-4">
            Ready to Transform Your Vision?
          </h3>
          <p className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Let's discuss how our expertise can bring your architectural dreams to life
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;