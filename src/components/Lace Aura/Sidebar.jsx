import { useState } from 'react';


function Sidebar() {

  const [showMoreBrands, setShowMoreBrands] = useState(false);

  const handleShowMoreBrands = () => {
    setShowMoreBrands(!showMoreBrands);
  };

  return (
    <>
      <section className={`bg-[#2B2A2A0D] flex flex-col sm:flex-row justify-around lg:flex-col w-3/4 lg:w-56 lg:ml-12 my-10 lg:my-24 p-4 ${showMoreBrands ? 'h-auto' : 'lg:h-[51rem]'}`}>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg">FILTERS</h1>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">Women</label>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">Girls</label>
          </div>
        </div>

        {/* ................... */}

        <div className="flex flex-col gap-2 lg:mt-5">
          <h1 className="font-bold text-lg">BRANDS</h1>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">H&M</label>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">ZARA</label>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">Adidas</label>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">Gucci</label>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">Puma</label>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">Nike</label>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">New Balance</label>
          </div>
          <div className="flex flex-row gap-2">
            <input className="invisible" type="checkbox" />
            <button className="font-raleway" onClick={handleShowMoreBrands}>
              {showMoreBrands ? "- Show less" : "+50 more"}
            </button>
          </div>

          {showMoreBrands && (
            <>
              <div className="flex flex-row gap-2">
                <input type="checkbox" />
                <label className="font-raleway">Brand 1</label>
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" />
                <label className="font-raleway">Brand 2</label>
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" />
                <label className="font-raleway">Brand 3</label>
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" />
                <label className="font-raleway">Brand 4</label>
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" />
                <label className="font-raleway">Brand 5</label>
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" />
                <label className="font-raleway">Brand 6</label>
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" />
                <label className="font-raleway">Brand 7</label>
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" />
                <label className="font-raleway">Brand 8</label>
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" />
                <label className="font-raleway">Brand 9</label>
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" />
                <label className="font-raleway">Brand 10</label>
              </div>
            </>
          )}
        </div>

        {/* ...................... */}

        <div className="flex flex-col gap-2 lg:mt-5">
          <h1 className="font-bold text-lg">OCCASION</h1>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">Bridal</label>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">Haldi</label>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">Reception</label>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">Sangeet</label>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">Mehendi</label>
          </div>
        </div>

        {/* ............................. */}

        <div className="flex flex-col gap-2 lg:mt-5">
          <h1 className="font-bold text-lg">SIZE</h1>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">Small</label>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">Medium</label>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">Large</label>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <label className="font-raleway">Plus Size</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sidebar
