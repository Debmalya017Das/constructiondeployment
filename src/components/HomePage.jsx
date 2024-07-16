import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to BuildMaster</h1>
      <p className="text-xl mb-8">Your trusted partner in construction excellence.</p>
      
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Project</h2>
        <img src="/path-to-featured-project-image.jpg" alt="Featured Project" className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="mb-4">Description of the featured project goes here.</p>
        <Link to="/projects" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View All Projects</Link>
      </div>
      
      <div className="flex space-x-4">
        <Link to="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Request a Quote</Link>
        <Link to="/services" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Explore Services</Link>
      </div>
    </div>
  );
};

export default HomePage;