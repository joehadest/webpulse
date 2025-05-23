import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Banner Section */}
            <section
                className="relative w-full h-[160px] sm:h-[220px] md:h-[400px] lg:h-[500px] bg-black text-white flex items-center justify-center px-1 sm:px-4 overflow-hidden animate-fade-in"
                style={{
                    backgroundImage: "url('/banner.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Banner sem texto */}
                <Link
                    to="/contact"
                    className="absolute right-1 bottom-1 sm:right-4 sm:bottom-4 md:right-12 md:bottom-10 px-2 py-1 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-[10px] sm:text-base md:text-lg font-medium text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 animate-slide-up animation-delay-400"
                    style={{ zIndex: 10 }}
                >
                    Entrar em contato
                </Link>
            </section>

            {/* Hero Section */}
            {/* Removido o botão centralizado abaixo do banner */}

            {/* Serviços em Destaque */}
            <div className="py-16 bg-gray-800/50 animate-fade-in animation-delay-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 animate-slide-up animation-delay-400">
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4">
                            Nossos Serviços em Destaque
                        </h2>
                        <p className="text-gray-300">
                            Conheça algumas das soluções que oferecemos para seu negócio
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 animate-slide-up animation-delay-200">
                            <div className="text-4xl mb-4">🏢</div>
                            <h3 className="text-xl font-bold text-gray-300 mb-2">Sites Institucionais</h3>
                            <p className="text-gray-400 mb-4">
                                Sites profissionais para sua empresa, com design moderno e funcionalidades avançadas.
                            </p>
                            <Link
                                to="/services"
                                className="text-red-500 hover:text-red-400 font-medium inline-flex items-center"
                            >
                                Ver mais detalhes
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 animate-slide-up animation-delay-400">
                            <div className="text-4xl mb-4">🛍️</div>
                            <h3 className="text-xl font-bold text-gray-300 mb-2">E-commerce</h3>
                            <p className="text-gray-400 mb-4">
                                Lojas virtuais completas com gestão de produtos, pagamentos e entregas.
                            </p>
                            <Link
                                to="/services"
                                className="text-red-500 hover:text-red-400 font-medium inline-flex items-center"
                            >
                                Ver mais detalhes
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 animate-slide-up animation-delay-600">
                            <div className="text-4xl mb-4">🍽️</div>
                            <h3 className="text-xl font-bold text-gray-300 mb-2">Sites para Restaurantes</h3>
                            <p className="text-gray-400 mb-4">
                                Soluções especializadas com cardápio digital, reservas e delivery.
                            </p>
                            <Link
                                to="/services"
                                className="text-red-500 hover:text-red-400 font-medium inline-flex items-center"
                            >
                                Ver mais detalhes
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 animate-fade-in animation-delay-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 animate-slide-up animation-delay-600">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4">
                                Pronto para Começar?
                            </h2>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                Solicite um orçamento personalizado e descubra como podemos ajudar seu negócio a crescer online.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/budget"
                                    className="px-8 py-4 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                                >
                                    Solicitar Orçamento
                                </Link>
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 text-lg font-medium text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                                >
                                    Fale Conosco
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home; 