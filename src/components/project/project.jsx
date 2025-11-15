import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";
import ProjectBG from '/project-top.jpg';
import ProjectList from "./projectList";
import OpenProject from "./openProject";

function Projects() {
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  function handleOpen(item) {
    setOpenItem(item);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="relative bg-bg-main">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out hover:scale-105"
          style={{ 
            backgroundImage: `url(${ProjectBG})`,
            filter: 'brightness(0.6)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        {/* Title with Animation */}
        <h1 className={cn(
          "relative z-10 font-heading font-bold text-white text-center px-4",
          "text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]",
          "tracking-wide sm:tracking-wider md:tracking-widest",
          "animate-fade-in",
          "drop-shadow-2xl"
        )}>
          Our Projects
        </h1>
      </div>

      {/* Project List */}
      <ProjectList openDetail={handleOpen} />

      {/* Modal */}
      {open && (
        <>
          {/* Backdrop */}
          <div 
            className={cn(
              "fixed inset-0 bg-black/60 backdrop-blur-sm z-50",
              "animate-in fade-in duration-300"
            )}
            onClick={handleClose}
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div 
              className={cn(
                "relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[1200px]",
                "max-h-[90vh] sm:max-h-[92vh]",
                "bg-white/95 backdrop-blur-glass shadow-glass-lg",
                "rounded-2xl sm:rounded-3xl md:rounded-[2rem]",
                "p-4 sm:p-6 md:p-8",
                "overflow-auto",
                "animate-in zoom-in-95 duration-300"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className={cn(
                  "absolute top-2 right-2 sm:top-3 sm:right-3 z-10",
                  "w-9 h-9 sm:w-10 sm:h-10",
                  "flex items-center justify-center",
                  "bg-white/80 hover:bg-white backdrop-blur-sm",
                  "rounded-full shadow-md hover:shadow-lg",
                  "text-text-secondary hover:text-primary",
                  "transition-all duration-300",
                  "hover:scale-110 active:scale-95",
                  "group"
                )}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-90 duration-300" />
              </button>

              {/* Title */}
              <h2 className={cn(
                "mb-4 sm:mb-6 pr-10 sm:pr-12",
                "font-heading font-bold text-center text-text-primary",
                "text-xl sm:text-2xl md:text-3xl",
                "tracking-wide",
                "animate-in slide-in-from-top duration-500"
              )}>
                {openItem && openItem.title}
              </h2>

              {/* Project Images */}
              <div className="flex justify-center animate-in fade-in duration-700">
                <OpenProject item={openItem} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Projects;