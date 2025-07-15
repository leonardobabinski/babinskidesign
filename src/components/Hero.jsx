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
      className="hero-section relative overflow-hidden py-10"
    >
      <div className="container-custom w-full relative">
        <div className="grid sm:grid-cols-2 items-end gap-8">
          
          {/* Texto à esquerda */}
          <div className="flex flex-col gap-6">
            <p className="graphic-designer-label text-white/80 text-sm md:text-base">
              Graphic Designer
            </p>

            <h1 className="hero-title text-white">
              Hey, I'm <span className="gradient-text">Leonardo Babinski</span>
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

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full sm:w-auto text-center"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="btn-secondary w-full sm:w-auto text-center"
              >
                Portfolio
              </button>
            </div>
          </div>

          {/* Imagem à direita */}
            <div className="hidden md:block relative justify-center sm:justify-end self-end overflow-visible
                w-full lg:max-w-[70%]
                md:absolute md:bottom-[-40px] md:right-[-150px] lg:right-[-150px]"
            >
              <img
                src={profilePhoto}
                alt="Leonardo Babinski"
                className="
                w-full h-auto
                "
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
