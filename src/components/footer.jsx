import { Facebook, Linkedin, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Footer() {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function contactUs() {
    window.scrollTo({
      top: 665,
      behavior: 'smooth'
    });
    navigate("/contact");
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  return (
    <footer className="relative bg-gradient-to-br from-secondary-800 via-secondary-700 to-primary-800 text-white mt-12 sm:mt-16 md:mt-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-300 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Animated Wave Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-50" />
      
      <div className="relative section-container py-8 sm:py-12 md:py-16">
        {/* Hire Us Section with Glass Effect */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 relative">
          <div className="inline-block relative group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-accent-500/20 rounded-2xl blur-2xl scale-95 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-glass-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-3 sm:mb-4 bg-gradient-to-r from-white via-accent-200 to-white bg-clip-text text-transparent animate-fade-in">
                Have Any Project in Mind?
              </h2>
              <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">
                We are eager to listen to your thoughts.
              </p>
              <button 
                onClick={contactUs}
                className="group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glass"
              >
                {/* Animated Background */}
                <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                {/* Border */}
                <span className="absolute inset-0 border-2 border-white/20 rounded-lg group-hover:border-white/40 transition-colors duration-300" />
                
                {/* Text */}
                <span className="relative text-white font-semibold">Contact Us</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Contact Section */}
          <div className="space-y-4 group">
            <h3 className="text-lg sm:text-xl font-bold font-heading mb-4 sm:mb-6 relative inline-block">
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-400 to-transparent transform origin-left transition-transform duration-300 group-hover:scale-x-110" />
            </h3>
            
            <div className="space-y-3">
              <a 
                href="tel:+919879109464"
                className="flex items-start gap-3 group/item transition-all duration-300 hover:translate-x-2"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group-hover/item:bg-accent-500/20 group-hover/item:border-accent-400/30 transition-all duration-300">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm sm:text-base text-white/80 group-hover/item:text-white transition-colors duration-300">
                  +91 98791 09464
                </span>
              </a>

              <a 
                href="tel:+916354600480"
                className="flex items-start gap-3 group/item transition-all duration-300 hover:translate-x-2"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group-hover/item:bg-accent-500/20 group-hover/item:border-accent-400/30 transition-all duration-300">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm sm:text-base text-white/80 group-hover/item:text-white transition-colors duration-300">
                  +91 63546 00480
                </span>
              </a>

              <a 
                href="mailto:admin@sai-consultants.com"
                className="flex items-start gap-3 group/item transition-all duration-300 hover:translate-x-2"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group-hover/item:bg-accent-500/20 group-hover/item:border-accent-400/30 transition-all duration-300">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm sm:text-base break-words text-white/80 group-hover/item:text-white transition-colors duration-300">
                  admin@sai-consultants.com
                </span>
              </a>

              <a 
                href="https://maps.google.com/?q=20-Ishwarkunj+Society+Opp+SMC+Sports+Complex+Anandmahal+road+Adajan+Surat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group/item transition-all duration-300 hover:translate-x-2"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group-hover/item:bg-accent-500/20 group-hover/item:border-accent-400/30 transition-all duration-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm sm:text-base text-white/80 group-hover/item:text-white transition-colors duration-300">
                  20- Ishwarkunj Society, Opp. SMC Sports Complex, Anandmahal road, Adajan, Surat -395009
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left sm:text-center group">
            <h3 className="text-lg sm:text-xl font-bold font-heading mb-4 sm:mb-6 relative inline-block">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-400 to-transparent transform origin-left transition-transform duration-300 group-hover:scale-x-110" />
            </h3>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a 
                href="/" 
                className="group/link relative text-sm sm:text-base text-white/80 hover:text-white transition-all duration-300 inline-block"
              >
                <span className="relative z-10">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 group-hover/link:w-full transition-all duration-300" />
              </a>
              <a 
                href="/services" 
                className="group/link relative text-sm sm:text-base text-white/80 hover:text-white transition-all duration-300 inline-block"
              >
                <span className="relative z-10">Services</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 group-hover/link:w-full transition-all duration-300" />
              </a>
              <a 
                href="/company" 
                className="group/link relative text-sm sm:text-base text-white/80 hover:text-white transition-all duration-300 inline-block"
              >
                <span className="relative z-10">About</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 group-hover/link:w-full transition-all duration-300" />
              </a>
              <a 
                href="/contact" 
                className="group/link relative text-sm sm:text-base text-white/80 hover:text-white transition-all duration-300 inline-block"
              >
                <span className="relative z-10">Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 group-hover/link:w-full transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="text-left sm:text-center lg:text-left group">
            <h3 className="text-lg sm:text-xl font-bold font-heading mb-4 sm:mb-6 relative inline-block">
              <span className="relative z-10">Follow Us</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-400 to-transparent transform origin-left transition-transform duration-300 group-hover:scale-x-110" />
            </h3>
            <div className="flex gap-3 sm:gap-4 justify-start sm:justify-center lg:justify-start">
              <a 
                href="https://www.facebook.com/share/1VYEpx18D5/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-400/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 overflow-hidden"
                aria-label="Facebook"
              >
                {/* Hover Background */}
                <span className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-600 scale-0 group-hover/social:scale-100 transition-transform duration-300" />
                
                {/* Icon */}
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover/social:scale-110 transition-transform duration-300" />
                
                {/* Ripple Effect */}
                <span className="absolute inset-0 rounded-full border-2 border-accent-400 scale-100 opacity-0 group-hover/social:scale-150 group-hover/social:opacity-100 transition-all duration-500" />
              </a>
              
              <a 
                href="#"
                className="group/social relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-400/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 overflow-hidden"
                aria-label="LinkedIn"
              >
                {/* Hover Background */}
                <span className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-600 scale-0 group-hover/social:scale-100 transition-transform duration-300" />
                
                {/* Icon */}
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover/social:scale-110 transition-transform duration-300" />
                
                {/* Ripple Effect */}
                <span className="absolute inset-0 rounded-full border-2 border-accent-400 scale-100 opacity-0 group-hover/social:scale-150 group-hover/social:opacity-100 transition-all duration-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Glass Effect */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-white/60 text-center sm:text-left">
              Copyright © {new Date().getFullYear()} Sai Consultants. All rights reserved.
            </p>
            
            {/* Optional: Add company tagline or additional info */}
            <p className="text-xs text-white/40 text-center sm:text-right">
              Designed with passion
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full",
          "bg-gradient-to-br from-accent-500 to-accent-600 text-white",
          "shadow-glass-lg border border-white/20",
          "flex items-center justify-center",
          "transition-all duration-300 hover:scale-110 hover:-translate-y-1",
          "group overflow-hidden",
          showScrollTop 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        {/* Hover Glow */}
        <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
        
        {/* Icon */}
        <ArrowUp className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Ripple */}
        <span className="absolute inset-0 rounded-full border-2 border-white/50 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-500" />
      </button>
    </footer>
  );
}

// Helper function for className merging (if not already available)
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default Footer;