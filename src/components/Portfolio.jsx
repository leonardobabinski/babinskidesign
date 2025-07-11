import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Brand Identity Package",
      category: "Packaging Design",
      image: project1,
      description: "Complete brand identity and packaging design for premium coffee brand."
    },
    {
      id: 2,
      title: "Mobile App Interface",
      category: "UI/UX Design",
      image: project2,
      description: "Modern and intuitive mobile application design for fitness tracking."
    },
    {
      id: 3,
      title: "Product Launch Video",
      category: "Video Editing",
      image: project3,
      description: "Dynamic promotional video showcasing new product features and benefits."
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section py-20">
      <div className="container-custom">
        <h2 className="section-title">
          Portfolio
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white w-8 h-8" />
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-primary font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

