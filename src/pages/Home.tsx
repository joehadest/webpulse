import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ProjectModal from '../components/ProjectModal';
import { plans } from '../data/plans';

const Home: React.FC = () => {
    const [isFlashshipModalOpen, setFlashshipModalOpen] = useState(false);
    const [isBarachosModalOpen, setBarachosModalOpen] = useState(false);
    const [isDocheffModalOpen, setDocheffModalOpen] = useState(false);
    const [isReiDosSalgadosModalOpen, setReiDosSalgadosModalOpen] = useState(false);
    const plan = plans[0]; // Pegando o único plano

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
                    to="/services"
                    className="absolute right-1 bottom-1 sm:right-4 sm:bottom-4 md:right-12 md:bottom-10 px-2 py-1 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-[10px] sm:text-base md:text-lg font-medium text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 animate-slide-up animation-delay-400"
                    style={{ zIndex: 10 }}
                >
                    Ver Planos
                </Link>
            </section>

            {/* Plans Preview Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Plano que Impulsiona seu Negócio
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Escolha o plano perfeito para sua empresa e comece sua jornada digital
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                            <div className="p-8">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{plan.name}</h3>
                                </div>
                                <p className="text-gray-300 mb-6 text-sm sm:text-base text-center">{plan.description}</p>
                                <div className="mb-6 text-center">
                                    <div className="flex items-baseline justify-center">
                                        <span className="text-3xl sm:text-4xl font-extrabold text-white">
                                            R$ {plan.monthlyPrice}
                                        </span>
                                        <span className="ml-1 text-lg sm:text-xl text-gray-300">/mês</span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-400 mt-2">
                                        ou R$ {plan.yearlyPrice}/ano (16,67% de desconto)
                                    </p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.slice(0, 6).map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-300 text-sm sm:text-base">
                                            <svg
                                                className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mr-3 flex-shrink-0"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to="/services"
                                    className="block w-full py-3 px-6 text-center text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 text-sm sm:text-base"
                                >
                                    Saiba Mais
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Por que Escolher Nossos Planos?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Benefícios exclusivos para impulsionar seu negócio
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-800 rounded-xl p-8">
                            <div className="text-red-500 text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold text-white mb-4">Desenvolvimento Rápido</h3>
                            <p className="text-gray-300">
                                Entregamos seu projeto em tempo recorde, sem comprometer a qualidade.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-8">
                            <div className="text-red-500 text-4xl mb-4">💡</div>
                            <h3 className="text-xl font-bold text-white mb-4">Suporte Dedicado</h3>
                            <p className="text-gray-300">
                                Equipe especializada disponível para ajudar em todas as etapas do projeto.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-8">
                            <div className="text-red-500 text-4xl mb-4">🛡️</div>
                            <h3 className="text-xl font-bold text-white mb-4">Segurança Garantida</h3>
                            <p className="text-gray-300">
                                Implementamos as melhores práticas de segurança para proteger seus dados.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-8">
                            <div className="text-red-500 text-4xl mb-4">📱</div>
                            <h3 className="text-xl font-bold text-white mb-4">Design Responsivo</h3>
                            <p className="text-gray-300">
                                Sites otimizados para todos os dispositivos, do celular ao desktop.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-8">
                            <div className="text-red-500 text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold text-white mb-4">Alta Performance</h3>
                            <p className="text-gray-300">
                                Sites rápidos e otimizados para melhor experiência do usuário.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-8">
                            <div className="text-red-500 text-4xl mb-4">📈</div>
                            <h3 className="text-xl font-bold text-white mb-4">SEO Otimizado</h3>
                            <p className="text-gray-300">
                                Estratégias para melhorar seu posicionamento nos motores de busca.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Pronto para Começar?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Escolha seu plano agora e comece sua transformação digital
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/services"
                            className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
                        >
                            Ver Planos
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-3 text-lg font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300"
                        >
                            Fale Conosco
                        </Link>
                    </div>
                </div>
            </section>

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

                {/* Projetos Recentes - NOVO LAYOUT COM SCROLL */}
                <div className="py-16 bg-gray-800/50 animate-fade-in animation-delay-500">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-8 sm:text-4xl">
                            Projetos Recentes
                        </h2>
                        <div className="w-full overflow-x-auto pb-4 recent-projects-scroll">
                            <div className="flex gap-3 sm:gap-6 lg:gap-8 min-w-[280px] sm:min-w-[600px] md:min-w-[900px] lg:min-w-[1200px] xl:min-w-[1400px]">
                                <div className="bg-gray-900 rounded-lg shadow-lg p-3 sm:p-4 lg:p-6 h-full flex flex-col min-h-[380px] sm:min-h-[420px] max-w-[240px] sm:max-w-xs lg:max-w-sm min-w-[220px] sm:min-w-[280px] lg:min-w-[320px] mx-auto justify-between border-2 border-red-500 flex-shrink-0">
                                    <img src="./Projetos/barachos.png" alt="Baracho" className="w-full h-40 sm:h-48 lg:h-64 object-cover mx-auto mb-2 sm:mb-3 rounded-xl shadow-lg border-2 border-red-500" />
                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-lg sm:text-xl text-red-500 font-bold mb-1 sm:mb-2">Baracho Soluções e Serviços</h3>
                                        <p className="text-gray-300 flex-1 text-sm sm:text-base">Site empresarial para apresentação de projetos, serviços e informações institucionais da empresa Baracho Soluções e Serviços.</p>
                                    </div>
                                    <div className="mt-2 sm:mt-3">
                                        <button onClick={() => setBarachosModalOpen(true)} className="w-full px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-red-600 text-white rounded hover:bg-red-700 transition">Ver detalhes</button>
                                    </div>
                                </div>
                                <div className="bg-gray-900 rounded-lg shadow-lg p-3 sm:p-4 lg:p-6 h-full flex flex-col min-h-[380px] sm:min-h-[420px] max-w-[240px] sm:max-w-xs lg:max-w-sm min-w-[220px] sm:min-w-[280px] lg:min-w-[320px] mx-auto justify-between border-2 border-red-500 flex-shrink-0">
                                    <img src="./Projetos/docheff.png" alt="Docheff" className="w-full h-40 sm:h-48 lg:h-64 object-cover mx-auto mb-2 sm:mb-3 rounded-xl shadow-lg border-2 border-red-500" />
                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-lg sm:text-xl text-red-500 font-bold mb-1 sm:mb-2">Docheff</h3>
                                        <p className="text-gray-300 flex-1 text-sm sm:text-base">Cardápio digital completo, com painel administrativo para gestão de produtos e página de impressão de pedidos.</p>
                                    </div>
                                    <div className="mt-2 sm:mt-3">
                                        <button onClick={() => setDocheffModalOpen(true)} className="w-full px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-red-600 text-white rounded hover:bg-red-700 transition">Ver detalhes</button>
                                    </div>
                                </div>
                                <div className="bg-gray-900 rounded-lg shadow-lg p-3 sm:p-4 lg:p-6 h-full flex flex-col min-h-[380px] sm:min-h-[420px] max-w-[240px] sm:max-w-xs lg:max-w-sm min-w-[220px] sm:min-w-[280px] lg:min-w-[320px] mx-auto justify-between border-2 border-red-500 flex-shrink-0">
                                    <img src="./Projetos/flashship.png" alt="Shippin - Loja de Dropshipping" className="w-full h-40 sm:h-48 lg:h-64 object-cover mx-auto mb-2 sm:mb-3 rounded-xl shadow-lg border-2 border-red-500" />
                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-lg sm:text-xl text-red-500 font-bold mb-1 sm:mb-2">Shippin - Loja de Dropshipping</h3>
                                        <p className="text-gray-300 flex-1 text-sm sm:text-base">Loja virtual responsiva com carrinho e checkout.</p>
                                    </div>
                                    <div className="mt-2 sm:mt-3">
                                        <button onClick={() => setFlashshipModalOpen(true)} className="w-full px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-red-600 text-white rounded hover:bg-red-700 transition">Ver detalhes</button>
                                    </div>
                                </div>
                                <div className="bg-gray-900 rounded-lg shadow-lg p-3 sm:p-4 lg:p-6 h-full flex flex-col min-h-[380px] sm:min-h-[420px] max-w-[240px] sm:max-w-xs lg:max-w-sm min-w-[220px] sm:min-w-[280px] lg:min-w-[320px] mx-auto justify-between border-2 border-red-500 flex-shrink-0">
                                    <img src="./Projetos/reidossalgados.png" alt="Rei dos Salgados" className="w-full h-40 sm:h-48 lg:h-64 object-cover mx-auto mb-2 sm:mb-3 rounded-xl shadow-lg border-2 border-red-500" />
                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-lg sm:text-xl text-red-500 font-bold mb-1 sm:mb-2">Rei dos Salgados</h3>
                                        <p className="text-gray-300 flex-1 text-sm sm:text-base">Cardápio digital completo com painel administrativo para gestão de produtos, categorias e pedidos.</p>
                                    </div>
                                    <div className="mt-2 sm:mt-3">
                                        <button onClick={() => setReiDosSalgadosModalOpen(true)} className="w-full px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-red-600 text-white rounded hover:bg-red-700 transition">Ver detalhes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProjectModal
                        isOpen={isFlashshipModalOpen}
                        onClose={() => setFlashshipModalOpen(false)}
                        title="Shippin - Loja de Dropshipping"
                        image="/Projetos/flashship.png"
                        description="Loja virtual responsiva com carrinho e checkout."
                         siteLink=""
                    />
                    <ProjectModal
                        isOpen={isBarachosModalOpen}
                        onClose={() => setBarachosModalOpen(false)}
                        title="Baracho Soluções e Serviços"
                        image="/Projetos/barachos.png"
                        description="Site empresarial para apresentação de projetos, serviços e informações institucionais da empresa Baracho Soluções e Serviços."
                         siteLink="http://barachosolucoes.com/"
                    />
                    <ProjectModal
                        isOpen={isDocheffModalOpen}
                        onClose={() => setDocheffModalOpen(false)}
                        title="Docheff"
                        image="/Projetos/docheff.png"
                        description="Cardápio digital completo, com painel administrativo para gestão de produtos e página de impressão de pedidos."
                        siteLink="https://www.do-cheff-rn.com.br/"
                    />
                    <ProjectModal
                        isOpen={isReiDosSalgadosModalOpen}
                        onClose={() => setReiDosSalgadosModalOpen(false)}
                        title="Rei dos Salgados - Cardápio Digital"
                        image="/Projetos/reidossalgados.png"
                        description="Cardápio digital completo com painel administrativo para gestão de produtos, categorias e pedidos. Sistema de pedidos em tempo real, controle de estoque e categorização eficiente."
                        siteLink="https://reidossalgados.webpulseservicos.com/"
                    />
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
                /* Scrollbar customizado para a seção de projetos recentes */
                .recent-projects-scroll::-webkit-scrollbar {
                    height: 12px;
                }
                .recent-projects-scroll::-webkit-scrollbar-thumb {
                    background: linear-gradient(90deg, #ef4444 40%, #b91c1c 100%);
                    border-radius: 8px;
                }
                .recent-projects-scroll::-webkit-scrollbar-track {
                    background: #222;
                    border-radius: 8px;
                }
                /* Firefox */
                .recent-projects-scroll {
                    scrollbar-color: #ef4444 #222;
                    scrollbar-width: thin;
                }
            `}</style>
        </div>
    );
};

export default Home; 