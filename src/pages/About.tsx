import React from 'react';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 mb-6">
                            Nossa História
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
                            Transformando ideias em experiências digitais excepcionais desde 2023
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission and Values */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Nossa Missão</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Nossa missão é capacitar empresas e empreendedores através de soluções digitais inovadoras e eficientes. 
                            Acreditamos que cada projeto é único e merece uma abordagem personalizada que reflita a identidade e os objetivos de nossos clientes.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Nossos Valores</h2>
                        <ul className="space-y-4 text-gray-300 text-lg">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Inovação constante em nossas soluções</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Compromisso com a excelência</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Transparência em todas as etapas</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Foco no resultado do cliente</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Technologies */}
            <div className="bg-gray-800/50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Nossas Tecnologias</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                        <TechCard title="React" description="Desenvolvimento frontend moderno e responsivo" />
                        <TechCard title="Node.js" description="Backend robusto e escalável" />
                        <TechCard title="TypeScript" description="Código seguro e manutenível" />
                        <TechCard title="Tailwind CSS" description="Design elegante e customizável" />
                        <TechCard title="Next.js" description="Performance e SEO otimizados" />
                        <TechCard title="MongoDB" description="Banco de dados flexível e escalável" />
                        <TechCard title="AWS" description="Infraestrutura confiável e segura" />
                        <TechCard title="Git" description="Controle de versão eficiente" />
                    </div>
                </div>
            </div>

        </div>
    );
};

// Componente auxiliar
const TechCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

export default About; 