const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">About BuildMaster</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our History</h2>
        <p className="mb-4">Founded in 2000, BuildMaster has grown from a small local contractor to a leading construction company in the region.</p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-4">To deliver exceptional construction services that exceed client expectations, while maintaining the highest standards of safety, quality, and integrity.</p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Repeat this div for each team member */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <img src="/path-to-team-member-image.jpg" alt="Team Member Name" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Achievements & Certifications</h2>
        <ul className="list-disc list-inside">
          <li>ISO 9001:2015 Certified</li>
          <li>Best Construction Company Award 2023</li>
          <li>LEED Platinum Certification for Sustainable Building</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;