const ProjectCard = ({ title, image, description, client }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-sm text-gray-500">Client: {client}</p>
    </div>
  </div>
);

const ProjectsPage = () => {
  const projects = [
    {
      title: "Modern Office Complex",
      image: "/path-to-office-complex-image.jpg",
      description: "A state-of-the-art office building with sustainable features.",
      client: "TechCorp Inc."
    },
    {
      title: "Luxury Residential Tower",
      image: "/path-to-residential-tower-image.jpg",
      description: "High-end apartments with panoramic city views.",
      client: "Urban Living Developers"
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;