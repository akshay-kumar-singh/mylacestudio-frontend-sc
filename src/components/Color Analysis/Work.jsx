import workone from '../../assets/work1.png';
import steptwo from '../../assets/step2.png';
import workthree from '../../assets/work3.png';
import workfour from '../../assets/work4.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Work() {

    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();


    const steps = [
        {
            image: workone,
            heading: "1. Capture Your Selfie: ",
            desc: "Start by taking a selfie. Make sure your face is well-lit and the image is clear. This will help our system accurately analyze your skin tone.",
        },
        {
            image: steptwo,
            heading: "2. Our System Works Its Magic: ",
            desc: "Once you've uploaded your selfie, our intelligent system goes to work! It carefully examines your skin tone, considering factors like undertones and complexion to determine your unique color profile.",
        },
        {
            image: workthree,
            heading: "3. Discover Your Perfect Colors: ",
            desc: "After the analysis, we reveal a personalized palette of colors tailored just for you. From warm earthy tones to cool pastels, your perfect colors are now at your fingertips.",
        },
        {
            image: workfour,
            heading: "4. Explore Matching Products:",
            desc: " With your personalized color palette in hand, explore our collection of sarees, lehengas, kurtis, and more—all curated to match your unique tones. Discover the ideal outfit that not only looks great but also makes you feel confident and radiant.",
        },
    ];

    const handleGetStartedClick = () => {
        if (isAuthenticated) {
            navigate('/laceaurasearch');
        } else {
            navigate('/login');
        }
    };

    return (
        <>
            <section className="mx-auto w-full max-w-screen-2xl my-10 px-10">
                <h1 className="flex flex-col justify-center items-center md:pt-16 pb-10">
                    <span
                        className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal sm:px-16 xl:px-48 tracking-widest">How does it work</span>
                </h1>
                {steps.map((step, index) => (
                    <div key={index} className="grid md:px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
                        <div className="lg:mr-auto place-self-center lg:col-span-7">
                            <p className="text-center lg:text-left max-w-2xl mb-6 text-lg md:text-xl lg:text-2xl font-medium text-[#2B2A2AB2] tracking-widest"><span className='text-[#791204]'>{step.heading}&nbsp;</span>{step.desc}
                            </p>
                        </div>
                        <div className="mt-6 lg:mt-0 lg:col-span-5 flex place-self-center">
                            <img src={step.image} alt="mockup" />
                        </div>
                    </div>
                ))}
                <p className="px-4 text-center lg:text-left mb-6 text-lg md:text-xl lg:text-2xl font-medium text-[#2B2A2AB2] tracking-widest">With these simple steps, you&apos;ll uncover the colors that make you shine and effortlessly elevate your style. Experience the joy of personalized beauty discovery with our Color Analysis feature.</p>


                <div className='flex justify-between items-center flex-col mt-10'>
                    <button
                        onClick={handleGetStartedClick}
                        className="inline-flex font-raleway items-center justify-center px-10 py-3 text-base font-semibold text-center text-[#FDFDFD] border border-gray-300 rounded bg-[#2B2A2ACC] hover:bg-gray-600 focus:ring-4 focus:ring-gray-100"
                    >
                        Get Started
                    </button>
                </div>
            </section>
        </>
    )
}

export default Work
