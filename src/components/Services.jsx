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
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#2c5f5f]">
          Services
        </h2>
        
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Let's craft exceptional digital experiences together.
        </p>
        
        {/* Services Grid - 5 columns in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              {/* Placeholder for icon - you'll add the actual icons later */}
              <div className="w-16 h-16 mx-auto mb-4 bg-[#f4d03f] rounded-lg flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-[#2c5f5f]">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
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

