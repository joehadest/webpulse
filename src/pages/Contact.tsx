import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o formulário
        console.log('Form data:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center animate-fade-in">
                        <h2 className="text-3xl font-extrabold text-red-600 sm:text-4xl animate-slide-up">
                            Entre em Contato
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 animate-slide-up animation-delay-200">
                            Estamos prontos para transformar sua ideia em realidade. Conte-nos sobre seu projeto e receba uma proposta personalizada.
                        </p>
                    </div>

                    <div className="mt-12 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition-all duration-300 animate-fade-in animation-delay-400">
                        <div className="px-6 py-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="transform hover:scale-[1.02] transition-transform duration-300">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Nome Completo
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                                        placeholder="Digite seu nome completo"
                                    />
                                </div>

                                <div className="transform hover:scale-[1.02] transition-transform duration-300">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email Profissional
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                                        placeholder="seu@email.com"
                                    />
                                </div>

                                <div className="transform hover:scale-[1.02] transition-transform duration-300">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Telefone para Contato
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>

                                <div className="transform hover:scale-[1.02] transition-transform duration-300">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Descreva seu Projeto
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                                        placeholder="Conte-nos mais sobre seu projeto e objetivos"
                                    />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 transform hover:scale-105"
                                    >
                                        Enviar Mensagem
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="mt-12 text-center animate-fade-in animation-delay-600">
                        <h3 className="text-xl font-bold text-red-600 mb-4 animate-slide-up">
                            Garantimos Resposta em até 24 Horas
                        </h3>
                        <p className="text-gray-600 animate-slide-up animation-delay-200">
                            Nossa equipe está pronta para atender você e transformar suas ideias em realidade. Entre em contato e receba uma proposta personalizada para seu projeto.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 