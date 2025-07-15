const Services = () => {
  const services = [
    {
      title: "Packaging Design",
      icon: (
        <svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 51.3843L2.94063 44.0437V10.8843L28 19.153V51.3843Z" stroke="#DABB52" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M45.4656 13.3313L20.4063 5.0625" stroke="#DABB52" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M37.0281 16.1999L11.9688 7.93115" stroke="#DABB52" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 51.3843L53.0594 44.0437V10.8843L28 19.153V51.3843Z" stroke="#DABB52" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M37.7875 39.6562L32.1344 41.3438" stroke="#DABB52" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M37.7875 43.5376L32.1344 45.2251" stroke="#DABB52" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M45.4656 13.3315V26.494L37.0281 29.0253V16.2003" stroke="#DABB52" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.94063 10.8845L28 2.61572L53.0594 10.8845" stroke="#DABB52" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: "I create packaging that's not only visually appealing but also functional, ensuring your product stands out on the shelf while maintaining attention and practicality."
    },
    {
      title: "Branding",
      icon: (
        <svg width="88" height="54" viewBox="0 0 88 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="27" r="20" stroke="#DABB52" strokeWidth="4"/>
          <circle cx="44" cy="27" r="20" stroke="#DABB52" strokeWidth="4"/>
          <circle cx="66" cy="27" r="20" stroke="#DABB52" strokeWidth="4"/>
        </svg>
      ),
      description: "I create unique visual identities that tell your brand's story. From logos to complete brand systems, I design cohesive elements that strengthen your brand presence."
    },
    {
      title: "UI/UX",
      icon: (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.5004 11.2505H45.0004" stroke="#DABB52" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M31.5004 18.0005H38.2504" stroke="#DABB52" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M47.2504 25.8755C47.2504 37.688 37.6879 47.2505 25.8754 47.2505C14.0629 47.2505 4.5004 37.688 4.5004 25.8755C4.5004 14.063 14.0629 4.50049 25.8754 4.50049" stroke="#DABB52" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M49.5004 49.5005L45.0004 45.0005" stroke="#DABB52" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: "I research user behaviors, design intuitive interfaces, and create seamless user experiences. My approach focuses on usability and user satisfaction in every digital touchpoint."
    },
    {
      title: "Video Edit",
      icon: (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 0C12.1126 0 0 12.1126 0 27C0 41.8874 12.1126 54 27 54C41.8874 54 54 41.8874 54 27C54 12.1126 41.8874 0 27 0ZM22.95 36.45C22.4762 36.45 22.0027 36.3266 21.5815 36.0782C20.7567 35.5922 20.25 34.7058 20.25 33.75V20.25C20.25 19.2942 20.7567 18.4078 21.5815 17.9218C22.4532 17.3559 23.8426 17.6579 24.2604 17.8901L36.4104 24.6401C37.2677 25.1167 37.8 26.0186 37.8 27C37.8 27.9815 37.2677 28.8833 36.4104 29.3599L24.2604 36.1099C23.8527 36.3353 23.4009 36.45 22.95 36.45Z" fill="#DABB52"/>
        </svg>
      ),
      description: "I edit and enhance videos to deliver clear, engaging content. From corporate videos to creative storytelling, I ensure your message is communicated effectively."
    },
    {
      title: "Motion Graphics",
        icon: (
        <svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.4612 18.8262C51.8298 18.8262 55.3713 15.2847 55.3713 10.916C55.3713 6.54736 51.8298 3.00586 47.4612 3.00586C43.0925 3.00586 39.551 6.54736 39.551 10.916C39.551 15.2847 43.0925 18.8262 47.4612 18.8262Z" fill="#DABB52"/>
          <path d="M38.8762 19.9412L32.9417 15.7858C32.226 15.2846 31.2395 15.4585 30.7383 16.1742C30.2372 16.8899 30.4111 17.8764 31.1268 18.3776L33.8715 20.2994C30.1089 21.5004 26.6802 24.3588 23.9559 28.64C21.9388 31.8098 20.4371 35.5636 19.5173 39.6512C19.2595 39.1225 18.9794 38.6156 18.6778 38.1328C16.635 34.8646 13.841 33.0646 10.8105 33.0646C7.78011 33.0646 4.98614 34.8646 2.94342 38.1329C1.0453 41.1699 0 45.1756 0 49.4123C0 50.286 0.708328 50.9943 1.58203 50.9943C2.45573 50.9943 3.16406 50.286 3.16406 49.4123C3.16406 42.266 6.66573 36.2287 10.8105 36.2287C14.9554 36.2287 18.457 42.266 18.457 49.4123C18.457 50.286 19.1654 50.9943 20.0391 50.9943C20.9128 50.9943 21.6211 50.286 21.6211 49.4123C21.6211 42.1835 23.3982 35.4096 26.6253 30.3387C28.8521 26.8392 31.5704 24.4769 34.5004 23.4322L32.5175 26.2641C32.0163 26.9798 32.1903 27.9663 32.906 28.4675C33.6217 28.9685 34.6082 28.7946 35.1094 28.0789L39.2649 22.1445C39.7658 21.4288 39.5919 20.4423 38.8762 19.9412Z" fill="#DABB52"/>
        </svg>
      ),
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
}         
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

