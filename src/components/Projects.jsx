import Header from './Header'
import Footer from './Footer'
import { useState } from 'react';
import { houses } from './data/projects';

function Projects() {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
    <Header />
    <div className="container mx-auto px-10 py-8 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {houses.map((house, index) => (
          <div 
            key={house.name}
            className="relative aspect-auto overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={house.image}
              alt={house.name}
              className={`w-full h-vsh object-cover transition-opacity duration-300 rounded ${
                hoveredIndex === index ? 'opacity-full' : 'opacity-45'
              }`}
            />
            <div 
              className={`absolute inset-0 flex items-center justify-center text-white text-center p-4 transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <h2 className="lg:text-3xl md:text-2xl sm:text-base font-montserrat text-black">{house.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Projects