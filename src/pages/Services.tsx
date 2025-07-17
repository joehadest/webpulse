import { useState } from 'react';
import { Link } from 'react-router-dom';
import { plans } from '../data/plans';
import PaymentModal from '../components/PaymentModal';

const Services = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(plans[0]);

    const handlePlanSelect = (plan: any) => {
        setSelectedPlan(plan);
        setIsPaymentModalOpen(true);
    };

    const handleCustomProject = () => {
        const msg = "Olá! Gostaria de um orçamento para desenvolvimento de site com domínio próprio para minha empresa.";
        window.open(`https://wa.me/5584998699449?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-3 sm:mb-4">
                        Nossos Planos
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                        Escolha o plano ideal para o seu negócio e comece sua transformação digital hoje mesmo
                    </p>
                </div>

                {/* Seção de Projeto Personalizado no início */}
                <div className="max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
                    <div className="bg-gray-800/80 rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50">
                        <div className="p-6 sm:p-8 md:p-12">
                            <div className="text-center mb-6 sm:mb-8">
                                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 rounded-full mb-3 sm:mb-4">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                                    Projeto Personalizado
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                                    Não quer fazer plano? Também desenvolvemos sites para sua empresa com seu próprio domínio, com um orçamento separado.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-white mb-4">O que incluímos:</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start text-gray-300">
                                            <svg className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Site personalizado com design exclusivo</span>
                                        </li>
                                        <li className="flex items-start text-gray-300">
                                            <svg className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Domínio próprio (.com.br, .com, etc.)</span>
                                        </li>
                                        <li className="flex items-start text-gray-300">
                                            <svg className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Hospedagem premium inclusa</span>
                                        </li>
                                        <li className="flex items-start text-gray-300">
                                            <svg className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Certificado SSL (site seguro)</span>
                                        </li>
                                        <li className="flex items-start text-gray-300">
                                            <svg className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>Área administrativa completa</span>
                                        </li>
                                        <li className="flex items-start text-gray-300">
                                            <svg className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>SEO otimizado para Google</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-white mb-4">Vantagens:</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start text-gray-300">
                                            <svg className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Pagamento único (sem mensalidades)</span>
                                        </li>
                                        <li className="flex items-start text-gray-300">
                                            <svg className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Design 100% personalizado</span>
                                        </li>
                                        <li className="flex items-start text-gray-300">
                                            <svg className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Funcionalidades específicas</span>
                                        </li>
                                        <li className="flex items-start text-gray-300">
                                            <svg className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Suporte técnico incluído</span>
                                        </li>
                                        <li className="flex items-start text-gray-300">
                                            <svg className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Treinamento de uso</span>
                                        </li>
                                        <li className="flex items-start text-gray-300">
                                            <svg className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Propriedade total do código</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center">
                                <button
                                    onClick={handleCustomProject}
                                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                    </svg>
                                    Solicitar Orçamento via WhatsApp
                                </button>
                                <p className="text-gray-400 text-sm mt-3">
                                    Entre em contato conosco e receba um orçamento personalizado para seu projeto
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Toggle Billing Cycle */}
                <div className="flex justify-center mb-12">
                    <div className="relative bg-gray-800 p-1 rounded-lg">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`${
                                billingCycle === 'monthly'
                                    ? 'bg-red-600 text-white'
                                    : 'text-gray-300 hover:text-white'
                            } relative py-2 px-6 rounded-md transition-colors duration-200`}
                        >
                            Mensal
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`${
                                billingCycle === 'yearly'
                                    ? 'bg-red-600 text-white'
                                    : 'text-gray-300 hover:text-white'
                            } relative py-2 px-6 rounded-md transition-colors duration-200`}
                        >
                            Anual
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                -16,67%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Plans List - Vertical */}
                <div className="space-y-8 max-w-4xl mx-auto mb-16">
                    {plans.map((plan) => (
                        <div key={plan.id} className="glass rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:border-red-500/50">
                            <div className="p-8">
                                <div className="text-center mb-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">{plan.name}</h3>
                                </div>
                                <p className="text-gray-300 mb-6 text-sm sm:text-base text-center">{plan.description}</p>
                                
                                <div className="mb-6 text-center">
                                    <div className="flex items-baseline justify-center">
                                        <span className="text-3xl sm:text-4xl font-extrabold text-white">
                                            R$ {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                                        </span>
                                        <span className="ml-2 text-base sm:text-lg text-gray-300">
                                            /{billingCycle === 'monthly' ? 'mês' : 'ano'}
                                        </span>
                                    </div>
                                    {billingCycle === 'yearly' && (
                                        <p className="mt-2 text-xs sm:text-sm text-green-400">
                                            Economia de R$ {(plan.monthlyPrice * 12) - plan.yearlyPrice} por ano!
                                        </p>
                                    )}
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-base sm:text-lg font-semibold text-white mb-4 text-center">Recursos Incluídos:</h4>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-gray-300 text-sm sm:text-base">
                                                <svg
                                                    className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mr-3 flex-shrink-0"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={() => handlePlanSelect(plan)}
                                    className="block w-full py-3 px-6 text-center text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 text-sm sm:text-base"
                                >
                                    Contratar Agora
                                </button>
                            </div>
                        </div>
                    ))}
                </div>



                {/* FAQ Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-white text-center mb-8">Perguntas Frequentes</h2>
                    <div className="grid gap-6 max-w-3xl mx-auto">
                        <div className="glass rounded-lg p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-white mb-2">Como funciona o pagamento?</h3>
                            <p className="text-gray-300">
                                Oferecemos opções de pagamento mensal ou anual. O plano anual oferece 16,67% de desconto em relação ao valor total do plano mensal.
                            </p>
                        </div>
                        <div className="glass rounded-lg p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-white mb-2">Qual a diferença entre os planos?</h3>
                            <p className="text-gray-300">
                                O Plano WebPulse (R$120/mês) é ideal para restaurantes e sites institucionais/portfólio, enquanto o Plano E-commerce (R$280/mês) é perfeito para quem quer vender online com funcionalidades completas de loja virtual.
                            </p>
                        </div>
                        <div className="glass rounded-lg p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-white mb-2">Posso cancelar a qualquer momento?</h3>
                            <p className="text-gray-300">
                                Sim, você pode cancelar sua assinatura a qualquer momento. O cancelamento será efetivo no final do período atual.
                            </p>
                        </div>
                        <div className="glass rounded-lg p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-white mb-2">E sobre projetos personalizados?</h3>
                            <p className="text-gray-300">
                                Para projetos personalizados, oferecemos desenvolvimento de sites com domínio próprio, design exclusivo e pagamento único. Entre em contato via WhatsApp para receber um orçamento personalizado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Modal */}
            <PaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                plan={selectedPlan}
                billingCycle={billingCycle}
            />
        </section>
    );
};

export default Services; 