import { useEffect } from 'react';
import { Plan } from '../types/Plan';
import SecurityBadge from './SecurityBadge';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan: Plan;
    billingCycle: 'monthly' | 'yearly';
}

const getCheckoutUrl = (plan: Plan, billingCycle: 'monthly' | 'yearly') => {
    if (billingCycle === 'monthly') {
        return plan.monthlyPaymentLink || 'https://invoice.infinitepay.io/plans/webpulse/2sfDw71vAv';
    } else {
        return plan.yearlyPaymentLink || 'https://invoice.infinitepay.io/plans/webpulse/ZjRSMtEXt';
    }
};

const PaymentModal = ({ isOpen, onClose, plan, billingCycle }: PaymentModalProps) => {
    useEffect(() => {
        if (isOpen) {
            // Previne scroll da página principal
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            // Restaura scroll da página principal
            document.body.style.overflow = 'unset';
            document.body.style.position = 'unset';
            document.body.style.width = 'unset';
        }

        return () => {
            // Cleanup: restaura scroll quando componente é desmontado
            document.body.style.overflow = 'unset';
            document.body.style.position = 'unset';
            document.body.style.width = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const checkoutUrl = getCheckoutUrl(plan, billingCycle);

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center z-50 p-2 sm:p-4 animate-modal-fade-in overflow-y-auto">
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md mx-auto my-4 sm:my-8 relative animate-modal-scale-in border border-gray-700/50 min-h-fit">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-7 h-7 sm:w-8 sm:h-8 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
                >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="p-4 sm:p-6 lg:p-8 pb-4 sm:pb-6">
                    <div className="text-center mb-4 sm:mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-pulse">
                            <span className="text-lg sm:text-2xl">{plan.icon}</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-2">
                            Finalizar Compra
                        </h2>
                        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto"></div>
                    </div>

                    {/* Plan Details */}
                    <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-600/30 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <h3 className="text-lg sm:text-xl font-bold text-white">{billingCycle === 'yearly' ? `${plan.name} Anual` : plan.name}</h3>
                            <span className="text-xl sm:text-2xl">{plan.icon}</span>
                        </div>

                        <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{plan.description}</p>

                        {/* Price Display */}
                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-600/30">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-0">
                                <div className="flex items-baseline">
                                    <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                                        R$ {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                                    </span>
                                    <span className="ml-2 text-base sm:text-lg text-gray-300">
                                        /{billingCycle === 'monthly' ? 'mês' : 'ano'}
                                    </span>
                                </div>
                                <div className="sm:text-right">
                                    {billingCycle === 'yearly' && (
                                        <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-2 sm:px-3 py-1 inline-block">
                                            <span className="text-green-400 text-xs sm:text-sm font-semibold">
                                                -16,67%
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {billingCycle === 'yearly' && (
                                <p className="text-xs sm:text-sm text-green-400 mt-2 font-medium">
                                    💰 Economia de R$ {(plan.monthlyPrice * 12) - plan.yearlyPrice} por ano!
                                </p>
                            )}
                        </div>

                        {/* Features Preview */}
                        <div className="mt-3 sm:mt-4">
                            <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2">✅ Inclui:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs text-gray-400">
                                {plan.features.slice(0, 4).map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-red-500 rounded-full mr-2 flex-shrink-0"></div>
                                        <span className="text-xs">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Additional Features for Scroll */}
                    <div className="mt-4 sm:mt-6 bg-gradient-to-r from-gray-700/30 to-gray-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-600/20 backdrop-blur-sm">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">🚀 Recursos Adicionais:</h4>
                        <div className="space-y-1.5 sm:space-y-2 text-xs text-gray-400">
                            {plan.features.slice(4, 8).map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-red-500 rounded-full mr-2 mt-1 sm:mt-1.5 flex-shrink-0"></div>
                                    <span className="text-xs leading-relaxed">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Payment Security Info */}
                    <div className="mt-4 sm:mt-6 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-blue-500/20">
                        <div className="flex items-center mb-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <h4 className="text-xs sm:text-sm font-semibold text-blue-300">Segurança Garantida</h4>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Seus dados estão protegidos com criptografia SSL de 256 bits. O pagamento é processado pelo InfinitePay, uma das plataformas mais seguras do Brasil.
                        </p>
                    </div>
                </div>

                {/* Action Buttons - Fixed at Bottom */}
                <div className="p-4 sm:p-6 lg:p-8 pt-0 space-y-4 sm:space-y-6 bg-gradient-to-t from-gray-800/50 to-transparent rounded-b-2xl sm:rounded-b-3xl">
                    <a
                        href={checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 sm:py-4 px-4 sm:px-6 text-center text-white bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-lg sm:rounded-xl hover:from-red-700 hover:via-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                    >
                        <span className="flex items-center justify-center">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Ir para o pagamento
                        </span>
                    </a>

                    <button
                        onClick={onClose}
                        className="w-full py-2.5 sm:py-3 px-4 sm:px-6 text-center text-gray-300 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 font-medium border border-gray-600/30 hover:border-gray-500/50 text-sm sm:text-base"
                    >
                        Cancelar
                    </button>

                    {/* Security Badge */}
                    <div className="flex justify-center pt-2">
                        <SecurityBadge type="ssl" size="sm" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal; 