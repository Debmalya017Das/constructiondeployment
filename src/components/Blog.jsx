import Footer from "./Footer"
import Header from "./Header"
import posts from './data/blogposts'

function Blog() {

  const BlogPost = ({ image, title, date, excerpt, readMoreLink }) => (
  
    <div className="bg-white rounded-lg overflow-hidden align-center shadow-md mx-5 my-5 transition-transform duration-300 hover:scale-105">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2 font-montserrat">{title}</h3>
      <p className="text-gray-600 text-sm mb-2 font-montserrat">{date}</p>
      <p className="text-gray-700 mb-4 font-montserrat">{excerpt}</p>
      <a href={readMoreLink} className="text-navy-800 hover:underline">Read more →</a>
    </div>
  </div>

);
  return (    
    <>
      <Header/>
        <div className="flex flex-col items-center justify-center pt-20 bg-white text-center font-['Helvetica','Arial',sans-serif]">
            <h1 className="font-montserrat uppercase text-5xl mb-2 text-slate-900">BLOG</h1>
            <p className="font-montserrat text-lg text-slate-900 pt-5 pb-10 leading-relaxed">Trusted news and resources for builders.</p>        
        </div>
        <div className="flex flex-col items-center justify-center px-24 ">
            <div className="container mx-auto px-8 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              {posts.map((post, index) => (
                <BlogPost key={index} {...post} />
              ))}
            </div>
          </div>
        </div>
        
      <Footer/>
    </>
  )
}

export default Blog