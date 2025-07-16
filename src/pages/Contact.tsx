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
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-500 mb-3 sm:mb-4">
                            Entre em Contato
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 px-4">
                            Estamos prontos para transformar sua ideia em realidade. Conte-nos sobre seu projeto e receba uma proposta personalizada.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-12 bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-700 animate-fade-in animation-delay-400">
                        <div className="px-4 sm:px-6 py-6 sm:py-8">
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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

                    <div className="mt-8 sm:mt-12 text-center animate-fade-in animation-delay-600">
                        <h3 className="text-lg sm:text-xl font-bold text-red-500 mb-3 sm:mb-4">
                            Garantimos Resposta em até 24 Horas
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base px-4 mb-6">
                            Nossa equipe está pronta para atender você e transformar suas ideias em realidade. Entre em contato e receba uma proposta personalizada para seu projeto.
                        </p>
                        
                        {/* Redes Sociais */}
                        <div className="mt-8 sm:mt-10">
                            <h4 className="text-base sm:text-lg font-semibold text-white mb-4">
                                Siga-nos nas Redes Sociais
                            </h4>
                            <div className="flex justify-center space-x-4 sm:space-x-6">
                                <a
                                    href="https://wa.me/5584998699449"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/webpulse.oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 