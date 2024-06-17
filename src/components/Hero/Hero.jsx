import React from 'react'
import pic from '../../assets/Hero.png'
import logo from "../../assets/icon.png"
import dress2 from "../../assets/dress2.jpg"
import dress1 from "../../assets/dress1.jpg"
import dress3 from "../../assets/dress3.jpg"
import dress4 from "../../assets/dress4.jpg"
import dress5 from "../../assets/dress5.jpg"
import dress6 from "../../assets/dress6.jpg"
import side from "../../assets/side.png"
import { useSpring, animated } from '@react-spring/web';
const Hero = () => {
    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        delay: 200,
      });
  return (
    <div>
        <div>
        <header className="bg-gradient-to-r from-pink-300 via-pink-100 to-pink-400 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
            <div className='flex gap-2 p-0'>
            <img src={logo} alt="logo" className='w-5 h-9' />
            <h1 className='text-4xl  font-bold font-display text-black hover:text-white'>Qamrah</h1>
        <img src={logo} alt="logo" className='w-5 h-9' />
            </div>
        
          <nav>
            <a href="#features" className="px-4  font-bold hover:text-black ">Features</a>
            <a href="#about" className="px-4  hover:text-black font-bold ">About</a>
            <a href="#gallery" className="px-4 font-bold hover:text-black ">Gallery</a>
            <a href="#contact" className="px-4  hover:text-black font-bold">Contact</a>
          </nav>
        </div>
      </header>
            {/* <div>
                <img src={pic} alt="hero" className='w-full  object-cover' />
            </div> */}

         {/* New Creative Section */}
      <section className="bg-cover bg-center text-center py-20 animate-zoom-in" style={{ backgroundImage: `url(${pic})` }}>
        <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display">Discover Your Perfect Dress</h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8 font-play">Find the style that matches your personality and occasion.</p>
          <a href="#gallery">
          <button href="#gallery" className="bg-white text-pink-500 px-6 py-3 my-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Explore Collection
          </button>
          </a>
         
        </div>
      </section>
      
          
        <section className="bg-pink-100 text-center py-20">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-pink-700 mb-4 font-display">Welcome to Qamrah Closet</h2>
          <p className="text-xl  text-pink-600 mb-8 font-play">Rent the perfect dress for any occasion.</p>
          <div>
          <button className="bg-pink-500 text-white font-bold px-6 py-3 rounded-full hover:bg-gray-100 hover:text-black transition duration-300">
              Download The App
            </button>
          </div>
        </div>
      </section>
      

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-700 mb-8 font-display">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 font-display">Wide Selection</h3>
              <p className="text-lg md:text-xl lg:text-2xl text-pink-500 font-play">Choose from a wide range of dresses for every occasion.</p>
            </div>
            <div className="bg-gray-100 p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 font-display">Affordable Prices</h3>
              <p className="text-lg md:text-xl lg:text-2xl text-pink-500 font-play">Get the perfect dress without breaking the bank.</p>
            </div>
            <div className="bg-gray-100 p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 font-display">High Quality</h3>
              <p className="text-lg md:text-xl lg:text-2xl text-pink-500 font-play">We offer only the best quality dresses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-pink-100 py-20 animate-fade-in-left grid grid-cols-2">
        
        <div className="container mx-auto text-center">
          <h2 className="text-5xl text-pink-700 md:text-4xl lg:text-5xl font-bold texblackmb-8 font-display">About Qamrah Closet</h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-black max-w-3xl mx-auto m-4 font-play">Qamrah Closet is dedicated to providing the best dress rental experience. Our mission is to offer a wide selection of high-quality dresses at affordable prices, ensuring you look stunning for any event.</p>
        </div>
        <img src={side} alt="" className='w-auto px-40 animate-bounce' />
      </section>
       {/* Testimonials Section */}
       <section id="testimonials" className="py-20 bg-white animate-fade-in-right">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-black mb-8 font-display">What Our Customers Say !</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 shadow-lg rounded-lg hover:scale-105 transition duration-300">
              <p className="text-pink-600 font-play ">"Amazing selection of dresses and fantastic customer service!"</p>
              <h3 className="text-black font-bold mt-4 font-display">- Dina O.</h3>
            </div>
            <div className="bg-gray-100 p-6 shadow-lg rounded-lg hover:scale-105 transition duration-300">
              <p className="text-pink-600 font-play">"I found the perfect dress for my event. Highly recommend!"</p>
              <h3 className="text-black font-bold mt-4 font-display">- Fatima H.</h3>
            </div>
            <div className="bg-gray-100 p-6 shadow-lg rounded-lg hover:scale-105 transition duration-300">
              <p className="text-pink-600 font-play">"Great prices and beautiful dresses. Will rent again!"</p>
              <h3 className="text-black font-bold mt-4 font-display">- Nour G.</h3>
            </div>
          </div>
        </div>
      </section>

       {/* Gallery Section */}
       <section id="gallery" className="py-20 bg-pink-100 animate-fade-in-left">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-pink-700 mb-8 font-display">Our Dress Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-xl border-4 border-black overflow-hidden">
              <img src={dress2} alt="Dress 1" className="w-full h-74 object-cover hover:scale-105 transition duration-300 " />
            </div>
            <div className="bg-white shadow-lg rounded-xl border-4 border-black overflow-hidden">
              <img src={dress1} alt="Dress 2" className="w-full h-74 object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="bg-white shadow-lg rounded-xl border-4 border-black overflow-hidden">
              <img src={dress5} alt="Dress 3" className="w-full h-74 object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="bg-white shadow-lg rounded-xl  border-4 border-black overflow-hidden">
              <img src={dress4} alt="Dress 4" className="w-full h-74 object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="bg-white shadow-lg rounded-xl border-4 border-black overflow-hidden">
              <img src={dress3} alt="Dress 5" className="w-full h-74 object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="bg-white shadow-lg rounded-xl border-4 border-black overflow-hidden">
              <img src={dress6} alt="Dress 6" className="w-full h-74 object-cover hover:scale-105 transition duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section id="newsletter" className="py-20 bg-white animate-fade-in-right">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-pink-700 mb-8 font-display">Stay Updated</h2>
          <p className="text-xl text-pink-600 mb-8 font-play">Subscribe to our newsletter to get the latest updates and offers.</p>
          <form className="max-w-lg mx-auto">
            <input type="email" placeholder="Enter your email" className="w-full p-4 rounded-full border border-pink-300 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500" />
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section id="contact" className="py-20 animate-fade-in-left border-t-2 border-gray-700">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-4xl lg:text-5xl font-bold text-black mb-8 font-display">Get in Touch</h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-pink-600 mb-4">Email: qamrahcloset24@gmail.com</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/lamia.gue.77" target='_blank' className="text-pink-600 hover:text-pink-700">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/lamia._.za/" target='_blank' className="text-pink-600 hover:text-pink-700">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </section>

      

      <footer className="bg-gradient-to-r from-pink-300 via-purple-400 to-pink-400 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <animated.div style={fadeIn} className="mb-4 md:mb-0">
          <h2 className="text-4xl font-bold text-black font-display">Qamrah Closet</h2>
          <p className="mt-2 text-sm font-play">Find the style that matches your personality and occasion.</p>
        </animated.div>
        
      </div>
      <div className="container mx-auto mt-8  border-t-2 border-gray-700 pt-4 text-center text-sm">
        <animated.p style={fadeIn}>&copy; 2024 Your Company. All rights reserved.</animated.p>
        <animated.p>Made With ❤️ in DZ</animated.p>
      </div>
    </footer>
      
        </div>
    </div>
  )
}

export default Hero