import React, { useState, useEffect } from 'react';
import { mercadoPagoService, PaymentData } from '../services/mercadopago';
import { simpleMercadoPagoService } from '../services/mercadopago-simple';

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
  const [serviceStatus, setServiceStatus] = useState<string>('');

  // Verifica o status do serviço ao carregar
  React.useEffect(() => {
    const checkStatus = () => {
      if (mercadoPagoService.isConfigured()) {
        setServiceStatus('Mercado Pago configurado');
      } else if (simpleMercadoPagoService.isConfigured()) {
        setServiceStatus(simpleMercadoPagoService.getStatus());
      } else {
        setServiceStatus('Serviço não configurado');
      }
    };
    
    checkStatus();
  }, []);

  const handlePayment = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Tenta usar o serviço completo primeiro, depois o simplificado
      if (mercadoPagoService.isConfigured()) {
        const paymentData: PaymentData = {
          title: `${planName} - ${billingType === 'monthly' ? 'Mensal' : 'Anual'}`,
          description: description,
          price: price,
          quantity: 1,
          currency_id: 'BRL',
          plan_id: `${planId}-${billingType}`,
        };
        await mercadoPagoService.createPayment(paymentData);
      } else if (simpleMercadoPagoService.isConfigured()) {
        const paymentData = {
          title: `${planName} - ${billingType === 'monthly' ? 'Mensal' : 'Anual'}`,
          description: description,
          price: price,
          plan_id: planId,
          billingType: billingType
        };
        await simpleMercadoPagoService.processPayment(paymentData);
      } else {
        throw new Error('Nenhum serviço de pagamento está configurado');
      }
      
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
      setError('Erro ao processar pagamento. Verifique sua conexão e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
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
            <span>Pagar R$ {price.toFixed(2).replace('.', ',')}</span>
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
        {serviceStatus && <span className="text-green-400">• {serviceStatus}</span>}
      </div>
    </div>
  );
};

export default PaymentButton;
