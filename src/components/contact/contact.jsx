import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { cn } from "../../lib/utils";
import contactUSBG from '/contact-us.jpg';
import OfficeMap from './officeMap';
import TypeWritter from '../typewritter';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [focusedField, setFocusedField] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative bg-bg-main">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700"
          style={{ 
            backgroundImage: `url(${contactUSBG})`,
            filter: 'brightness(0.6)'
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/30" />

        {/* Animated Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <p className={cn(
            "text-white/90 uppercase tracking-widest mb-2 sm:mb-4",
            "text-sm sm:text-base md:text-lg",
            "animate-fade-in"
          )}>
            Contact Us
          </p>
          
          <div className="animate-in slide-in-from-bottom text-white/90 duration-700">
            <TypeWritter 
              sxProp={{
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 700
              }} 
              text="Get in Touch Now." 
            />
          </div>

          {/* Decorative Line */}
          <div className="mt-4 sm:mt-6 flex justify-center">
            <div className="h-1 w-32 sm:w-40 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12">
          {/* Left Column - Heading & Info Cards */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Main Heading */}
            <div className={cn(
              "transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}>
              <h2 className={cn(
                "font-heading font-bold text-text-primary leading-tight mb-4",
                "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              )}>
                Your voice matters, we're here to listen.
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className={cn(
                "group p-4 sm:p-6 rounded-2xl",
                "bg-white/80 backdrop-blur-sm shadow-card hover:shadow-glass-lg",
                "border border-primary-100/50",
                "transition-all duration-500 hover:-translate-y-1",
                "cursor-pointer",
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              )}
              style={{ transitionDelay: '100ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-full",
                    "bg-primary/10 group-hover:bg-primary",
                    "flex items-center justify-center",
                    "transition-all duration-500",
                    "group-hover:scale-110 group-hover:rotate-6"
                  )}>
                    <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1 text-base sm:text-lg">Email Us</h3>
                    <p className="text-text-secondary text-sm sm:text-base">admin@sai-consultants.com</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className={cn(
                "group p-4 sm:p-6 rounded-2xl",
                "bg-white/80 backdrop-blur-sm shadow-card hover:shadow-glass-lg",
                "border border-primary-100/50",
                "transition-all duration-500 hover:-translate-y-1",
                "cursor-pointer",
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              )}
              style={{ transitionDelay: '200ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-full",
                    "bg-accent/10 group-hover:bg-accent",
                    "flex items-center justify-center",
                    "transition-all duration-500",
                    "group-hover:scale-110 group-hover:rotate-6"
                  )}>
                    <Phone className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1 text-base sm:text-lg">Call Us</h3>
                    <p className="text-text-secondary text-sm sm:text-base">+91 98791 09464</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className={cn(
                "group p-4 sm:p-6 rounded-2xl",
                "bg-white/80 backdrop-blur-sm shadow-card hover:shadow-glass-lg",
                "border border-primary-100/50",
                "transition-all duration-500 hover:-translate-y-1",
                "cursor-pointer",
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              )}
              style={{ transitionDelay: '300ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-full",
                    "bg-secondary/10 group-hover:bg-secondary",
                    "flex items-center justify-center",
                    "transition-all duration-500",
                    "group-hover:scale-110 group-hover:rotate-6"
                  )}>
                    <MapPin className="w-6 h-6 text-secondary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1 text-base sm:text-lg">Visit Us</h3>
                    <p className="text-text-secondary text-sm sm:text-base">20- Ishwarkunj Society, Opp. SMC Sports Complex, Anandmahal road, Adajan, Surat -395009</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div 
            ref={formRef}
            className="lg:col-span-7"
          >
            <div 
              className={cn(
                "p-6 sm:p-8 md:p-10 md:pb-12 rounded-3xl",
                "bg-white/90 backdrop-blur-glass shadow-glass-lg",
                "border border-primary-100/50",
                "transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              {/* Name Field */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-text-primary font-medium mb-2 text-sm sm:text-base">
                  <User className="w-4 h-4 text-primary" />
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="ex. John Doe"
                    required
                    className={cn(
                      "w-full px-4 py-3 sm:py-3.5 rounded-xl",
                      "bg-bg-alt/50 border-2",
                      "text-text-primary placeholder:text-text-secondary/50",
                      "transition-all duration-300",
                      "text-sm sm:text-base",
                      "focus:outline-none focus:bg-white",
                      focusedField === 'name'
                        ? "border-primary shadow-glass"
                        : "border-primary-100 hover:border-primary-200"
                    )}
                  />
                  <div className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent",
                    "transition-all duration-300 rounded-full",
                    focusedField === 'name' ? "w-full" : "w-0"
                  )} />
                </div>
              </div>

              {/* Phone and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                {/* Phone Field */}
                <div>
                  <label className="flex items-center gap-2 text-text-primary font-medium mb-2 text-sm sm:text-base">
                    <Phone className="w-4 h-4 text-accent" />
                    Phone Number
                  </label>
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="ex. 123-456-7890"
                      className={cn(
                        "w-full px-4 py-3 sm:py-3.5 rounded-xl",
                        "bg-bg-alt/50 border-2",
                        "text-text-primary placeholder:text-text-secondary/50",
                        "transition-all duration-300",
                        "text-sm sm:text-base",
                        "focus:outline-none focus:bg-white",
                        focusedField === 'phone'
                          ? "border-accent shadow-glass"
                          : "border-primary-100 hover:border-primary-200"
                      )}
                    />
                    <div className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-primary",
                      "transition-all duration-300 rounded-full",
                      focusedField === 'phone' ? "w-full" : "w-0"
                    )} />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="flex items-center gap-2 text-text-primary font-medium mb-2 text-sm sm:text-base">
                    <Mail className="w-4 h-4 text-secondary" />
                    Email
                  </label>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="ex. example@domain.com"
                      className={cn(
                        "w-full px-4 py-3 sm:py-3.5 rounded-xl",
                        "bg-bg-alt/50 border-2",
                        "text-text-primary placeholder:text-text-secondary/50",
                        "transition-all duration-300",
                        "text-sm sm:text-base",
                        "focus:outline-none focus:bg-white",
                        focusedField === 'email'
                          ? "border-secondary shadow-glass"
                          : "border-primary-100 hover:border-primary-200"
                      )}
                    />
                    <div className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-secondary to-accent",
                      "transition-all duration-300 rounded-full",
                      focusedField === 'email' ? "w-full" : "w-0"
                    )} />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-text-primary font-medium mb-2 text-sm sm:text-base">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your message here..."
                    required
                    rows={5}
                    className={cn(
                      "w-full px-4 py-3 sm:py-3.5 rounded-xl",
                      "bg-bg-alt/50 border-2",
                      "text-text-primary placeholder:text-text-secondary/50",
                      "transition-all duration-300",
                      "text-sm sm:text-base",
                      "focus:outline-none focus:bg-white resize-none",
                      focusedField === 'message'
                        ? "border-primary shadow-glass"
                        : "border-primary-100 hover:border-primary-200"
                    )}
                  />
                  <div className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent",
                    "transition-all duration-300 rounded-full",
                    focusedField === 'message' ? "w-full" : "w-0"
                  )} />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center sm:justify-end">
                <button
                  onClick={handleSubmit}
                  className={cn(
                    "group relative px-8 sm:px-10 py-3 sm:py-4 md:mt-8 rounded-xl",
                    "bg-gradient-to-r from-primary to-primary-600",
                    "text-white font-semibold text-sm sm:text-base",
                    "shadow-lg hover:shadow-glass-lg",
                    "transition-all duration-500",
                    "hover:scale-105 active:scale-95",
                    "flex items-center gap-3",
                    "overflow-hidden",
                    "min-w-[200px] justify-center"
                  )}
                >
                  {/* Animated Background */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-r from-accent to-primary",
                    "opacity-0 group-hover:opacity-100",
                    "transition-opacity duration-500"
                  )} />
                  
                  <span className="relative z-10">Send Message</span>
                  <Send className={cn(
                    "w-5 h-5 relative z-10",
                    "transition-transform duration-500",
                    "group-hover:translate-x-1 group-hover:-translate-y-1"
                  )} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="mb-6 sm:mb-8">
          <h2 className={cn(
            "font-heading font-bold text-text-primary mb-4",
            "text-2xl sm:text-3xl md:text-4xl"
          )}>
            Find Us
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
            Visit our office or reach out to us. We're here to help with all your structural engineering needs.
          </p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>
        
        <div className={cn(
          "rounded-3xl overflow-hidden shadow-glass-lg",
          "border border-primary-100/50",
          "transition-all duration-500 hover:shadow-glass-lg hover:scale-[1.01]"
        )}>
          <OfficeMap />
        </div>
      </div>
    </div>
  );
}

export default Contact;