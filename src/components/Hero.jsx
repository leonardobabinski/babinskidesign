import profilePhoto from '../assets/profile_photo.png';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden min-h-screen flex items-stretch"
    >
      <div className="container-custom w-full">
        <div className="grid sm:grid-cols-2 h-full">
          
          {/* Lado esquerdo (texto) */}
          <div className="flex flex-col justify-center gap-6">
            <p className="graphic-designer-label text-white/80 text-sm md:text-base">
              Graphic Designer
            </p>

            <h1 className="hero-title text-white">
              Hey, I'm{' '}
              <span className="gradient-text">Leonardo Babinski</span>
            </h1>

            <p className="hero-subtitle text-white/90">
              Here, you'll find a showcase of my work, where{' '}
              <span className="gradient-text">creativity</span> meets{' '}
              <span className="gradient-text">functionality</span>. Explore my
              projects and{' '}
              <span className="gradient-text">
                let's create something amazing together!
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full sm:w-auto text-center"
              >
                Hire Me
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="btn-secondary w-full sm:w-auto text-center"
              >
                Portfolio
              </button>
            </div>
          </div>

          {/* Lado direito (imagem) */}
          <div className="relative flex items-end justify-center h-full">
            <img
              src={profilePhoto}
              alt="Leonardo Babinski"
              className="
                 relative bottom-[-40px]
                w-[70vw] max-w-[320px]
                sm:w-[65vw] sm:max-w-[860px]
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
