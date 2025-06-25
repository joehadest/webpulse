import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Previne scroll quando menu está aberto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <nav className="bg-gray-900 shadow-lg z-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-3">
                            <img
                                src="Imgs/logo.png"
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
                    <div className="flex items-center sm:hidden z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-3 rounded-lg text-gray-400 hover:text-red-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-all duration-300"
                            aria-label="Abrir menu"
                        >
                            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                                <span
                                    className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                                        isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                                    }`}
                                />
                                <span
                                    className={`block absolute h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
                                        isOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                                />
                                <span
                                    className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                                        isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                                    }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            <div
                className={`sm:hidden fixed inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                } z-40`}
                onClick={() => setIsOpen(false)}
            >
                {/* Mobile menu panel */}
                <div
                    className={`absolute right-0 top-0 w-80 h-full bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl transform transition-transform duration-300 ease-in-out ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                    onClick={e => e.stopPropagation()}
                >
                    {/* Header do menu mobile */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-700">
                        <div className="flex items-center space-x-3">
                            <img
                                src="Imgs/logo.png"
                                alt="WebPulse Logo"
                                className="h-12 w-auto"
                            />
                            <span className="text-white font-semibold text-lg">Menu</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu items */}
                    <div className="py-6 px-6">
                        <div className="space-y-2">
                        <Link
                                to="/"
                                className="flex items-center space-x-3 text-gray-300 hover:text-red-500 hover:bg-gray-800 px-4 py-3 rounded-lg transition-all duration-300 group"
                            onClick={() => setIsOpen(false)}
                        >
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="text-lg font-medium">Início</span>
                        </Link>
                            
                        <Link
                                to="/services"
                                className="flex items-center space-x-3 text-gray-300 hover:text-red-500 hover:bg-gray-800 px-4 py-3 rounded-lg transition-all duration-300 group"
                            onClick={() => setIsOpen(false)}
                        >
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                </svg>
                                <span className="text-lg font-medium">Serviços</span>
                        </Link>
                            
                        <Link
                            to="/contact"
                                className="flex items-center space-x-3 text-gray-300 hover:text-red-500 hover:bg-gray-800 px-4 py-3 rounded-lg transition-all duration-300 group"
                            onClick={() => setIsOpen(false)}
                        >
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-lg font-medium">Contato</span>
                        </Link>
                        </div>

                        {/* Divider */}
                        <div className="my-6 border-t border-gray-700"></div>

                        {/* Contact info */}
                        <div className="space-y-4">
                            <div className="text-center">
                                <p className="text-gray-400 text-sm mb-2">Precisa de ajuda?</p>
                                <button
                                    onClick={() => {
                                        const msg = "Olá! Gostaria de falar sobre um projeto.";
                                        window.open(`https://wa.me/5584998699449?text=${encodeURIComponent(msg)}`, '_blank');
                                        setIsOpen(false);
                                    }}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                    </svg>
                                    <span>Falar no WhatsApp</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 