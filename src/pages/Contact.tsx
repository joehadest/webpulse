import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const msg =
            `Prezados,\n\n` +
            `Gostaria de estabelecer contato para discutir uma possível parceria.\n\n` +
            `Dados do Cliente:\n` +
            `Nome/Razão Social: ${formData.name}\n` +
            `Email Corporativo: ${formData.email}\n` +
            `Telefone para Contato: ${formData.phone}\n\n` +
            `Mensagem:\n${formData.message}\n\n` +
            `Agradeço a atenção e aguardo o retorno.\n` +
            `Atenciosamente,\n` +
            `${formData.name}`;
        const url = `https://wa.me/558498699449?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        setLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gray-900 overflow-x-hidden py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center animate-fade-in">
                        <h2 className="text-3xl font-extrabold text-red-500 sm:text-4xl">
                            Entre em Contato
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            Estamos prontos para transformar sua ideia em realidade. Conte-nos sobre seu projeto e receba uma proposta personalizada.
                        </p>
                    </div>

                    <div className="mt-12 bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-700 animate-fade-in animation-delay-400">
                        <div className="px-6 py-8">
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                                        Nome Completo
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm py-2 px-3 bg-gray-900 text-gray-100 focus:outline-none focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                                        placeholder="Digite seu nome completo"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                                        Email Profissional
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm py-2 px-3 bg-gray-900 text-gray-100 focus:outline-none focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                                        placeholder="seu@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-200">
                                        Telefone para Contato
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm py-2 px-3 bg-gray-900 text-gray-100 focus:outline-none focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                                        Descreva seu Projeto
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm py-2 px-3 bg-gray-900 text-gray-100 focus:outline-none focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                                        placeholder="Conte-nos mais sobre seu projeto e objetivos"
                                    />
                                </div>

                                {success && (
                                    <div className="text-green-400 text-center font-medium">Mensagem enviada com sucesso!</div>
                                )}
                                {error && (
                                    <div className="text-red-400 text-center font-medium">{error}</div>
                                )}

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 disabled:opacity-60"
                                        disabled={loading}
                                    >
                                        {loading ? 'Enviando...' : 'Enviar Mensagem'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="mt-12 text-center animate-fade-in animation-delay-600">
                        <h3 className="text-xl font-bold text-red-500 mb-4">
                            Garantimos Resposta em até 24 Horas
                        </h3>
                        <p className="text-gray-300">
                            Nossa equipe está pronta para atender você e transformar suas ideias em realidade. Entre em contato e receba uma proposta personalizada para seu projeto.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 