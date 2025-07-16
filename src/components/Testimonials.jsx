import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Kate L Harrison",
      role: "Consultora, Upwork project",
      content: "Leonardo did a beautiful job. Her communication was quick and professional and the work was perfect. Would hire again!",
      rating: 5,
      avatar: "KH"
    },
    {
      id: 2,
      name: "Faustina",
      role: "CEO, Fiverr project",
      content: "Working with Leo was great. I had a vision of what I wanted. Leo took my vision and made it awesome! We worked ahead of time using sketches and were able to get me exactly what I wanted. If I have the need again, I will 100% come back to Leo.",
      rating: 5,
      avatar: "AF"
    },
    {
      id: 3,
      name: "Renan Pinheiro",
      role: "CEO, Imovity",
      content: "",
      rating: 5,
      avatar: "RP"
    }
  ];

  return (
    <section id="testimonials" className="py-10 bg-[#DABB52]">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#17323A]">
          What Clients Say
        </h2>
        
        <p className="text-center text-[#17323A]/80 mb-16 max-w-2xl mx-auto">
          Don't just take my word for it. Here's what some of my clients have to say about working with me.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-[#DABB52] text-[#DABB52]" 
                  />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#17323A] rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[#17323A]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

