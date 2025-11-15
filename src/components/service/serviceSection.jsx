import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/effect-fade";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { services } from "./services";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";

function ServiceSection() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [disablePrevButton, setDisablePrevButton] = useState(true);
  const [disableNextButton, setDisableNextButton] = useState(false);

  function previouSwipe() {
    setDisableNextButton(false);
  }

  function nextSwipe() {
    setDisablePrevButton(false);
  }

  function goToService(link) {
    var section = '';

    if (link === "STRUCTURAL ENGINEERING") {
      section = "firstService";
    } else if (link === "VALUE ENGINEERING") {
      section = "secondService";
    } else if (link === "REPAIR & REHABILITATION") {
      section = "thirdService";
    } else if (link === "RETROFITTING OF HERITAGE STRUCTURES") {
      section = "fourthService";
    } else if (link === "NON-DESTRUCTIVE TESTING (NDT)") {
      section = "fifthService";
    } else if (link === "QUANTITY SURVEYING") {
      section = "sixthService";
    } else if (link === "VALUATION") {
      section = "seventhService";
    } else if (link === "PROOF CHECKING / PEER REVIEWING DESIGN") {
      section = "eightethService";
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/services#${section}`);
  }

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-bg-alt to-bg-main relative overflow-hidden" ref={ref}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="section-container relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-text-primary mb-4">
              Our Services
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-accent-500 to-accent-500 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <div className="h-1 w-20 bg-gradient-to-r from-accent-500 via-accent-500 to-transparent rounded-full" />
            </div>

            <p className="text-text-secondary text-base sm:text-lg mt-4 max-w-2xl mx-auto">
              Comprehensive structural engineering solutions tailored to your needs
            </p>
          </motion.div>

          {/* Desktop Navigation Buttons */}
          <div className="hidden md:flex absolute top-1/2 left-0 right-0 transform -translate-y-1/2 justify-between px-0 sm:px-4 z-10 pointer-events-none">
            <button
              className={cn(
                "custom-prev pointer-events-auto",
                "w-12 h-12 lg:w-14 lg:h-14 rounded-full",
                "bg-white/90 backdrop-blur-md border border-primary-100/30",
                "shadow-glass hover:shadow-glass-lg",
                "flex items-center justify-center",
                "transition-all duration-300 -translate-x-6",
                "group",
                disablePrevButton 
                  ? "opacity-30 cursor-not-allowed" 
                  : "hover:scale-110 hover:bg-accent-500 hover:border-accent-500"
              )}
              onClick={previouSwipe}
            >
              <ChevronLeft className={cn(
                "w-6 h-6 lg:w-7 lg:h-7 transition-colors duration-300",
                disablePrevButton ? "text-text-secondary" : "text-primary group-hover:text-white"
              )} />
            </button>

            <button
              className={cn(
                "custom-next pointer-events-auto",
                "w-12 h-12 lg:w-14 lg:h-14 rounded-full",
                "bg-white/90 backdrop-blur-md border border-primary-100/30",
                "shadow-glass hover:shadow-glass-lg",
                "flex items-center justify-center",
                "transition-all duration-300 translate-x-6",
                "group",
                disableNextButton 
                  ? "opacity-30 cursor-not-allowed" 
                  : "hover:scale-110 hover:bg-accent-500 hover:border-accent-500"
              )}
              onClick={nextSwipe}
            >
              <ChevronRight className={cn(
                "w-6 h-6 lg:w-7 lg:h-7 transition-colors duration-300",
                disableNextButton ? "text-text-secondary" : "text-primary group-hover:text-white"
              )} />
            </button>
          </div>

          {/* Swiper */}
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            modules={[Pagination, Navigation]}
            pagination={{
              type: 'fraction',
              el: '.swiper-pagination-custom'
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev"
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-16 pt-4 px-4"
            onSlideChange={(swiper) => {
              if (swiper.isBeginning) {
                setDisablePrevButton(true);
              } else {
                setDisablePrevButton(false);
              }

              if (swiper.isEnd) {
                setDisableNextButton(true);
              } else {
                setDisableNextButton(false);
              }
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className={cn(
                    "card h-[450px] sm:h-[500px] md:h-[550px] flex flex-col",
                    "shadow-card hover:shadow-card-hover transition-all duration-500",
                    "bg-white/90 backdrop-blur-md border border-primary-100/30",
                    "group/card relative overflow-hidden"
                  )}>
                    {/* Card Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-primary-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    
                    {/* Corner Accents */}
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent-400/20 rounded-tr-xl group-hover/card:border-accent-400/50 transition-colors duration-300" />

                    {/* Image */}
                    <div className="h-40 sm:h-44 md:h-48 overflow-hidden rounded-t-xl relative">
                      <img
                        src={service.src}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                      
                      {/* Floating Number Badge */}
                      <div className={cn(
                        "absolute top-4 right-4 w-10 h-10 rounded-full",
                        "bg-gradient-to-br from-accent-500 to-accent-600",
                        "flex items-center justify-center",
                        "text-white font-bold text-sm shadow-glass",
                        "transform group-hover/card:scale-110 group-hover/card:rotate-12",
                        "transition-all duration-300"
                      )}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative flex-1 p-4 sm:p-5 flex flex-col">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold font-heading text-text-primary mb-2 group-hover/card:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-text-secondary italic mb-3">
                        {service.heading}
                      </p>
                      
                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent mb-3" />
                      
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed text-justify line-clamp-4 flex-1">
                        {service.detail1}
                      </p>

                      {/* Button */}
                      <div className="flex justify-end mt-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => { goToService(service.title) }}
                          className={cn(
                            "group/btn relative px-4 py-2 rounded-full",
                            "text-xs sm:text-sm font-semibold",
                            "bg-gradient-to-r from-primary-500 to-primary-600",
                            "text-white shadow-card",
                            "overflow-hidden transition-all duration-300",
                            "flex items-center gap-2"
                          )}
                        >
                          {/* Button Glow */}
                          <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
                          
                          <span className="relative z-10">Read More</span>
                          <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-400 to-transparent scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination with Glass Effect */}
          <div className={cn(
            "swiper-pagination-custom text-center mt-4",
            "text-text-secondary text-sm sm:text-base font-medium",
            "inline-block px-4 py-2 rounded-full mx-auto",
            "bg-white/60 backdrop-blur-md border border-primary-100/30",
            "shadow-card"
          )} />
        </div>
      </motion.div>
    </div>
  );
}

export default ServiceSection;