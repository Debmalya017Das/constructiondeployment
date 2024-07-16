import { Link } from 'react-router-dom';

const BlogPost = ({ title, date, excerpt, link }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-2">
      <Link to={link} className="hover:text-blue-600">{title}</Link>
    </h2>
    <p className="text-gray-500 text-sm mb-2">{date}</p>
    <p className="mb-2">{excerpt}</p>
    <Link to={link} className="text-blue-600 hover:text-blue-800">Read more →</Link>
  </div>
);

const BlogPage = () => {
  const blogPosts = [
    {
      title: "5 Trends Shaping the Future of Construction",
      date: "July 15, 2024",
      excerpt: "Explore the latest innovations and technologies transforming the construction industry.",
      link: "/blog/construction-trends"
    },
    {
      title: "Sustainable Building Practices: A Guide for Homeowners",
      date: "July 1, 2024",
      excerpt: "Learn how to incorporate eco-friendly features into your home construction or renovation project.",
      link: "/blog/sustainable-building"
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="mb-8">
        <input type="text" placeholder="Search blog posts..." className="w-full p-2 border rounded" />
      </div>
      {blogPosts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogPage;