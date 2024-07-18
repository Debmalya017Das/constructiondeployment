import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-10 pb-16 bg-cover bg-center rounded-tr-[15px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* BuildMaster Logo */}
          <div className="md:w-1/3 mb-8 md:mb-0 pl-7">
            <h2 className="text-4xl font-bold pl-10">BuildMaster</h2>
          </div>

          {/* Footer Content */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pl-10">
            {/* Quick spans */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick spans</h3>
              <ul>
                <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
                <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
                <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              </ul>
            </div>

            {/* Terms and Security */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Terms and Security</h3>
              <ul>
                <li><span to="/terms" className="hover:text-gray-300">Terms</span></li>
                <li><span to="/privacy" className="hover:text-gray-300">Privacy</span></li>
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacts</h3>
              <p>Email: support@example.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul>
                <li><span to="/about" className="hover:text-gray-300">About Us</span></li>
                <li><span to="/blog" className="hover:text-gray-300">Blog</span></li>
                <li><span to="/news" className="hover:text-gray-300">News</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
