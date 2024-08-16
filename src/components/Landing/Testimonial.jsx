import custone from '../../assets/review1.png';
import custtwo from '../../assets/review2.png';
import custthree from '../../assets/review3.png';
import star from '../../assets/Star 1.png';


function Testimonial() {
    const customers = [
        {
            image: custone,
            name: "Soumya Rai",
            review: "Amazing platform! Found my perfect dress from the lace which I had for years and didn’t know what to do. All thanks to my lace studio.",
            stars: 4,
        },
        {
            image: custtwo,
            name: "Seema Negi",
            review: "Delicate lace fabrics in colors and patterns to stunning accessories like ribbons, beads, the place truly caters to every woman's lace needs.",
            stars: 5,
        },
        {
            image: custthree,
            name: "Ria Kumari",
            review: "100% recommended for anyone or everyone looking for any products related to lace or any fashion needs of women.",
            stars: 5,
        },
    ];
    return (
        <>
            <section className="pt-20 mx-auto w-full max-w-screen-2xl pt-10 px-6 sm:px-10 md:px-6">
                <div className="mt-4 mb-16">
                    <h1 className="flex flex-col justify-center items-center">
                        <span
                            className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal sm:px-16 xl:px-48 tracking-widest">Customer Spotlight: Real Stories</span>
                    </h1>
                </div>

                <div className="flex justify-center lg:justify-evenly items-center flex-row flex-wrap lg:flex-nowrap">
                    {customers.map((customer, index) => (
                        <div key={index} className="md:h-[500px] m-2 lg:m-4 py-10 lg:px-8 w-full sm:w-3/4 md:w-[44%] lg:w-1/3 flex justify-evenly gap-4 items-center flex-col border-[#2B2A2A] border-4 rounded-2xl">
                            <div>
                                <img src={customer.image} alt="customer image" />
                            </div>
                            <div>
                                <h1 className='font-raleway font-semibold text-base md:text-lg lg:text-xl'>{customer.name}</h1>
                            </div>
                            <div className="flex justify-center items-center flex-row">
                                {Array.from({ length: customer.stars }).map((_, starIndex) => (
                                    <img key={starIndex} src={star} alt="star" />
                                ))}
                            </div>
                            <div>
                                <p className='px-2 text-center text-base md:text-lg lg:text-xl text-[#2B2A2ACC]'>{customer.review}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <h1 className="flex flex-col justify-center items-center">
                        <span
                            className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal sm:px-16 xl:px-48 tracking-widest">Start your fashion journey with us</span>
                    </h1>
                    <div className="flex justify-center items-center flex-col md:flex-row m-4 gap-10">
                        <a href="#" className="w-48 md:w-52 inline-flex font-raleway items-center justify-center px-10 py-3 text-base font-semibold text-center text-[#FDFDFD] border border-gray-300 rounded bg-[#2B2A2ACC] hover:bg-gray-600 focus:ring-4 focus:ring-gray-100">
                            Get Started
                        </a>

                        <a href="#"
                            className="w-48 md:w-52 inline-flex font-raleway items-center justify-center px-10 py-3 text-base font-semibold text-center text-black border border-gray-300 rounded bg-[#FFF4CC] hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                        >
                            View Services
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
