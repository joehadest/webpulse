import React from 'react';

const Services: React.FC = () => {
    const services = [
        {
            title: 'Desenvolvimento Web',
            description: 'Criamos sites modernos e responsivos usando as mais recentes tecnologias, com foco em segurança e performance.',
            features: [
                'Design exclusivo e profissional',
                'Responsividade garantida',
                'Otimização SEO avançada',
                'Integração com sistemas seguros'
            ]
        },
        {
            title: 'E-commerce',
            description: 'Desenvolvemos lojas virtuais completas e seguras, com foco na experiência do cliente e conversão de vendas.',
            features: [
                'Catálogo de produtos otimizado',
                'Sistema de pagamento seguro',
                'Gestão de estoque integrada',
                'Painel administrativo intuitivo'
            ]
        },
        {
            title: 'Manutenção',
            description: 'Oferecemos suporte contínuo e manutenção preventiva para manter seu site sempre atualizado, seguro e performático.',
            features: [
                'Atualizações regulares e seguras',
                'Backup automático diário',
                'Monitoramento de segurança 24/7',
                'Suporte técnico especializado'
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 overflow-x-hidden py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-fade-in">
                    <h2 className="text-3xl font-extrabold text-red-500 sm:text-4xl">
                        Nossos Serviços
                    </h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        Soluções completas e profissionais para sua presença digital, com foco em resultados e satisfação
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 transform hover:scale-105 transition-all duration-300 animate-fade-in"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="px-6 py-8">
                                <h3 className="text-2xl font-bold text-red-500">{service.title}</h3>
                                <p className="mt-4 text-gray-300">{service.description}</p>
                                <ul className="mt-6 space-y-4">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                                            <span className="flex-shrink-0 h-6 w-6 text-red-500">✓</span>
                                            <span className="ml-3 text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="px-6 py-4 bg-gray-900">
                                <a
                                    href="/contact"
                                    className="block text-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-all duration-300 border border-red-600"
                                >
                                    Solicite uma proposta personalizada
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center animate-fade-in animation-delay-400">
                    <h3 className="text-2xl font-bold text-red-500 mb-4 animate-slide-up">
                        Compromisso com a Qualidade
                    </h3>
                    <p className="text-gray-300 max-w-3xl mx-auto animate-slide-up animation-delay-200">
                        Cada projeto é tratado com dedicação exclusiva, garantindo soluções personalizadas que atendam às suas necessidades específicas. Nossa equipe está pronta para transformar suas ideias em realidade.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services; 