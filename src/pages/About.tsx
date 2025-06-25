import React from 'react';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-white mb-8">Sobre Nós</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-gray-300 mb-6">
                        Somos uma empresa especializada em desenvolvimento web e soluções digitais.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About; 