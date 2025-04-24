import ContactForm from "@/components/ContactForm";
import { contactInfo } from "@/data/constants";

interface ContactSectionProps {
  extended?: boolean;
}

const ContactSection = ({ extended = false }: ContactSectionProps) => {
  return (
    <section id="contact" className={`py-16 md:py-24 ${extended ? "bg-offwhite" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        {!extended && (
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-navy mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-midgray max-w-3xl mx-auto">
              Reach out to schedule a consultation or learn more about how we can assist with your legal needs.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-display text-2xl text-navy mb-6">Get In Touch</h3>
            <ContactForm />
          </div>
          
          <div>
            <h3 className="font-display text-2xl text-navy mb-6">Our Office</h3>
            
            <div className="bg-offwhite p-6 rounded-lg mb-8">
              <div className="flex items-start mb-4">
                <div className="text-gold mr-4 mt-1">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-medium text-navy mb-1">Address</h4>
                  <p className="text-midgray">{contactInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="text-gold mr-4 mt-1">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="font-medium text-navy mb-1">Phone</h4>
                  <p className="text-midgray">{contactInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="text-gold mr-4 mt-1">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-medium text-navy mb-1">Email</h4>
                  <p className="text-midgray">{contactInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-gold mr-4 mt-1">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h4 className="font-medium text-navy mb-1">Office Hours</h4>
                  <p className="text-midgray">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-64 md:h-80">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Our office building" 
                className="w-full h-full object-cover"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {extended && (
          <div className="mt-16 pt-16 border-t border-lightgray">
            <div className="text-center mb-12">
              <h3 className="font-display text-2xl text-navy mb-4">Frequently Asked Questions</h3>
              <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-medium text-navy mb-2">What types of cases do you handle?</h4>
                <p className="text-midgray">
                  Our firm handles a wide range of legal matters including corporate law, litigation, 
                  contract law, real estate, employment, and intellectual property cases.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-medium text-navy mb-2">How do I schedule a consultation?</h4>
                <p className="text-midgray">
                  You can schedule a consultation by contacting us through this form, 
                  calling our office directly, or sending us an email.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-medium text-navy mb-2">What should I bring to my first meeting?</h4>
                <p className="text-midgray">
                  Please bring any relevant documents related to your case, identification, 
                  and a list of questions or concerns you'd like to discuss.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-medium text-navy mb-2">Do you offer virtual consultations?</h4>
                <p className="text-midgray">
                  Yes, we offer virtual consultations via video conference for clients 
                  who prefer remote meetings or are unable to visit our office.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
