import profilePhoto from '../assets/profile-photo.jpg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container-custom">
        <div className="hero-grid">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="graphic-designer-label">
              Graphic Designer
            </div>
            
            <h1 className="hero-title">
              Hey, I'm{' '}
              <span className="gradient-text">Leonardo Babinski</span>
            </h1>
            
            <p className="hero-subtitle">
              Here, you'll find a showcase of my work, where{' '}
              <span className="gradient-text">creativity</span> meets{' '}
              <span className="gradient-text">functionality</span>. Explore my projects and{' '}
              <span className="gradient-text">let's create something amazing together!</span>
            </p>

            <div className="flex gap-4 animate-fade-in-up animate-delay-200">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Hire Me
              </button>
              
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('portfolio')}
              >
                Portfolio
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in-up animate-delay-400">
            <img 
              src={profilePhoto} 
              alt="Leonardo Babinski" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

