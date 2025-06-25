import { Plan } from '../types/Plan';

export const plans: Plan[] = [
    {
        id: 'webpulse',
        name: 'Plano WebPulse',
        description: 'Solução completa para sua presença digital com 16,67% de desconto no plano anual',
        icon: '🚀',
        monthlyPrice: 120,
        yearlyPrice: 1200,
        monthlyPaymentLink: 'https://invoice.infinitepay.io/plans/webpulse/2sfDw71vAv',
        yearlyPaymentLink: 'https://invoice.infinitepay.io/plans/webpulse/ZjRSMtEXt',
        features: [
            'Site institucional responsivo',
            'Páginas ilimitadas',
            'Blog integrado',
            'SEO básico',
            'Formulário de contato',
            'Integração com redes sociais',
            'Área administrativa',
            'Suporte por email',
            'Hospedagem inclusa',
            'Domínio gratuito por 1 ano',
        ],
    },
]; 