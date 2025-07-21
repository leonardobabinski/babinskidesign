import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import project1 from '../assets/Afternoon.png';
import project2 from '../assets/tsferramentas2.png';
import project3 from '../assets/Imovity.png';
import project4 from '../assets/inga.png';
import project5 from '../assets/tsferramentas.png';
import project6 from '../assets/tradestar.png';
import project7 from '../assets/institutional.png';
import project8 from '../assets/yellow.png';
import project9 from '../assets/amaral.png';

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const isVideoLink = (url) => {
    return url.includes("vimeo.com") || url.includes("youtube.com");
  };

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
      description: "Social media",
      link: "https://www.behance.net/gallery/218502335/Tradestar-Ferramentas-Social-Media"
    },
    {
      id: 3,
      title: "Imovity",
      category: "Branding",
      image: project3,
      description: "Complete brand identity design",
      link: "https://www.behance.net/gallery/216802011/Imovity"
    },
    {
      id: 4,
      title: "Em Casa Tem",
      category: "Package Design",
      image: project4,
      description: "Product packaging design",
      link: "https://www.behance.net/gallery/192272911/Algumas-embalagens"
    },
    {
      id: 5,
      title: "Tradestar Ferramentas",
      category: "Postcard / Catalog",
      image: project5,
      description: "Print marketing materials",
      link: "https://www.behance.net/gallery/218502663/Tradestar-Ferramentas-Catalogo-2025"
    },
    {
      id: 6,
      title: "Tradestar.com",
      category: "Web Design / Landing",
      image: project6,
      description: "Landing page design and development",
      link: "https://tradestar.com.br/"
    },
    {
      id: 7,
      title: "Tradestar - Institutional Vídeo",
      category: "Institutional Video",
      image: project7,
      description: "Vídeo about Tradestar",
      link: "https://player.vimeo.com/video/1065565736"
    },
    {
      id: 8,
      title: "Yellow September",
      category: "Vídeo / Motion Graphics",
      image: project8,
      description: "Vídeo for Yellow September campaign",
      link: "https://vimeo.com/1022868303"
    },
    {
      id: 9,
      title: "Amaral Advogados e Associados",
      category: "Branding",
      image: project9,
      description: "Complete brand identity design",
      link: "https://www.behance.net/gallery/132848559/Amaral-Advogados-e-associados"
    }
  ];

  return (
    <section id="portfolio" className="relative bg-[#F0F8FF] py-10 md:py-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[300px] bg-[#17323A] z-0"></div>
      <div className="container-custom relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#F0F8FF]">
          My Portfolio
        </h2>

        <p className="text-center text-[#F0F8FF]/90 mb-12 md:mb-16 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
          Explore my portfolio — from branding and packaging to UI/UX, video editing, and motion graphics. Each project is crafted to deliver bold, engaging, and meaningful visual experiences.
        </p>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                if (isVideoLink(project.link)) {
                  setSelectedVideo(project.link);
                } else {
                  window.open(project.link, '_blank', 'noopener,noreferrer');
                }
              }}
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
                    <ExternalLink className="text-[#17323A] w-5 h-5 md:w-6 md:h-6" />
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
            </div>
          ))}
        </div>
      </div>

       {/* Modal de Vídeo */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)} // Fecha ao clicar fora do vídeo
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar no conteúdo
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-6 right-0 text-white bg-[#17323A] px-3 py-1 rounded hover:bg-white hover:text-[#17323A] transition"
            >
              &times;
            </button>

            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
              <iframe
                src={selectedVideo}
                title="Video"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;