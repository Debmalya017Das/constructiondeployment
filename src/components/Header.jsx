import { useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="bg-black text-white shadow-xl relative z-50 w-full  ">
      <nav className="container mx-auto px-6 py-9">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link to="/" className="text-4xl font-bold pl-10">BuildMaster</Link>
          </div>
          <div className="lg:hidden relative">
            <button
              onClick={toggleVisibility}
              className="text-white"
              aria-controls="navbar-content"
              aria-expanded={visible}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className={`${visible ? 'block' : 'hidden'} lg:hidden bg-slate-50 text-slate-950 shadow-lg rounded-lg absolute right-0 pr-6 pl-2 top-full z-50`}>
              <ul className=" font-bold py-2 ">
                <NavItem to="/" label="Home" />
                <NavItem to="/about" label="About" />
                <NavItem to="/services" label="Services" />
                <NavItem to="/projects" label="Projects" />
                <NavItem to="/blog" label="Blog" />
                <a href="#contact" className='pr-8 pl-4 pt-2 hover:scale-105'>Contact </a>
              </ul>
            </div>
          </div>
          <div className="hidden lg:flex lg:space-x-2">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/services" label="Services" />
            <NavItem to="/projects" label="Projects" />
            <NavItem to="/blog" label="Blog" />
            <a href="/#contact" className="pt-2 hover:scale-105">Contact </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <li className="list-none">
      <Link to={to} className="block px-4 py-2 rounded hover:scale-105">
        {label}
      </Link>
    </li>
  );
}

export default Header;