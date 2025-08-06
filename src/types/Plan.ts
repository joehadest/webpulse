export interface Plan {
    id: string;
    name: string;
    description: string;
    icon: string;
    features: string[];
    monthlyPrice: number;
    yearlyPrice: number;
    monthlyPaymentLink?: string;
    yearlyPaymentLink?: string;
    // Novas propriedades para Mercado Pago
    useMercadoPago?: boolean;
    mercadoPagoEnabled?: boolean;
} 