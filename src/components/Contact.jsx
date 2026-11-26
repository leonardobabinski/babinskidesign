import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/meozqarw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-10 md:py-10 bg-[#17323A]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#F0F8FF]">
            Get In Touch
          </h2>
          
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#DABB52]">
              Let's Work Together
            </h3>
            <p className="text-[#F0F8FF]/90 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Ready to bring your vision to life? I'm here to help you create compelling designs that make an impact. Let's discuss your project and explore how we can collaborate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#DABB52] p-3 rounded-lg flex-shrink-0">
                  <Phone className="text-[#17323A] w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Phone</h4>
                  <a 
                    href="https://wa.me/5541987807482"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DABB52] hover:text-white transition-colors text-sm md:text-base"
                  >
                    +55 (41) 98780-7482
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#DABB52] p-3 rounded-lg flex-shrink-0">
                  <Mail className="text-[#17323A] w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Email</h4>
                  <a 
                    href="mailto:babinski@babinskidesign.com.br" 
                    className="text-[#DABB52] hover:text-white transition-colors text-sm md:text-base"
                  >
                    babinski@babinskidesign.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#DABB52] p-3 rounded-lg flex-shrink-0">
                  <MapPin className="text-[#17323A] w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Location</h4>
                  <p className="text-[#DABB52] text-sm md:text-base">Curitiba, PR - Brazil</p>
                  <p className="text-white/70 text-xs md:text-sm mt-1">Working with clients worldwide</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form 
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-white font-medium mb-2 text-sm md:text-base">
                    Project type
                  </label>
                  <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#f4d03f] transition-colors text-sm md:text-base">
                    <option value="" className="text-[#17323A]">Select...</option>
                    <option className="text-[#17323A]">Branding</option>
                    <option className="text-[#17323A]">Packaging</option>
                    <option className="text-[#17323A]">UI/UX / Web</option>
                    <option className="text-[#17323A]">Video / Motion</option>
                    <option className="text-[#17323A]">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-white font-medium mb-2 text-sm md:text-base">
                    Estimated budget
                  </label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#f4d03f] transition-colors text-sm md:text-base">
                    <option value="" className="text-[#17323A]">Select...</option>
                    <option className="text-[#17323A]">Under $500</option>
                    <option className="text-[#17323A]">$500 – $1,500</option>
                    <option className="text-[#17323A]">$1,500 – $5,000</option>
                    <option className="text-[#17323A]">$5,000+</option>
                    <option className="text-[#17323A]">Not sure yet</option>
                  </select>
                </div>
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
                disabled={status === 'sending'}
                className="w-full disabled:opacity-60 disabled:cursor-wait bg-[#f4d03f] text-[#2c5f5f] py-3 md:py-4 px-6 rounded-lg font-semibold hover:bg-[#f1c40f] transition-all duration-300 flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
              </button>

              {status === 'sent' && (
                <p role="status" className="text-[#DABB52] text-sm md:text-base">
                  Thanks! Your message was sent. I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="text-red-300 text-sm md:text-base">
                  Something went wrong. Please try again or email me at babinski@babinskidesign.com.br.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

