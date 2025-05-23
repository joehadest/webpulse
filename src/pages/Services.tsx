import { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [selectedService, setSelectedService] = useState<string | null>(null);

    const services = {
        institutional: {
            name: 'Site Institucional',
            description: 'Sites profissionais para empresas, apresentando sua marca, serviços e história.',
            priceRange: 'R$ 3.500 - R$ 25.000',
            icon: '🏢',
            features: [
                'Design moderno e responsivo',
                'Otimização para SEO',
                'Integração com redes sociais',
                'Painel administrativo',
                'Formulários de contato',
                'Blog integrado'
            ],
            services: [
                {
                    name: 'Landing Page',
                    price: 'R$ 3.500 - R$ 8.000',
                    description: 'Página única focada em conversão, ideal para campanhas específicas, lançamentos ou serviços principais. Inclui formulário de contato, seções otimizadas e design responsivo.'
                },
                {
                    name: 'Site Institucional Completo',
                    price: 'R$ 8.000 - R$ 25.000',
                    description: 'Site completo com múltiplas páginas, incluindo: página inicial, sobre, serviços, portfólio, blog e contato. Ideal para empresas que precisam de uma presença digital robusta.'
                },
                {
                    name: 'Site Corporativo',
                    price: 'R$ 12.000 - R$ 25.000',
                    description: 'Solução completa para grandes empresas, com área administrativa, gestão de conteúdo, múltiplos idiomas, integração com CRM e sistemas internos.'
                },
                {
                    name: 'Site One Page',
                    price: 'R$ 5.000 - R$ 10.000',
                    description: 'Site em página única com rolagem suave, ideal para pequenas empresas ou profissionais liberais. Inclui todas as seções essenciais em uma única página.'
                }
            ]
        },
        restaurant: {
            name: 'Site para Restaurantes',
            description: 'Sites especializados para restaurantes, com cardápio digital, reservas e delivery.',
            priceRange: 'R$ 2.500 - R$ 10.000',
            icon: '🍽️',
            features: [
                'Cardápio digital interativo',
                'Sistema de reservas online',
                'Integração com delivery',
                'Gestão de mesas',
                'Área administrativa',
                'Relatórios de vendas'
            ],
            services: [
                {
                    name: 'Cardápio Digital',
                    price: 'R$ 2.500 - R$ 5.000',
                    description: 'Sistema de cardápio digital com categorias, fotos dos pratos, preços e descrições. Inclui painel administrativo para atualizações rápidas.'
                },
                {
                    name: 'Sistema de Reservas',
                    price: 'R$ 3.500 - R$ 7.000',
                    description: 'Sistema completo de reservas online com confirmação por email/SMS, gestão de mesas, horários e capacidade do restaurante.'
                },
                {
                    name: 'Integração com Delivery',
                    price: 'R$ 3.000 - R$ 6.000',
                    description: 'Integração com principais apps de delivery (iFood, Uber Eats, etc.) e sistema próprio de pedidos online com gestão de entregas.'
                },
                {
                    name: 'Site Completo para Restaurante',
                    price: 'R$ 5.000 - R$ 10.000',
                    description: 'Solução completa incluindo site institucional, cardápio digital, sistema de reservas, integração com delivery e área administrativa.'
                }
            ]
        },
        ecommerce: {
            name: 'E-commerce',
            description: 'Lojas virtuais completas com gestão de produtos, pagamentos e entregas.',
            priceRange: 'R$ 5.000 - R$ 50.000',
            icon: '🛍️',
            features: [
                'Catálogo de produtos',
                'Carrinho de compras',
                'Checkout seguro',
                'Gestão de estoque',
                'Integração com marketplaces',
                'Relatórios avançados'
            ],
            services: [
                {
                    name: 'Loja Virtual Básica',
                    price: 'R$ 5.000 - R$ 15.000',
                    description: 'Loja virtual com catálogo de produtos, carrinho de compras, checkout e integração com principais gateways de pagamento.'
                },
                {
                    name: 'E-commerce Completo',
                    price: 'R$ 15.000 - R$ 50.000',
                    description: 'Solução completa com gestão de estoque, múltiplos vendedores, sistema de afiliados, relatórios avançados e integração com marketplaces.'
                },
                {
                    name: 'Marketplace',
                    price: 'R$ 25.000 - R$ 50.000',
                    description: 'Plataforma completa de marketplace com gestão de múltiplos vendedores, sistema de comissões, avaliações e relatórios detalhados.'
                },
                {
                    name: 'Integração com Marketplaces',
                    price: 'R$ 8.000 - R$ 20.000',
                    description: 'Integração com principais marketplaces (Mercado Livre, Amazon, etc.) incluindo sincronização de produtos, estoque e pedidos.'
                }
            ]
        },
        blog: {
            name: 'Blogs e Portais',
            description: 'Plataformas de conteúdo com gestão de posts, categorias e comentários.',
            priceRange: 'R$ 3.000 - R$ 20.000',
            icon: '📝',
            features: [
                'Sistema de posts',
                'Gestão de categorias',
                'Comentários',
                'Newsletter',
                'Área de membros',
                'Monetização'
            ],
            services: [
                {
                    name: 'Blog Pessoal',
                    price: 'R$ 3.000 - R$ 8.000',
                    description: 'Blog pessoal com sistema de posts, categorias, comentários e integração com redes sociais. Ideal para profissionais e influenciadores.'
                },
                {
                    name: 'Portal de Notícias',
                    price: 'R$ 10.000 - R$ 20.000',
                    description: 'Portal completo com sistema de assinaturas, área de membros, newsletter, gestão de redatores e monetização por anúncios.'
                },
                {
                    name: 'Blog Corporativo',
                    price: 'R$ 5.000 - R$ 15.000',
                    description: 'Blog integrado ao site institucional com gestão de conteúdo, SEO otimizado e ferramentas de análise de engajamento.'
                },
                {
                    name: 'Plataforma de Conteúdo',
                    price: 'R$ 8.000 - R$ 20.000',
                    description: 'Plataforma completa para criação e distribuição de conteúdo, com sistema de assinaturas, cursos online e área de membros.'
                }
            ]
        }
    };

    return (
        <div className="min-h-screen bg-gray-700 py-12 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-fade-in mt-0 -translate-y-4 transform">
  <h2 className="text-3xl font-extrabold text-red-600 sm:text-4xl animate-slide-up">
    Nossos Serviços
  </h2>
  <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
    Soluções digitais personalizadas para impulsionar seu negócio
  </p>
</div> 


                <div className="grid grid-cols-1 gap-8 sm:gap-12">
                    {Object.entries(services).map(([key, service]) => (
                        <div
                            key={key}
                            className="bg-gray-800 rounded-xl p-4 sm:p-8 border-2 border-gray-700 hover:border-red-500 transition-all duration-300 flex flex-col"
                        >
                            <div className="flex items-center mb-4 sm:mb-6">
                                <span className="text-3xl sm:text-4xl mr-3 sm:mr-4">{service.icon}</span>
                                <div>
                                    <h3 className="text-lg sm:text-2xl font-bold text-gray-300">{service.name}</h3>
                                    <p className="text-gray-400 text-xs sm:text-base">{service.description}</p>
                                    <p className="text-red-500 font-medium mt-1 sm:mt-2 text-xs sm:text-base">{service.priceRange}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 flex-1">
                                <div className="bg-gray-700 rounded-lg p-3 sm:p-6 mb-4 md:mb-0">
                                    <h4 className="text-base sm:text-lg font-semibold text-gray-300 mb-2 sm:mb-4">Recursos Incluídos:</h4>
                                    <ul className="space-y-2 sm:space-y-3">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-gray-300 text-xs sm:text-base">
                                                <span className="text-red-500 mr-2">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-3 sm:space-y-4">
                                    <h4 className="text-base sm:text-lg font-semibold text-gray-300 mb-2 sm:mb-4">Serviços Disponíveis:</h4>
                                    {service.services.map((item, index) => (
                                        <div key={index} className="bg-gray-700 rounded-lg p-3 sm:p-4 hover:bg-gray-600 transition-colors duration-300">
                                            <h5 className="font-medium text-gray-300 text-xs sm:text-base">{item.name}</h5>
                                            <p className="text-red-500 text-xs sm:text-sm mb-1 sm:mb-2">{item.price}</p>
                                            <p className="text-xs sm:text-sm text-gray-400">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-end mt-6">
                                <Link
                                    to="/budget"
                                    className="px-5 py-2 text-xs sm:text-base font-medium text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300"
                                >
                                    Solicitar Orçamento
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services; 