import { Plan } from '../types/Plan';

interface PaymentData {
    name: string;
    email: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
}

interface InfinitPayResponse {
    success: boolean;
    paymentId?: string;
    error?: string;
}

export const createPayment = async (
    plan: Plan,
    billingCycle: 'monthly' | 'yearly',
    paymentData: PaymentData
): Promise<InfinitPayResponse> => {
    try {
        // Aqui você implementará a integração real com o InfinitPay
        // Este é um exemplo de como seria a estrutura da chamada
        const response = await fetch('https://api.infinitpay.com/v1/payments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_INFINITPAY_API_KEY}`,
            },
            body: JSON.stringify({
                amount: billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice,
                currency: 'BRL',
                paymentMethod: 'credit_card',
                billingCycle: billingCycle,
                customer: {
                    name: paymentData.name,
                    email: paymentData.email,
                },
                card: {
                    number: paymentData.cardNumber,
                    expiryDate: paymentData.expiryDate,
                    cvv: paymentData.cvv,
                },
                plan: {
                    id: plan.id,
                    name: plan.name,
                },
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Erro ao processar pagamento');
        }

        return {
            success: true,
            paymentId: data.paymentId,
        };
    } catch (error) {
        console.error('Erro no pagamento:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Erro ao processar pagamento',
        };
    }
};

export const createPixPayment = async (
    plan: Plan,
    billingCycle: 'monthly' | 'yearly'
): Promise<InfinitPayResponse> => {
    try {
        // Aqui você implementará a integração real com o InfinitPay para PIX
        const response = await fetch('https://api.infinitpay.com/v1/pix', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_INFINITPAY_API_KEY}`,
            },
            body: JSON.stringify({
                amount: billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice,
                currency: 'BRL',
                billingCycle: billingCycle,
                plan: {
                    id: plan.id,
                    name: plan.name,
                },
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Erro ao gerar PIX');
        }

        return {
            success: true,
            paymentId: data.paymentId,
        };
    } catch (error) {
        console.error('Erro ao gerar PIX:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Erro ao gerar PIX',
        };
    }
}; 