import Header from './Header'
import Footer from './Footer'

const Services = () => {
  return (
    <>
      <Header />
        <div className="relative w-full h-max">
          <div className="absolute inset-0">
            <img
              src="https://t4.ftcdn.net/jpg/08/43/24/89/240_F_843248976_mS2FvWJW9RSLDIJqW6ixIVOhSK4V9UQN.jpg"
              alt="Interior design background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white bg-opacity-80"></div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center justify-center py-28 px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6 font-montserrat">
              Comprehensive Services
            </h2>
            <p className="max-w-3xl text-lg md:text-xl leading-relaxed font-montserrat font-medium text-gray-600">
              From floor plans, custom cabinetry, and interior and exterior design
              selections, to furnishings and everything in between, we offer clients a fully-
              integrated, all-inclusive, design+build experience that is efficient, well-
              organized and refreshingly smooth.
            </p>
          </div>
        </div>
      <div className="container mx-auto px-8 md:px-16 lg:px-24"> {/* Increased padding */}
        <section className="flex flex-col md:flex-row my-12 py-8">
          <div className="md:w-2/5"> {/* Reduced image width */}
            <img 
              src="https://images.squarespace-cdn.com/content/v1/615b7de993287d2be50f610b/e6888226-bec7-4eeb-ad5c-cd4f76c3a24c/Michigan+Custom+Home+Builder?format=1500w" 
              alt="Custom Home" 
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:w-3/5 md:pl-12 mt-6 md:mt-0"> {/* Increased text width and left padding */}
            <h2 className="text-3xl text-gray-800 mb-4 font-montserrat">Custom Homes</h2>
            <p className="text-gray-600 mb-4 font-montserrat font-medium">
              We create original, one-of-a-kind, custom homes that are as spectacular as they are enduring.
            </p>
            <p className="text-gray-600 mb-4 font-montserrat font-medium">
              From the fresh appeal of Michigan`s lakefront living to crisp, new, contemporary styling; from the traditional character of an estate home, to the eclectic feel of a transitional interior, our homes reflect some of the world`s most celebrated styles.
            </p>
            <p className="text-gray-600 font-montserrat font-medium">
              Hire your own architect or work with one of our widely recognized designers to articulate your vision and create an original work-of-art.
            </p>
          </div>
        </section>

        <div className="border-t border-gray-200 my-12"></div>

        <section className="flex flex-col md:flex-row-reverse my-12 py-8">
          <div className="md:w-2/5"> {/* Reduced image width */}
            <img 
              src="https://images.squarespace-cdn.com/content/v1/615b7de993287d2be50f610b/231be6e1-76e6-4a6f-8b97-f924721bb5dd/image-asset.jpeg?format=1500w" 
              alt="Refreshing Remodel" 
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:w-3/5 md:pr-12 mt-6 md:mt-0"> {/* Increased text width and right padding */}
            <h2 className="text-3xl text-gray-800 mb-4 font-montserrat">Refreshing Remodels</h2>
            <p className="text-gray-600 mb-4 font-montserrat font-medium">
              Whether you are adding a second story, a new master suite, or a state-of-the-art kitchen, Mike Schaap Builders has deep expertise in large-scale renovation projects.
            </p>
            <p className="text-gray-600 mb-4 font-montserrat font-medium">
              We`ve helped homeowners breathe new life into their existing homes, creating spectacular new spaces that deliver unmatched value and uncompromising quality.
            </p>
            <p className="text-gray-600 font-montserrat font-medium">
              You can rest assured knowing that these services are all completed by the same talent and craftsmanship that goes into our custom homes.
            </p>
          </div>
        </section>

        <div className="border-t border-gray-200 my-12"></div>

        <section className="flex flex-col md:flex-row my-12 py-8">
          <div className="md:w-2/5"> {/* Reduced image width */}
            <img 
              src="https://images.squarespace-cdn.com/content/v1/615b7de993287d2be50f610b/895d8b21-3741-473d-a426-4f0da52b6c46/interior-design.jpg?format=1500w" 
              alt="Custom Home" 
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:w-3/5 md:pl-12 mt-6 md:mt-0"> {/* Increased text width and left padding */}
            <h2 className="text-3xl text-gray-800 mb-4 font-montserrat">Interior Design</h2>
            <p className="text-gray-600 mb-4 font-montserrat font-medium">
             The creativity and design expertise of our in-house interior design team, Benchmark Design Studio, comes as another valued benefit of Mike Schaap Builders.
            </p>
            <p className="text-gray-600 mb-4 font-montserrat font-medium">
             Involved from the earliest phases of your design planning, our team listens closely to understand your priorities, style preferences, and lifestyle.
            </p>
          </div>
        </section>

        <div className="border-t border-gray-200 my-12"></div>

        <section className="flex flex-col md:flex-row-reverse my-12 py-8">
          <div className="md:w-2/5"> {/* Reduced image width */}
            <img 
              src="https://images.squarespace-cdn.com/content/v1/615b7de993287d2be50f610b/be89176d-9cf7-4f4c-bdc0-807a5aaa42f6/01a4cf54-d19a-4163-8dbc-30633e701e2b_rw_1200.jpg?format=1500w" 
              alt="Refreshing Remodel" 
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:w-3/5 md:pr-12 mt-6 md:mt-0"> {/* Increased text width and right padding */}
            <h2 className="text-3xl text-gray-800 mb-4 font-montserrat">Property Management</h2>
            <p className="text-gray-600 mb-4 font-montserrat font-medium">
              Every home requires year-round maintenance and BuilderMasters has taken the unique step in offering property management services to our clients.
            </p>
            <p className="text-gray-600 mb-4 font-montserrat font-medium">
              Whether your home is  a primary residence or a season one, you have peace-of-mind knowing that the same exacting care that went into finely crafting your home is now working to maintain its like-new condition.
            </p> 
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;
