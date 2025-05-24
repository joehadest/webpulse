import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ProjectModal from '../components/ProjectModal';

const Home: React.FC = () => {
    const [isFlashshipModalOpen, setFlashshipModalOpen] = useState(false);
    const [isBarachosModalOpen, setBarachosModalOpen] = useState(false);
    const [isDocheffModalOpen, setDocheffModalOpen] = useState(false);
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Banner Section */}
            <section
                className="relative w-full h-48 sm:h-72 md:h-[500px] bg-black text-white flex items-center justify-center animate-fade-in animation-delay-200"
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
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4 sm:text-4xl">
                            Nossos Serviços em Destaque
                        </h2>
                        <p className="text-gray-300">
                            Conheça algumas das soluções que oferecemos para seu negócio
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Site Institucional */}
                        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700 p-8 flex flex-col items-center text-center">
                            <span className="text-5xl mb-4">🏢</span>
                            <h3 className="text-2xl font-bold text-red-500 mb-2">Sites Institucionais</h3>
                            <p className="text-gray-300 mb-6">Sites profissionais para sua empresa, com design moderno e funcionalidades avançadas.</p>
                            <Link to="/services" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-semibold">Ver mais detalhes</Link>
                        </div>
                        {/* E-commerce */}
                        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700 p-8 flex flex-col items-center text-center">
                            <span className="text-5xl mb-4">🛍️</span>
                            <h3 className="text-2xl font-bold text-red-500 mb-2">E-commerce</h3>
                            <p className="text-gray-300 mb-6">Lojas virtuais completas com gestão de produtos, pagamentos e entregas.</p>
                            <Link to="/services" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-semibold">Ver mais detalhes</Link>
                        </div>
                        {/* Restaurantes */}
                        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700 p-8 flex flex-col items-center text-center">
                            <span className="text-5xl mb-4">🍽️</span>
                            <h3 className="text-2xl font-bold text-red-500 mb-2">Sites para Restaurantes</h3>
                            <p className="text-gray-300 mb-6">Soluções especializadas com cardápio digital, reservas e delivery.</p>
                            <Link to="/services" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-semibold">Ver mais detalhes</Link>
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

                {/* Carrossel:: Criado por Nicolas Rock*/}
                <div className="py-16 bg-gray-800/50 animate-fade-in animation-delay-500">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-8 sm:text-4xl">
                            Projetos Recentes
                        </h2>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000 }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                        >
                            <SwiperSlide>
                                <div className="bg-gray-900 rounded-lg shadow-lg p-6 h-full flex flex-col w-full max-w-sm mx-auto">
                                    <img src="./Projetos/barachos.png" alt="Barachos" className="w-full h-48 sm:h-64 object-cover mx-auto mb-3 rounded-xl shadow-lg border-2 border-red-500" />
                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-xl text-red-500 font-bold mb-2">Barachos</h3>
                                        <p className="text-gray-300 flex-1">Site empresarial para apresentação de projetos, serviços e informações institucionais da empresa Barachos.</p>
                                    </div>
                                    <div className="mt-3">
                                        <button onClick={() => setBarachosModalOpen(true)} className="w-full px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition">Ver detalhes</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-gray-900 rounded-lg shadow-lg p-6 h-full flex flex-col w-full max-w-sm mx-auto">
                                    <img src="./Projetos/docheff.png" alt="Docheff" className="w-full h-48 sm:h-64 object-cover mx-auto mb-3 rounded-xl shadow-lg border-2 border-red-500" />
                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-xl text-red-500 font-bold mb-2">Docheff</h3>
                                        <p className="text-gray-300 flex-1">Cardápio digital completo, com painel administrativo para gestão de produtos e página de impressão de pedidos.</p>
                                    </div>
                                    <div className="mt-3">
                                        <button onClick={() => setDocheffModalOpen(true)} className="w-full px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition">Ver detalhes</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-gray-900 rounded-lg shadow-lg p-6 h-full flex flex-col w-full max-w-sm mx-auto">
                                    <img src="./Projetos/flashship.png" alt="Shippin - Loja de Dropshipping" className="w-full h-48 sm:h-64 object-cover mx-auto mb-3 rounded-xl shadow-lg border-2 border-red-500" />
                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-xl text-red-500 font-bold mb-2">Shippin - Loja de Dropshipping</h3>
                                        <p className="text-gray-300 flex-1">Loja virtual responsiva com carrinho e checkout.</p>
                                    </div>
                                    <div className="mt-3">
                                        <button onClick={() => setFlashshipModalOpen(true)} className="w-full px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition">Ver detalhes</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <ProjectModal
                            isOpen={isFlashshipModalOpen}
                            onClose={() => setFlashshipModalOpen(false)}
                            title="Shippin - Loja de Dropshipping"
                            image="/Projetos/flashship.png"
                            description="Loja virtual responsiva com carrinho e checkout."
                        />
                        <ProjectModal
                            isOpen={isBarachosModalOpen}
                            onClose={() => setBarachosModalOpen(false)}
                            title="Barachos"
                            image="/Projetos/barachos.png"
                            description="Site empresarial para apresentação de projetos, serviços e informações institucionais da empresa Barachos."
                        />
                        <ProjectModal
                            isOpen={isDocheffModalOpen}
                            onClose={() => setDocheffModalOpen(false)}
                            title="Docheff"
                            image="/Projetos/docheff.png"
                            description="Cardápio digital completo, com painel administrativo para gestão de produtos e página de impressão de pedidos."
                        />
                    </div>
                </div>

                {/* Maps da empresa:: Criado por Nicolas ROck*/}
                <div className="mt-12 animate-fade-in animation-delay-500">
                    <h3 className="text-2xl font-bold text-red-500 text-center mb-4 sm:text-3xl location-title">
                        Encontre-nos aqui!
                    </h3>
                    <div className="flex justify-center w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.738897085373!2d-36.76962402623292!3d-5.30337965320908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b0dac4c891df03%3A0xb915f137c42c9b7a!2sR.%20Pedro%20Martins%20de%20Oliveira%2C%20Alto%20do%20Rodrigues%20-%20RN%2C%2059507-000!5e0!3m2!1spt-BR!2sbr!4v1748017741385!5m2!1spt-BR!2sbr"
                            width="100%"
                            className="rounded-lg border border-gray-700 w-full max-w-full h-56 sm:h-80 md:h-[400px]"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <style>{`
                body.modal-open .location-title {
                    z-index: 0 !important;
                    position: relative !important;
                    opacity: 0 !important;
                    pointer-events: none !important;
                }
            `}</style>
        </div>
    );
};

export default Home; 