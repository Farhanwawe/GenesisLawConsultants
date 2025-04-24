import ContactSection from "@/components/ContactSection";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Genesis Law Consultants</title>
        <meta name="description" content="Contact Genesis Law Consultants to schedule a consultation or learn more about how we can assist with your legal needs." />
      </Helmet>
      
      <div className="pt-28 lg:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-3xl md:text-5xl text-navy mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-midgray max-w-3xl mx-auto">
              Reach out to schedule a consultation or learn more about how we can assist with your legal needs.
            </p>
          </div>
        </div>
      </div>
      
      <ContactSection extended />
    </>
  );
};

export default Contact;
