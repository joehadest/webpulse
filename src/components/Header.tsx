import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <header
            className={`w-full fixed top-0 left-0 z-20 transition-all duration-300 ease-in-out ${
                isScrolled
                    ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-red-600/40'
                    : 'bg-transparent'
            } py-4 sm:py-5 px-6 sm:px-10 flex items-center justify-between`}
        >
            <Link to="/" className="flex items-center gap-2">
                <img src="/Imgs/LogoWebPulse.png" alt="WebPulse Logo" className="h-8 w-auto mr-2 drop-shadow-lg" />
                <span className="font-bold text-lg tracking-wide drop-shadow">
                    <span className="text-red-500">Web</span>
                    <span className="text-white">Pulse</span>
                </span>
            </Link>
            <nav className="hidden sm:flex gap-8">
                <Link to="/services" className="text-gray-200 hover:text-red-400 font-medium transition-colors duration-300">Planos</Link>
                <Link to="/portfolio" className="text-gray-200 hover:text-red-400 font-medium transition-colors duration-300">Projetos</Link>
                <Link to="/contact" className="text-gray-200 hover:text-red-400 font-medium transition-colors duration-300">Contato</Link>
            </nav>
            <div className="sm:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 flex sm:hidden">
                    {/* Overlay escuro para fechar ao clicar fora */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" onClick={() => setIsMenuOpen(false)} />
                    {/* Sidebar animado */}
                    <nav className="relative ml-auto w-4/5 max-w-xs bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 backdrop-blur-2xl border-l border-red-600/30 shadow-2xl rounded-l-2xl flex flex-col items-center justify-center gap-8 py-10 px-6 animate-slide-in-right min-h-full">
                        <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-red-500 hover:text-red-700 focus:outline-none transition-colors duration-200">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Link to="/services" onClick={() => setIsMenuOpen(false)} className="w-full text-center text-gray-200 hover:text-red-400 font-semibold transition-colors duration-300 text-xl py-3 rounded-lg bg-gray-800/40 hover:bg-red-600/20">Planos</Link>
                        <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="w-full text-center text-gray-200 hover:text-red-400 font-semibold transition-colors duration-300 text-xl py-3 rounded-lg bg-gray-800/40 hover:bg-red-600/20">Projetos</Link>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="w-full text-center text-gray-200 hover:text-red-400 font-semibold transition-colors duration-300 text-xl py-3 rounded-lg bg-gray-800/40 hover:bg-red-600/20">Contato</Link>
                    </nav>
                    <style>{`
                        @keyframes slide-in-right {
                            from { transform: translateX(100%); opacity: 0; }
                            to { transform: translateX(0); opacity: 1; }
                        }
                        .animate-slide-in-right {
                            animation: slide-in-right 0.35s cubic-bezier(0.4,0,0.2,1) both;
                        }
                    `}</style>
                </div>
            )}
        </header>
    );
};

export default Header;
