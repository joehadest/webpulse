import { useState } from 'react';

const Budget = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        category: '',
        service: '',
        description: '',
    });
    const [loading, setLoading] = useState(false);
    const [acceptedTerm, setAcceptedTerm] = useState(false);
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [cpfCnpjError, setCpfCnpjError] = useState('');

    const categories = {
        institutional: {
            name: 'Site Institucional',
            description: 'Sites profissionais para empresas, apresentando sua marca, serviços e história.',
            priceRange: 'R$ 3.500 - R$ 25.000',
            icon: '🏢',
            services: [
                {
                    name: 'Landing Page',
                    price: 'R$ 3.500 - R$ 8.000',
                    description: 'Página única focada em conversão, ideal para campanhas específicas, lançamentos ou serviços principais. Inclui formulário de contato, seções otimizadas e design responsivo.'
                },
                {
                    name: 'Site Institucional Completo',
                    price: 'R$ 8.000 - R$ 25.000',
                    description: 'Site completo com múltiplas páginas, incluindo: página inicial, sobre, serviços, portfólio, blog e contato. Ideal para empresas que precisam de uma presença digital robusta.'
                },
                {
                    name: 'Site Corporativo',
                    price: 'R$ 12.000 - R$ 25.000',
                    description: 'Solução completa para grandes empresas, com área administrativa, gestão de conteúdo, múltiplos idiomas, integração com CRM e sistemas internos.'
                },
                {
                    name: 'Site One Page',
                    price: 'R$ 5.000 - R$ 10.000',
                    description: 'Site em página única com rolagem suave, ideal para pequenas empresas ou profissionais liberais. Inclui todas as seções essenciais em uma única página.'
                }
            ]
        },
        restaurant: {
            name: 'Site para Restaurantes',
            description: 'Sites especializados para restaurantes, com cardápio digital, reservas e delivery.',
            priceRange: 'R$ 2.500 - R$ 10.000',
            icon: '🍽️',
            services: [
                {
                    name: 'Cardápio Digital',
                    price: 'R$ 2.500 - R$ 5.000',
                    description: 'Sistema de cardápio digital com categorias, fotos dos pratos, preços e descrições. Inclui painel administrativo para atualizações rápidas.'
                },
                {
                    name: 'Sistema de Reservas',
                    price: 'R$ 3.500 - R$ 7.000',
                    description: 'Sistema completo de reservas online com confirmação por email/SMS, gestão de mesas, horários e capacidade do restaurante.'
                },
                {
                    name: 'Integração com Delivery',
                    price: 'R$ 3.000 - R$ 6.000',
                    description: 'Integração com principais apps de delivery (iFood, Uber Eats, etc.) e sistema próprio de pedidos online com gestão de entregas.'
                },
                {
                    name: 'Site Completo para Restaurante',
                    price: 'R$ 5.000 - R$ 10.000',
                    description: 'Solução completa incluindo site institucional, cardápio digital, sistema de reservas, integração com delivery e área administrativa.'
                }
            ]
        },
        ecommerce: {
            name: 'E-commerce',
            description: 'Lojas virtuais completas com gestão de produtos, pagamentos e entregas.',
            priceRange: 'R$ 5.000 - R$ 50.000',
            icon: '🛍️',
            services: [
                {
                    name: 'Loja Virtual Básica',
                    price: 'R$ 5.000 - R$ 15.000',
                    description: 'Loja virtual com catálogo de produtos, carrinho de compras, checkout e integração com principais gateways de pagamento.'
                },
                {
                    name: 'E-commerce Completo',
                    price: 'R$ 15.000 - R$ 50.000',
                    description: 'Solução completa com gestão de estoque, múltiplos vendedores, sistema de afiliados, relatórios avançados e integração com marketplaces.'
                },
                {
                    name: 'Marketplace',
                    price: 'R$ 25.000 - R$ 50.000',
                    description: 'Plataforma completa de marketplace com gestão de múltiplos vendedores, sistema de comissões, avaliações e relatórios detalhados.'
                },
                {
                    name: 'Integração com Marketplaces',
                    price: 'R$ 8.000 - R$ 20.000',
                    description: 'Integração com principais marketplaces (Mercado Livre, Amazon, etc.) incluindo sincronização de produtos, estoque e pedidos.'
                }
            ]
        },
        blog: {
            name: 'Blogs e Portais',
            description: 'Plataformas de conteúdo com gestão de posts, categorias e comentários.',
            priceRange: 'R$ 3.000 - R$ 20.000',
            icon: '📝',
            services: [
                {
                    name: 'Blog Pessoal',
                    price: 'R$ 3.000 - R$ 8.000',
                    description: 'Blog pessoal com sistema de posts, categorias, comentários e integração com redes sociais. Ideal para profissionais e influenciadores.'
                },
                {
                    name: 'Portal de Notícias',
                    price: 'R$ 10.000 - R$ 20.000',
                    description: 'Portal completo com sistema de assinaturas, área de membros, newsletter, gestão de redatores e monetização por anúncios.'
                },
                {
                    name: 'Blog Corporativo',
                    price: 'R$ 5.000 - R$ 15.000',
                    description: 'Blog integrado ao site institucional com gestão de conteúdo, SEO otimizado e ferramentas de análise de engajamento.'
                },
                {
                    name: 'Plataforma de Conteúdo',
                    price: 'R$ 8.000 - R$ 20.000',
                    description: 'Plataforma completa para criação e distribuição de conteúdo, com sistema de assinaturas, cursos online e área de membros.'
                }
            ]
        }
    };

    function validateCpfCnpj(value: string) {
        // Remove tudo que não for número
        const v = value.replace(/\D/g, '');
        if (v.length === 11) return true; // CPF simples
        if (v.length === 14) return true; // CNPJ simples
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
            `Olá! Gostaria de solicitar um orçamento.\n` +
            `Nome: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Telefone: ${formData.phone}\n` +
            `CPF/CNPJ: ${cpfCnpj}\n` +
            `Categoria: ${formData.category}\n` +
            `Serviço: ${formData.service}\n` +
            `Descrição: ${formData.description}`;
        const url = `https://wa.me/558498699449?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        setLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
            ...(name === 'category' ? { service: '' } : {})
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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4">
                        Solicite um Orçamento
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Transforme sua ideia em realidade com soluções digitais personalizadas
                    </p>
                    <div className="mt-6 inline-block px-4 py-2 bg-gray-800 rounded-full border border-gray-700">
                        <p className="text-sm text-gray-400">
                            Valores estimados: <span className="text-red-500 font-medium">R$ 2.500 - R$ 50.000</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Categorias */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-300 mb-6">Escolha seu Projeto</h2>
                        {Object.entries(categories).map(([key, category]) => (
                            <div
                                key={key}
                                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${formData.category === key
                                    ? 'bg-red-600 border-red-500'
                                    : 'bg-gray-800 border-gray-700 hover:border-red-500'
                                    } border-2`}
                                onClick={() => handleChange({ target: { name: 'category', value: key } } as any)}
                            >
                                <div className="flex items-center space-x-4">
                                    <span className="text-3xl">{category.icon}</span>
                                    <div>
                                        <h3 className={`text-lg font-semibold ${formData.category === key ? 'text-white' : 'text-gray-300'
                                            }`}>
                                            {category.name}
                                        </h3>
                                        <p className={`text-sm ${formData.category === key ? 'text-gray-200' : 'text-gray-400'
                                            }`}>
                                            {category.priceRange}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Formulário */}
                    <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                        Nome Completo
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
                                        Email
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
                                        Telefone
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
                                        CPF ou CNPJ
                                    </label>
                                    <input
                                        type="text"
                                        name="cpfCnpj"
                                        id="cpfCnpj"
                                        required
                                        value={cpfCnpj}
                                        onChange={handleCpfCnpjChange}
                                        className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                                        placeholder="Digite seu CPF ou CNPJ"
                                    />
                                    {cpfCnpjError && (
                                        <span className="text-red-400 text-xs">{cpfCnpjError}</span>
                                    )}
                                </div>

                                {formData.category && (
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-300">
                                            Serviço Específico
                                        </label>
                                        <select
                                            name="service"
                                            id="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                                        >
                                            <option value="">Selecione um serviço</option>
                                            {categories[formData.category as keyof typeof categories].services.map((service, index) => (
                                                <option key={index} value={service.name}>
                                                    {service.name} - {service.price}
                                                </option>
                                            ))}
                                        </select>
                                        {formData.service && (
                                            <div className="mt-3 p-4 bg-gray-700 rounded-lg border border-gray-600">
                                                <p className="text-sm text-gray-300">
                                                    {categories[formData.category as keyof typeof categories].services.find(
                                                        s => s.name === formData.service
                                                    )?.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}

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
                                    Estou ciente de que manutenções a longo prazo não estão inclusas no valor do orçamento.
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
        </div>
    );
};

export default Budget; 