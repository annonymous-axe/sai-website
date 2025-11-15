import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronUp, Shield, DollarSign, Zap, Target } from "lucide-react";
import { cn } from "../../lib/utils";
import PlanningImage from '/insights.jfif';

function ParagraphCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showMore, setShowMore] = useState(false);

  const features = [
    { label: "Safety", icon: Shield, color: "from-primary-500 to-primary-600" },
    { label: "Economy", icon: DollarSign, color: "from-accent-500 to-accent-600" },
    { label: "Durability", icon: Zap, color: "from-secondary-500 to-secondary-600" },
    { label: "Serviceability", icon: Target, color: "from-primary-600 to-accent-500" },
  ];

  return (
    <div className="py-8 sm:py-12 md:py-16 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <div className={cn(
          "card max-w-[95%] sm:max-w-[90%] md:max-w-7xl mx-auto",
          "relative overflow-hidden group/card",
          "bg-white/80 backdrop-blur-md border border-primary-100/30",
          "shadow-glass hover:shadow-glass-lg transition-all duration-500"
        )}>
          {/* Card Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl group-hover/card:scale-110 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl group-hover/card:scale-110 transition-transform duration-700" />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10">
            {/* Title Section */}
            <div className="md:col-span-12">
              <div className="text-center">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-primary mb-4"
                >
                  Insight of Structural Engineering
                </motion.h2>

                {/* Decorative Line */}
                <div className="flex items-center justify-center gap-3">
                  <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-accent-500 to-accent-500 rounded-full" />
                  <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                  <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-accent-500 via-accent-500 to-transparent rounded-full" />
                </div>
              </div>
            </div>

            {/* Image Section - Desktop Only */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:block md:col-span-5"
            >
              <div className="relative group/img h-full">
                {/* Image Container */}
                <div className={cn(
                  "relative rounded-2xl overflow-hidden h-64 md:h-80 lg:h-96",
                  "border-2 border-primary-200/40 shadow-card",
                  "group-hover/img:border-accent-400/50 transition-all duration-500"
                )}>
                  <img
                    src={PlanningImage}
                    alt="Structural Engineering Planning"
                    className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating Accents */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500/20 rounded-full blur-2xl group-hover/img:scale-150 transition-transform duration-500" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl group-hover/img:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>

            {/* Text Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:col-span-7 space-y-6"
            >
              {/* First Paragraph */}
              <div className={cn(
                "relative bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm",
                "rounded-xl p-4 sm:p-5 border border-primary-100/30",
                "shadow-card hover:shadow-card-hover transition-all duration-300"
              )}>
                <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed text-justify">
                  Structural Engineering is an Art & Science of Designing Structures with Safety,
                  Economy, Durability & Serviceability. The end product shall be such that it should
                  cater all above mentioned criterias with minimal maintenance for considerable period
                  of time. The entire exercise requires conceptual thinking based on Structural Engineering
                  principles as well as acceptable behavior & performance of the building during
                  normal functional usage as well as during extreme catastrophic events like Earthquake,
                  Cyclone etc. adhering to the latest Codal provisions.
                </p>
              </div>

              {/* Read More/Less Button */}
              <div className="flex justify-center sm:justify-end">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className={cn(
                    "group/btn relative px-4 sm:px-6 py-2 sm:py-2.5",
                    "border-2 border-text-primary text-text-primary rounded-lg",
                    "hover:bg-text-primary hover:text-white",
                    "transition-all duration-300 overflow-hidden",
                    "flex items-center gap-2 text-xs sm:text-sm font-semibold",
                    showMore && "hidden"
                  )}
                >
                  {/* Hover Background */}
                  <span className="absolute inset-0 bg-text-primary scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="relative z-10">Read More</span>
                  <ChevronDown className="w-4 h-4 relative z-10 group-hover/btn:translate-y-0.5 transition-transform duration-300" />
                </button>
              </div>

              {/* Extended Content */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={showMore ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="overflow-hidden space-y-6"
              >
                {showMore && (
                  <>
                    {/* Second Paragraph */}
                    <div className={cn(
                      "relative bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm",
                      "rounded-xl p-4 sm:p-5 border border-primary-100/30",
                      "shadow-card hover:shadow-card-hover transition-all duration-300"
                    )}>
                      <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed text-justify">
                        The role of a structural engineer extends beyond calculations and drawings. It involves 
                        understanding the architectural intent, coordinating with multiple disciplines, and ensuring 
                        that the structure not only meets code requirements but also provides long-term value to 
                        stakeholders. Modern structural engineering leverages advanced software, innovative materials, 
                        and sustainable practices to create buildings that are resilient, efficient, and environmentally 
                        responsible.
                      </p>
                    </div>

                    {/* Read Less Button */}
                    <div className="flex justify-center sm:justify-end">
                      <button
                        onClick={() => setShowMore(false)}
                        className={cn(
                          "group/btn relative px-4 sm:px-6 py-2 sm:py-2.5",
                          "border-2 border-text-primary text-text-primary rounded-lg",
                          "hover:bg-text-primary hover:text-white",
                          "transition-all duration-300 overflow-hidden",
                          "flex items-center gap-2 text-xs sm:text-sm font-semibold"
                        )}
                      >
                        <span className="absolute inset-0 bg-text-primary scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
                        <span className="relative z-10">Read Less</span>
                        <ChevronUp className="w-4 h-4 relative z-10 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                      </button>
                    </div>
                  </>
                )}
              </motion.div>

              {/* Feature Icons Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className={cn(
                        "relative bg-gradient-to-br from-primary-50/80 to-accent-50/80",
                        "backdrop-blur-sm rounded-xl p-3 sm:p-4",
                        "border border-primary-100/50",
                        "hover:shadow-card hover:scale-105",
                        "transition-all duration-300 group/feature"
                      )}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className={cn(
                          "w-8 h-8 sm:w-10 sm:h-10 rounded-lg",
                          "bg-gradient-to-br", feature.color,
                          "flex items-center justify-center",
                          "group-hover/feature:scale-110 transition-transform duration-300"
                        )}>
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <span className="font-semibold text-text-primary text-xs sm:text-sm">
                          {feature.label}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
        </div>
      </motion.div>

      {/* Scroll Anchor */}
      <div id="service-section" className="h-0" />
    </div>
  );
}

export default ParagraphCard;