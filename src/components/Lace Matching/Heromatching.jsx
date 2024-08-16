import heromatching from '../../assets/Heromatching.png'
import Footer from '../Landing/Footer';
import Navbar from '../Landing/Navbar';
import Steps from './Steps';

function Heromatching() {

  return (
    <>
      <section className='w-screen'>
        <div
          className="w-screen bg-cover"
          style={{ backgroundImage: `url(${heromatching})`, backgroundPosition: "center center" }}
        >
          <Navbar navbar={"Matching"}/>
          <div className="h-[400px] w-screen bg-cover pb-10 gap-20 pt-72 flex justify-around items-center flex-col">
            <div className='max-w-screen-2xl mx-auto w-full flex justify-between items-center flex-row'>
            </div>
          </div>
        </div>
        
        <div className="mt-16 mb-16">
                <h1 className="flex flex-col justify-center items-center">
                    <span 
                        className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal sm:px-16 xl:px-48 tracking-widest">How we help you to find your fit</span>
                </h1>   

                <p className="text-center text-lg md:text-xl lg:text-2xl font-medium text-[#2B2A2AB2] pt-10 md:px-16">Introducing our revolutionary <span className='text-[#791204]'>Lace Matching</span> technology, designed to make finding your perfect saree, lehenga, or kurti. With just a photo upload, our advanced system analyzes the intricate details of lace patterns, textures, and colors to recommend flawlessly matching outfits tailored to your unique style. Say goodbye to endless scrolling and hello to effortless elegance as you explore a curated selection of garments perfectly complementing your chosen lace design. Simply follow these easy steps:</p>
            </div>
      </section>
      <Steps/>
      <Footer/>
    </>
  )
}

export default Heromatching;
