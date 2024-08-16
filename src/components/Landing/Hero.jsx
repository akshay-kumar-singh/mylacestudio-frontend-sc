import { useState, useEffect, useRef } from 'react';
import heroone from '../../assets/hero1.png';
import herotwo from '../../assets/hero2.png';
import herothree from '../../assets/hero3.png';
import herofour from '../../assets/hero4.png';
import herofive from '../../assets/hero5.png';
import arrowleft from '../../assets/arrowleft.png';
import arrowright from '../../assets/arrowright.png';
import Navbar from './Navbar';

function Hero() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef(null);

  const slides = [
    {
      title: 'Find your clothing items ',
      description: 'Join the Culture: Find Your Unique Style Statement!',
      image: heroone,
    },
    {
      title: 'Now kurtis are one click away',
      description: 'Join the Culture: Find Your Unique Style Statement!',
      image: herotwo,
    },
    {
      title: 'Enjoy the Indian tradition with us',
      description: 'Join the Culture: Find Your Unique Style Statement!',
      image: herothree,
    },
    {
      title: 'Our services makes us different',
      description: 'Join the Culture: Find Your Unique Style Statement!',
      image: herofour,
    },
    {
      title: 'Join our community to explore more',
      description: 'Join the Culture: Find Your Unique Style Statement!',
      image: herofive,
    },
  ];

  
  const startSlideInterval = () => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    resetSlideInterval();
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    resetSlideInterval();
  };

  const resetSlideInterval = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
    startSlideInterval();
  };

  useEffect(() => {
    startSlideInterval();
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, []);


  return (
    <>
      <section className='h-screen w-screen'>
        <div
          className="h-screen w-screen bg-cover"
          style={{ backgroundImage: `url(${slides[currentSlide].image})`, backgroundPosition: "center center" }}
        >

          <Navbar navbar={"Landing"}/>


          <div className="h-screen w-screen bg-cover pb-10 gap-20 pt-72 flex justify-around items-center flex-col">
            <div className='max-w-screen-2xl mx-auto w-full flex justify-between items-center flex-row'>
              <button onClick={prevSlide}>
                <img className='w-8 md:w-10 shadow-xl' src={arrowleft} alt="Previous" />
              </button>

              <button onClick={nextSlide}>
                <img className='w-8 md:w-10 shadow-xl' src={arrowright} alt="Next" />
              </button>
            </div>

            <div className='max-w-screen-2xl mx-auto w-full flex justify-between items-center gap-6 flex-col-reverse md:flex-row'>
              <div className='flex flex-row items-center justify-center gap-2'>
              {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 md:w-6 h-2 md:h-6 rounded-full border-2 border-white ${index === currentSlide ? 'bg-white' : ''}`}
                    onClick={() => {
                      setCurrentSlide(index);
                      resetSlideInterval();
                    }}
                    style={{ cursor: 'pointer' }}
                  ></div>
                ))}
              </div>

              <div className='text-center md:text-auto text-white p-4 md:p-0'>
                <h1 className='font-gabriela font-normal text-3xl md:text-4xl lg:text-5xl text-[#FDFDFD] py-4 md:p-0'>{slides[currentSlide].title}</h1>
                <div className='flex justify-between items-center flex-row'>
                  <p className='font-raleway font-semibold text-lg md:text-xl flex flex-wrap'>{slides[currentSlide].description}</p>
                  {currentSlide === slides.length - 1 && (
                    <a href="#" className="inline-flex font-raleway items-center justify-center px-6 py-1 text-white font-semibold text-center rounded-lg bg-[#2B2A2ACC] hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                    >
                      Get Started
                    </a>
                  )}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Hero;
