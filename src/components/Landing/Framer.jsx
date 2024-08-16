import nathly from '../../assets/nathly.png'

function Framer() {
    return (
        <>
            <section className="mx-auto w-full max-w-screen-2xl my-10 px-10">
                <h1 className="flex flex-col justify-center items-center pt-10">
                    <span
                        className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal sm:px-16 xl:px-48 tracking-widest">Our Framer</span>
                </h1>
                <div className="grid md:pl-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
                    <div className="lg:mr-auto place-self-center lg:col-span-7">
                        <p className="text-center lg:text-left max-w-2xl mb-6 text-lg md:text-xl lg:text-2xl font-medium text-[#2B2A2AB2] tracking-widest">{`Nathaly, who is only 16, is not your typical teen. This dynamo is the founder of "My Lace Studio", demonstrating that age is just a number when it comes to pursuing your ambitions. Nathaly, who has a creative heart and a love for the delicate world of lace, has created a space where she can express her passion and bring gorgeous creations to life.`}
                        </p>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:col-span-5 flex place-self-center">
                        <img src={nathly} alt="mockup" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Framer
