import bride from '../../assets/Rectangle 129.png';

function Whoweare() {
    return (
        <>
            <section className="mx-auto w-full max-w-screen-2xl my-10 px-10">
                <h1 className="flex flex-col justify-center items-center pt-10">
                    <span
                        className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal sm:px-16 xl:px-48 tracking-widest">Who We Are ?</span>
                </h1>
                <div className="grid md:pl-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="lg:mr-auto place-self-center lg:col-span-7">
                        <p className="text-center lg:text-left max-w-2xl mb-6 text-lg md:text-xl lg:text-2xl font-medium text-[#2B2A2AB2]">At My Lace Studio, our collection is a true celebration of intricate beauty and exquisite craftsmanship. Our shelves are adorned with a variety of laces, each telling a unique story of elegance and charm.
                        </p>
                        <p className="text-center lg:text-left max-w-2xl mb-6 text-lg md:text-xl lg:text-2xl font-medium text-[#2B2A2AB2]">
                            But we don&apos;t stop there - we believe in the magic of combining these laces with a diverse range of fabrics to create stunning masterpieces.
                        </p>
                        <p className="text-center lg:text-left max-w-2xl mb-6 text-lg md:text-xl lg:text-2xl font-medium text-[#2B2A2AB2]">
                            From delicate sarees that exude grace to enchanting table runners that elevate any dining experience, our studio is a treasure trove of all things lace.
                        </p>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:col-span-5 flex place-self-center">
                        <img src={bride} alt="mockup" />
                    </div>
                </div>
                <div className='flex justify-between items-center flex-col'>
                    <h1 className="flex flex-col justify-center items-center py-10">
                        <span
                            className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal sm:px-16 xl:px-48 tracking-widest">Say Goodbye To Endless Hunting</span>
                    </h1>

                    <a href="#" className="inline-flex font-raleway items-center justify-center px-10 py-3 text-base font-semibold text-center text-[#FDFDFD] border border-gray-300 rounded bg-[#2B2A2ACC] hover:bg-gray-600 focus:ring-4 focus:ring-gray-100">
                        Get Started
                    </a>
                </div>
            </section>
        </>
    )
}

export default Whoweare
