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
} 