import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
// import saiLogo from '/Sai Consultants - Logo-cropped.svg';
import saiLogo from '/new_logo-cropped.svg';

const navItems = ["Home", "About", "Projects", "Service", "Contact"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, []);

  function handleNavigation(link) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveItem(link);

    if (link === 'Home') navigate("/");
    else if (link === 'Service') navigate("/services");
    else if (link === 'Projects') navigate("/projects");
    else if (link === 'Contact') navigate("/contact");

    setMenuOpen(false);
    setAboutDropdownOpen(false);
  }

  function aboutNavigation(link) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveItem("About");
    
    if (link === 'about-founder') navigate("/founder");
    else if (link === 'about-company') navigate("/company");

    setMenuOpen(false);
    setAboutDropdownOpen(false);
  }

  return (
    <>
      {/* Header with Glassmorphism */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          scrolled 
            ? "bg-white/80 backdrop-blur-glass shadow-glass py-1.5 md:py-2" 
            : "bg-white/70 backdrop-blur-md shadow-sm py-2 md:py-2.5"
        )}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo with Hover Animation */}
            <div className="flex-shrink-0 group">
              <img 
                src={saiLogo} 
                alt="Sai Consultants Logo" 
                className={cn(
                  "object-contain cursor-pointer transition-all duration-500 ease-out",
                  "group-hover:scale-105 group-hover:drop-shadow-lg",
                  scrolled 
                    ? "h-10 sm:h-12 md:h-14" 
                    : "h-12 sm:h-14 md:h-16 lg:h-18"
                )}
                onClick={() => {
                  navigate("/");
                  setActiveItem("Home");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2 lg:gap-3">
              {navItems.map((item) => (
                item === "About" ? (
                  <div 
                    key={item} 
                    className="relative group"
                    onMouseEnter={() => setAboutDropdownOpen(true)}
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setActiveItem("About")}
                      className={cn(
                        "px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300",
                        "flex items-center gap-1.5 relative text-sm lg:text-base",
                        "text-text-primary hover:text-primary",
                        "before:absolute before:inset-0 before:rounded-lg before:bg-primary-50",
                        "before:scale-0 before:opacity-0 before:transition-all before:duration-300",
                        "hover:before:scale-100 hover:before:opacity-100",
                        "overflow-hidden",
                        activeItem === "About" && "text-primary before:scale-100 before:opacity-100"
                      )}
                    >
                      <span className="relative z-10">{item}</span>
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-300 relative z-10",
                        aboutDropdownOpen && "rotate-180"
                      )} />
                    </button>
                    
                    {/* Dropdown Menu with Glassmorphism */}
                    <div className={cn(
                      "absolute top-full left-0 mt-2 w-56 rounded-xl overflow-hidden",
                      "bg-white/90 backdrop-blur-glass border border-primary-100/50",
                      "shadow-glass-lg",
                      "transition-all duration-300 origin-top",
                      aboutDropdownOpen 
                        ? "opacity-100 scale-100 translate-y-0 visible" 
                        : "opacity-0 scale-95 -translate-y-2 invisible"
                    )}>
                      <button
                        onClick={() => aboutNavigation("about-founder")}
                        className={cn(
                          "block w-full text-left px-5 py-3.5 text-text-primary",
                          "hover:bg-primary-50/80 hover:text-primary transition-all duration-300",
                          "font-medium relative overflow-hidden group/item",
                          "before:absolute before:left-0 before:top-0 before:h-full before:w-1",
                          "before:bg-primary before:scale-y-0 before:transition-transform before:duration-300",
                          "hover:before:scale-y-100"
                        )}
                      >
                        <span className="relative z-10">About Founder</span>
                      </button>
                      <div className="h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
                      <button
                        onClick={() => aboutNavigation("about-company")}
                        className={cn(
                          "block w-full text-left px-5 py-3.5 text-text-primary",
                          "hover:bg-primary-50/80 hover:text-primary transition-all duration-300",
                          "font-medium relative overflow-hidden group/item",
                          "before:absolute before:left-0 before:top-0 before:h-full before:w-1",
                          "before:bg-primary before:scale-y-0 before:transition-transform before:duration-300",
                          "hover:before:scale-y-100"
                        )}
                      >
                        <span className="relative z-10">About Company</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    key={item}
                    onClick={() => handleNavigation(item)}
                    className={cn(
                      "px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300",
                      "text-sm lg:text-base relative overflow-hidden",
                      "text-text-primary hover:text-primary",
                      "before:absolute before:inset-0 before:rounded-lg before:bg-primary-50",
                      "before:scale-0 before:opacity-0 before:transition-all before:duration-300",
                      "hover:before:scale-100 hover:before:opacity-100",
                      activeItem === item && "text-primary before:scale-100 before:opacity-100"
                    )}
                  >
                    <span className="relative z-10">{item}</span>
                  </button>
                )
              ))}
            </nav>

            {/* Mobile Menu Button with Animation */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={cn(
                "md:hidden p-2 rounded-lg transition-all duration-300",
                "hover:bg-primary-50/80 hover:scale-110 active:scale-95",
                "relative overflow-hidden"
              )}
              aria-label="Toggle menu"
            >
              <div className="relative z-10">
                {menuOpen ? (
                  <X className="w-6 h-6 text-text-primary animate-in spin-in-90 duration-300" />
                ) : (
                  <Menu className="w-6 h-6 text-text-primary animate-in spin-in-90 duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay with Blur */}
      {menuOpen && (
        <div 
          className={cn(
            "fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm",
            "animate-in fade-in duration-300"
          )}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Side Menu with Glassmorphism */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[80%] max-w-sm z-50 md:hidden",
          "bg-white/95 backdrop-blur-glass shadow-glass-lg border-l border-primary-100/50",
          "transform transition-all duration-500 ease-out",
          "overflow-y-auto",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Mobile Menu Header with Glassmorphism */}
        <div className="p-6 border-b border-primary-100/50 bg-gradient-to-r from-primary-50/30 to-transparent">
          <img 
            src={saiLogo} 
            alt="Sai Consultants Logo" 
            className="h-16 object-contain drop-shadow-lg"
          />
        </div>

        {/* Mobile Menu Items */}
        <div className="p-6 space-y-2">
          {navItems.map((item, index) => (
            <div 
              key={item} 
              className={cn(
                "animate-in slide-in-from-right duration-300",
                `animation-delay-${index * 50}`
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item === "About" ? (
                <div>
                  <button
                    onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                    className={cn(
                      "w-full text-left text-text-primary text-lg font-medium py-3 px-4 rounded-lg",
                      "transition-all duration-300 relative overflow-hidden",
                      "flex items-center justify-between group",
                      "before:absolute before:inset-0 before:rounded-lg before:bg-primary-50/80",
                      "before:scale-x-0 before:origin-left before:transition-transform before:duration-300",
                      "hover:before:scale-x-100",
                      aboutDropdownOpen && "before:scale-x-100 text-primary"
                    )}
                  >
                    <span className="relative z-10">{item}</span>
                    <ChevronDown className={cn(
                      "w-5 h-5 transition-transform duration-300 relative z-10",
                      aboutDropdownOpen && "rotate-180"
                    )} />
                  </button>
                  <div className={cn(
                    "ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300",
                    aboutDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <button
                      onClick={() => aboutNavigation("about-founder")}
                      className={cn(
                        "block w-full text-left text-text-secondary py-2.5 px-4 rounded-lg",
                        "transition-all duration-300 relative overflow-hidden group",
                        "hover:text-primary hover:pl-6",
                        "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2",
                        "before:w-2 before:h-2 before:rounded-full before:bg-primary",
                        "before:scale-0 before:transition-transform before:duration-300",
                        "hover:before:scale-100"
                      )}
                    >
                      <span className="relative z-10">About Founder</span>
                    </button>
                    <button
                      onClick={() => aboutNavigation("about-company")}
                      className={cn(
                        "block w-full text-left text-text-secondary py-2.5 px-4 rounded-lg",
                        "transition-all duration-300 relative overflow-hidden group",
                        "hover:text-primary hover:pl-6",
                        "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2",
                        "before:w-2 before:h-2 before:rounded-full before:bg-primary",
                        "before:scale-0 before:transition-transform before:duration-300",
                        "hover:before:scale-100"
                      )}
                    >
                      <span className="relative z-10">About Company</span>
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleNavigation(item)}
                  className={cn(
                    "w-full text-left text-text-primary text-lg font-medium py-3 px-4 rounded-lg",
                    "transition-all duration-300 relative overflow-hidden",
                    "before:absolute before:inset-0 before:rounded-lg before:bg-primary-50/80",
                    "before:scale-x-0 before:origin-left before:transition-transform before:duration-300",
                    "hover:before:scale-x-100",
                    activeItem === item && "text-primary before:scale-x-100"
                  )}
                >
                  <span className="relative z-10">{item}</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;