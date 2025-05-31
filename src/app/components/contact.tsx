"use client";
import React, { useState, useEffect } from "react";
import { Mail, Phone, Send, MessageCircle, CheckCircle, User, AtSign } from "lucide-react";

interface MousePosition {
  x: number;
  y: number;
}

const ContactUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string>("");

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success animation
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const inputClasses = (fieldName: string) => `
    w-full bg-neutral-900/60 border-2 transition-all duration-300 rounded-xl px-4 py-4 text-white 
    placeholder:text-neutral-500 focus:outline-none focus:scale-[1.02] focus:shadow-lg
    ${focusedField === fieldName 
      ? 'border-yellow-400/60 bg-neutral-800/80 shadow-yellow-400/20' 
      : 'border-neutral-700/50 hover:border-neutral-600'
    }
  `;

  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-gradient-to-tl from-yellow-800/20 to-yellow-900/30 transform rotate-45 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-yellow-400/5 to-transparent rounded-full"></div>
        
        {/* Interactive mouse gradient */}
        <div
          className="absolute inset-0 opacity-8 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #fbbf24 0%, transparent 40%)`,
          }}
        />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-grid-pattern animate-grid-move"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Enhanced Header */}
        <div
          className={`mb-20 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="inline-flex items-center mb-8 bg-gradient-to-r from-neutral-900/90 to-neutral-800/90 backdrop-blur-md px-8 py-3 rounded-full border border-yellow-400/20 shadow-xl">
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mr-3 animate-pulse shadow-yellow-400/50 shadow-lg"></div>
            <span className="text-white font-semibold tracking-widest text-sm uppercase">Contact Us</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Let's Start a
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-gradient">
              Conversation
            </span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Reach out and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        {/* Enhanced Contact Forms */}
     <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">

          {/* Enhanced Email Form */}
          <div
            className={`bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-xl rounded-3xl border border-neutral-700/50 p-10 shadow-2xl transition-all duration-1200 delay-300 hover:shadow-yellow-400/10 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Mail className="text-black" size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
                  <p className="text-neutral-400">We'll get back to you within 24 hours</p>
                </div>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-400" size={40} />
                </div>
                <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                <p className="text-neutral-300">Thank you for reaching out. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center text-neutral-300 text-sm font-medium space-x-2">
                    <User size={16} />
                    <span>Full Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField("")}
                    placeholder="Enter your full name"
                    className={inputClasses("name")}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center text-neutral-300 text-sm font-medium space-x-2">
                    <AtSign size={16} />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    placeholder="Enter your email address"
                    className={inputClasses("email")}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center text-neutral-300 text-sm font-medium space-x-2">
                    <MessageCircle size={16} />
                    <span>Your Message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField("")}
                    placeholder="Tell us about your project or inquiry..."
                    className={inputClasses("message")}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-400/25 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </button>
              </form>
            )}
          </div>

          {/* Enhanced WhatsApp Section */}
          <div
            className={`bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-xl rounded-3xl border border-neutral-700/50 p-10 shadow-2xl transition-all duration-1200 delay-500 hover:shadow-green-400/10 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="h-full flex flex-col justify-center space-y-8">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-400/30 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <MessageCircle className="text-green-400" size={40} />
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">Instant Support</h3>
                  <p className="text-neutral-400 text-lg leading-relaxed">
                    Need immediate assistance? Chat with us on WhatsApp for real-time support and quick responses.
                  </p>
                </div>

                <div className="space-y-4 text-left bg-neutral-800/30 rounded-2xl p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-neutral-300">Available 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-neutral-300">Instant responses</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-neutral-300">Direct line to our team</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/971526325959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/25 w-full"
                >
                  <div className="flex items-center space-x-3">
                    <MessageCircle size={24} />
                    <span>Start WhatsApp Chat</span>
                  </div>
                </a>
              </div>

              {/* Contact Info */}
              <div className="border-t border-neutral-700/50 pt-8 space-y-4">
                <div className="flex items-center justify-center space-x-4 text-neutral-400">
                  <Phone size={18} />
                  <span>+971 52 632 5959</span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-neutral-400">
                  <Mail size={18} />
                  <span>kh2005h@yahoo.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(251, 191, 36, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default ContactUs;