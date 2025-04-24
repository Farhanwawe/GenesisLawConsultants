import Layout from "@/components/Layout";
import { Link } from "wouter";

const Legal = () => {
  return (
    <Layout>
      <div className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-navy">Terms of Service</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">Last updated: April 23, 2025</p>
                
                <h2 className="text-navy">1. Introduction</h2>
                <p>Welcome to Genesis Law Consultants. These Terms of Service govern your use of our website and the legal services offered by our firm. By accessing or using our services, you agree to be bound by these Terms.</p>
                
                <h2 className="text-navy">2. Services Provided</h2>
                <p>Genesis Law Consultants provides legal consultation services in various areas of law including corporate law, litigation, contract law, real estate law, and employment law. Our services are provided by licensed attorneys who are regulated by professional ethics and standards.</p>
                
                <h2 className="text-navy">3. Client Relationship</h2>
                <p>No attorney-client relationship is formed merely by visiting our website or submitting a contact form. An attorney-client relationship is only established through mutual agreement between you and our firm, typically through a formal engagement letter.</p>
                
                <h2 className="text-navy">4. Information Accuracy</h2>
                <p>We strive to ensure all information on our website is accurate and up-to-date, but it should not be considered legal advice. Legal information may change, and circumstances vary from case to case. Always consult with an attorney for advice specific to your situation.</p>
                
                <h2 className="text-navy">5. Limitation of Liability</h2>
                <p>Genesis Law Consultants is not liable for any damages arising from your use of our website or services. This includes, but is not limited to, direct, indirect, incidental, punitive, and consequential damages.</p>
                
                <h2 className="text-navy">6. Governing Law</h2>
                <p>These Terms are governed by the laws of the State of [State], without regard to its conflict of law principles.</p>
                
                <h2 className="text-navy">7. Changes to Terms</h2>
                <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after any changes indicates your acceptance of the modified Terms.</p>
                
                <h2 className="text-navy">8. Contact Information</h2>
                <p>If you have any questions about these Terms, please contact us at legal@genesislawconsultants.com.</p>
              </div>
            </div>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-navy">Privacy Policy</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">Last updated: April 23, 2025</p>
                
                <h2 className="text-navy">1. Information We Collect</h2>
                <p>We collect information you provide directly to us when you fill out our contact form, including your name, email address, phone number, and any other information you choose to provide.</p>
                
                <h2 className="text-navy">2. How We Use Your Information</h2>
                <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations. We may also use your information to respond to your inquiries and provide legal services when formally engaged.</p>
                
                <h2 className="text-navy">3. Information Sharing</h2>
                <p>We do not sell, rent, or share your personal information with third parties except as described in this Privacy Policy. We may share your information with third-party service providers who perform services on our behalf, such as hosting services and analytics providers.</p>
                
                <h2 className="text-navy">4. Data Security</h2>
                <p>We implement reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
                
                <h2 className="text-navy">5. Attorney-Client Privilege</h2>
                <p>Communications between our attorneys and clients are protected by attorney-client privilege. However, information submitted through our website contact form is not automatically privileged until an attorney-client relationship is established.</p>
                
                <h2 className="text-navy">6. Your Rights</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your personal information.</p>
                
                <h2 className="text-navy">7. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                
                <h2 className="text-navy">8. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at privacy@genesislawconsultants.com.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/" className="inline-block bg-gold text-white px-6 py-3 rounded hover:bg-opacity-90 transition-all">
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Legal;