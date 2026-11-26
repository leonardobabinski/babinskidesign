import { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, Layers } from 'lucide-react';
import project1 from '../assets/Afternoon.webp';
import project2 from '../assets/tsferramentas2.webp';
import project3 from '../assets/Imovity.webp';
import project4 from '../assets/inga.webp';
import project5 from '../assets/tsferramentas.webp';
import project6 from '../assets/tradestar.webp';
import project7 from '../assets/institutional.webp';
import project8 from '../assets/yellow.webp';
import project9 from '../assets/amaral.webp';

const CATEGORIES = ['All', 'Branding', 'Packaging', 'Motion & Video', 'Web & Social', 'Print'];

const isVideoLink = (url) => url.includes('vimeo.com') || url.includes('youtube.com');

const projects = [
  {
    id: 'imovity',
    title: 'Imovity',
    category: 'Branding',
    tags: ['Branding'],
    image: project3,
    description: 'Complete brand identity design',
    caseStudy: true,
    link: '/work/imovity/',
  },
  {
    id: 'tradestar',
    title: 'Tradestar Ferramentas',
    category: 'Brand ecosystem',
    tags: ['Web & Social', 'Print', 'Motion & Video'],
    image: project2,
    description: 'Social media, catalog, landing page and institutional video for a tools company',
    pieces: [
      { title: 'Social Media', category: 'Instagram', image: project2, link: 'https://www.behance.net/gallery/218502335/Tradestar-Ferramentas-Social-Media' },
      { title: 'Catalog 2025', category: 'Print', image: project5, link: 'https://www.behance.net/gallery/218502663/Tradestar-Ferramentas-Catalogo-2025' },
      { title: 'Tradestar.com', category: 'Landing page', image: project6, link: 'https://tradestar.com.br/' },
      { title: 'Institutional Video', category: 'Video', image: project7, link: 'https://player.vimeo.com/video/1065565736' },
    ],
  },
  {
    id: 'em-casa-tem',
    title: 'Em Casa Tem',
    category: 'Packaging',
    tags: ['Packaging'],
    image: project4,
    description: 'Product packaging design',
    link: 'https://www.behance.net/gallery/192272911/Algumas-embalagens',
  },
  {
    id: 'afternoon',
    title: 'Afternoon in The Park',
    category: 'Motion Graphics',
    tags: ['Motion & Video'],
    image: project1,
    description: 'Animated visual storytelling',
    link: 'https://www.behance.net/gallery/173162441/An-Afternoon-in-the-Park-Motion-Graphics',
  },
  {
    id: 'amaral',
    title: 'Amaral Advogados',
    category: 'Branding',
    tags: ['Branding'],
    image: project9,
    description: 'Brand identity for a law firm',
    link: 'https://www.behance.net/gallery/132848559/Amaral-Advogados-e-associados',
  },
  {
    id: 'yellow-september',
    title: 'Yellow September',
    category: 'Video / Motion Graphics',
    tags: ['Motion & Video'],
    image: project8,
    description: 'Campaign video for Yellow September',
    link: 'https://player.vimeo.com/video/1022868303',
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const openLink = (link) => {
    if (link.startsWith('/')) {
      window.location.href = link;
    } else if (isVideoLink(link)) {
      setSelectedGroup(null);
      setSelectedVideo(link);
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const openProject = (project) => {
    if (project.pieces) setSelectedGroup(project);
    else openLink(project.link);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
        setSelectedGroup(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const visible = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="portfolio" className="relative bg-[#F0F8FF] py-10 md:py-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[300px] bg-[#17323A] z-0"></div>
      <div className="container-custom relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#F0F8FF]">
          My Portfolio
        </h2>

        <p className="text-center text-[#F0F8FF]/90 mb-8 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
          Explore my portfolio — from branding and packaging to UI/UX, video editing, and motion graphics. Each project is crafted to deliver bold, engaging, and meaningful visual experiences.
        </p>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12" role="group" aria-label="Filter projects">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium border transition-colors ${
                filter === cat
                  ? 'bg-[#DABB52] border-[#DABB52] text-[#17323A]'
                  : 'border-white/30 text-[#F0F8FF] hover:border-[#DABB52] hover:text-[#DABB52]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div key={filter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {visible.map((project, i) => (
            <button
              type="button"
              key={project.id}
              onClick={() => openProject(project)}
              style={{ animationDelay: `${i * 60}ms` }}
              className="card-in group text-left cursor-pointer bg-white rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#DABB52] p-2 md:p-3 rounded-full">
                    {project.caseStudy ? (
                      <ArrowRight className="text-[#17323A] w-5 h-5 md:w-6 md:h-6" />
                    ) : project.pieces ? (
                      <Layers className="text-[#17323A] w-5 h-5 md:w-6 md:h-6" />
                    ) : (
                      <ExternalLink className="text-[#17323A] w-5 h-5 md:w-6 md:h-6" />
                    )}
                  </div>
                </div>
                {project.caseStudy && (
                  <span className="absolute top-3 right-3 bg-[#DABB52] text-[#17323A] text-xs font-semibold px-2 py-1 rounded">
                    Case study
                  </span>
                )}
                {project.pieces && (
                  <span className="absolute top-3 right-3 bg-[#17323A] text-[#F0F8FF] text-xs font-medium px-2 py-1 rounded">
                    {project.pieces.length} projects
                  </span>
                )}
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
            </button>
          ))}
        </div>
      </div>

      {/* Modal com as peças de um cliente (ex.: Tradestar) */}
      {selectedGroup && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedGroup(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedGroup.title}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#F0F8FF] rounded-lg p-5 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGroup(null)}
              aria-label="Close"
              className="absolute top-3 right-3 text-[#17323A] bg-white px-3 py-1 rounded hover:bg-[#17323A] hover:text-white transition"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-[#17323A] mb-1">{selectedGroup.title}</h3>
            <p className="text-gray-600 text-sm mb-6">{selectedGroup.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedGroup.pieces.map((piece) => (
                <button
                  type="button"
                  key={piece.title}
                  onClick={() => openLink(piece.link)}
                  className="group text-left bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                >
                  <img src={piece.image} alt={piece.title} loading="lazy" className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-3">
                    <div className="text-xs text-[#17323A]/70">{piece.category}</div>
                    <div className="font-semibold text-[#17323A]">{piece.title}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal de Vídeo */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              aria-label="Close"
              className="absolute -top-8 right-0 text-white bg-[#17323A] px-3 py-1 rounded hover:bg-white hover:text-[#17323A] transition"
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