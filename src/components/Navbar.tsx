import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-3">
                            <img
                                src="/logo.png"
                                alt="WebPulse Logo"
                                className="h-16 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-8">
                        <Link
                            to="/"
                            className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                        >
                            Início
                        </Link>
                        <Link
                            to="/services"
                            className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                        >
                            Serviços
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                        >
                            Contato
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-red-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-colors duration-300"
                        >
                            <span className="sr-only">Abrir menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-gray-800`}>
                <div className="pt-2 pb-3 space-y-1">
                    <Link
                        to="/"
                        className="text-gray-300 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        Início
                    </Link>
                    <Link
                        to="/services"
                        className="text-gray-300 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        Serviços
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-300 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        Contato
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 