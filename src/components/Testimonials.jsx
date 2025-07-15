import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "CEO, TechStart",
      content: "Leonardo's work exceeded our expectations. His attention to detail and creative vision transformed our brand identity completely.",
      rating: 5,
      avatar: "MS"
    },
    {
      id: 2,
      name: "João Santos",
      role: "Marketing Director, InnovaCorp",
      content: "Professional, creative, and always delivers on time. Leonardo is our go-to designer for all branding projects.",
      rating: 5,
      avatar: "JS"
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Founder, EcoProducts",
      content: "The packaging design Leonardo created for our products increased our sales by 40%. Absolutely incredible work!",
      rating: 5,
      avatar: "AC"
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

