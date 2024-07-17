import Footer from "./Footer";
import Header from "./Header";
import values from "./data/values";


const ValueCard = ({ title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-400 text-center bg-slate-100">
    <h3 className="text-xl font-bold mb-4 font-montserrat  text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600 font-montserrat font-medium">{description}</p>
  </div>
);
const AboutPage = () => {
  return (
  <>
    <Header />
    <div className="mx-10 py-5">
      <div className="container mx-auto px-20 py-8">
     
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-light mb-2 font-montserrat font-medium ">A Distinctly Different Design </h1>
            <h1 className="text-4xl font-light mb-7 font-montserrat font-medium ">& Construction Firm</h1>
            
            <p className="mb-4 text-slate-900 leading-relaxed font-montserrat font-medium text-base">
              Our reputation has been built as carefully as our finely crafted homes. It is a reputation that has been earned over
              three decades, and is earned again each time we invest our talent and experience into the creation of a new
              home.
            </p>
            
            <p className="mb-4 text-slate-900 leading-relaxed font-montserrat font-medium text-base">
              The result is an experience that is just as enjoyable as the final product. It is one of the many reasons why our
              team has been recognized with the industry`s highest awards and honors. But above all, it is personal and sincere -
              and it is the primary reason why so many of our clients build their next home with us.
            </p>

          </div>
          
          <div className="lg:w-1/2 lg:h-full">
            <img 
              src="https://www.luxurysimplified.com/assets/img/bnn-01.jpg" 
              alt="" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div> 
     {/* statement section */}
          <div className="flex flex-col items-center justify-center pt-20 pb-12 bg-slate-800 text-center font-['Helvetica','Arial',sans-serif]">
            <h1 className="font-montserrat uppercase text-5xl mb-2 text-white">our mission</h1>
            <p className="font-montserrat text-lg text-white pt-10 leading-relaxed">We provide exceptional workmanship through the quality and personal ownership of our product and </p>
               <p className="font-montserrat text-lg text-white leading-relaxed">services; to bring value to clients through attentive details, professional integrity, and aggressive performance; and to lead with </p>
               <p className="font-montserrat text-lg text-white leading-relaxed">character and purpose that brings honor to God. </p>           
          </div>
    {/* values section */}
    <div className="max-w-screen-lg mx-auto px-4 py-12">
    <h2 className="font-montserrat uppercase text-4xl mb-2 text-center py-4">Our aim</h2>
    
    {/* First grid for the upper row */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {values.slice(0, 3).map((value, index) => (
        <div className="mb-8" key={index}>
          <ValueCard title={value.title} description={value.description} />
        </div>
      ))}
    </div>
    
    {/* Second grid for the lower row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {values.slice(3).map((value, index) => (
        <div className="mb-8" key={index}>
          <ValueCard title={value.title} description={value.description} />
        </div>
      ))}
    </div>
</div>

  <Footer/>
  
  
  </>
   
  );
};

export default AboutPage;