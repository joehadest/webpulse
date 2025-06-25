import { useState } from 'react';
import ProjectModal from '../components/ProjectModal';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const projects = [
        {
            id: 'flashship',
            title: 'Shippin - Loja de Dropshipping',
            description: 'Loja de e-commerce com modelo de dropshipping, desenvolvida com React.',
            image: '/Projetos/flashship.png',
            features: [
                'Design Responsivo: Interface adaptável para dispositivos móveis, tablets e desktops',
                'Carrinho de Compras: Gestão completa de produtos com persistência local',
                'Notificações: Feedback visual ao adicionar/remover produtos',
                'Checkout: Processo completo de finalização de compra',
            ],
            responsivity: [
                'Layout Fluido: Uso de unidades relativas (%, rem) e CSS Grid/Flexbox',
                'Media Queries: Adaptações específicas para diferentes breakpoints',
                'Imagens Responsivas: Otimizadas para carregamento rápido em conexões móveis',
                'Touch-friendly: Elementos interativos dimensionados para facilitar o toque em dispositivos móveis',
            ],
            structure: [
                '/src - Código fonte do React',
                '/public - Arquivos estáticos',
                '/src/components - Componentes reutilizáveis',
                '/src/pages - Páginas principais da aplicação',
                '/src/context - Gerenciamento de estado global',
            ],
            technologies: [
                'React.js',
                'React Router',
                'Styled Components',
                'React Toastify',
            ],
        },
        // Adicione mais projetos aqui
    ];

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4">
                        Nosso Portfólio
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Conheça alguns dos nossos projetos mais recentes
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => setSelectedProject(project.id)}
                        >
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    {...projects.find((p) => p.id === selectedProject)!}
                />
            )}
        </section>
    );
};

export default Portfolio; 