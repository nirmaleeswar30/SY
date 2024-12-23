import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
       {/* Navigation Bar */}
             <nav className="border-gray-200 bg-red-800 text-white">
               <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                 {/* Logo Section */}
                 <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                   <img
                     src="https://res.cloudinary.com/dr8g09icb/image/upload/v1734200938/image_2_z4b0ex.png"
                     className="h-8"
                     alt="Logo"
                   />
                 </Link>
       
                 {/* Hamburger Menu Button */}
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
       
                 {/* Right Section: Search and Language */}
                 <div className="flex items-center md:order-2 space-x-2">
                   {/* Search Section */}
                   <div className="relative hidden md:block mr-4">
                     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                       <svg
                         className="w-3 h-3 text-gray-500"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 20 20"
                       >
                         <path
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                         />
                       </svg>
                       <span className="sr-only">Search icon</span>
                     </div>
                     <input
                       type="text"
                       id="search-navbar"
                       className="block w-auto p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500"
                       placeholder="Search..."
                     />
                   </div>
       
                   {/* Language Dropdown */}
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
                       <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
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
       
                 {/* Main Navigation */}
                 <div
                   className={`${
                     isMenuOpen ? 'block' : 'hidden'
                   } w-full md:block md:w-auto`}
                   id="navbar-multi-level"
                 >
                   <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                     <li>
                       <Link to="/" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-yellow-300 md:p-0">
                         Home
                       </Link>
                     </li>
                     <li>
                       <Link
                         to="/schedule"
                         className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0"
                       >
                         Schedule
                       </Link>
                     </li>
                     <li>
                       <Link
                         to="/chakras"
                         className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0"
                       >
                         7 Chakras & Nadis
                       </Link>
                     </li>
                     <li>
                       <Link
                         to="/resources"
                         className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0"
                       >
                         Resources
                       </Link>
                     </li>
                     <li>
                       <Link
                         to="/centers"
                         className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0"
                       >
                         Our Centers
                       </Link>
                     </li>
                     <li>
                       <Link
                         to="/contact"
                         className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0"
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
