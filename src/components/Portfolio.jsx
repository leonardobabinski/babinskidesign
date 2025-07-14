import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Afternoon in The Park",
      category: "Motion Graphics",
      image: project1,
      description: "Animated visual storytelling project"
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
      category: "Web Design / Lading",
      image: project3,
      description: "Landing page design and development"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#2c5f5f]">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          My Portfolio
        </h2>
        
        <p className="text-center text-white/80 mb-16 max-w-4xl mx-auto">
          Explore my portfolio — from branding and packaging to UI/UX, video editing, and motion graphics. Each project is crafted to deliver bold, engaging, and meaningful visual experiences.
        </p>
        
        {/* Portfolio Grid - 2 rows x 3 columns */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#f4d03f] p-3 rounded-full">
                    <ExternalLink className="text-[#2c5f5f] w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-[#f4d03f] font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#2c5f5f]">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

