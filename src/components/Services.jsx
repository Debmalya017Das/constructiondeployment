// import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, link }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="text-blue-600 hover:text-blue-800">Learn more →</Link>
    </div>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      title: "Residential Construction",
      description: "Custom home building and renovations tailored to your lifestyle.",
      link: "/services/residential"
    },
    {
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and industrial facilities built to last.",
      link: "/services/commercial"
    },
    {
      title: "Industrial Construction",
      description: "Specialized construction for manufacturing and processing facilities.",
      link: "/services/industrial"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;