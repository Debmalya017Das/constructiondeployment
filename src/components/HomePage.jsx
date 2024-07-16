// import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './Header';  // Import the Header component
import Footer from './Footer';
import '../App.css'; // Make sure to import your custom CSS file

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
                        {/* <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                        <p className="text-xl mb-8">{slide.subtitle}</p>
                        <Link 
                          to={slide.buttonLink} 
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        >
                          {slide.buttonText}
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          
          {/* Rest of the homepage content */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
