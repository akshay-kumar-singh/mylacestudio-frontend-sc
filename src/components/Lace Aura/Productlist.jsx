import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import search from '../../assets/search.png';
import camera from '../../assets/camera.png';
import prevarrow from '../../assets/products/prevarrow.png';
import Sidebar from './Sidebar';

function Productlist() {
    const [currentPage, setCurrentPage] = useState(1);
    const [likedProducts, setLikedProducts] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const productsPerPage = 9;
    const baseURL = 'http://localhost:1337'; 
    const totalPages = Math.ceil(products.length / productsPerPage);
    const totalProducts = products.length;

    useEffect(() => {
        axios.get(`${baseURL}/api/products?populate=*`)
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

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
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
            <section className="bg-white">
                <section className='mx-auto w-full max-w-screen-2xl flex flex-col justify-center items-center gap-10'>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10 pt-32 md:pt-56">
                        <div className='relative flex items-center'>
                            <img className='w-6 mx-4 absolute' src={search} alt="Search" />
                            <input type="text" className="border-4 border-black pl-12 py-2 text-[#2B2A2A]" placeholder="Search with text" />
                        </div>
                        <div className='relative flex items-center'>
                            <img className='w-6 mx-4 absolute' src={camera} alt="Camera" />
                            <input type="text" className="border-4 border-black pl-12 py-2 text-[#2B2A2A]" placeholder="Search with image" />
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-screen-2xl flex flex-col-reverse md:flex-row justify-between items-center px-10">
                        <div>
                            <span>
                                Showing <b>{indexOfFirstProduct + 1}</b>-
                                <b>{Math.min(indexOfLastProduct, totalProducts)}</b> out of <b>{totalProducts}</b> Products
                            </span>
                        </div>
                        <div className='flex flex-row justify-center items-center'>
                            <span>Sort By: </span>
                            <div><button
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
                </section>

                <section className='flex flex-col lg:flex-row justify-center md:justify-evenly items-center lg:items-start'>
                    <Sidebar />

                    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                            {currentProducts.map((product) => {
                                const { id, attributes } = product;
                                const { ProductName, ProductPrice, ProductImage, redirectURL } = attributes;
                                const imageUrl = baseURL + ProductImage.data.attributes.url;

                                return (
                                    <a key={id} href={redirectURL} target="_blank" rel="noopener noreferrer" className="group shadow-xl p-4 rounded-lg hover:cursor-pointer">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                            <div className='flex items-start justify-end relative h-96'>
                                                <button type="button"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        toggleLike(id);
                                                    }}
                                                    className='z-10 m-4'>
                                                    {likedProducts[id] ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 47.5 47.5" id="heart">
                                                            <defs>
                                                                <clipPath id="a"><path d="M0 38h38V0H0v38Z"></path></clipPath>
                                                            </defs>
                                                            <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                                                                <path fill="#dd2e44" d="M3.067 25.68c0 8.799 12.184 12.06 15.933 1.874 3.749 10.186 15.933 6.925 15.933-1.874C34.933 16.12 19 3.999 19 3.999S3.067 16.12 3.067 25.68"></path>
                                                            </g>
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" id="heart">
                                                            <path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-93.6 288L256 368l9.6-8.27C371.697 208.393 400 161.846 400 179.095 400 131.672 367.494 104 317.4 104c-14.14 0-27.824 3.597-40.2 10.028l-19.6 13.154-19.6-13.154C160.424 107.597 146.74 104 132.6 104 82.506 104 50 131.672 50 179.095c0 14.279 16.56 37.843 29.32 50.546L256 368z"></path>
                                                        </svg>
                                                    )}
                                                </button>
                                                <img
                                                    src={imageUrl}
                                                    alt={ProductName}
                                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">{ProductName}</h3>
                                                <p className="mt-1 text-lg font-medium text-gray-900">{`$${ProductPrice}`}</p>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <div className="flex flex-row items-center justify-center md:justify-end gap-2 pt-6 pb-10 mr-48">
                    <button onClick={() => handlePageChange(currentPage - 1)}>
                        <img src={prevarrow} alt="Previous" />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`w-8 h-8 border-2 border-black text-center mx-1 rounded-lg font-semibold transition-colors ${
                                currentPage === i + 1
                                    ? 'bg-black text-white'
                                    : 'bg-white text-black hover:bg-black hover:text-white'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button onClick={() => handlePageChange(currentPage + 1)}>
                        <img className="rotate-180" src={prevarrow} alt="Next" />
                    </button>
                </div>
            </section>
        </>
    );
}

export default Productlist;
