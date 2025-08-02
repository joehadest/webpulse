import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ProjectModal from '../components/ProjectModal';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import NewsletterSignup from '../components/NewsletterSignup';
import { plans } from '../data/plans';

const Home: React.FC = () => {
    const [isFlashshipModalOpen, setFlashshipModalOpen] = useState(false);
    const [isBarachosModalOpen, setBarachosModalOpen] = useState(false);
    const [isDocheffModalOpen, setDocheffModalOpen] = useState(false);
    const [isReiDosSalgadosModalOpen, setReiDosSalgadosModalOpen] = useState(false);
    const plan = plans[0]; // Pegando o único plano

    const handleCustomProject = () => {
        const msg = "Olá! Gostaria de um orçamento para desenvolvimento de site com domínio próprio para minha empresa.";
        window.open(`https://wa.me/5584998699449?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Banner Section */}
            <section
                className="relative w-full h-40 xs:h-48 sm:h-72 md:h-[500px] bg-black text-white flex items-center justify-center animate-fade-in animation-delay-200 overflow-hidden"
                style={{
                    backgroundImage: "url('Imgs/banner.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

                {/* Efeito de partículas */}
                <div className="particles">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 20}s`,
                                animationDuration: `${20 + Math.random() * 10}s`
                            }}
                        />
                    ))}
                </div>

                {/* Conteúdo do banner */}
                <div className="relative z-10 text-center animate-slide-up animation-delay-400">
                    {/* Banner vazio - apenas com imagem de fundo */}
                </div>



                {/* Scroll indicator */}
                {/* REMOVIDO */}
            </section>

            {/* Plans Preview Section */}
            <section className="py-8 xs:py-10 sm:py-16 lg:py-20 px-2 xs:px-3 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">
                            Plano que Impulsiona seu Negócio
                        </h2>
                        <p className="text-base xs:text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2 xs:px-4">
                            Escolha o plano perfeito para sua empresa e comece sua jornada digital
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                            <div className="p-4 xs:p-6 sm:p-8">
                                <div className="text-center mb-4 xs:mb-6">
                                    <h3 className="text-lg xs:text-2xl sm:text-3xl font-bold text-white">{plan.name}</h3>
                                </div>
                                <p className="text-gray-300 mb-4 xs:mb-6 text-xs xs:text-sm sm:text-base text-center">{plan.description}</p>
                                <div className="mb-4 xs:mb-6 text-center">
                                    <div className="flex items-baseline justify-center">
                                        <span className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white">
                                            R$ {plan.monthlyPrice}
                                        </span>
                                        <span className="ml-1 text-base xs:text-lg sm:text-xl text-gray-300">/mês</span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-400 mt-2">
                                        ou R$ {plan.yearlyPrice}/ano (16,67% de desconto)
                                    </p>
                                </div>
                                <ul className="space-y-2 xs:space-y-3 mb-6 xs:mb-8">
                                    {plan.features.slice(0, 6).map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-300 text-xs xs:text-sm sm:text-base">
                                            <svg
                                                className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mr-2 xs:mr-3 flex-shrink-0"
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
                                    className="block w-full py-3 px-4 xs:px-6 text-center text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 text-xs xs:text-sm sm:text-base"
                                >
                                    Saiba Mais
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de Projeto Personalizado */}
            <section className="py-8 xs:py-10 sm:py-16 lg:py-20 px-2 xs:px-3 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-800/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50">
                        <div className="p-4 xs:p-6 sm:p-8 md:p-12">
                            <div className="text-center mb-4 xs:mb-6 sm:mb-8">
                                <div className="inline-flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-red-500/20 rounded-full mb-2 xs:mb-3 sm:mb-4">
                                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h2 className="text-lg xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">
                                    Projeto Personalizado
                                </h2>
                                <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2 xs:px-4">
                                    Não quer fazer plano? Também desenvolvemos sites para sua empresa com seu próprio domínio, com um orçamento separado.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 xs:gap-6 lg:grid-cols-2 lg:gap-8 mb-4 xs:mb-6 sm:mb-8">
                                <div className="space-y-3 xs:space-y-4">
                                    <h3 className="text-base xs:text-xl font-semibold text-white mb-2 xs:mb-4">O que incluímos:</h3>
                                    <ul className="space-y-2 xs:space-y-3">
                                        <li className="flex items-start text-gray-300 text-xs xs:text-sm">
                                            <svg className="h-4 w-4 xs:h-5 xs:w-5 text-green-400 mr-2 xs:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Site personalizado com design exclusivo</span>
                                        </li>
                                        <li className="flex items-start text-gray-300 text-xs xs:text-sm">
                                            <svg className="h-4 w-4 xs:h-5 xs:w-5 text-green-400 mr-2 xs:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Domínio próprio (.com.br, .com, etc.)</span>
                                        </li>
                                        <li className="flex items-start text-gray-300 text-xs xs:text-sm">
                                            <svg className="h-4 w-4 xs:h-5 xs:w-5 text-green-400 mr-2 xs:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Hospedagem premium inclusa</span>
                                        </li>
                                        <li className="flex items-start text-gray-300 text-xs xs:text-sm">
                                            <svg className="h-4 w-4 xs:h-5 xs:w-5 text-green-400 mr-2 xs:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Certificado SSL (site seguro)</span>
                                        </li>
                                        <li className="flex items-start text-gray-300 text-xs xs:text-sm">
                                            <svg className="h-4 w-4 xs:h-5 xs:w-5 text-green-400 mr-2 xs:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Área administrativa completa</span>
                                        </li>
                                        <li className="flex items-start text-gray-300 text-xs xs:text-sm">
                                            <svg className="h-4 w-4 xs:h-5 xs:w-5 text-green-400 mr-2 xs:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>SEO otimizado para Google</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-3 xs:space-y-4">
                                    <h3 className="text-base xs:text-xl font-semibold text-white mb-2 xs:mb-4">Vantagens:</h3>
                                    <ul className="space-y-2 xs:space-y-3">
                                        <li className="flex items-start text-gray-300 text-xs xs:text-sm">
                                            <svg className="h-4 w-4 xs:h-5 xs:w-5 text-yellow-400 mr-2 xs:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Pagamento único (sem mensalidades)</span>
                                        </li>
                                        <li className="flex items-start text-gray-300 text-xs xs:text-sm">
                                            <svg className="h-4 w-4 xs:h-5 xs:w-5 text-yellow-400 mr-2 xs:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Design 100% personalizado</span>
                                        </li>
                                        <li className="flex items-start text-gray-300 text-xs xs:text-sm">
                                            <svg className="h-4 w-4 xs:h-5 xs:w-5 text-yellow-400 mr-2 xs:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Funcionalidades específicas</span>
                                        </li>
                                        <li className="flex items-start text-gray-300 text-xs xs:text-sm">
                                            <svg className="h-4 w-4 xs:h-5 xs:w-5 text-yellow-400 mr-2 xs:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Suporte técnico incluído</span>
                                        </li>
                                        <li className="flex items-start text-gray-300 text-xs xs:text-sm">
                                            <svg className="h-4 w-4 xs:h-5 xs:w-5 text-yellow-400 mr-2 xs:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Treinamento de uso</span>
                                        </li>
                                        <li className="flex items-start text-gray-300 text-xs xs:text-sm">
                                            <svg className="h-4 w-4 xs:h-5 xs:w-5 text-yellow-400 mr-2 xs:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Propriedade total do código</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center">
                                <button
                                    onClick={handleCustomProject}
                                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                    </svg>
                                    Solicitar Orçamento via WhatsApp
                                </button>
                                <p className="text-gray-400 text-sm mt-3">
                                    Entre em contato conosco e receba um orçamento personalizado para seu projeto
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                            Por que Escolher Nossos Planos?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                            Benefícios exclusivos para impulsionar seu negócio
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="glass rounded-2xl p-6 sm:p-8 card-hover group border border-gray-700/50 hover:border-red-500/50 transition-all duration-500">
                            <div className="text-red-500 text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-red-400 transition-colors duration-300">Desenvolvimento Rápido</h3>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                Entregamos seu projeto em tempo recorde, sem comprometer a qualidade.
                                Processo otimizado para máxima eficiência.
                            </p>
                            <div className="mt-4 sm:mt-6 w-12 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
                        </div>

                        <div className="glass rounded-2xl p-8 card-hover group border border-gray-700/50 hover:border-red-500/50 transition-all duration-500">
                            <div className="text-red-500 text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">💡</div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">Suporte Dedicado</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Equipe especializada disponível para ajudar em todas as etapas do projeto.
                                Suporte contínuo e personalizado.
                            </p>
                            <div className="mt-6 w-12 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
                        </div>

                        <div className="glass rounded-2xl p-8 card-hover group border border-gray-700/50 hover:border-red-500/50 transition-all duration-500">
                            <div className="text-red-500 text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">Segurança Garantida</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Implementamos as melhores práticas de segurança para proteger seus dados.
                                SSL, backups e monitoramento 24/7.
                            </p>
                            <div className="mt-6 w-12 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
                        </div>

                        <div className="glass rounded-2xl p-8 card-hover group border border-gray-700/50 hover:border-red-500/50 transition-all duration-500">
                            <div className="text-red-500 text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">📱</div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">Design Responsivo</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Sites otimizados para todos os dispositivos, do celular ao desktop.
                                Experiência perfeita em qualquer tela.
                            </p>
                            <div className="mt-6 w-12 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
                        </div>

                        <div className="glass rounded-2xl p-8 card-hover group border border-gray-700/50 hover:border-red-500/50 transition-all duration-500">
                            <div className="text-red-500 text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">Alta Performance</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Sites rápidos e otimizados para melhor experiência do usuário.
                                Carregamento ultrarrápido e eficiente.
                            </p>
                            <div className="mt-6 w-12 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
                        </div>

                        <div className="glass rounded-2xl p-8 card-hover group border border-gray-700/50 hover:border-red-500/50 transition-all duration-500">
                            <div className="text-red-500 text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">📈</div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">SEO Otimizado</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Estratégias para melhorar seu posicionamento nos motores de busca.
                                Visibilidade máxima no Google.
                            </p>
                            <div className="mt-6 w-12 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 relative overflow-hidden">
                {/* Background particles */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-2 h-2 bg-red-500/30 rounded-full animate-pulse"></div>
                    <div className="absolute top-20 right-20 w-1 h-1 bg-purple-500/30 rounded-full animate-pulse animation-delay-200"></div>
                    <div className="absolute bottom-20 left-20 w-1 h-1 bg-red-500/30 rounded-full animate-pulse animation-delay-400"></div>
                    <div className="absolute bottom-10 right-10 w-2 h-2 bg-purple-500/30 rounded-full animate-pulse animation-delay-600"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-700/50">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold animated-gradient-text mb-4 sm:mb-6">
                            Pronto para Começar?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
                            Escolha seu plano agora e comece sua transformação digital.
                            Vamos criar algo incrível juntos!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">

                            <button
                                onClick={() => {
                                    const msg = "Olá! Gostaria de falar sobre um projeto.";
                                    window.open(`https://wa.me/5584998699449?text=${encodeURIComponent(msg)}`, '_blank');
                                }}
                                className="px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl hover:shadow-xl hover:shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                </svg>
                                <span>Falar no WhatsApp</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Serviços em Destaque */}
            <div className="py-12 sm:py-16 bg-gray-800/50 animate-fade-in animation-delay-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 animate-slide-up animation-delay-400">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-3 sm:mb-4">
                            Nossos Serviços em Destaque
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg px-4">
                            Conheça algumas das soluções que oferecemos para seu negócio
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Site Institucional */}
                        <div className="glass rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 p-6 sm:p-8 flex flex-col items-center text-center card-hover group hover:border-red-500/50 transition-all duration-500">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl sm:text-4xl">🏢</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">Sites Institucionais</h3>
                            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">Sites profissionais para sua empresa, com design moderno e funcionalidades avançadas. Presença digital que impressiona.</p>
                            <Link to="/services" className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold text-sm sm:text-base">
                                Ver mais detalhes
                            </Link>
                        </div>

                        {/* E-commerce */}
                        <div className="glass rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 p-8 flex flex-col items-center text-center card-hover group hover:border-red-500/50 transition-all duration-500">
                            <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-4xl">🛍️</span>
                            </div>
                            <h3 className="text-2xl font-bold gradient-text mb-4">E-commerce</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">Lojas virtuais completas com gestão de produtos, pagamentos e entregas. Venda online com máxima eficiência.</p>
                            <Link to="/services" className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold">
                                Ver mais detalhes
                            </Link>
                        </div>

                        {/* Restaurantes */}
                        <div className="glass rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 p-8 flex flex-col items-center text-center card-hover group hover:border-red-500/50 transition-all duration-500">
                            <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-4xl">🍽️</span>
                            </div>
                            <h3 className="text-2xl font-bold gradient-text mb-4">Sites para Restaurantes</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">Soluções especializadas com cardápio digital, reservas e delivery. Transforme seu restaurante digitalmente.</p>
                            <Link to="/services" className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold">
                                Ver mais detalhes
                            </Link>
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
                        <div className="glass rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 p-8 transform hover:scale-105 transition-all duration-500 animate-fade-in group hover:border-red-500/50">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold gradient-text mb-4">Suporte Contínuo</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-center">
                                Oferecemos suporte técnico especializado e manutenção preventiva para garantir o funcionamento perfeito do seu site.
                                Estamos sempre disponíveis para ajudar.
                            </p>
                            <div className="mt-6 w-16 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
                        </div>

                        <div className="glass rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 p-8 transform hover:scale-105 transition-all duration-500 animate-fade-in animation-delay-200 group hover:border-red-500/50">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold gradient-text mb-4">Satisfação Garantida</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-center">
                                Trabalhamos com transparência e compromisso, garantindo que cada projeto atenda às suas expectativas.
                                Sua satisfação é nossa prioridade.
                            </p>
                            <div className="mt-6 w-16 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
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

                {/* Testimonials */}
                <Testimonials />

                {/* Newsletter Signup */}
                <div className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <NewsletterSignup />
                    </div>
                </div>

                {/* FAQ */}
                <FAQ />

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