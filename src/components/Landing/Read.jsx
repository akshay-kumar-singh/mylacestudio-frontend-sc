import blogone from '../../assets/blog1.png';
import blogtwo from '../../assets/blog2.png';
import blogthree from '../../assets/blog3.png';
import blogfour from '../../assets/blog4.png';
import blogwriterone from '../../assets/blogwriter1.png';
import blogwritertwo from '../../assets/blogwriter2.png';
import blogwriterthree from '../../assets/blogwriter3.png';
import blogwriterfour from '../../assets/blogwriter4.png';


function Read() {
    const blogs = [
        {
            image: blogone,
            writerImage: blogwriterone,
            name: "Raman Kumar",
            blogContent: "Desi Threads: The New Old! How Fashion Trends are Recycling in Modern India",
            date: "March 20, 2024",
        },
        {
            image: blogtwo,
            writerImage: blogwritertwo,
            name: "Kiara Smith",
            blogContent: "Stumble on the designs worn and adored by famous influencers.",
            date: "March 28, 2024",
        },
        {
            image: blogthree,
            writerImage: blogwriterthree,
            name: "Rajiv Gupta",
            blogContent: "Explore the hottest fashion trends of the year for your stylish wardrobe .",
            date: "April 20, 2024",
        },
        {
            image: blogfour,
            writerImage: blogwriterfour,
            name: "Radhika",
            blogContent: "From Granny Chic to Grandpa Cool: Vintage Vibes Rule",
            date: "May 05, 2024",
        },
    ];
    return (
        <>
            <section className="max-w-screen-2xl mx-auto w-full my-10 px-4 md:px-8">
                <h1 className="flex flex-col justify-center items-center pt-4">
                    <span
                        className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal sm:px-16 xl:px-48 tracking-widest">How We Help You To Find Your Fit ?</span>
                </h1>

                <div className="flex justify-center lg:justify-evenly items-center flex-row gap-10 md:gap-1 xl:gap-8 flex-wrap xl:flex-nowrap my-8">
                    {blogs.map((blog, index) => (
                        <div key={index} className="px-4 py-10 lg:px-8 w-full sm:w-7/12 md:w-[44%] lg:w-[25%] xl:w-1/4 flex justify-evenly gap-6 items-start flex-col border-[#2B2A2A] shadow-md rounded-lg">
                            <div>
                                <img src={blog.image} alt="customer image" />
                            </div>
                            <span className="inline-flex font-raleway items-center justify-center px-6 py-2 text-base font-semibold text-center text-[#2B2A2A] rounded bg-[#FFF4CC80] hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">Fashion</span>
                            <div>
                                <p className='text-left text-base md:text-lg lg:text-xl text-[#2B2A2A] font-medium'>{blog.blogContent}</p>
                            </div>
                            <div className='flex flex-row justify-evenly items-center gap-2'>
                                <img src={blog.writerImage} alt='author image'/>
                                <h1 className='font-raleway font-semibold text-sm text-[#2B2A2A80] md:text-base'>{blog.name}</h1>
                                <p className='font-raleway font-semibold text-sm text-[#2B2A2A80] md:text-base'>{blog.date}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

export default Read
