import { Link } from "wouter";
import { services } from "@/data/constants";

interface ServicesSectionProps {
  extended?: boolean;
}

const ServicesSection = ({ extended = false }: ServicesSectionProps) => {
  // If extended, show all services, otherwise limit to 6
  const displayedServices = extended ? services : services.slice(0, 6);

  return (
    <section id="services" className={`py-16 md:py-24 ${extended ? "bg-offwhite" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        {!extended && (
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-navy mb-4">Our Legal Services</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-midgray max-w-3xl mx-auto">
              We offer comprehensive legal services tailored to meet your specific needs with expertise and personalized attention.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all border-t-4 border-gold group hover:-translate-y-1 duration-300">
              <div className="text-gold text-3xl mb-4 group-hover:scale-110 transition-transform">
                <i className={service.icon}></i>
              </div>
              <h3 className="font-display text-2xl text-navy mb-3">{service.title}</h3>
              <p className="text-midgray mb-5 leading-relaxed">{service.description}</p>
              
              {service.details && (
                <div className="mb-5">
                  <h4 className="text-navy font-medium mb-2 text-sm">Our expertise includes:</h4>
                  <ul className="space-y-1">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gold mr-2 mt-1 text-xs"><i className="fas fa-check"></i></span>
                        <span className="text-sm text-midgray">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <Link href="/contact" className="text-gold hover:text-navy transition-colors font-medium inline-flex items-center mt-2">
                Request Consultation <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          ))}
        </div>

        {extended && (
          <div className="mt-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-display text-2xl text-navy mb-4">Need Specialized Legal Assistance?</h3>
              <p className="text-midgray mb-6">
                In addition to our core practice areas, we offer specialized legal services tailored to specific industries 
                and unique situations. Contact us to discuss your specific requirements.
              </p>
              <Link 
                href="/contact"
                className="bg-gold text-white px-6 py-3 rounded hover:bg-opacity-90 transition-all inline-block"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
