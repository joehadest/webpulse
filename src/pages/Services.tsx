import { useState } from 'react';
import { Link } from 'react-router-dom';
import { plans } from '../data/plans';
import PaymentModal from '../components/PaymentModal';

const Services = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const plan = plans[0]; // Pegando o único plano

    const handlePlanSelect = () => {
        setIsPaymentModalOpen(true);
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-4">
                        Nossos Planos
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Escolha o plano ideal para o seu negócio e comece sua transformação digital hoje mesmo
                    </p>
                </div>

                {/* Toggle Billing Cycle */}
                <div className="mt-8 flex justify-center">
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

                {/* Plan Card */}
                <div className="mt-12">
                    <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 max-w-2xl mx-auto">
                        <div className="p-8">
                            <div className="flex items-center justify-between">
                                <span className="text-4xl">{plan.icon}</span>
                                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                            </div>
                            <p className="mt-4 text-gray-300">{plan.description}</p>
                            <div className="mt-8">
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-extrabold text-white">
                                        R$ {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                                    </span>
                                    <span className="ml-1 text-xl text-gray-300">
                                        /{billingCycle === 'monthly' ? 'mês' : 'ano'}
                                    </span>
                                </div>
                                {billingCycle === 'yearly' && (
                                    <p className="mt-2 text-sm text-green-400">
                                        Economia de R$ {(plan.monthlyPrice * 12) - plan.yearlyPrice} por ano!
                                    </p>
                                )}
                            </div>

                            {/* Features */}
                            <div className="mt-8">
                                <h4 className="text-lg font-semibold text-white mb-4">Recursos Incluídos:</h4>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-300">
                                            <svg
                                                className="h-5 w-5 text-red-500 mr-3"
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
                            <div className="mt-8">
                                <button
                                    onClick={handlePlanSelect}
                                    className="block w-full py-3 px-6 text-center text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
                                >
                                    Contratar Agora
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-white text-center mb-8">Perguntas Frequentes</h2>
                    <div className="grid gap-6 max-w-3xl mx-auto">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-2">Como funciona o pagamento?</h3>
                            <p className="text-gray-300">
                                Oferecemos opções de pagamento mensal (R$ 120) ou anual (R$ 1.200). O plano anual oferece 16,67% de desconto em relação ao valor total do plano mensal.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-2">O que está incluído no plano?</h3>
                            <p className="text-gray-300">
                                O Plano WebPulse inclui site institucional responsivo, páginas ilimitadas, blog integrado, SEO básico, formulário de contato, integração com redes sociais, área administrativa, suporte por email, hospedagem inclusa e domínio gratuito por 1 ano.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-2">Posso cancelar a qualquer momento?</h3>
                            <p className="text-gray-300">
                                Sim, você pode cancelar sua assinatura a qualquer momento. O cancelamento será efetivo no final do período atual.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Modal */}
            <PaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                plan={plan}
                billingCycle={billingCycle}
            />
        </section>
    );
};

export default Services; 