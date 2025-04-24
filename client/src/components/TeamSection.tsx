import { team } from "@/data/constants";

interface TeamSectionProps {
  extended?: boolean;
}

const TeamSection = ({ extended = false }: TeamSectionProps) => {
  // If extended, show all team members, otherwise limit to first 3
  const displayedTeam = extended ? team : team.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-navy text-white">
      <div className="container mx-auto px-4">
        {!extended && (
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Our Legal Team</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-lightgray max-w-3xl mx-auto">
              Our accomplished attorneys bring decades of combined experience and a commitment to client success.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTeam.map((member, index) => (
            <div key={index} className="bg-white bg-opacity-5 rounded-lg overflow-hidden hover:bg-opacity-10 transition-all group">
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-50"></div>
              </div>
              <div className="p-6 relative">
                <h3 className="font-display text-2xl mb-1">{member.name}</h3>
                <p className="text-gold text-sm mb-4 font-medium">{member.position}</p>
                <p className="text-lightgray text-sm mb-5 leading-relaxed">{member.bio}</p>
                
                {member.credentials && (
                  <div className="mb-4">
                    <h4 className="text-gold text-sm mb-2 font-medium">Education & Credentials</h4>
                    <p className="text-lightgray text-sm whitespace-pre-line leading-relaxed">{member.credentials}</p>
                  </div>
                )}
                
                {member.specialties && (
                  <div className="mb-5">
                    <h4 className="text-gold text-sm mb-2 font-medium">Practice Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="text-xs bg-gold bg-opacity-20 text-lightgray px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex space-x-4 mt-4">
                  <a href={member.linkedin} className="text-lightgray hover:text-gold transition-colors" aria-label={`${member.name}'s LinkedIn`}>
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a href={`mailto:${member.email}`} className="text-lightgray hover:text-gold transition-colors" aria-label={`Email ${member.name}`}>
                    <i className="fas fa-envelope text-lg"></i>
                  </a>
                  <a href="#contact" className="text-gold hover:text-white transition-colors ml-auto" aria-label={`Contact ${member.name}`}>
                    <span className="flex items-center text-sm">Contact <i className="fas fa-arrow-right ml-1"></i></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {extended && (
          <div className="mt-16 text-center">
            <p className="text-lightgray max-w-3xl mx-auto mb-8">
              Our team also includes skilled paralegals, legal researchers, and administrative staff who work diligently to 
              support our attorneys and ensure seamless service delivery for our clients.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
