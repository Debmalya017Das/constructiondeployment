import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link to="/">BuildMaster</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/about" className="hover:text-blue-200">About</Link>
            <Link to="/services" className="hover:text-blue-200">Services</Link>
            <Link to="/projects" className="hover:text-blue-200">Projects</Link>
            <Link to="/blog" className="hover:text-blue-200">Blog</Link>
            <Link to="/contact" className="hover:text-blue-200">Contact</Link>
            {/* <Link to="/resources" className="hover:text-blue-200">Resources</Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;