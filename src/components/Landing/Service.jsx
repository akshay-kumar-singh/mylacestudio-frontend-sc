import { useState, useEffect } from 'react';
import serviceOneImage from '../../assets/service1.png';
import serviceTwoImage from '../../assets/service2.png';
import arrowleft from '../../assets/arrowleft.png';
import arrowright from '../../assets/arrowright.png';

function Service() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: 'Lace Matching',
            description: 'Easily find your perfect saree, lehenga, or kurti with our lace matching tech. Upload a photo, and we\'ll recommend flawlessly matching outfits. Say goodbye to endless searching and hello to effortless elegance.',
            image: serviceOneImage
        },
        {
            title: 'Skin Color Analysis',
            description: 'With just one selfie, our smart system analyzes your skin tone to reveal colors that enhance your natural radiance. Effortless beauty discovery at your fingertips.',
            image: serviceTwoImage
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const slideInterval = setInterval(() => {
          nextSlide();
        }, 5000);
    
        return () => clearInterval(slideInterval);
      }, []);

    return (
        <>
            <section className="max-w-screen-2xl mx-auto w-full my-10 px-4 md:px-10">
                <h1 className="flex flex-col justify-center items-center pt-10">
                    <span
                        className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal sm:px-16 xl:px-48 tracking-widest">How We Help You To Find Your Fit ?</span>
                </h1>

                <div
                    className="h-[550px] w-full bg-cover mx-auto rounded-lg px-4 mt-10 py-10 flex justify-evenly items-center flex-row"
                    style={{ backgroundImage: `url(${slides[currentSlide].image})`, backgroundPosition: "center center" }}
                >
                    <button onClick={prevSlide}>
                        <img className='w-10' src={arrowleft} alt="Previous" />
                    </button>
                    <div className='flex justify-center items-center flex-col'>
                        <h1 className="flex flex-col justify-center items-center py-10">
                            <span
                                className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#FDFDFD] font-normal sm:px-16 xl:px-48 tracking-widest"
                            >
                                {slides[currentSlide].title}
                            </span>
                        </h1>

                        <p className="text-center max-w-5xl mx-4 py-10 text-lg md:text-xl lg:text-2xl font-medium text-[#FDFDFD]">
                            {slides[currentSlide].description}
                        </p>

                        <a
                            href="#"
                            className="inline-flex font-raleway items-center justify-center px-10 py-3 my-10 text-base font-semibold text-center text-black border border-gray-300 rounded bg-[#FFF4CC] hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                        >
                            View Services
                        </a>
                    </div>
                    <button onClick={nextSlide}>
                        <img className='w-10' src={arrowright} alt="Next" />
                    </button>
                </div>
            </section>

        </>
    )
}

export default Service
