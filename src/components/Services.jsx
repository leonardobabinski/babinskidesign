const Services = () => {
  const services = [
    {
      title: "Packaging Design",
      description: "Creative and functional packaging solutions that stand out on the shelf and communicate your brand effectively."
    },
    {
      title: "UI/UX Design",
      description: "User-centered design approach creating intuitive and engaging digital experiences for web and mobile applications."
    },
    {
      title: "Video Editing",
      description: "Professional video editing services bringing your stories to life with compelling visual narratives and smooth transitions."
    }
  ];

  return (
    <section id="services" className="services-section py-20">
      <div className="container-custom">
        <h2 className="section-title text-white">
          Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {service.title}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

