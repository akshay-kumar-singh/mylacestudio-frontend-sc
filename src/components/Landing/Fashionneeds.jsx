import saree from "../../assets/Group 129.png";
import suits from "../../assets/Group 130.png";
import lehenga from "../../assets/Group 131.png";

function Fashionneeds() {
  return (
    <>
      <section className="pt-20 mx-auto w-full max-w-screen-2xl pt-10 px-10 md:px-6">
            <div className="mt-4 mb-16">
                <h1 className="flex flex-col justify-center items-center">
                    <span 
                        className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal sm:px-16 xl:px-48 tracking-widest">Find Your Fashion Needs That Suits You</span>
                </h1>   

                <p className="text-center text-lg md:text-xl lg:text-2xl font-medium text-[#2B2A2AB2] pt-10 md:px-16">A diverse range of lace fabrics in different colors and patterns, along with accessories like ribbons and beads, cater to every woman&apos;s lace needs. Ideal for both seasoned lace enthusiasts and beginners looking to create stylish pieces.</p>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap lg:flex-row justify-center items-center gap-10">
                <div className="bg-white">                 
                    <img src={saree} className="my-2" alt="saree image"/>
                </div>
                <div className="bg-white">                 
                    <img src={suits} className="my-2" alt="suit image"/>
                </div>
                <div className="bg-white">                 
                    <img src={lehenga} className="my-2" alt="lehenga image"/>
                </div>

            </div>
        </section>

    </>
  )
}

export default Fashionneeds
