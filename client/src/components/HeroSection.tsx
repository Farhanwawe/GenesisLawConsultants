import { Link } from "wouter";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visibility after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="pt-28 lg:pt-0 min-h-screen bg-gradient-to-br from-navy via-navy to-darkgray flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gold blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-navy blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-white blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`text-white order-2 md:order-1 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block bg-gold bg-opacity-20 text-lg px-4 py-1 rounded-full text-sm font-medium mb-6 transition-all duration-300 hover:bg-opacity-30">
              Excellence in Legal Consulting
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-gold">
              Your Trusted <br />
              Legal <span className="bg-gradient-to-r from-gold to-amber-300 text-gold text-transparent bg-clip-text">Partners</span>
            </h1>
            
            <p className="text-lightgray text-gold md:text-xl mb-8 leading-relaxed max-w-xl">
              Genesis Law Consultants delivers expert legal counsel with unwavering integrity, strategic thinking, and a commitment to your success.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="#services" 
                className="button-gradient text-white px-8 py-4 rounded-md text-center font-medium flex items-center justify-center group"
              >
                Explore Our Services
                <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
              </a>
              
              <a 
                href="#contact" 
                className="border-2 border-gold bg-transparent text-gold px-8 py-4 rounded-md text-center hover:bg-gold hover:text-white transition-all font-medium"
              >
                Free Consultation
              </a>
            </div>
            
            <div className="mt-12 flex items-center">
              <div className="text-gold mr-3">
                <i className="fas fa-shield-alt text-xl"></i>
              </div>
              <p className="text-sm text-lightgray">
                <span className="text-white font-medium">Trusted by 500+ clients</span> with 15+ years of excellence
              </p>
            </div>
          </div>
          
          <div 
            className={`order-1 md:order-2 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 right-4 bottom-4 border-2 border-gold rounded-lg opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Law professionals meeting" 
                className="rounded-lg shadow-2xl w-full h-auto relative z-10" 
                width="600" 
                height="400"
                loading="eager"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-navy p-4 rounded-lg shadow-xl z-20 max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="text-navy mr-2">
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="font-medium">Exceptional client satisfaction</p>
                </div>
                <p className="text-sm text-navy opacity-80">
                  Consistently rated 5 stars by our clients for our dedication to excellence and results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <a href="#about" className="flex flex-col items-center">
          <span className="text-xs mb-1 text-gold">Scroll to discover</span>
          <div className="w-5 h-10 border-2 border-gold rounded-full flex justify-center p-1">
            <div className="w-1 h-1 bg-gold rounded-full animate-bounce-slow"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
