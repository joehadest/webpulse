import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';

const Sucesso: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({
    plan: '',
    paymentMethod: 'Mercado Pago'
  });

  useEffect(() => {
    const plan = searchParams.get('plan') || '';
    const paymentType = searchParams.get('payment_type');
    
    // Determina o método de pagamento baseado na URL
    const method = paymentType === 'mp' ? 'Mercado Pago' : 'InfinitePay';
    
    setPaymentInfo({
      plan,
      paymentMethod: method
    });
  }, [searchParams]);

  const handleWhatsAppContact = () => {
    const planText = paymentInfo.plan ? ` do ${paymentInfo.plan}` : '';
    const message = encodeURIComponent(
      `Olá! Acabei de realizar o pagamento${planText} via ${paymentInfo.paymentMethod} e gostaria de dar início à criação do meu site.`
    );
    const whatsappUrl = `https://wa.me/5584998699449?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <Header />
      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 max-w-lg w-full text-center">
        <div className="mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-green-400">Pagamento realizado com sucesso!</h1>
        </div>
        
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <p className="text-base sm:text-lg leading-relaxed">
            Obrigado por contratar nossos serviços! 🎉
          </p>
          
          <p className="text-base sm:text-lg leading-relaxed">
            Seu pagamento foi processado com sucesso via {paymentInfo.paymentMethod}. 
            Em até 24 horas, nossa equipe entrará em contato para dar início à criação do seu site.
          </p>
          
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            Enquanto isso, você pode falar diretamente com nossos desenvolvedores para tirar dúvidas ou adiantar o processo.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <button
            onClick={handleWhatsAppContact}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span>Falar com Desenvolvedor via WhatsApp</span>
          </button>
          
          <Link 
            to="/" 
            className="inline-block w-full px-4 sm:px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg text-white font-semibold transition duration-300 text-sm sm:text-base"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sucesso; 