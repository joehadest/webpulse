import { useState, useEffect, useRef } from 'react';

interface Message {
    id: number;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

const WhatsAppChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [showOptions, setShowOptions] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const predefinedMessages = [
        {
            id: 1,
            text: "Olá! Quero contratar o plano WebPulse. Como faço?",
            icon: "🚀",
            response: "Perfeito! Para contratar o Plano WebPulse é muito simples:\n\n1️⃣ Acesse nossa página de serviços\n2️⃣ Escolha entre:\n   • Plano WebPulse (Restaurantes/Sites): R$120/mês\n   • Plano E-commerce: R$280/mês\n   • Planos Anuais com 16,67% de desconto\n3️⃣ Clique em 'Contratar Agora'\n4️⃣ Será direcionado para o pagamento seguro via InfinitePay\n5️⃣ Após o pagamento, entraremos em contato em até 24h para iniciar seu projeto!\n\nQuer que eu te ajude com mais alguma coisa? 😊"
        },
        {
            id: 2,
            text: "Qual a diferença entre o plano mensal (R$120) e anual (R$1200)?",
            icon: "💰",
            response: "Ótima pergunta! Aqui estão as diferenças:\n\n📅 **Plano Mensal (R$120/mês):**\n• Pagamento mensal recorrente\n• Total anual: R$1.440\n• Flexibilidade para cancelar a qualquer momento\n• Ideal para testar o serviço\n\n📅 **Plano Anual (R$1.200/ano):**\n• Pagamento único anual\n• Economia de R$240 por ano (16,67% de desconto)\n• Melhor custo-benefício\n• Compromisso anual\n\n✅ **Ambos incluem:**\n• Site institucional responsivo\n• Páginas ilimitadas\n• Blog integrado\n• SEO básico\n• Formulário de contato\n• Integração com redes sociais\n• Área administrativa\n• Suporte por email\n• Hospedagem inclusa\n• Domínio gratuito por 1 ano\n\n💡 **Ideal para:** Restaurantes e sites institucionais/portfólio\n\nQual plano te interessa mais? 🤔"
        },
        {
            id: 3,
            text: "Preciso de um site urgente. Qual o prazo de entrega?",
            icon: "⏰",
            response: "Entendo sua urgência! 🚀\n\n⏱️ **Nossos prazos padrão:**\n• Site básico: 5-7 dias úteis\n• Site completo: 10-15 dias úteis\n• Blog integrado: +2-3 dias\n\n⚡ **Para urgências:**\nPodemos priorizar seu projeto e entregar em até 3-5 dias úteis (com taxa de urgência de R$200).\n\n🎯 **Processo:**\n1. Aprovação do design (1-2 dias)\n2. Desenvolvimento do site (3-10 dias)\n3. Revisões e ajustes (1-2 dias)\n4. Lançamento e configuração (1 dia)\n\nQuer que eu te ajude a escolher a melhor opção para seu caso? 😊"
        },
        {
            id: 4,
            text: "Posso personalizar o design do meu site?",
            icon: "🎨",
            response: "Claro! 🎨 Personalização é nosso forte!\n\n✨ **O que você pode personalizar:**\n• Cores e identidade visual da sua marca\n• Layout e estrutura das páginas\n• Tipografia e fontes\n• Imagens, ícones e elementos visuais\n• Funcionalidades específicas\n• Integração com suas redes sociais\n\n🎯 **Processo de design:**\n1. Você nos envia referências ou ideias\n2. Criamos 2-3 opções de design diferentes\n3. Você escolhe e aprovamos juntos\n4. Desenvolvemos seu site personalizado\n5. Revisões e ajustes até ficar perfeito\n\n📱 **Incluído no plano:**\n• Design responsivo (mobile, tablet, desktop)\n• Até 3 revisões de design\n• Integração com sua identidade visual\n\nTem alguma ideia específica em mente? 😊"
        },
        {
            id: 5,
            text: "O domínio e hospedagem estão incluídos no plano?",
            icon: "🌐",
            response: "Sim! 🌐 Tudo incluído no plano!\n\n✅ **O que está incluído:**\n• Domínio gratuito por 1 ano (.com.br, .com, etc.)\n• Hospedagem premium inclusa\n• Certificado SSL (site seguro com https://)\n• Backup automático diário\n• Suporte técnico por email\n• Email corporativo (seu@seudominio.com)\n\n💡 **Após 1 ano:**\n• Domínio: R$40/ano (renovação)\n• Hospedagem: Já incluída no plano\n• SSL: Gratuito para sempre\n\n🔒 **Segurança:**\n• Site sempre online (99,9% uptime)\n• Proteção contra ataques\n• Backup em nuvem\n\nNão há taxas ocultas! Tudo transparente desde o início. 😊\n\nQuer saber mais sobre algum serviço específico?"
        },
        {
            id: 6,
            text: "Vocês fazem manutenção e atualizações do site?",
            icon: "🔧",
            response: "Sim! 🔧 Manutenção completa incluída!\n\n🛠️ **O que incluímos:**\n• Atualizações de segurança automáticas\n• Backup diário automático\n• Monitoramento 24/7 do site\n• Correções de bugs e problemas\n• Suporte técnico por email\n• Otimização de performance\n\n📱 **Atualizações de conteúdo:**\n• Até 5 alterações por mês\n• Adição de novas páginas\n• Atualização de informações\n• Otimização de SEO\n• Integração com novas redes sociais\n\n⚡ **Suporte:**\n• Resposta em até 24h\n• Acesso à área administrativa\n• Tutorial de uso do painel\n• Suporte por WhatsApp (emergências)\n\nTudo isso já está incluído no seu plano! 😊\n\nPrecisa de algum ajuste específico?"
        },
        {
            id: 7,
            text: "Preciso de um e-commerce. Vocês fazem?",
            icon: "🛒",
            response: "Sim! 🛒 E-commerce é nossa especialidade!\n\n🛍️ **Funcionalidades incluídas:**\n• Catálogo de produtos ilimitado\n• Carrinho de compras\n• Pagamento online (PIX, cartão, boleto)\n• Gestão de pedidos\n• Relatórios de vendas\n• Integração com WhatsApp\n• Controle de estoque\n• Cupons de desconto\n\n💰 **Investimento:**\n• E-commerce completo: R$280/mês\n• Plano anual: R$2.800/ano (16,67% de desconto)\n• Taxa de setup: R$500 (única vez)\n\n⏱️ **Prazo:** 15-20 dias úteis\n\n🎯 **Incluído:**\n• Design personalizado\n• Integração com gateways de pagamento\n• Painel administrativo\n• Suporte técnico\n• Treinamento de uso\n\nQuer que eu te envie um orçamento detalhado? 😊"
        },
        {
            id: 8,
            text: "Posso ver alguns sites que vocês já fizeram?",
            icon: "📱",
            response: "Claro! 📱 Aqui estão alguns dos nossos projetos:\n\n🎨 **Portfólio:**\n• https://www.do-cheff-rn.com.br/ (Delivery de Comida)\n• https://barachosolucoes.com/ (Soluções Industriais)\n• https://flash-ship.webpulseservicos.com/ (E-commerce)\n• https://reidossalgados.webpulseservicos.com/ (Cardápio Digital)\n\n✨ **Destaques dos nossos sites:**\n• Design moderno e responsivo\n• SEO otimizado para Google\n• Performance rápida\n• Integração com redes sociais\n• Área administrativa intuitiva\n• Formulários de contato\n• Blog integrado\n\n🎯 **Tipos de sites que fazemos:**\n• Sites institucionais\n• Landing pages\n• Blogs\n• E-commerce\n• Sites de serviços\n• Portfólios\n\nQuer ver algum projeto específico ou tem alguma dúvida sobre algum deles? 😊"
        },
        {
            id: 9,
            text: "Tenho um restaurante. Qual plano vocês recomendam?",
            icon: "🍕",
            response: "Para restaurantes, recomendamos o **Plano WebPulse** por R$120/mês! 🍕\n\n✅ **Perfeito para restaurantes:**\n• Cardápio digital integrado\n• Sistema de delivery/retirada\n• Integração com WhatsApp\n• Galeria de fotos dos pratos\n• Horário de funcionamento\n• Localização e mapa\n• Avaliações de clientes\n• Blog para receitas e novidades\n\n💰 **Investimento:**\n• Mensal: R$120/mês\n• Anual: R$1.200/ano (16,67% de desconto)\n\n⏱️ **Prazo:** 5-10 dias úteis\n\n🎯 **Incluído:**\n• Design personalizado\n• Integração com redes sociais\n• Área administrativa\n• Suporte técnico\n• Hospedagem e domínio\n\nQuer que eu te ajude a contratar? 😊"
        }
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const addMessage = (text: string, isUser: boolean = false) => {
        const newMessage: Message = {
            id: Date.now(),
            text,
            isUser,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, newMessage]);
    };

    const simulateTyping = (response: string) => {
        setIsTyping(true);
        setShowOptions(false);
        
        // Simula tempo de digitação baseado no tamanho da resposta
        const typingTime = Math.min(response.length * 50, 3000);
        
        setTimeout(() => {
            setIsTyping(false);
            addMessage(response, false);
            setShowOptions(true);
        }, typingTime);
    };

    const handleMessageClick = (message: any) => {
        // Adiciona a mensagem do usuário
        addMessage(message.text, true);
        
        // Simula resposta automática
        setTimeout(() => {
            simulateTyping(message.response);
        }, 500);
    };

    const resetChat = () => {
        setMessages([]);
        setIsTyping(false);
        setShowOptions(true);
    };

    // Scroll automático quando novas mensagens aparecem
    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // Mensagem de boas-vindas automática
            setTimeout(() => {
                addMessage("Olá! 👋 Como posso te ajudar hoje? Escolha uma opção abaixo:", false);
            }, 500);
        }
    }, [isOpen, messages.length]);

    return (
        <>
            {/* Botão flutuante */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group"
                aria-label="Chat WhatsApp"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                
                {/* Indicador de animação */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            </button>

            {/* Modal de chat */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end justify-end z-50 p-2 sm:p-4">
                    <div className="bg-white rounded-t-2xl sm:rounded-t-3xl shadow-2xl w-full max-w-sm sm:max-w-md h-[80vh] sm:h-[600px] flex flex-col animate-slide-up">
                        {/* Header do chat */}
                        <div className="bg-green-500 text-white p-3 sm:p-4 rounded-t-2xl sm:rounded-t-3xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm sm:text-base">WebPulse</h3>
                                        <p className="text-xs opacity-90">Online • Responde em segundos</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-1 sm:space-x-2">
                                    <button
                                        onClick={resetChat}
                                        className="text-white/80 hover:text-white transition-colors p-1"
                                        title="Novo chat"
                                    >
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-white/80 hover:text-white transition-colors"
                                    >
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Área de mensagens */}
                        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] sm:max-w-[80%] rounded-lg sm:rounded-xl p-2.5 sm:p-3 ${
                                            message.isUser
                                                ? 'bg-green-500 text-white'
                                                : 'bg-white text-gray-800 shadow-sm border'
                                        }`}
                                    >
                                        <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                                        <p className={`text-xs mt-1 ${message.isUser ? 'text-green-100' : 'text-gray-500'}`}>
                                            {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            
                            {/* Indicador de digitando */}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white text-gray-800 shadow-sm border rounded-lg sm:rounded-xl p-2.5 sm:p-3">
                                        <div className="flex items-center space-x-1">
                                            <div className="flex space-x-1">
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                            </div>
                                            <span className="text-xs text-gray-500 ml-2">digitando...</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            {/* Elemento invisível para scroll automático */}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Opções de mensagens */}
                        {showOptions && (
                            <div className="p-3 sm:p-4 bg-white border-t">
                                <div className="space-y-1.5 sm:space-y-2 max-h-32 sm:max-h-48 overflow-y-auto">
                                    {predefinedMessages.map((message) => (
                                        <button
                                            key={message.id}
                                            onClick={() => handleMessageClick(message)}
                                            className="w-full text-left bg-gray-50 hover:bg-gray-100 rounded-lg sm:rounded-xl p-2.5 sm:p-3 transition-colors duration-200 border border-gray-200 hover:border-gray-300"
                                        >
                                            <div className="flex items-center space-x-2 sm:space-x-3">
                                                <span className="text-base sm:text-lg">{message.icon}</span>
                                                <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">{message.text}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                
                                {/* Botão para WhatsApp real */}
                                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t">
                                    <button
                                        onClick={() => {
                                            const msg = "Olá! Gostaria de falar diretamente com vocês sobre um projeto personalizado.";
                                            window.open(`https://wa.me/5584998699449?text=${encodeURIComponent(msg)}`, '_blank');
                                        }}
                                        className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg sm:rounded-xl p-2.5 sm:p-3 transition-colors duration-200 text-xs sm:text-sm font-medium flex items-center justify-center space-x-2"
                                    >
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                        </svg>
                                        <span>Falar diretamente com o CEO</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default WhatsAppChat; 