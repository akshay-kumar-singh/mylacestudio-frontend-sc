import colormatching from '../../assets/colormatching.png';
import Footer from "../Landing/Footer"
import Navbar from '../Landing/Navbar';
import Work from './Work';

function Coloranalysis() {
    return (
        <>

            <section className='w-screen'>
                <div
                    className="w-screen bg-cover"
                    style={{ backgroundImage: `url(${colormatching})`, backgroundPosition: "center center" }}
                >
                    <Navbar />
                    <div className="h-[550px] w-screen bg-cover pb-10 gap-20 pt-72 flex justify-around items-center flex-col">
                        <div className='max-w-screen-2xl mx-auto w-full flex justify-between items-center flex-row'>
                        </div>
                    </div>
                </div>

                <div className="mt-16 mb-16">
                    <h1 className="flex flex-col justify-center items-center">
                        <span
                            className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal sm:px-16 xl:px-48 tracking-widest">How we help you to find your fit</span>
                    </h1>

                    <p className="text-center text-lg md:text-xl lg:text-2xl font-medium text-[#2B2A2AB2] pt-10 md:px-16">Introducing our revolutionary Discover your most flattering colors effortlessly with our innovative Color Analysis feature. With just one selfie, our smart system works its magic, analyzing your skin tone to unveil a palette of hues that enhance your natural radiance. Say goodbye to guesswork and hello to effortless beauty discovery right at your fingertips. Here&apos;s how it works:</p>
                </div>
            </section>
            <Work />
            <Footer />
        </>
    )
}

export default Coloranalysis
