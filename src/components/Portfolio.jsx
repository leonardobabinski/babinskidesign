import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import project1 from '../assets/afternoon.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Afternoon in The Park",
      category: "Motion Graphics",
      image: project1,
      description: "Animated visual storytelling project",
      link: "https://www.behance.net/gallery/173162441/An-Afternoon-in-the-Park-Motion-Graphics"
    },
    {
      id: 2,
      title: "Tradestar Ferramentas",
      category: "Social Media / Instagram",
      image: project2,
      description: "Social media campaign design"
    },
    {
      id: 3,
      title: "Imovity",
      category: "Branding",
      image: project3,
      description: "Complete brand identity design"
    },
    {
      id: 4,
      title: "Em Casa Tem",
      category: "Package Design",
      image: project1,
      description: "Product packaging design"
    },
    {
      id: 5,
      title: "Tradestar Ferramentas",
      category: "Postcard / Catalog",
      image: project2,
      description: "Print marketing materials"
    },
    {
      id: 6,
      title: "Tradestar.com",
      category: "Web Design / Landing",
      image: project3,
      description: "Landing page design and development"
    }
  ];

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-[#17323A]">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#F0F8FF]">
          My Portfolio
        </h2>
        
        <p className="text-center text-white/80 mb-12 md:mb-16 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
          Explore my portfolio — from branding and packaging to UI/UX, video editing, and motion graphics. Each project is crafted to deliver bold, engaging, and meaningful visual experiences.
        </p>
        
        {/* Portfolio Grid - Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer bg-white rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#DABB52] p-2 md:p-3 rounded-full">
                    <ExternalLink className="text-[#2c5f5f] w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <div className="text-xs md:text-sm text-[#17323A] font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#17323A]">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

