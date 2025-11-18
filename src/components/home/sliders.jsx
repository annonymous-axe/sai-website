import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { cn } from "../../lib/utils";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Sliders() {

  const navigate = useNavigate();

  const slides = [
    { src: "images/projects/HOME/AHANA.jpg", text: "Designing the Future", quote: "Excellence in Structural Engineering" },
    { src: "images/projects/HOME/business_hub.jpg", text: "Strength Meets Design", quote: "A well-designed structure doesn't just stand — it performs, adapts, and endures." },
    { src: "images/projects/HOME/kiran_hospital.jpg", text: "Sustainable Structures", quote: "The difference between good and bad architecture is the time you spend on it" },
    { src: "images/projects/HOME/govind_dholakia.jpg", text: "Your vision, our artistry", quote: "Spaces filled with joy" },
    { src: "images/projects/HOME/banner.jpg", text: "Designing Tomorrow, Today", quote: "Designing dreams into reality" },
  ];

  const handleProjectNavigation = () => {

    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/projects");

  }

  return (
    <div className="h-screen min-h-[500px] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop
        navigation={{
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !w-2.5 !h-2.5 !bg-white !opacity-60',
          bulletActiveClass: 'swiper-pagination-bullet-active !opacity-100 !bg-accent-400 !w-10',
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image - Clearer visibility */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.src})` }}
              />

              {/* Subtle Gradient Overlay - Only at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Content positioned at bottom - Text on image with shadow */}
              <div className="absolute bottom-0 left-0 right-0 pb-20 sm:pb-24 md:pb-28">
                <div className="section-container">
                  <div className="max-w-5xl">
                    {/* Small accent line */}
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                      <div className="w-12 h-1 bg-white/80 rounded-full shadow-lg" />
                      <div className="w-2 h-2 rounded-full bg-accent-400 shadow-lg" />
                    </div>

                    {/* Main Heading - Text on image with shadow */}
                    <h1 className={cn(
                      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
                      "font-bold font-heading text-white mb-4 sm:mb-6",
                      "leading-tight drop-shadow-2xl"
                    )}
                    style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}
                    >
                      {slide.text}
                    </h1>

                    {/* Quote Text - Text on image with shadow */}
                    <p className={cn(
                      "text-base sm:text-lg md:text-xl lg:text-2xl",
                      "text-white/95 leading-relaxed mb-6 sm:mb-8",
                      "max-w-3xl drop-shadow-xl"
                    )}
                    style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.7), 0 0 15px rgba(0,0,0,0.4)' }}
                    >
                      {slide.quote}
                    </p>

                    {/* CTA Button */}
                    <button
                      href="/projects"
                      onClick={handleProjectNavigation}
                      className={cn(
                        "group inline-flex items-center gap-2",
                        "px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg",
                        "bg-white text-primary",
                        "font-semibold text-sm sm:text-base",
                        "shadow-2xl hover:shadow-3xl",
                        "hover:bg-accent-500 hover:text-white",
                        "transition-all duration-300",
                        "hover:scale-105"
                      )}
                    >
                      <span>Explore Our Work</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows - Desktop */}
      <div className="hidden lg:block">
        <button className={cn(
          "slider-button-prev absolute left-6 top-1/2 -translate-y-1/2 z-10",
          "w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm",
          "flex items-center justify-center shadow-lg",
          "hover:bg-accent-500 hover:text-white hover:scale-110",
          "transition-all duration-300 group"
        )}>
          <svg className="w-6 h-6 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className={cn(
          "slider-button-next absolute right-6 top-1/2 -translate-y-1/2 z-10",
          "w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm",
          "flex items-center justify-center shadow-lg",
          "hover:bg-accent-500 hover:text-white hover:scale-110",
          "transition-all duration-300 group"
        )}>
          <svg className="w-6 h-6 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
        <div className="flex flex-col items-center gap-2 text-white cursor-pointer group animate-bounce">
          <span className="text-xs font-medium tracking-wide drop-shadow-lg">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1.5 group-hover:border-accent-400 transition-colors">
            <div className="w-1.5 h-2 bg-white rounded-full group-hover:bg-accent-400 transition-colors" />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        :global(.swiper-pagination) {
          bottom: 1.5rem !important;
        }
        
        :global(.swiper-pagination-bullet) {
          transition: all 0.3s ease !important;
          border-radius: 999px !important;
        }
        
        @media (min-width: 640px) {
          :global(.swiper-pagination) {
            bottom: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Sliders;