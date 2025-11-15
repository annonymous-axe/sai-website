import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

function ProjectList({ openDetail }) {
  const [showDetail, setShowDetail] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loadedImages, setLoadedImages] = useState({});

  const categories = ["All", "Bunglow", "Commercial", "High Rise", "Hospital", "Institutional", "Offices", "Town Ship"];

  const filteredItems =
    selectedCategory === "All"
      ? itemData
      : itemData.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8">
      {/* Category Filters */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 flex-wrap mb-6 sm:mb-8 md:mb-10">
        {categories.map((cat, index) => (
          <button
            key={cat + index}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full font-semibold",
              "text-xs sm:text-sm md:text-base",
              "transition-all duration-300 ease-out",
              "border-2 relative overflow-hidden group",
              "transform hover:scale-105 active:scale-95",
              selectedCategory === cat
                ? "bg-primary text-text-light border-primary shadow-lg scale-105"
                : "bg-white text-text-primary border-primary-200 hover:border-primary shadow-card hover:shadow-card-hover",
              "before:absolute before:inset-0 before:bg-primary-50",
              "before:scale-x-0 before:origin-left before:transition-transform before:duration-300",
              "hover:before:scale-x-100",
              selectedCategory !== cat && "hover:text-primary"
            )}
            style={{
              animationDelay: `${index * 50}ms`
            }}
          >
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      {/* Category Title */}
      <h2 className={cn(
        "text-center mb-4 sm:mb-6 font-heading font-semibold text-text-primary",
        "text-xl sm:text-2xl md:text-3xl",
        "animate-in fade-in duration-500"
      )}>
        {selectedCategory === "All" ? "All Projects" : selectedCategory}
      </h2>

      {/* Divider */}
      <div className="w-full max-w-[60%] mx-auto mb-6 sm:mb-8 md:mb-10 h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent" />

      {/* Image Grid */}
      <div className={cn(
        "grid gap-4 sm:gap-5 md:gap-6 lg:gap-8",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        "px-2 sm:px-4 md:px-6"
      )}>
        {filteredItems.map((item, index) => (
          <div
            key={item.title + index}
            className={cn(
              "group relative overflow-hidden rounded-xl sm:rounded-2xl",
              "bg-white shadow-card hover:shadow-glass-lg",
              "transition-all duration-500 ease-out",
              "hover:-translate-y-2 hover:scale-[1.02]",
              "cursor-pointer",
              "animate-in fade-in duration-500",
              "border border-primary-100/20"
            )}
            style={{
              animationDelay: `${index * 100}ms`,
              minHeight: '280px'
            }}
            onClick={() => openDetail(item)}
          >
            {/* Image Container - Fixed Aspect Ratio */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-bg-alt">
              {/* Skeleton Loader */}
              {!loadedImages[index] && (
                <div className="absolute inset-0 bg-gradient-to-r from-bg-alt via-primary-50 to-bg-alt animate-pulse" />
              )}
              
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                onLoad={() => handleImageLoad(index)}
                className={cn(
                  "w-full h-full object-cover",
                  "transition-all duration-700 ease-out",
                  "group-hover:scale-110 group-hover:rotate-1",
                  loadedImages[index] ? "opacity-100" : "opacity-0"
                )}
              />

              {/* Gradient Overlay */}
              <div className={cn(
                "absolute inset-0",
                "bg-gradient-to-t from-black/80 via-black/30 to-transparent",
                "opacity-60 group-hover:opacity-80",
                "transition-opacity duration-500"
              )} />

              {/* Category Badge */}
              <div className={cn(
                "absolute top-3 right-3 sm:top-4 sm:right-4",
                "px-3 py-1.5 rounded-full",
                "bg-white/90 backdrop-blur-sm",
                "text-primary font-semibold text-xs sm:text-sm",
                "shadow-md",
                "transform translate-x-2 opacity-0",
                "group-hover:translate-x-0 group-hover:opacity-100",
                "transition-all duration-500 ease-out"
              )}>
                {item.category}
              </div>

              {/* Hover Effect Overlay */}
              <div className={cn(
                "absolute inset-0",
                "bg-primary/10",
                "opacity-0 group-hover:opacity-100",
                "transition-opacity duration-500"
              )} />
            </div>

            {/* Info Bar */}
            <div className={cn(
              "absolute bottom-0 left-0 right-0",
              "p-4 sm:p-5",
              "bg-gradient-to-t from-black/90 via-black/70 to-transparent",
              "backdrop-blur-sm",
              "transform translate-y-2 group-hover:translate-y-0",
              "transition-all duration-500"
            )}>
              <h3 className={cn(
                "font-heading font-semibold text-white mb-1",
                "text-sm sm:text-base md:text-lg",
                "line-clamp-1",
                "group-hover:text-accent-300 transition-colors duration-300"
              )}>
                {item.title}
              </h3>
              <p className={cn(
                "text-white/80 text-xs sm:text-sm",
                "flex items-center gap-1.5",
                "group-hover:text-white transition-colors duration-300"
              )}>
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {item.location || "Location not specified"}
              </p>
            </div>

            {/* View Details Button */}
            <div className={cn(
              "absolute inset-0",
              "flex items-center justify-center",
              "opacity-0 group-hover:opacity-100",
              "transition-opacity duration-500"
            )}>
              <div className={cn(
                "px-6 py-3 rounded-full",
                "bg-white/95 backdrop-blur-sm shadow-lg",
                "text-primary font-semibold text-sm sm:text-base",
                "transform scale-90 group-hover:scale-100",
                "transition-transform duration-500 ease-out",
                "border-2 border-primary/20"
              )}>
                View Details
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16 sm:py-20 md:py-24">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-50 mb-4">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-text-secondary mb-2">
            No projects found
          </h3>
          <p className="text-text-secondary text-sm sm:text-base">
            Try selecting a different category
          </p>
        </div>
      )}
    </div>
  );
}

const itemData = [
  {
    img: "images/projects/BUNGALOWS/Amaltash Residence, Surat/1.jpg",
    path: '/images/projects/BUNGALOWS/Amaltash Residence, Surat/',
    imgs: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    title: "Amaltash Residence",
    location: "Surat",
    category: "Bunglow",
  },
  {
    img: "images/projects/BUNGALOWS/Amarbhai Lasa Residence, Surat/1.jpg",
    path: '/images/projects/BUNGALOWS/Amarbhai Lasa Residence, Surat/',
    imgs: ["1.jpg", "2.jpg"],
    title: "Amarbhai Lasa Residence",
    location: "Surat",
    category: "Bunglow",
  },
  {
    img: "images/projects/BUNGALOWS/Dhava House, Sasangir/1.jpg",
    path: '/images/projects/BUNGALOWS/Dhava House, Sasangir/',
    imgs: ["1.jpg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"],
    title: "Dhava House",
    location: "Sasangir",
    category: "Bunglow",
  },
  {
    img: "images/projects/BUNGALOWS/Fusion Court, Dholakiya Farm, Surat/1.jpg",
    path: '/images/projects/BUNGALOWS/Fusion Court, Dholakiya Farm, Surat/',
    imgs: ["1.jpg", "2.avif", "2.jpg"],
    title: "Fusion Court",
    location: "Dholakiya Farm, Surat",
    category: "Bunglow",
  },
  {
    img: "images/projects/BUNGALOWS/Hemant Bhai Hoijiwala, Surat/1.jpg",
    path: '/images/projects/BUNGALOWS/Hemant Bhai Hoijiwala, Surat/',
    imgs: ["1.jpg", "2.jpg", "3.jpg"],
    title: "Hemant Bhai Hoijiwala",
    location: "Surat",
    category: "Bunglow",
  },
  {
    img: "images/projects/BUNGALOWS/Jenga, Surat/1.jpg",
    path: '/images/projects/BUNGALOWS/Jenga, Surat/',
    imgs: ["1.jpg", "2.avif", "2.jpg", "3.jpg"],
    title: "Jenga",
    location: "Surat",
    category: "Bunglow",
  },
  {
    img: "images/projects/BUNGALOWS/L+V Prime, Dholakiya Farm,Surat/1.jpg",
    path: '/images/projects/BUNGALOWS/L+V Prime, Dholakiya Farm,Surat/',
    imgs: ["1.jpg", "2.jpg", "71994a_cab3df358dde436ea53156be57aa1148~mv2.avif"],
    title: "L+V Prime",
    location: "Dholakiya Farm,Surat",
    category: "Bunglow",
  },
  {
    img: "images/projects/BUNGALOWS/The Hinge, Dholakiya Farm, Surat/1.jpg",
    path: '/images/projects/BUNGALOWS/The Hinge, Dholakiya Farm, Surat/',
    imgs: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "71994a_8583cf6261b34b08af43c60e4381d8bb~mv2.avif"],
    title: "The Hinge",
    location: "Dholakiya Farm, Surat",
    category: "Bunglow",
  },
  {
    img: "images/projects/COMMERCIAL/Capital Business Center, Vapi/1.jpg",
    path: '/images/projects/COMMERCIAL/Capital Business Center, Vapi/',
    imgs: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
    title: "Capital Business Center",
    location: "Vapi",
    category: "Commercial",
  },
  {
    img: "images/projects/COMMERCIAL/Central Business Hub, Surat/1.jpg",
    path: '/images/projects/COMMERCIAL/Central Business Hub, Surat/',
    imgs: ["1.jpg", "2.jpg", "3.jpg"],
    title: "Central Business Hub",
    location: "Surat",
    category: "Commercial",
  },
  {
    img: "images/projects/COMMERCIAL/Nautilus Laguna, Surat/1.jpg",
    path: '/images/projects/COMMERCIAL/Nautilus Laguna, Surat/',
    imgs: ["1.jpg", "3.jpg"],
    title: "Nautilus Laguna",
    location: "Surat",
    category: "Commercial",
  },
  {
    img: "images/projects/COMMERCIAL/Nexus Tower, Surat/1.jpeg",
    path: '/images/projects/COMMERCIAL/Nexus Tower, Surat/',
    imgs: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"],
    title: "Nexus Tower",
    location: "Surat",
    category: "Commercial",
  },
  {
    img: "images/projects/COMMERCIAL/Sangini Aspire, Surat/1.jpg",
    path: '/images/projects/COMMERCIAL/Sangini Aspire, Surat/',
    imgs: ["1.jpg", "2.jpg"],
    title: "Sangini Aspire",
    location: "Surat",
    category: "Commercial",
  },
  {
    img: "images/projects/COMMERCIAL/Shreeji House, Surat/1.jpeg",
    path: '/images/projects/COMMERCIAL/Shreeji House, Surat/',
    imgs: ["1.jpeg", "2.jpeg", "3.jpeg"],
    title: "Shreeji House",
    location: "Surat",
    category: "Commercial",
  },
  {
    img: "images/projects/CORPORATE OFFICE BUILDING/Sangini House, Surat/1.jpg",
    path: '/images/projects/CORPORATE OFFICE BUILDING/Sangini House, Surat/',
    imgs: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    title: "Sangini House",
    location: "Surat",
    category: "Offices",
  },
  {
    img: "images/projects/CORPORATE OFFICE BUILDING/SRK House, Surat/1.jpg",
    path: '/images/projects/CORPORATE OFFICE BUILDING/SRK House, Surat/',
    imgs: ["1.jpg", "2.jpg", "3.jpg"],
    title: "SRK House",
    location: "Surat",
    category: "Offices",
  },
  {
    img: "images/projects/HEALTH CARE/JayaBen Modi Hospital, Ankleshwar/1.jpg",
    path: '/images/projects/HEALTH CARE/JayaBen Modi Hospital, Ankleshwar/',
    imgs: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    title: "JayaBen Modi Hospital",
    location: "Ankleshwar",
    category: "Hospital",
  },
  {
    img: "images/projects/HEALTH CARE/Kiran Hospital, Surat/1.jpg",
    path: '/images/projects/HEALTH CARE/Kiran Hospital, Surat/',
    imgs: ["1.jpg", "2.jpeg", "3.jpg"],
    title: "Kiran Hospital",
    location: "Surat",
    category: "Hospital",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Ahana, Jamshedpur/1.jpg",
    path: '/images/projects/HIGHRISE RESIDENTIAL/Ahana, Jamshedpur/',
    imgs: ["1.jpg", "2.jpg", "3.jpg"],
    title: "Ahana",
    location: "Jamshedpur",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Atlanta Eliza, Surat/1.jpg",
    path: '/images/projects/HIGHRISE RESIDENTIAL/Atlanta Eliza, Surat/',
    imgs: ["1.jpg"],
    title: "Atlanta Eliza",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Avadh Carolina, Surat/1.jpg",
    path: '/images/projects/HIGHRISE RESIDENTIAL/Avadh Carolina, Surat/',
    imgs: ["1.jpg"],
    title: "Avadh Carolina",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Avadh Copper Stone, Surat/1.jpg",
    path: '/images/projects/HIGHRISE RESIDENTIAL/Avadh Copper Stone, Surat/',
    imgs: ["1.jpg"],
    title: "Avadh Copper Stone",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/B Blossom, Surat/1.jpg",
    path: '/images/projects/HIGHRISE RESIDENTIAL/B Blossom, Surat/',
    imgs: ["1.jpg"],
    title: "B Blossom",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Oliva Breeze, Surat/1.jpg",
    path: '/images/projects/HIGHRISE RESIDENTIAL/Oliva Breeze, Surat/',
    imgs: ["1.jpg"],
    title: "Oliva Breeze",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Sangini Sidddhanta, Surat/1.jpg",
    path: '/images/projects/HIGHRISE RESIDENTIAL/Sangini Sidddhanta, Surat/',
    imgs: ["1.jpg"],
    title: "Sangini Sidddhanta",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Sangini Skyteria, Surat/1.jpg",
    path: '/images/projects/HIGHRISE RESIDENTIAL/Sangini Skyteria, Surat/',
    imgs: ["1.jpg"],
    title: "Sangini Skyteria",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Sangini Terraza, Surat/1.jpg",
    path: '/images/projects/HIGHRISE RESIDENTIAL/Sangini Terraza, Surat/',
    imgs: ["1.jpg"],
    title: "Sangini Terraza",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/The Park, Vapi/1.jpg",
    path: '/images/projects/HIGHRISE RESIDENTIAL/The Park, Vapi/',
    imgs: ["1.jpg"],
    title: "The Park",
    location: "Vapi",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Tropical Green, Silvaasa/1.jpg",
    path: '/images/projects/HIGHRISE RESIDENTIAL/Tropical Green, Silvaasa/',
    imgs: ["1.jpg"],
    title: "Tropical Green",
    location: "Silvaasa",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Vijay Signature, Surat/1.jpg",
    path: '/images/projects/HIGHRISE RESIDENTIAL/Vijay Signature, Surat/',
    imgs: ["1.jpg"],
    title: "Vijay Signature",
    location: "Surat",
    category: "High Rise",
  },
  {
    img: "images/projects/HIGHRISE RESIDENTIAL/Vraj Hill, Nashik/1.jpg",
    path: '/images/projects/HIGHRISE RESIDENTIAL/Vraj Hill, Nashik/',
    imgs: ["1.jpg"],
    title: "Vraj Hill",
    location: "Nashik",
    category: "High Rise",
  },
  {
    img: "images/projects/INSTITUTIONAL/Aarth International School, Surat/1.jpg",
    path: '/images/projects/INSTITUTIONAL/Aarth International School, Surat/',
    imgs: ["1.jpg"],
    title: "Aarth International School",
    location: "Surat",
    category: "Institutional",
  },
  {
    img: "images/projects/INSTITUTIONAL/Hills Nursery, Surat/1.jpg",
    path: '/images/projects/INSTITUTIONAL/Hills Nursery, Surat/',
    imgs: ["1.jpg"],
    title: "Hills Nursery",
    location: "Surat",
    category: "Institutional",
  },
  {
    img: "images/projects/INSTITUTIONAL/Kiran Medical College,Surat/1.jpg",
    path: '/images/projects/INSTITUTIONAL/Kiran Medical College,Surat/',
    imgs: ["1.jpg"],
    title: "Kiran Medical College",
    location: "Surat",
    category: "Institutional",
  },
  {
    img: "images/projects/INSTITUTIONAL/M.P.K.B Medical College/1.jpg",
    path: '/images/projects/INSTITUTIONAL/M.P.K.B Medical College/',
    imgs: ["1.jpg"],
    title: "M.P.K.B Medical College",
    location: "",
    category: "Institutional",
  },
  {
    img: "images/projects/INSTITUTIONAL/Sainik School, Surat/1.jpg",
    path: '/images/projects/INSTITUTIONAL/Sainik School, Surat/',
    imgs: ["1.png", "2.jpg"],
    title: "Sainik School",
    location: "Surat",
    category: "Institutional",
  },
  {
    img: "images/projects/INSTITUTIONAL/Sardardham, Rajkot/1.jpg",
    path: '/images/projects/INSTITUTIONAL/Sardardham, Rajkot/',
    imgs: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    title: "Sardardham",
    location: "Rajkot",
    category: "Institutional",
  },
  {
    img: "images/projects/TOWNSHIP/Avadh Kimberly, Palsana/1.webp",
    path: '/images/projects/TOWNSHIP/Avadh Kimberly, Palsana/',
    imgs: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp", "10.webp"],
    title: "Avadh Kimberly",
    location: "Palsana",
    category: "Town Ship",
  },
  {
    img: "images/projects/TOWNSHIP/Avadh lake Palace, Bardoli/1.webp",
    path: '/images/projects/TOWNSHIP/Avadh lake Palace, Bardoli/',
    imgs: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp"],
    title: "Avadh lake Palace",
    location: "Bardoli",
    category: "Town Ship",
  },
  {
    img: "images/projects/TOWNSHIP/Avadh Queensbury-Kingsbury/1.jpg",
    path: '/images/projects/TOWNSHIP/Avadh Queensbury-Kingsbury/',
    imgs: ["1.jpg", "2.jpg", "3.jpg"],
    title: "Avadh Queensbury-Kingsbury",
    location: "",
    category: "Town Ship",
  },
  {
    img: "images/projects/TOWNSHIP/Diamond Villedge, Surat/1.jpg",
    path: '/images/projects/TOWNSHIP/Diamond Villedge, Surat/',
    imgs: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"],
    title: "Diamond Villedge",
    location: "Surat",
    category: "Town Ship",
  },
  {
    img: "images/projects/TOWNSHIP/Helois Revanta, Bardoli/1.jpg",
    path: '/images/projects/TOWNSHIP/Helois Revanta, Bardoli/',
    imgs: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
    title: "Helois Revanta",
    location: "Bardoli",
    category: "Town Ship",
  },
  {
    img: "images/projects/TOWNSHIP/Urban Villedge, Bardoli/1.jpg",
    path: '/images/projects/TOWNSHIP/Urban Villedge, Bardoli/',
    imgs: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    title: "Urban Villedge",
    location: "Bardoli",
    category: "Town Ship",
  },
  {
    img: "images/projects/TOWNSHIP/Vida 360, Vapi/1.jpg",
    path: '/images/projects/TOWNSHIP/Vida 360, Vapi/',
    imgs: ["1.jpg", "2.jpg"],
    title: "Vida 360",
    location: "Vapi",
    category: "Town Ship",
  }
];

export default ProjectList;