const Services = () => {
  const services = [
    {
      title: "Packaging Design",
      description: "I create packaging that's not only visually appealing but also functional, ensuring your product stands out on the shelf while maintaining attention and practicality."
    },
    {
      title: "Branding",
      description: "I create unique visual identities that tell your brand's story. From logos to complete brand systems, I design cohesive elements that strengthen your brand presence."
    },
    {
      title: "UI/UX",
      description: "I research user behaviors, design intuitive interfaces, and create seamless user experiences. My approach focuses on usability and user satisfaction in every digital touchpoint."
    },
    {
      title: "Video Edit",
      description: "I edit and enhance videos to deliver clear, engaging content. From corporate videos to creative storytelling, I ensure your message is communicated effectively."
    },
    {
      title: "Motion Graphics",
      description: "I design animated visuals that communicate ideas effectively. From logo animations to explainer videos, I bring static designs to life with engaging and dynamic motion."
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#2c5f5f]">
          Services
        </h2>
        
        <p className="text-center text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto text-sm md:text-base">
          Let's craft exceptional digital experiences together.
        </p>
        
        {/* Services Grid - Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center p-4 md:p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-[#f4d03f]/50"
            >
              <svg width="88" height="54" viewBox="0 0 88 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="22" cy="27" r="20" stroke="#DABB52" stroke-width="4"/>
<circle cx="44" cy="27" r="20" stroke="#DABB52" stroke-width="4"/>
<circle cx="66" cy="27" r="20" stroke="#DABB52" stroke-width="4"/>
</svg>
}
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-[#f4d03f] rounded-lg flex items-center justify-center">
                <span className="text-lg md:text-2xl">📦</span>
              </div>
              
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-[#2c5f5f]">
                {service.title}
              </h3>
              
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
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

