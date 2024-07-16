import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-bold">BuildMaster</h3>
            <p className="mt-2">Building dreams, one project at a time.</p>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul className="flex flex-wrap justify-center md:justify-start">
              <li><Link to="/" className="mr-4 hover:text-blue-300">Home</Link></li>
              <li><Link to="/services" className="mr-4 hover:text-blue-300">Services</Link></li>
              <li><Link to="/projects" className="mr-4 hover:text-blue-300">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0 text-center md:text-right">
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-2xl hover:text-blue-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl hover:text-blue-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-2xl hover:text-blue-300">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 BuildMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;