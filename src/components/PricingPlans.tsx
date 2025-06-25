import { useState } from 'react';
import { plans } from '../data/plans';

const PricingPlans = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
    const plan = plans[0]; // Pegando o único plano

    const handleWhatsAppContact = () => {
        const msg = `Olá! Estou com problemas no pagamento do ${plan.name}. Pode me ajudar?`;
        window.open(`https://wa.me/5584998699449?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 sm:text-4xl">
                        Escolha o Plano Ideal para Você
                    </h2>
                    <p className="mt-4 text-xl text-gray-300">
                        Solução completa para sua presença digital
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
                <div className="mt-12 relative">
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
                                    className="w-full py-3 px-6 text-center text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
                                    onClick={() => {
                                        const msg = `Olá! Gostaria de saber mais sobre o ${plan.name} (${billingCycle === 'monthly' ? 'Mensal' : 'Anual'}).`;
                                        window.open(`https://wa.me/558498699449?text=${encodeURIComponent(msg)}`, '_blank');
                                    }}
                                >
                                    Contratar Agora
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Floating Help Message */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                        <button
                            onClick={handleWhatsAppContact}
                            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                            <span>Problemas com o pagamento?</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPlans; 