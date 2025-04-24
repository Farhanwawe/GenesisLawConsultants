import { Link } from "wouter";

interface AboutSectionProps {
  extended?: boolean;
}

const AboutSection = ({ extended = false }: AboutSectionProps) => {
  return (
    <section id="about" className={`py-16 md:py-24 ${extended ? "bg-white" : "bg-offwhite"}`}>
      <div className="container mx-auto px-4">
        {!extended && (
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-navy mb-4">About Our Firm</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-midgray max-w-3xl mx-auto">
              Genesis Law Consultants has been providing trusted legal services since 2010. 
              Our dedication to client success and legal excellence sets us apart.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Our law office interior" 
              className="rounded-lg shadow-lg w-full h-auto"
              width="600"
              height="400"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-navy mb-4">Our Vision</h3>
            <p className="text-midgray mb-6 leading-relaxed">
              We strive to be the premier legal consultancy known for our client-centered approach, 
              innovative solutions, and unwavering integrity.
            </p>
            
            <h3 className="font-display text-2xl md:text-3xl text-navy mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-gold mr-3 mt-1"><i className="fas fa-balance-scale"></i></div>
                <div>
                  <h4 className="font-medium text-navy">Integrity</h4>
                  <p className="text-midgray">We hold ourselves to the highest ethical standards in all our interactions.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-gold mr-3 mt-1"><i className="fas fa-handshake"></i></div>
                <div>
                  <h4 className="font-medium text-navy">Client-Centered</h4>
                  <p className="text-midgray">Your success is our priority. We develop tailored strategies for your unique needs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-gold mr-3 mt-1"><i className="fas fa-lightbulb"></i></div>
                <div>
                  <h4 className="font-medium text-navy">Excellence</h4>
                  <p className="text-midgray">We pursue excellence in all aspects of our practice, from research to representation.</p>
                </div>
              </li>
            </ul>

            {extended && (
              <div className="mt-8">
                <h3 className="font-display text-2xl md:text-3xl text-navy mb-4">Our History</h3>
                <p className="text-midgray mb-6 leading-relaxed">
                  Founded in 2010 by a group of experienced attorneys, Genesis Law Consultants has grown from a small practice 
                  to a respected legal firm serving clients across the region. Our growth has been built on a foundation of 
                  client satisfaction and legal excellence.
                </p>
                <Link href="/contact" className="inline-flex items-center text-gold hover:text-navy transition-colors font-medium">
                  Schedule a Consultation <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            )}
          </div>
        </div>

        {extended && (
          <div className="mt-16 pt-16 border-t border-lightgray">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl text-navy mb-4">Why Choose Us</h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-offwhite p-6 rounded-lg shadow-md">
                <div className="text-gold text-3xl mb-4">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="font-display text-xl text-navy mb-2">Experienced Team</h3>
                <p className="text-midgray">
                  Our attorneys bring decades of combined experience across various practice areas.
                </p>
              </div>
              
              <div className="bg-offwhite p-6 rounded-lg shadow-md">
                <div className="text-gold text-3xl mb-4">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="font-display text-xl text-navy mb-2">Client Focus</h3>
                <p className="text-midgray">
                  We prioritize understanding your unique needs to deliver personalized legal solutions.
                </p>
              </div>
              
              <div className="bg-offwhite p-6 rounded-lg shadow-md">
                <div className="text-gold text-3xl mb-4">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3 className="font-display text-xl text-navy mb-2">Innovative Approach</h3>
                <p className="text-midgray">
                  We combine traditional legal principles with innovative strategies for optimal results.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
