import React, { useState } from 'react';
import { mercadoPagoService } from '../services/mercadopago';
import type { SubscriptionData } from '../services/mercadopago';

interface PaymentButtonProps {
  planId: string;
  planName: string;
  price: number;
  billingType: 'monthly' | 'yearly';
  description: string;
  className?: string;
  disabled?: boolean;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  planId,
  planName,
  price,
  billingType,
  description,
  className = '',
  disabled = false
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handlePayment = async () => {
    if (!email) {
      setShowEmailInput(true);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const subscriptionData: SubscriptionData = {
        title: `${planName} - ${billingType === 'monthly' ? 'Mensal' : 'Anual'}`,
        description: description,
        price: price,
        plan_id: `${planId}-${billingType}`,
        frequency: 1,
        frequency_type: billingType === 'monthly' ? 'months' : 'years',
        payer_email: email
      };

      await mercadoPagoService.createSubscription(subscriptionData);
      
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
      const errorMessage = error instanceof Error ? error.message : 'Erro ao processar pagamento. Verifique sua conexão e tente novamente.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      {showEmailInput && (
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Seu e-mail para a assinatura:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
            required
          />
        </div>
      )}
      
      <button
        onClick={handlePayment}
        disabled={disabled || isLoading}
        className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
          disabled || isLoading
            ? 'bg-gray-600 cursor-not-allowed opacity-50'
            : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transform hover:scale-105'
        } text-white shadow-lg ${className}`}
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Processando...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>{showEmailInput && !email ? 'Informe seu e-mail' : `Assinar R$ ${price.toFixed(2).replace('.', ',')}/${billingType === 'monthly' ? 'mês' : 'ano'}`}</span>
          </div>
        )}
      </button>
      
      {error && (
        <div className="mt-2 p-3 bg-red-100 border border-red-300 rounded-lg">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}
      
      <div className="mt-3 flex items-center justify-center space-x-2 text-xs text-gray-500">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
        <span>Pagamento seguro via Mercado Pago</span>
      </div>
    </div>
  );
};

export default PaymentButton;
