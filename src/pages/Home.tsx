import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Banner Section */}
            <section
                className="relative w-full h-[500px] bg-black text-white flex items-center justify-center"
                style={{
                    backgroundImage: "url('Imgs/banner.png')",
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
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in">
                            <h3 className="text-2xl font-bold text-center text-red-500">Design Moderno</h3>
                            <p className="mt-4 text-gray-300">
                                Criamos interfaces exclusivas e profissionais que transmitem credibilidade e valor à sua marca
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-200">
                            <h3 className="text-2xl font-bold text-center text-red-500">Responsivo</h3>
                            <p className="mt-4 text-gray-300">
                                Garantimos uma experiência perfeita em todos os dispositivos, mantendo a qualidade e performance
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-400">
                            <h3 className="text-2xl font-bold text-center text-red-500">Performance</h3>
                            <p className="mt-4 text-gray-300">
                                Otimizamos cada detalhe para garantir velocidade, segurança e a melhor experiência para seus clientes
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 animate-fade-in animation-delay-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-3xl font-extrabold text-red-500 sm:text-4xl">
                            Nossa Garantia
                        </h2>
                        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                            Compromisso com a qualidade e satisfação dos nossos clientes
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in">
                            <h3 className="text-xl font-bold text-center text-red-500 mb-4">Suporte Contínuo</h3>
                            <p className="text-gray-300">
                                Oferecemos suporte técnico especializado e manutenção preventiva para garantir o funcionamento perfeito do seu site
                            </p>
                        </div>
                        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-200">
                            <h3 className="text-xl font-bold text-center text-red-500 mb-4">Satisfação Garantida</h3>
                            <p className="text-gray-300">
                                Trabalhamos com transparência e compromisso, garantindo que cada projeto atenda às suas expectativas
                            </p>
                        </div>
                    </div>
                </div>
                {/* Maps da empresa:: Criado por Nicolas ROck*/}
                <div className="mt-12 animate-fade-in animation-delay-500">
                    <h3 className="text-3xl font-bold text-red-500 text-center mb-4">
                        Encontre-nos Aqui
                    </h3>
                    <div className="flex justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.738897085373!2d-36.76962402623292!3d-5.30337965320908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b0dac4c891df03%3A0xb915f137c42c9b7a!2sR.%20Pedro%20Martins%20de%20Oliveira%2C%20Alto%20do%20Rodrigues%20-%20RN%2C%2059507-000!5e0!3m2!1spt-BR!2sbr!4v1748017741385!5m2!1spt-BR!2sbr"                        width="100%"
                            height="400"
                            className="rounded-lg border border-gray-700 w-full max-w-3xl"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home; 