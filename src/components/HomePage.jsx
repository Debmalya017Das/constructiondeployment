// import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './Header';  // Import the Header component
import Footer from './Footer';
import '../App.css'; // Make sure to import your custom CSS file
import { Link } from 'react-router-dom';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div style={{ bottom: '30px' }}>
        <ul> {dots} </ul>
      </div>
    )
  };

  const slides = [
    {
      imageUrl: "https://images.squarespace-cdn.com/content/v1/615b7de993287d2be50f610b/b253b8db-c5ff-4c23-8070-5f53756772da/the-dunegrass.jpg?format=1500w",
      title: "Welcome to BuildMaster",
      subtitle: "Your trusted partner in construction",
      buttonText: "Get Started",
      buttonLink: "/contact"
    },
    {
      imageUrl: "https://images.squarespace-cdn.com/content/v1/615b7de993287d2be50f610b/35f33e26-2a6b-496d-8347-14db6de55f18/sea-breeze.jpg?format=1500w",
      title: "Quality Construction",
      subtitle: "Building dreams, one project at a time",
      buttonText: "View Our Projects",
      buttonLink: "/projects"
    },
    {
      imageUrl: "https://images.squarespace-cdn.com/content/v1/615b7de993287d2be50f610b/1634126956660-YCJN35T89XJZVUKCISER/lake-michigan-cottages-1800.jpg?format=1500w",
      title: "Expert Team",
      subtitle: "Skilled professionals at your service",
      buttonText: "Learn More",
      buttonLink: "/about"
    }
  ];
  const projects =[
     {
      image: 'https://images.squarespace-cdn.com/content/v1/615b7de993287d2be50f610b/be89176d-9cf7-4f4c-bdc0-807a5aaa42f6/01a4cf54-d19a-4163-8dbc-30633e701e2b_rw_1200.jpg?format=1500w',
      title: 'PROPERTY MANAGEMENT',
      subtitle: 'BuilderMaster',
      description: 'Enjoy complete peace-of-mind with our year-round maintenance and property management services.',
      buttonText: 'services',
    },
    {
      image: 'https://images.squarespace-cdn.com/content/v1/615b7de993287d2be50f610b/54ca479c-a935-4e46-bad7-a242b71661be/Sammann+Photoshoot+Sep19-1.jpg?format=1500w',
      title: 'CUSTOM HOMES',
      subtitle: 'BuilderMaster',
      description: 'Enjoy complete peace-of-mind with our year-round maintenance and property management services.',
      buttonText: 'services',
    },
    {
      image: 'https://images.squarespace-cdn.com/content/v1/615b7de993287d2be50f610b/507c89b5-e6b6-4ae4-af16-146ccc420067/07-McDonald.jpg?format=1500w',
      title: 'INTERIOR DESIGNS',
      subtitle: 'BuilderMaster',
      description: 'Enjoy complete peace-of-mind with our year-round maintenance and property management services.',
      buttonText: 'services',
    }

  ]

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Header />
      <div className="flex">
        <div className="homepage w-full">
          <div className="relative">
            <Slider {...settings} className="custom-slider h-full">
              {slides.map((slide, index) => (
                <div key={index} className="h-full">
                  <div className="relative h-full">
                    <img 
                      src={slide.imageUrl} 
                      alt={`Slide ${index + 1}`} 
                      className="w-full h-lvh object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white px-4">
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          
          {/* Welcome section  */}

          <div className="flex flex-col items-center justify-center pt-20 pb-12 bg-amber-50 text-center font-['Helvetica','Arial',sans-serif]">
            <h1 className="font-great-vibes text-5xl mb-2">welcome</h1>
            <p className="font-montserrat text-lg uppercase pt-10 mb-2">Crafting Homes For</p>
            <h2 className="text-4xl font-serif tracking-widest uppercase py-5">Discerning Clients</h2>
            <h3 className="font-montserrat text-lg uppercase mb-4">Since 2000</h3>
            <p className="font-montserrat font-medium text-base">The only thing more important than experience is passion.</p>
             <p className="font-montserrat font-medium text-base">We have both.</p>
             <div className='justify-center py-7 '>
              <Link to="/about"> <button className='bg-slate-800 rounded py-3  px-9 text-slate-50 hover:scale-105 '>About Us</button></Link>
             </div>             
          </div>
              
          {/* project highlight section  */}

         <div className="bg-slate-800 p-8">
            
          <div className="flex flex-col text-white items-center justify-center pt-10 pb-12 text-center font-['Helvetica','Arial',sans-serif]">
            <h1 className="font-great-vibes text-4xl mb-4">Valued</h1>
            <h1 className='font-montserrat text-4xl uppercase pt-1 mb-2 '>Projects</h1>
            <p className='font-montserrat font-medium  pt-12'>Over two decades of practice alongside the</p>
            <p className='font-montserrat font-medium '> creativity and drive of some of the world`s most talented designers</p>
            <p className='font-montserrat font-medium   pb-8'>and craftsman - it`s truly the best of every world. </p>
          </div>
            <Slider {...settings} className="custom-slider h-full">
              {projects.map((project, index) => (
                <div key={index} className="relative px-4 py-8 md:py-12 ">
                  <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-center">
                    <div className="w-full md:w-1/2 h-64 md:h-[430px] lg:mr-[30rem]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <div className="w-full md:w-2/5 bg-white p-6 md:p-10 shadow-lg md:absolute md:top-1/2 md:right-4 md:transform md:-translate-y-1/2 md:z-10 lg:mr-[12rem] lg:w-1/3">
                      <h2 className="text-xl md:text-2xl font-serif tracking-wide mb-4">{project.title}</h2>
                      <h3 className="text-lg md:text-xl font-bold mb-2">{project.subtitle}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <Link to="/services">
                        <button className="bg-slate-900 text-white px-4 py-2 rounded hover:scale-110 transition-transform">
                          {project.buttonText}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* ending section  */}
           <div  id="contact" className="flex flex-col items-center justify-center pt-20 pb-12 bg-amber-50 text-center font-['Helvetica','Arial',sans-serif]">
              <h1 className="font-great-vibes text-4xl mb-4">Contact Us</h1>
              <p className='font-montserrat font-medium py-4'>Contact us by the provided form and also feel free to explore our various projects.</p>
                  <div className="md: w-full sm: w-full lg:w-1/2 px-5 ">
                      <form className="flex flex-col">
                          <input type="text" placeholder="Name" className="mb-4 p-2 border rounded font-montserrat bg-amber-50 shadow-md text-slate-900"  />
                          <input type="email" placeholder="Email" className="mb-4 p-2 border rounded font-montserrat bg-amber-50 shadow-md" />
                          <textarea placeholder="Message" className="mb-4 p-2 border rounded h-32 font-montserrat bg-amber-50 shadow-md"></textarea>
                      </form>  
                      <button type="submit" className="bg-slate-800 shadow-md text-white px-5 py-2 rounded hover:scale-110">Submit</button>                    
              </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
