import { useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import Header from '../components/Header';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const projects = [
        {
            id: 'reidossalgados',
            title: 'Rei dos Salgados',
            subtitle: 'Cardápio Digital',
            description: 'Cardápio digital completo com painel administrativo para gestão de produtos e pedidos.',
            image: '/Projetos/reidossalgados.png',
            features: [
                'Cardápio Digital: Interface moderna e intuitiva para visualização de produtos',
                'Painel Administrativo: Gestão completa de produtos, categorias e pedidos',
                'Sistema de Pedidos: Processamento e acompanhamento de pedidos em tempo real',
                'Gestão de Estoque: Controle automático de disponibilidade de produtos',
                'Categorização: Organização eficiente dos produtos por categorias',
                'Upload de Imagens: Sistema para adicionar e gerenciar imagens dos produtos',
            ],
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
            demoLink: 'https://reidossalgados.webpulseservicos.com/',
        },
        {
            id: 'flashship',
            title: 'Flashship',
            subtitle: 'E-commerce Dropshipping',
            description: 'Plataforma moderna de e-commerce com sistema completo de dropshipping.',
            image: '/Projetos/flashship.png',
            features: [
                'Catálogo de Produtos: Gestão avançada com variações e estoques',
                'Painel do Vendedor: Interface completa para gerenciamento',
                'Checkout Integrado: Processo de compra simplificado e seguro',
                'Análise de Dados: Relatórios e métricas em tempo real',
            ],
            technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
            demoLink: 'https://flashship.com',
        },
        {
            id: 'docheff',
            title: 'DoCheff',
            subtitle: 'Cardápio Digital',
            description: 'Cardápio digital interativo com sistema de pedidos e gestão de produtos.',
            image: '/Projetos/docheff.png',
            features: [
                'Cardápio Digital: Interface intuitiva para visualização de produtos',
                'Painel Administrativo: Gestão completa de produtos e pedidos',
                'Sistema de Pedidos: Processamento de pedidos em tempo real',
                'Gestão de Categorias: Organização eficiente do cardápio',
            ],
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
            demoLink: 'https://www.do-cheff-rn.com.br/',
        },
        {
            id: 'barachos',
            title: 'Barachos',
            subtitle: 'Website Empresarial',
            description: 'Site institucional com portfólio e sistema de orçamentos integrado.',
            image: '/Projetos/barachos.png',
            features: [
                'Website Responsivo: Design adaptável para todos os dispositivos',
                'Portfólio Interativo: Galeria de projetos e realizações',
                'Sistema de Orçamentos: Formulário personalizado para cotações',
                'Área Administrativa: Gestão de conteúdo e leads',
            ],
            technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
            demoLink: 'https://barachosolucoes.com/',
        },
        {
            id: 'cripto',
            title: 'Cripto Dashboard',
            subtitle: 'Análise de Criptomoedas',
            description: 'Dashboard em tempo real para análise de mercado de criptomoedas.',
            image: '/Projetos/Cripto.png',
            features: [
                'Cotações em Tempo Real: Dados atualizados constantemente',
                'Gráficos Interativos: Análise técnica avançada',
                'Portfólio Virtual: Acompanhamento de investimentos',
                'Alertas Personalizados: Notificações de preço',
            ],
            technologies: ['React', 'D3.js', 'WebSocket', 'Express'],
            demoLink: 'https://cripto-dashboard.com',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <Header />
            {/* Header */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 mb-6">
                            Nosso Portfólio
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
                            Conheça alguns dos projetos incríveis que desenvolvemos
                        </p>
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            <div className="relative h-48 sm:h-56">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                <p className="text-red-500 text-sm mb-3">{project.subtitle}</p>
                                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-white mb-2">Principais Recursos:</h4>
                                        <ul className="text-sm text-gray-400 space-y-1">
                                            {project.features.slice(0, 3).map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="text-red-500 mr-2">•</span>
                                                    <span className="line-clamp-1">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-white mb-2">Tecnologias:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 text-xs font-medium text-red-500 bg-red-500/10 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-700 rounded-md hover:from-red-600 hover:to-red-800 transition-colors duration-300"
                                    >
                                        Ver Projeto
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal para detalhes do projeto */}
            {selectedProject && (
                <ProjectModal
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    {...projects.find(p => p.id === selectedProject)!}
                />
            )}
        </div>
    );
};

export default Portfolio; 