import OFFICE_GATE from '/OFFICE_GATE_wsky-wb.png';

function AboutFounder() {
  const founderDetails = {
    image: '/founder2.jpg',
    name: 'Er. Hiren G. Desai',
    position: 'Founder & MD',
    work: 'Principal Structural Design Engineer',
    qualification:
      'Bachelor of Civil Engineering (1986) & Master of Engineering in Structural Engineering (2000), SVNIT, Surat.',
    details:
      "As the founder of Sai Consultants since 1990, he has laid the foundation for his expertise with decades of practical experience, leading the firm to pioneer modern methods in Structural Design and earning trust across various industries. Under his leadership, the firm earned a reputation for engineering excellence, innovation, and client trust. Known for his meticulous approach, technical presentation, and problem-solving capabilities. He has been instrumental in introducing advanced design methodologies, value engineering, and quality management systems within the organization. Beyond project delivery, he is committed to mentoring young engineers, fostering a culture of continuous learning, and promoting sustainable construction practices. His Vision, Integrity, and Dedication continue to guide Sai Consultants toward achieving higher benchmarks in the Structural Consultancy domain.",
  };

  return (
    <div className="mb-12 sm:mb-16 md:mb-20 bg-bg-main">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[93vh] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${OFFICE_GATE})`,
          }}
        />

        {/* Title */}
        <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white text-center px-4 tracking-wide text-shadow-lg">
          About the Founder
        </h1>
      </div>

      {/* Content Section */}
      <div className="section-container">
        <div className="max-w-7xl mx-auto -mt-12 sm:-mt-16 md:-mt-20 relative z-10">
          <div className="card-glass p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-center">
              {/* Image */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative">
                  <img
                    src={founderDetails.image}
                    alt={founderDetails.name}
                    className="w-[80%] sm:w-[70%] md:w-full max-w-[350px] sm:max-w-[400px] md:max-w-full rounded-2xl object-cover shadow-glass-lg"
                  />
                  {/* Decorative Border */}
                  <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl -z-10"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="md:col-span-7 space-y-4 sm:space-y-5">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-2">
                    {founderDetails.name}
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-1">
                    {founderDetails.position}
                  </p>
                  <p className="text-base sm:text-lg text-text-secondary italic">
                    {founderDetails.work}
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-4 sm:my-6"></div>

                <div className="space-y-4">
                  <div className="bg-primary-50/50 rounded-lg p-4 sm:p-5 border-l-4 border-primary">
                    <p className="text-sm sm:text-base md:text-lg text-text-primary font-medium">
                      {founderDetails.qualification}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed text-justify">
                    {founderDetails.details}
                  </p>
                </div>

                {/* Achievements Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6">
                  <div className="text-center p-3 sm:p-4 bg-bg-alt rounded-lg">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">35+</div>
                    <div className="text-xs sm:text-sm text-text-secondary mt-1">Years Experience</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-bg-alt rounded-lg">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">4000+</div>
                    <div className="text-xs sm:text-sm text-text-secondary mt-1">Projects</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-bg-alt rounded-lg col-span-2 sm:col-span-1">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">1990</div>
                    <div className="text-xs sm:text-sm text-text-secondary mt-1">Established</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutFounder;