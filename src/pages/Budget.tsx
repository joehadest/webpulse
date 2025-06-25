import { useState } from 'react';
import { useLocation } from "react-router-dom";
import PricingPlans from '../components/PricingPlans';

const Budget = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        description: '',
    });
    const [loading, setLoading] = useState(false);
    const [acceptedTerm, setAcceptedTerm] = useState(false);
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [cpfCnpjError, setCpfCnpjError] = useState('');
    const location = useLocation();

    function validateCpfCnpj(value: string) {
        const v = value.replace(/\D/g, '');
        if (v.length === 11) return true;
        if (v.length === 14) return true;
        return false;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateCpfCnpj(cpfCnpj)) {
            setCpfCnpjError('Digite um CPF ou CNPJ válido.');
            setLoading(false);
            return;
        }
        setLoading(true);
        const msg =
            `Prezados,\n\n` +
            `Gostaria de contratar o Plano WebPulse.\n\n` +
            `Dados do Cliente:\n` +
            `Nome/Razão Social: ${formData.name}\n` +
            `Email Corporativo: ${formData.email}\n` +
            `Telefone para Contato: ${formData.phone}\n` +
            `CPF/CNPJ: ${cpfCnpj}\n\n` +
            `Descrição do Projeto:\n${formData.description}\n\n` +
            `Observação: Estou ciente dos termos e condições do Plano WebPulse.\n\n` +
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

    const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptedTerm(e.target.checked);
    };

    const handleCpfCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCpfCnpj(e.target.value);
        setCpfCnpjError('');
    };

    return (
        <section
            key={location.pathname}
            className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8 animate-fade-in animation-delay-200"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4">
                        Nossos Planos
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Escolha o plano ideal para o seu negócio e comece sua transformação digital hoje mesmo
                    </p>
                </div>

                {/* Pricing Plans Component */}
                <PricingPlans />

                {/* Contact Form */}
                <div className="mt-16 max-w-2xl mx-auto">
                    <div className="bg-gray-800 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Entre em Contato</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                        Nome/Razão Social
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                        Email Corporativo
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                                        Telefone para Contato
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="cpfCnpj" className="block text-sm font-medium text-gray-300">
                                        CPF/CNPJ
                                    </label>
                                    <input
                                        type="text"
                                        name="cpfCnpj"
                                        id="cpfCnpj"
                                        required
                                        value={cpfCnpj}
                                        onChange={handleCpfCnpjChange}
                                        className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                                    />
                                    {cpfCnpjError && (
                                        <p className="mt-1 text-sm text-red-500">{cpfCnpjError}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-300">
                                        Descrição do Projeto
                                    </label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        rows={4}
                                        required
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                                        placeholder="Descreva seu projeto ou necessidade..."
                                    />
                                </div>
                            </div>

                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="acceptedTerm"
                                    checked={acceptedTerm}
                                    onChange={handleTermChange}
                                    className="mt-1 mr-2 rounded border-gray-400 focus:ring-red-500 focus:border-red-500"
                                    required
                                />
                                <label htmlFor="acceptedTerm" className="text-sm text-gray-300 select-none">
                                    Estou ciente dos termos e condições do Plano WebPulse.
                                </label>
                            </div>

                            <div className="flex justify-center pt-4">
                                <button
                                    type="submit"
                                    className="w-full py-4 px-6 text-lg font-medium text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-60"
                                    disabled={loading || !acceptedTerm}
                                >
                                    {loading ? 'Enviando...' : 'Enviar Solicitação'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Budget; 