import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import stepone from '../../assets/step1.png';
import steptwo from '../../assets/step2.png';
import stepthree from '../../assets/step3.png';
import stepfour from '../../assets/step4.png';
import stepfive from '../../assets/step5.png';

function Steps() {

    const { isAuthenticated } = useAuth(); // Get authentication status from context
    const navigate = useNavigate();

    const steps = [
        {
            image: stepone,
            heading: "1. Upload Your Photo:",
            desc: "Begin by selecting a photo of a lace pattern you adore from your device or camera roll. Make sure the lace detail is clearly visible and well-lit.",
        },
        {
            image: steptwo,
            heading: "2. Let Our Tech Work Its Magic:",
            desc: "Once uploaded, our advanced technology gets to work! It carefully analyzes every intricate detail of the lace pattern, from its delicate design to its unique texture and color.",
        },
        {
            image: stepthree,
            heading: "3. Discover Perfect Matches:",
            desc: "After a quick analysis, we present you with a selection of sarees, lehengas, or kurtis perfectly coordinated with the lace pattern in your photo. Each recommendation is handpicked to ensure a flawless match.",
        },
        {
            image: stepfour,
            heading: "4. Refine Your Search:",
            desc: "Want to narrow down your options further? You can refine your search by specifying your color preferences or preferred style. This step ensures that your recommendations align even more closely with your personal taste.",
        },
        {
            image: stepfive,
            heading: "5. Shop With Ease:",
            desc: "Once you've made your decision, simply click to shop your favorite selection. With just a few clicks, you can make your dream ensemble a reality and embrace effortless elegance with your perfectly matched outfit.",
        },
    ];

    const handleGetStartedClick = () => {
        if (isAuthenticated) {
            navigate('/laceaura'); // Redirect to laceaura if logged in
        } else {
            navigate('/login'); // Redirect to login if not logged in
        }
    };
    return (
        <>
            <section className="mx-auto w-full max-w-screen-2xl my-10 px-10">
                <h1 className="flex flex-col justify-center items-center md:pt-16 pb-10">
                    <span
                        className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal sm:px-16 xl:px-48 tracking-widest">Steps to search for your dress</span>
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
                <p className="px-4 text-center lg:text-left mb-6 text-lg md:text-xl lg:text-2xl font-medium text-[#2B2A2AB2] tracking-widest">By following these simple steps, you&apos;ll experience the joy of finding your ideal ethnic wear with ease and confidence, all thanks to our innovative Lace Matching technology.</p>


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

export default Steps
