import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavbarSearch from './NavbarSearch';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

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
    const [isChakraDropdownOpen, setIsChakraDropdownOpen] = useState<boolean>(false);
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState<boolean>(false);
    const location = useLocation();

    const { t } = useTranslation();
    const { currentLanguage, changeLanguage } = useLanguage();

    const chakraLinks: ChakraLink[] = [
        { title: t('chakras.subtle'), path: '/subtle' },
        { title: t('chakras.sevenChakras'), path: '/chakras' },
        { title: t('chakras.threeNadis'), path: '/nadis' },
        { title: t('chakras.kundalini'), path: '/kundalini' }
    ];

    const resourceLinks: ResourceLink[] = [
        { title: t('resources.books'), path: '/resources/books' },
        { title: t('resources.speeches'), path: '/resources/speeches' },
        { title: t('resources.bhajans'), path: '/resources/category' },
        { title: t('resources.photos'), path: '/resources/gallery' },
        { title: t('resources.miracles'), path: '/resources/sahaj_miracles' },
    ];

    return (
        <nav className="bg-red-900">
            <div className="max-w-screen-2xl flex items-center justify-between mx-auto px-4 py-2">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/">
                        <img src="https://res.cloudinary.com/dr8g09icb/image/upload/v1734200938/image_2_z4b0ex.png" 
                             className="h-8" 
                             alt="Logo" />
                    </Link>
                </div>

                {/* Main Navigation */}
                <div className="hidden md:flex items-center justify-center flex-1 ml-8">
                    <div className="flex space-x-8">
                        <Link to="/" className={`text-white hover:text-yellow-300 ${location.pathname === '/' ? 'text-yellow-300' : ''}`}>
                            {t('nav.home')}
                        </Link>
                        <Link to="/schedule" className={`text-white hover:text-yellow-300 ${location.pathname === '/schedule' ? 'text-yellow-300' : ''}`}>
                            {t('nav.schedule')}
                        </Link>
                        
                        {/* Chakras Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsChakraDropdownOpen(!isChakraDropdownOpen)}
                                className={`text-white hover:text-yellow-300 flex items-center ${chakraLinks.some(link => location.pathname === link.path) ? 'text-yellow-300' : ''}`}
                            >
                                {t('nav.chakras')}
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isChakraDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
                                     onMouseLeave={() => setIsChakraDropdownOpen(false)}>
                                    {chakraLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            to={link.path}
                                            className="block px-4 py-2 text-gray-800 hover:bg-red-900 hover:text-white"
                                            onClick={() => setIsChakraDropdownOpen(false)}
                                        >
                                            {link.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Resources Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
                                className={`text-white hover:text-yellow-300 flex items-center ${resourceLinks.some(link => location.pathname.startsWith(link.path)) ? 'text-yellow-300' : ''}`}
                            >
                                {t('nav.resources')}
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isResourcesDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
                                     onMouseLeave={() => setIsResourcesDropdownOpen(false)}>
                                    {resourceLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            to={link.path}
                                            className="block px-4 py-2 text-gray-800 hover:bg-red-900 hover:text-white"
                                            onClick={() => setIsResourcesDropdownOpen(false)}
                                        >
                                            {link.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link to="/clearence" className={`text-white hover:text-yellow-300 ${location.pathname === '/clearence' ? 'text-yellow-300' : ''}`}>
                            {t('nav.clearence')}
                        </Link>
                        <Link to="/centers" className={`text-white hover:text-yellow-300 ${location.pathname === '/centers' ? 'text-yellow-300' : ''}`}>
                            {t('nav.centers')}
                        </Link>
                        <Link to="/contact" className={`text-white hover:text-yellow-300 ${location.pathname === '/contact' ? 'text-yellow-300' : ''}`}>
                            {t('nav.contact')}
                        </Link>
                    </div>
                </div>

                {/* Search and Language */}
                <div className="flex items-center space-x-4">
                    <div className="hidden md:block w-64">
                        <NavbarSearch onClose={() => {}} />
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`px-3 py-1 rounded-lg ${currentLanguage === 'en' ? 'bg-gray-100 text-black' : 'text-white'}`}
                        >
                            English
                        </button>
                        <button
                            onClick={() => changeLanguage('ta')}
                            className={`px-3 py-1 rounded-lg ${currentLanguage === 'ta' ? 'bg-gray-100 text-black' : 'text-white'}`}
                        >
                            தமிழ்
                        </button>
                    </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white hover:text-yellow-300"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/* Mobile menu items */}
                        <Link to="/" className="block px-3 py-2 text-white hover:text-yellow-300">
                            {t('nav.home')}
                        </Link>
                        {/* Add other mobile menu items here */}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;