const ContactPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-lg" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Send Message</button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Office</h2>
          <p className="mb-2">123 Construction Ave</p>
          <p className="mb-2">BuildCity, BC 12345</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p className="mb-4">Email: info@buildmaster.com</p>
          
          {/* You can add a map component here */}
          <div className="bg-gray-300 h-64 rounded-lg">
            {/* Placeholder for map */}
            <p className="text-center pt-28">Map goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;