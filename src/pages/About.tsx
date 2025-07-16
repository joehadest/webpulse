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

            {/* Redes Sociais */}
            <div className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Conecte-se Conosco</h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Siga-nos nas redes sociais para ficar por dentro das novidades e projetos
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://wa.me/5584998699449"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/webpulse.oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
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