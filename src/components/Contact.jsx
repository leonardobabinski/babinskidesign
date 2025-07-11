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
    console.log('Form submitted:', formData);
    alert('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section py-20">
      <div className="container-custom">
        <h2 className="section-title text-white">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              Let's Work Together
            </h3>
            
            <p className="text-white/90 mb-8 leading-relaxed">
              Ready to bring your vision to life? I'm here to help you create 
              compelling designs that make an impact. Let's discuss your project 
              and explore how we can collaborate.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-white">Email</div>
                  <a 
                    href="mailto:leonardo@babinski.com"
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    leonardo@babinski.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <a 
                    href="tel:+5511999999999"
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    +55 (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-white">Location</div>
                  <span className="text-white/80">
                    São Paulo, SP - Brazil
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-white placeholder-white/60"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-white placeholder-white/60"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none text-white placeholder-white/60"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit" 
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

