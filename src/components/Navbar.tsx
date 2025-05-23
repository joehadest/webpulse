import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 shadow-lg z-50 relative">
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
                            to="/budget"
                            className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                        >
                            Orçamento
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                        >
                            Contato
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-3 rounded-md text-gray-400 hover:text-red-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-colors duration-300"
                            aria-label="Abrir menu"
                        >
                            <span className="sr-only">Abrir menu</span>
                            <div className={`relative w-7 h-7 flex flex-col justify-center items-center transition-all duration-300`}>
                                <span
                                    className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 top-3.5' : 'top-2'}`}
                                />
                                <span
                                    className={`block absolute h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'top-3.5'}`}
                                />
                                <span
                                    className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 top-3.5' : 'top-5'}`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`sm:hidden fixed top-0 left-0 w-full h-full bg-black/60 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} z-40`}
                onClick={() => setIsOpen(false)}
            >
                <nav
                    className={`absolute right-0 top-0 w-4/5 max-w-xs h-full bg-gray-900 shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="pt-8 pb-6 px-6 flex flex-col space-y-4">
                        <Link
                            to="/"
                            className="text-gray-300 hover:text-red-500 block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Início
                        </Link>
                        <Link
                            to="/services"
                            className="text-gray-300 hover:text-red-500 block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Serviços
                        </Link>
                        <Link
                            to="/budget"
                            className="text-gray-300 hover:text-red-500 block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Orçamento
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-300 hover:text-red-500 block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Contato
                        </Link>
                    </div>
                </nav>
            </div>
        </nav>
    );
};

export default Navbar; 