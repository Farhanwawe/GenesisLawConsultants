import { useState } from "react";
import { testimonials } from "@/data/constants";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Only show a subset of testimonials in display
  const displayCount = 3;
  const startIndex = activeIndex;
  const endIndex = (startIndex + displayCount) > testimonials.length 
    ? testimonials.length 
    : startIndex + displayCount;
  
  const visibleTestimonials = testimonials.slice(startIndex, endIndex);
  
  const nextTestimonials = () => {
    setActiveIndex((prev) => 
      (prev + displayCount) >= testimonials.length ? 0 : prev + displayCount
    );
  };
  
  const prevTestimonials = () => {
    setActiveIndex((prev) => 
      (prev - displayCount) < 0 ? Math.max(0, testimonials.length - displayCount) : prev - displayCount
    );
  };
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-offwhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-navy mb-4">Client Success Stories</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-midgray max-w-3xl mx-auto">
            See what our valued clients have to say about their experience working with Genesis Law Consultants.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Controls */}
          {testimonials.length > displayCount && (
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none z-10">
              <button 
                onClick={prevTestimonials}
                className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center shadow-md pointer-events-auto opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Previous testimonials"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                onClick={nextTestimonials}
                className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center shadow-md pointer-events-auto opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Next testimonials"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all border-t-4 border-gold relative group"
              >
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-gold opacity-20 text-4xl">
                  <i className="fas fa-quote-right"></i>
                </div>
                
                {/* Service badge */}
                {testimonial.service && (
                  <div className="inline-block bg-navy text-white text-xs px-3 py-1 rounded-full mb-4">
                    {testimonial.service}
                  </div>
                )}
                
                {/* Rating */}
                <div className="text-gold mb-4 flex items-center">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <i key={i} className="fas fa-star mr-1"></i>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-midgray mb-6 italic leading-relaxed relative z-10">"{testimonial.quote}"</p>
                
                {/* Client info */}
                <div className="flex items-center mt-6 border-t border-lightgray pt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-gold">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                      width="100"
                      height="100"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy">{testimonial.name}</h4>
                    <p className="text-sm text-midgray">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination indicators */}
          {testimonials.length > displayCount && (
            <div className="flex justify-center mt-10 space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / displayCount) }).map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveIndex(i * displayCount)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === Math.floor(activeIndex / displayCount) 
                      ? "bg-gold" 
                      : "bg-lightgray hover:bg-gold/50"
                  }`}
                  aria-label={`Go to testimonial group ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="text-center mt-12">
          <a href="/contact" className="inline-flex items-center text-navy hover:text-gold transition-colors font-medium">
            Ready to discuss your legal needs? <span className="ml-2 text-gold"><i className="fas fa-arrow-right"></i></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
