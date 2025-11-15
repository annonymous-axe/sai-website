import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { TrendingUp, MapPin, Users } from "lucide-react";
import { cn } from "../../lib/utils";

function KPISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counter, setCounter] = useState(true);

  const kpis = [
    { 
      title: "Number of projects across India", 
      value: 3500,
      icon: TrendingUp,
      color: "from-accent-500 to-accent-600",
      bgColor: "bg-accent-500/5",
      borderColor: "border-accent-400/30"
    },
    { 
      title: "Number of Cities", 
      value: 20,
      icon: MapPin,
      color: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-500/5",
      borderColor: "border-primary-400/30"
    },
    { 
      title: "Team Members", 
      value: 35,
      icon: Users,
      color: "from-secondary-500 to-secondary-600",
      bgColor: "bg-secondary-500/5",
      borderColor: "border-secondary-400/30"
    },
  ];

  function stopCounter() {
    setCounter(false);
  }

  return (
    <div className="py-12 sm:py-16 md:py-20 relative overflow-hidden" ref={ref}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
            Our Achievements in Numbers
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-accent-500 to-accent-500 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-r from-accent-500 via-accent-500 to-transparent rounded-full" />
          </div>

          <p className="text-text-secondary text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Delivering excellence across India with innovative solutions
          </p>
        </motion.div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className={cn(
                  "card text-center h-full",
                  "bg-white/80 backdrop-blur-md border border-primary-100/30",
                  "shadow-card hover:shadow-card-hover",
                  "transition-all duration-500",
                  "hover:scale-105 hover:-translate-y-2",
                  "relative overflow-hidden"
                )}>
                  {/* Background Glow Effect */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    kpi.bgColor,
                    "blur-2xl"
                  )} />

                  {/* Decorative Corner Accents */}
                  <div className={cn(
                    "absolute top-0 right-0 w-20 h-20",
                    "border-t-2 border-r-2 rounded-tr-xl",
                    kpi.borderColor,
                    "group-hover:border-accent-400/50 transition-colors duration-300"
                  )} />
                  <div className={cn(
                    "absolute bottom-0 left-0 w-20 h-20",
                    "border-b-2 border-l-2 rounded-bl-xl",
                    kpi.borderColor,
                    "group-hover:border-accent-400/50 transition-colors duration-300"
                  )} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Gradient Background */}
                    <div className="flex justify-center mb-4 sm:mb-6">
                      <div className={cn(
                        "w-14 h-14 sm:w-16 sm:h-16 rounded-xl",
                        "bg-gradient-to-br", kpi.color,
                        "flex items-center justify-center",
                        "shadow-glass transform group-hover:scale-110 group-hover:rotate-6",
                        "transition-all duration-500"
                      )}>
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </div>

                    {/* Counter */}
                    <div className="mb-3 sm:mb-4">
                      <div className={cn(
                        "text-4xl sm:text-5xl md:text-6xl font-bold font-heading",
                        "bg-gradient-to-br bg-clip-text text-transparent",
                        kpi.color
                      )}>
                        {counter ? (
                          <CountUp
                            end={kpi.value}
                            duration={5}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                            onEnd={stopCounter}
                          />
                        ) : (
                          <CountUp start={kpi.value} end={kpi.value} />
                        )}
                        <span className="text-accent-500">+</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary px-2 leading-tight mb-4">
                      {kpi.title}
                    </h3>

                    {/* Animated Progress Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                      className="mx-auto max-w-[80%]"
                    >
                      <div className={cn(
                        "h-1 rounded-full bg-gradient-to-r",
                        kpi.color,
                        "shadow-glass"
                      )} />
                    </motion.div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-accent-400/60 rounded-full animate-pulse"
                        style={{
                          top: `${15 + i * 25}%`,
                          right: `${10 + i * 20}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: `${2 + i * 0.5}s`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={cn(
                    "absolute bottom-0 left-0 right-0 h-1",
                    "bg-gradient-to-r from-transparent via-accent-400 to-transparent",
                    "scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  )} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note with Glass Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-6 sm:mt-8"
        >
          <div className={cn(
            "inline-flex items-center gap-2",
            "px-4 sm:px-6 py-2 sm:py-3 rounded-full",
            "bg-white/60 backdrop-blur-md border border-primary-100/30",
            "shadow-card"
          )}>
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            <p className="text-xs sm:text-sm text-text-secondary font-medium">
              Data as of {new Date().getFullYear()}
            </p>
          </div>
        </motion.div>

        {/* Additional Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { label: "Years Experience", value: "25+", color: "from-accent-500 to-accent-600" },
            { label: "Client Satisfaction", value: "98%", color: "from-primary-500 to-primary-600" },
            { label: "Awards Won", value: "15+", color: "from-secondary-500 to-secondary-600" },
            { label: "Industry Recognition", value: "Top 10", color: "from-accent-600 to-primary-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className={cn(
                "bg-gradient-to-br from-primary-50/80 to-accent-50/80",
                "backdrop-blur-sm rounded-xl p-4 sm:p-5",
                "border border-primary-100/50",
                "text-center hover:shadow-card hover:scale-105",
                "transition-all duration-300 group/stat"
              )}
            >
              <div className={cn(
                "text-2xl sm:text-3xl font-bold mb-1",
                "bg-gradient-to-br bg-clip-text text-transparent",
                stat.color,
                "group-hover/stat:scale-110 transition-transform duration-300"
              )}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-text-secondary font-medium leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default KPISection;