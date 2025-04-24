import TeamSection from "@/components/TeamSection";
import { Helmet } from "react-helmet";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Legal Team - Genesis Law Consultants</title>
        <meta name="description" content="Meet our accomplished team of attorneys at Genesis Law Consultants with decades of combined experience and a commitment to client success." />
      </Helmet>
      
      <div className="pt-28 lg:pt-32 pb-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-3xl md:text-5xl mb-4">Our Legal Team</h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-lightgray max-w-3xl mx-auto">
              Our accomplished attorneys bring decades of combined experience and a commitment to client success.
            </p>
          </div>
        </div>
      </div>
      
      <TeamSection extended />
      
      <div className="py-16 bg-offwhite">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-navy mb-4">Our Approach</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-gold text-3xl mb-4">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3 className="font-display text-xl text-navy mb-2">Client-Centered</h3>
              <p className="text-midgray">
                We prioritize your needs and objectives, developing personalized legal strategies to achieve your goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-gold text-3xl mb-4">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3 className="font-display text-xl text-navy mb-2">Ethical Standards</h3>
              <p className="text-midgray">
                We adhere to the highest ethical standards, ensuring transparent and honest representation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-gold text-3xl mb-4">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="font-display text-xl text-navy mb-2">Excellence</h3>
              <p className="text-midgray">
                We pursue excellence in all aspects of our practice, from research to representation and results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
