import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 overflow-x-hidden animate-fade-in">
            {/* Hero Section */}
            <section
                className="relative w-full h-[500px] bg-black text-white flex items-center justify-center"
                style={{
                    backgroundImage: "url('/banner.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    marginLeft: 'calc(-50vw + 50%)',
                    marginRight: 'calc(-50vw + 50%)'
                }}
            >
                {/* Botão no canto inferior direito */}
                <a
                    href="/contact"
                    className="absolute right-8 bottom-8 px-8 py-3 rounded-md bg-red-600 text-white text-base font-medium shadow-lg hover:bg-red-700 transition-all duration-300 z-20"
                    style={{ minWidth: 250, textAlign: 'center' }}
                >
                    Fale com um especialista
                </a>
            </section>

            {/* Features Section */}
            <section className="py-12 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 animate-fade-in">
                        <h2 className="text-3xl font-extrabold text-red-500 sm:text-4xl">
                            Por que escolher a WebPulse?
                        </h2>
                        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                            Comprometimento com a excelência e resultados comprovados para seu negócio
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in">
                            <h3 className="text-2xl font-bold text-red-500">Design Moderno</h3>
                            <p className="mt-4 text-gray-300">
                                Criamos interfaces exclusivas e profissionais que transmitem credibilidade e valor à sua marca
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-200">
                            <h3 className="text-2xl font-bold text-red-500">Responsivo</h3>
                            <p className="mt-4 text-gray-300">
                                Garantimos uma experiência perfeita em todos os dispositivos, mantendo a qualidade e performance
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-400">
                            <h3 className="text-2xl font-bold text-red-500">Performance</h3>
                            <p className="mt-4 text-gray-300">
                                Otimizamos cada detalhe para garantir velocidade, segurança e a melhor experiência para seus clientes
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-12 bg-gray-800">
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
                            <h3 className="text-xl font-bold text-red-500 mb-4">Suporte Contínuo</h3>
                            <p className="text-gray-300">
                                Oferecemos suporte técnico especializado e manutenção preventiva para garantir o funcionamento perfeito do seu site
                            </p>
                        </div>
                        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700 p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-200">
                            <h3 className="text-xl font-bold text-red-500 mb-4">Satisfação Garantida</h3>
                            <p className="text-gray-300">
                                Trabalhamos com transparência e compromisso, garantindo que cada projeto atenda às suas expectativas
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 