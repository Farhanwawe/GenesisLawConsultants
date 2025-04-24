import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-white mr-2">
                <i className="fas fa-balance-scale text-gold text-2xl"></i>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Genesis <span className="text-gold">Law</span></h3>
                <p className="text-xs text-lightgray">Consultants</p>
              </div>
            </div>
            <p className="text-lightgray mb-4">Providing expert legal services with integrity and excellence since 2010.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-display mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-lightgray hover:text-gold transition-colors">Home</Link></li>
              <li><a href="/#about" className="text-lightgray hover:text-gold transition-colors">About Us</a></li>
              <li><a href="/#services" className="text-lightgray hover:text-gold transition-colors">Services</a></li>
              <li><Link href="/team" className="text-lightgray hover:text-gold transition-colors">Our Team</Link></li>
              <li><a href="/#contact" className="text-lightgray hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-display mb-4">Legal Services</h4>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-lightgray hover:text-gold transition-colors">Corporate Law</a></li>
              <li><a href="/#services" className="text-lightgray hover:text-gold transition-colors">Litigation</a></li>
              <li><a href="/#services" className="text-lightgray hover:text-gold transition-colors">Contract Law</a></li>
              <li><a href="/#services" className="text-lightgray hover:text-gold transition-colors">Real Estate Law</a></li>
              <li><a href="/#services" className="text-lightgray hover:text-gold transition-colors">Employment Law</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-display mb-4">Newsletter</h4>
            <p className="text-lightgray mb-4">Subscribe to our newsletter for legal updates and insights.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="p-2 rounded-l text-navy w-full focus:outline-none" 
                required
                aria-label="Email for newsletter"
              />
              <button 
                type="submit" 
                className="bg-gold text-white p-2 rounded-r hover:bg-opacity-90 transition-all"
                aria-label="Subscribe to newsletter"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-lightgray text-sm">
          <p>&copy; {new Date().getFullYear()} Genesis Law Consultants. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/legal" className="text-lightgray hover:text-gold transition-colors">Terms of Service & Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
