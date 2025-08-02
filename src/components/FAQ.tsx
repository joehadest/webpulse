import React, { useState } from 'react';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
    category: 'geral' | 'tecnico' | 'pagamento' | 'suporte';
}

const faqData: FAQItem[] = [
    {
        id: 1,
        category: 'geral',
        question: 'Qual é a diferença entre o plano mensal e anual?',
        answer: 'O plano mensal custa R$120/mês (R$1.440/ano), enquanto o plano anual custa R$1.200/ano, oferecendo uma economia de R$240 (16,67% de desconto). Ambos incluem os mesmos recursos: site responsivo, hospedagem, domínio gratuito, suporte técnico e manutenção.'
    },
    {
        id: 2,
        category: 'tecnico',
        question: 'Quanto tempo leva para meu site ficar pronto?',
        answer: 'O prazo varia conforme a complexidade: Site básico (5-7 dias úteis), Site completo (10-15 dias úteis), E-commerce (15-30 dias úteis). Para projetos urgentes, oferecemos entrega expressa em 3-5 dias com taxa adicional de R$200.'
    },
    {
        id: 3,
        category: 'geral',
        question: 'Posso personalizar o design do meu site?',
        answer: 'Sim! Oferecemos total personalização: cores da sua marca, layout exclusivo, tipografia, imagens, funcionalidades específicas e integração com redes sociais. Criamos 2-3 opções de design para você escolher e incluímos até 3 revisões.'
    },
    {
        id: 4,
        category: 'tecnico',
        question: 'O domínio e hospedagem estão inclusos?',
        answer: 'Sim! Incluímos domínio gratuito por 1 ano (.com.br, .com, etc.), hospedagem premium, certificado SSL, backup diário e email corporativo. Após 1 ano, apenas a renovação do domínio (R$40/ano) é necessária.'
    },
    {
        id: 5,
        category: 'suporte',
        question: 'Que tipo de suporte vocês oferecem?',
        answer: 'Oferecemos suporte completo: correção de bugs, atualizações de segurança, backup automático, até 5 alterações de conteúdo por mês, suporte por email (resposta em 24h) e WhatsApp para emergências. Tudo incluído no plano!'
    },
    {
        id: 6,
        category: 'geral',
        question: 'Vocês fazem projetos personalizados?',
        answer: 'Sim! Para projetos personalizados oferecemos: design 100% exclusivo, domínio próprio, funcionalidades específicas, pagamento único (sem mensalidades), propriedade total do código e suporte incluído. Prazo de 15-30 dias úteis.'
    },
    {
        id: 7,
        category: 'pagamento',
        question: 'Posso cancelar a qualquer momento?',
        answer: 'Sim, você pode cancelar sua assinatura a qualquer momento. O cancelamento será efetivo no final do período atual de cobrança. Para planos anuais, não há reembolso proporcional.'
    },
    {
        id: 8,
        category: 'tecnico',
        question: 'Meu site será otimizado para Google (SEO)?',
        answer: 'Sim! Todos os sites incluem SEO básico: meta tags otimizadas, sitemap XML, URLs amigáveis, otimização de imagens, velocidade de carregamento, responsividade mobile e integração com Google Analytics.'
    },
    {
        id: 9,
        category: 'pagamento',
        question: 'Como funciona o pagamento?',
        answer: 'Os pagamentos são processados via InfinitePay (seguro e confiável). Aceitamos cartão de crédito, PIX e boleto. Para planos mensais, a cobrança é automática. Para anuais, um pagamento único.'
    },
    {
        id: 10,
        category: 'tecnico',
        question: 'Posso ter um blog no meu site?',
        answer: 'Sim! Todos os planos incluem blog integrado com área administrativa para você criar e gerenciar posts, categorias, tags e comentários. Perfeito para marketing de conteúdo e SEO.'
    },
    {
        id: 11,
        category: 'suporte',
        question: 'E se meu site sair do ar?',
        answer: 'Garantimos 99,5% de uptime. Em caso de problemas, nossa equipe é notificada automaticamente e corrige em até 4 horas. Temos backup diário e monitoramento 24/7.'
    },
    {
        id: 12,
        category: 'geral',
        question: 'Vocês trabalham com que tipos de empresas?',
        answer: 'Atendemos todos os segmentos: restaurantes, clínicas, escritórios, lojas, consultórios, academias, salões, empresas de serviços, ONGs, profissionais liberais e muito mais!'
    },
    {
        id: 13,
        category: 'tecnico',
        question: 'Posso integrar meu site com redes sociais?',
        answer: 'Sim! Fazemos integração completa com Instagram, Facebook, WhatsApp, LinkedIn, YouTube e outras redes sociais. Incluímos botões de compartilhamento e feed social.'
    },
    {
        id: 14,
        category: 'pagamento',
        question: 'Há taxa de setup ou instalação?',
        answer: 'Não! Não cobramos taxa de setup, instalação ou configuração inicial. O que você vê é o que você paga. Transparência total desde o início.'
    },
    {
        id: 15,
        category: 'suporte',
        question: 'Vocês oferecem treinamento para usar o site?',
        answer: 'Sim! Fornecemos tutorial completo em vídeo e texto, além de treinamento personalizado via chamada de vídeo para você aprender a gerenciar seu site.'
    }
];

const categories = {
    geral: { name: 'Geral', icon: '❓', color: 'blue' },
    tecnico: { name: 'Técnico', icon: '🔧', color: 'green' },
    pagamento: { name: 'Pagamento', icon: '💳', color: 'purple' },
    suporte: { name: 'Suporte', icon: '🆘', color: 'orange' }
};

const FAQ: React.FC = () => {
    const [openItems, setOpenItems] = useState<number[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const toggleItem = (id: number) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const filteredFAQ = selectedCategory === 'all'
        ? faqData
        : faqData.filter(item => item.category === selectedCategory);

    return (
        <section className="py-16 bg-gray-900/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Encontre respostas para as dúvidas mais comuns sobre nossos serviços
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setSelectedCategory('all')}
                        className={`px-6 py-3 rounded-full transition-all duration-300 ${selectedCategory === 'all'
                                ? 'bg-red-600 text-white shadow-lg'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                    >
                        🔍 Todas
                    </button>
                    {Object.entries(categories).map(([key, category]) => (
                        <button
                            key={key}
                            onClick={() => setSelectedCategory(key)}
                            className={`px-6 py-3 rounded-full transition-all duration-300 ${selectedCategory === key
                                    ? 'bg-red-600 text-white shadow-lg'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                }`}
                        >
                            {category.icon} {category.name}
                        </button>
                    ))}
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {filteredFAQ.map((item) => (
                        <div
                            key={item.id}
                            className="glass rounded-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleItem(item.id)}
                                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                            >
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">
                                        {(categories as any)[item.category].icon}
                                    </span>
                                    <h3 className="text-lg font-semibold text-white pr-4">
                                        {item.question}
                                    </h3>
                                </div>
                                <svg
                                    className={`w-6 h-6 text-red-500 transform transition-transform duration-300 ${openItems.includes(item.id) ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {openItems.includes(item.id) && (
                                <div className="px-6 pb-6">
                                    <div className="pl-12 pr-4">
                                        <p className="text-gray-300 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-12 text-center glass p-8 rounded-2xl border border-gray-700/50">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Ainda tem dúvidas?
                    </h3>
                    <p className="text-gray-300 mb-6">
                        Nossa equipe está pronta para esclarecer todas as suas questões
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => {
                                const msg = "Olá! Tenho algumas dúvidas sobre os serviços da WebPulse. Poderiam me ajudar?";
                                window.open(`https://wa.me/5584998699449?text=${encodeURIComponent(msg)}`, '_blank');
                            }}
                            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687" />
                            </svg>
                            Falar no WhatsApp
                        </button>
                        <a
                            href="mailto:contato@webpulseservicos.com"
                            className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Enviar Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
