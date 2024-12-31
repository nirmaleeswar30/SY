import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavbarSearch from './NavbarSearch';

interface ChakraLink {
    title: string;
    path: string;
}

interface ResourceLink {
    title: string;
    path: string;
}

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [isChakraDropdownOpen, setIsChakraDropdownOpen] = useState<boolean>(false);
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState<boolean>(false);
    const location = useLocation();

    const chakraLinks: ChakraLink[] = [
        { title: 'The Human Subtle System', path: '/subtle' },
        { title: 'Seven Chakra', path: '/chakras' },
        { title: 'Three Nadis', path: '/nadis' },
        { title: 'Kundalini', path: '/kundalini' }
    ];

    const resourceLinks: ResourceLink[] = [
        { title: 'Books', path: '/resources/books' },
        { title: 'Speeches', path: '/resources/speeches' },
        { title: 'Bhajans', path: '/resources/bhajans' },
        { title: 'Photos', path: '/resources/photos' },
        { title: 'Sahaj Miracles', path: '/resources/sahaj_miracles' },
    ];

    return (
        <>
            <nav className="border-gray-200 bg-red-900 text-white">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src="https://res.cloudinary.com/dr8g09icb/image/upload/v1734200938/image_2_z4b0ex.png"
                            className="h-8"
                            alt="Logo"
                        />
                    </Link>

                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                            aria-hidden="true"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>

                    <div className="flex items-center md:order-2 space-x-2">
                        <div className="relative hidden md:block mr-4">
                            <div className="relative hidden md:block mr-4 w-64">
                                <NavbarSearch onClose={() => { }} />
                            </div>
                        </div>

                        <div className="relative">
                            <button
                                type="button"
                                className="inline-flex items-center font-medium justify-center px-3 py-2 text-sm text-white rounded-lg cursor-pointer hover:bg-white hover:text-black"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <svg
                                    className="w-5 h-5 rounded-full me-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 3900 3900"
                                    aria-hidden="true"
                                >
                                    <path fill="#b22234" d="M0 0h7410v3900H0z" />
                                    <path
                                        d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                                        stroke="#fff"
                                        strokeWidth="300"
                                    />
                                    <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                                </svg>
                                English
                            </button>

                            {isDropdownOpen && (
                                <div className="z-50 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                    <ul className="py-2 text-sm text-gray-700">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                English (US)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                Tamil
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'
                            } w-full md:block md:w-auto`}
                        id="navbar-multi-level"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                                <Link
                                    to="/"
                                    className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 ${location.pathname === '/' ? 'text-yellow-300' : ''
                                        }`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/schedule"
                                    className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 ${location.pathname === '/schedule' ? 'text-yellow-300' : ''
                                        }`}
                                >
                                    Schedule
                                </Link>
                            </li>
                            <li className="relative">
                                <button
                                    onClick={() => setIsChakraDropdownOpen(!isChakraDropdownOpen)}
                                    className={`flex items-center py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 ${chakraLinks.some(link => location.pathname === link.path) ? 'text-yellow-300' : ''
                                        }`}
                                >
                                    7 Chakras & Nadis
                                    <svg
                                        className="w-2.5 h-2.5 ml-2.5"
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
                                {isChakraDropdownOpen && (
                                    <div className="z-50 absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-48">
                                        <ul className="py-2 text-sm text-gray-700">
                                            {chakraLinks.map((link, index) => (
                                                <li key={index}>
                                                    <Link
                                                        to={link.path}
                                                        className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                                                        onClick={() => setIsChakraDropdownOpen(false)}
                                                    >
                                                        {link.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className="relative">
                                <button
                                    onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
                                    className={`flex items-center py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 ${resourceLinks.some(link => location.pathname.startsWith(link.path)) ? 'text-yellow-300' : ''
                                        }`}
                                >
                                    Resources
                                    <svg
                                        className="w-2.5 h-2.5 ml-2.5"
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
                                {isResourcesDropdownOpen && (
                                    <div className="z-50 absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-48">
                                        <ul className="py-2 text-sm text-gray-700">
                                            {resourceLinks.map((link, index) => (
                                                <li key={index}>
                                                    <Link
                                                        to={link.path}
                                                        className="block px-4 py-2 hover:bg-red-800 hover:text-white"
                                                        onClick={() => setIsResourcesDropdownOpen(false)}
                                                    >
                                                        {link.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li>
                                <Link
                                    to="/centers"
                                    className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 ${location.pathname === '/centers' ? 'text-yellow-300' : ''
                                        }`}
                                >
                                    Our Centers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/clearence"
                                    className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 ${location.pathname === '/clearence' ? 'text-yellow-300' : ''
                                        }`}
                                >
                                    Clearence
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 ${location.pathname === '/contact' ? 'text-yellow-300' : ''
                                        }`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
