import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de formulário como Formspree
    alert('Mensagem enviada! Obrigado pelo contato.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-10 md:py-10 bg-[#2c5f5f]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Get In Touch
          </h2>
          
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#f4d03f]">
              Let's Work Together
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Ready to bring your vision to life? I'm here to help you create compelling designs that make an impact. Let's discuss your project and explore how we can collaborate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#f4d03f] p-3 rounded-lg flex-shrink-0">
                  <Phone className="text-[#2c5f5f] w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Phone</h4>
                  <a 
                    href="tel:+5511999999999" 
                    className="text-[#f4d03f] hover:text-white transition-colors text-sm md:text-base"
                  >
                    +55 (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#f4d03f] p-3 rounded-lg flex-shrink-0">
                  <Mail className="text-[#2c5f5f] w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Email</h4>
                  <a 
                    href="mailto:leonardo@babinski.com" 
                    className="text-[#f4d03f] hover:text-white transition-colors text-sm md:text-base"
                  >
                    leonardo@babinski.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#f4d03f] p-3 rounded-lg flex-shrink-0">
                  <MapPin className="text-[#2c5f5f] w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Location</h4>
                  <p className="text-white/80 text-sm md:text-base">São Paulo, SP - Brazil</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2 text-sm md:text-base">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#f4d03f] transition-colors text-sm md:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2 text-sm md:text-base">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#f4d03f] transition-colors text-sm md:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2 text-sm md:text-base">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#f4d03f] transition-colors resize-none text-sm md:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#f4d03f] text-[#2c5f5f] py-3 md:py-4 px-6 rounded-lg font-semibold hover:bg-[#f1c40f] transition-all duration-300 flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

