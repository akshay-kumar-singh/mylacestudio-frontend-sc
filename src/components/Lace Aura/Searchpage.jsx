import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import search from '../../assets/search.png';
import camera from '../../assets/camera.png';
import prevarrow from '../../assets/products/prevarrow.png';

function Searchpage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTrendingPage, setCurrentTrendingPage] = useState(1);
    const [likedProducts, setLikedProducts] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const productsPerPage = 2;
    const baseURL = 'https://mylace-dashboard-strapi.onrender.com';

    useEffect(() => {
        axios.get(`${baseURL}/api/lace-products?populate=*`)
            .then(response => {
                setProducts(response.data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Determine main products (first two) and trending products (remaining)
    const mainProducts = products.slice(0, 2);
    const remainingProducts = products.slice(2);

    const indexOfLastTrendingProduct = currentTrendingPage * productsPerPage;
    const indexOfFirstTrendingProduct = indexOfLastTrendingProduct - productsPerPage;
    const trendingProducts = remainingProducts.slice(indexOfFirstTrendingProduct, indexOfLastTrendingProduct);
    const totalPagesTrending = Math.ceil(remainingProducts.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > Math.ceil(products.length / productsPerPage)) return;
        setCurrentPage(pageNumber);
    };

    const handleTrendingPageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPagesTrending) return;
        setCurrentTrendingPage(pageNumber);
    };

    const toggleLike = (productId) => {
        setLikedProducts(prevState => ({
            ...prevState,
            [productId]: !prevState[productId]
        }));
    };

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <section className='mx-auto w-full max-w-screen-2xl pt-48 flex flex-col md:flex-row justify-around items-center md:items-start py-10'>
                <section className="bg-[#2B2A2A0D] flex flex-col md:flex-row justify-around md:flex-col mx-4 w-3/4 md:w-64 lg:ml-12 my-10 lg:my-16">
                    {/* Filter and Sort Section */}
                    <div className="bg-white flex flex-col pb-5 gap-2">
                        <div>
                            <span>
                                Showing <b>{1}</b>-<b>{Math.min(2, products.length)}</b> out of <b>{products.length}</b> Products
                            </span>
                        </div>
                        <div className='flex flex-row'>
                            <span>Sort By: </span>
                            <div>
                                <button
                                    id="dropdownNavbarLink"
                                    onClick={toggleDropdown}
                                    className="flex items-center justify-between py-2 px-3 mx-2 rounded md:border-0 md:hover:font-bold md:p-0 font-semibold"
                                >
                                    New Arrivals
                                    <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <div
                                        id="dropdownNavbar"
                                        className="absolute z-10 font-normal rounded-lg shadow"
                                    >
                                        <ul className="py-2">
                                            <li>
                                                <Link to="/lacematching" className="block py-2 px-3 mx-10 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FE24C0] md:p-0 font-raleway font-semibold" aria-current="page">Lace Matching</Link>
                                            </li>
                                            <li>
                                                <Link to="/coloranlysis" className="block py-2 px-3 mx-10 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FE24C0] md:p-0 font-raleway font-semibold">Color Analysis</Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="block py-2 px-3 mx-10 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FE24C0] md:p-0 font-raleway font-semibold">Blog</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 px-4 pt-4">
                        <h1 className="font-bold text-lg">FILTERS</h1>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className='relative flex items-center'>
                                <img className='w-6 mx-4 absolute' src={search} alt="Search" />
                                <input type="text" className="border-4 border-black pl-12 py-2 text-[#2B2A2A]" placeholder="Search with text" />
                            </div>
                            <h1 className="font-bold text-xl">OR</h1>
                            <div className='relative flex items-center'>
                                <img className='w-6 mx-4 absolute' src={camera} alt="Camera" />
                                <input type="text" className="border-4 border-black pl-12 py-2 text-[#2B2A2A]" placeholder="Search with image" />
                            </div>
                        </div>
                        <button className='text-center bg-[#2B2A2ACC] text-white font-raleway text-xl p-1 m-4'>Submit</button>
                    </div>

                    <div className='flex flex-row md:flex-col justify-center md:justify-start m-4 md:m-0'>
                        <div className="flex flex-col gap-2 lg:mt-5 px-4">
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

                        <div className="flex flex-col gap-2 lg:mt-5 px-4 pb-4">
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
                    </div>
                </section>

                <section className='flex flex-col justify-start items-center'>
                    <div>
                        <h1 className="flex flex-col justify-center items-center md:pt-16 pb-10">
                            <span
                                className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal"
                                style={{ wordSpacing: '18px' }} 
                            >
                                Found Perfect Match For You
                            </span>
                        </h1>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-32'>
                        {mainProducts.map(product => (
                            <div key={product.id} className="relative p-4 border rounded-lg shadow-lg">
                                <a href={product.attributes.externalURL[0].children[1].url} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={`${baseURL}${product.attributes.LaceProductImage.data.attributes.url}`}
                                        alt={product.attributes.LaceProductName}
                                        className="w-full h-64 object-cover"
                                    />
                                    <h2 className="text-center font-semibold text-lg">{product.attributes.LaceProductName}</h2>
                                    <p className="text-center text-gray-600">${product.attributes.LaceProductPrice}</p>
                                </a>
                                <button
                                    onClick={() => toggleLike(product.id)}
                                    className={`absolute top-2 right-2 p-2 ${likedProducts[product.id] ? 'text-red-500' : 'text-gray-500'}`}
                                >
                                    {likedProducts[product.id] ? '❤️' : '♡'}
                                </button>
                            </div>
                        ))}
                    </div>

                    <section className='mt-12'>
                        <div>
                            <h1 className="flex flex-col justify-center items-center md:pt-16 pb-10">
                                <span
                                    className="font-greatVibes text-center text-3xl md:text-4xl lg:text-5xl text-[#791204] font-normal"
                                    style={{ wordSpacing: '18px' }} 
                                >
                                    See Other Alternative
                                </span>
                            </h1>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {trendingProducts.map(product => (
                                <div key={product.id} className="relative p-4 border rounded-lg shadow-lg">
                                    <a href={product.attributes.externalURL[0].children[1].url} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={`${baseURL}${product.attributes.LaceProductImage.data.attributes.url}`}
                                            alt={product.attributes.LaceProductName}
                                            className="w-full h-64 object-cover"
                                        />
                                        <h2 className="text-center font-semibold text-lg">{product.attributes.LaceProductName}</h2>
                                        <p className="text-center text-gray-600">${product.attributes.LaceProductPrice}</p>
                                    </a>
                                    <button
                                        onClick={() => toggleLike(product.id)}
                                        className={`absolute top-2 right-2 p-2 ${likedProducts[product.id] ? 'text-red-500' : 'text-gray-500'}`}
                                    >
                                        {likedProducts[product.id] ? '❤️' : '♡'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="flex flex-row items-center justify-center md:justify-end gap-2 pt-6 pb-10 mr-48">
                        <button onClick={() => handleTrendingPageChange(currentTrendingPage - 1)}>
                            <img src={prevarrow} alt="Previous" />
                        </button>
                        {Array.from({ length: totalPagesTrending }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => handleTrendingPageChange(i + 1)}
                                className={`w-8 h-8 border-2 border-black text-center mx-1 rounded-lg font-semibold transition-colors ${currentTrendingPage === i + 1
                                        ? 'bg-black text-white'
                                        : 'bg-white text-black hover:bg-black hover:text-white'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button onClick={() => handleTrendingPageChange(currentTrendingPage + 1)}>
                            <img className="rotate-180" src={prevarrow} alt="Next" />
                        </button>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Searchpage;
