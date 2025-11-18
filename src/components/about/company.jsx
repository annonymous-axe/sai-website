import { useRef, useEffect } from 'react';
import WhyUS from '/idae_for_success.jpg';
import OFFICE_GATE from '/OFFICE_GATE_wsky-wb.png';
import { motion, useInView, useScroll } from 'framer-motion';

function AboutCompany() {
  const { scrollYProgress } = useScroll();

  const firstCardRef = useRef(null);
  const firstCardIsInView = useInView(firstCardRef, { once: true, margin: "-10px" });

  const secondCardRef = useRef(null);
  const secondCardIsInView = useInView(secondCardRef, { once: true, margin: "-10px" });

  const thirdCardRef = useRef(null);
  const thirdCardIsInView = useInView(thirdCardRef, { once: true, margin: "-10px" });

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="mb-12 sm:mb-16 md:mb-20 bg-bg-main">
      {/* Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 80,
          left: 0,
          right: 0,
          height: 6,
          backgroundColor: '#1F4E79',
          transformOrigin: '0%',
          zIndex: 1000
        }}
      />

      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[93vh] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.6]"
          style={{
            backgroundImage: `url(${OFFICE_GATE})`,
          }}
        />

        {/* Title */}
        <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white text-center px-4 tracking-wide text-shadow-lg">
          About Company
        </h1>
      </div>

      {/* Content Section */}
      <div className="section-container py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12">
          {/* Left Column - Text Content */}
          <div className="md:col-span-8 space-y-8 sm:space-y-10 md:space-y-12">
            {/* About Sai Consultants */}
            <motion.div
              ref={firstCardRef}
              initial={{ opacity: 0, y: 50 }}
              animate={firstCardIsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeIn" }}
              className="card"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4 sm:mb-6">
                About Sai Consultants
              </h2>

              <div className="space-y-4 text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed text-justify">
                <p>
                  Sai Consultants is a leading Structural Engineering Consultancy firm established in 1990, specializing in comprehensive structural design, analysis, and consultancy services. With over 35 years of experience, we have successfully delivered more than 4000 projects across various sectors including Residential, Commercial, Institutional, Industrial, and Infrastructure. Our team of highly qualified and experienced engineers is committed to providing innovative, cost-effective, and sustainable structural solutions that meet the highest standards of safety, quality, and compliance.
                </p>
                <p>
                  Our expertise spans the entire spectrum of structural engineering services, from conceptual design and detailed engineering to value engineering, retrofitting, repair & rehabilitation, and non-destructive testing. We pride ourselves on our ability to deliver projects on time, within budget, and to the complete satisfaction of our clients. Our commitment to excellence is reflected in our track record of successful projects and our reputation for reliability and professionalism.
                </p>
              </div>
            </motion.div>

            {/* Vision & Mission */}
            <motion.div
              ref={secondCardRef}
              initial={{ opacity: 0, y: 50 }}
              animate={secondCardIsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
              className="card bg-gradient-to-br from-primary-50 to-bg-card"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4 sm:mb-6">
                Our Vision & Mission
              </h2>

              <div className="space-y-4 text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed text-justify">
                <div className="border-l-4 border-primary pl-4 sm:pl-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">Vision</h3>
                  <p>
                    Our vision is to be the most trusted and preferred structural engineering consultancy firm in India, recognized for our excellence in engineering, innovation, and client satisfaction. We strive to set new benchmarks in the industry by continuously improving our processes, adopting the latest technologies, and fostering a culture of continuous learning and development.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4 sm:pl-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-accent mb-2">Mission</h3>
                  <p>
                    Our mission is to provide world-class structural engineering solutions that enhance the safety, functionality, and sustainability of built environments. We are committed to delivering projects that not only meet but exceed our clients' expectations, while contributing to the development of a safer and more sustainable future for our communities.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <div className="md:col-span-4">
            <motion.div
              ref={thirdCardRef}
              initial={{ opacity: 0, y: 50 }}
              animate={thirdCardIsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeIn" }}
              className="sticky top-24"
            >
              <div className="card p-0 overflow-hidden group">
                <img
                  src={WhyUS}
                  alt="Why Choose Us"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4 sm:p-6 bg-gradient-to-t from-primary/10 to-transparent">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary">
                    Why Choose Us?
                  </h3>
                  <ul className="mt-3 sm:mt-4 space-y-2 text-xs sm:text-sm text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>35+ years of expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>4000+ successful projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Innovative engineering solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Client-focused approach</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-center text-text-primary mb-8 sm:mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Excellence", description: "Commitment to delivering the highest quality in every project", icon: "🏆" },
              { title: "Innovation", description: "Embracing new technologies and methodologies", icon: "💡" },
              { title: "Integrity", description: "Operating with transparency and ethical standards", icon: "🤝" },
              { title: "Sustainability", description: "Building for a better, greener future", icon: "🌱" }
            ].map((value, index) => (
              <div
                key={index}
                className="card text-center group hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutCompany;