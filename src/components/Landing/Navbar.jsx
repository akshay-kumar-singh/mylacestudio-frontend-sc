import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 
import Logout from '../auth/Logout'; 

function Navbar({ navbar }) {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [logoutMessage, setLogoutMessage] = useState(''); 
    const { isAuthenticated } = useAuth(); 

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > window.innerHeight) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        setLogoutMessage('Logout successfully'); 
        setTimeout(() => setLogoutMessage(''), 2000); 
    };

    return (
        <nav className={`z-10 nav fixed w-screen transition-all duration-500 ${scrolled ? 'navDark' : ''}`}>
            <div className={navbar === "Aura" || navbar === "Blog" ? "bg-[#2B2A2A] p-4" : "p-4"}>
                <div className="max-w-screen-2xl flex flex-row md:flex-col md:flex-wrap items-center justify-between mx-auto">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl sm:text-3xl md:text-4xl uppercase text-[#FDFDFD] font-roboto font-semibold whitespace-nowrap py-4">My LACE STUDIO</span>
                    </Link>
                    <div className="w-full flex justify-end">
                        <button
                            data-collapse-toggle="navbar-default"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-default"
                            aria-expanded={isMenuOpen ? "true" : "false"}
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                </div>

                {logoutMessage && (
                    <div className="text-center text-green-500 font-bold">
                        {logoutMessage}
                    </div>
                )}

                <div className={`w-full md:block ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                    <section className={navbar === "Landing" ? "" : "hidden"}>
                        <ul className="font-medium flex flex-col items-center justify-end text-[#FDFDFD] text-lg uppercase p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <Link to="/lacematching" className="block py-2 px-3 mx-10 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFF4CC] md:p-0 font-raleway font-semibold" aria-current="page">HOME</Link>
                            </li>
                            <li>
                                <button
                                    id="dropdownNavbarLink"
                                    onClick={toggleDropdown}
                                    className="flex items-center justify-between py-2 px-3 mx-10 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFF4CC] md:p-0 font-raleway font-semibold"
                                >
                                    SERVICES
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
                                        <ul className="py-2 navDark">
                                            <li>
                                                <Link to="/lacematching" className="block py-2 px-3 mx-10 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFF4CC] md:p-0 font-raleway font-semibold" aria-current="page">Lace Matching</Link>
                                            </li>
                                            <li>
                                                <Link to="/coloranlysis" className="block py-2 px-3 mx-10 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFF4CC] md:p-0 font-raleway font-semibold">Color Analysis</Link>
                                            </li>
                                            <li>
                                                <Link to="/blogs" className="block py-2 px-3 mx-10 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFF4CC] md:p-0 font-raleway font-semibold">Blog</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li>
                                <Link to="/" className="block py-2 px-3 mx-10 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFF4CC] md:p-0 font-raleway font-semibold">ABOUT US</Link>
                            </li>
                            <li>
                                {isAuthenticated ? (
                                    <Logout onLogout={handleLogout} /> 
                                ) : (
                                    <Link to="/signup"
                                        className="block font-raleway items-center justify-center px-6 py-1 text-black font-semibold text-center border border-gray-300 rounded bg-[#FFF4CC] hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                                    >
                                        Sign Up
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </section>
                    <section className={navbar === "Aura" ? "" : "hidden"}>
                        <ul className="font-medium flex flex-col items-center justify-end text-[#FDFDFD] text-lg uppercase p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <Link to="/lacematching" className="block py-2 px-3 mx-10 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFF4CC] md:p-0 font-raleway font-semibold" aria-current="page">HOME</Link>
                            </li>
                            <li>
                                <Link to="/" className="block py-2 px-3 mx-10 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFF4CC] md:p-0 font-raleway font-semibold">ABOUT US</Link>
                            </li>
                            <li>
                                {isAuthenticated ? (
                                    <Logout onLogout={handleLogout} /> 
                                ) : (
                                    <Link to="/signup"
                                        className="block font-raleway items-center justify-center px-6 py-1 text-black font-semibold text-center border border-gray-300 rounded bg-[#FFF4CC] hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                                    >
                                        Sign Up
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </section>
                    <section className={navbar === "Blog" ? "" : "hidden"}>
                        <ul className="font-medium flex flex-col items-center justify-end text-[#FDFDFD] text-lg uppercase p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <Link to="/blogs" className="block py-2 px-3 mx-10 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFF4CC] md:p-0 font-raleway font-semibold">BLOG</Link>
                            </li>
                            <li>
                                <Link to="/" className="block py-2 px-3 mx-10 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFF4CC] md:p-0 font-raleway font-semibold">ABOUT US</Link>
                            </li>
                            <li>
                                {isAuthenticated ? (
                                    <Logout onLogout={handleLogout} /> 
                                ) : (
                                    <Link to="/signup"
                                        className="block font-raleway items-center justify-center px-6 py-1 text-black font-semibold text-center border border-gray-300 rounded bg-[#FFF4CC] hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                                    >
                                        Sign Up
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
