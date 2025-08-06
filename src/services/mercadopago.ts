// Configuração do Mercado Pago
export interface MercadoPagoConfig {
  publicKey: string;
  accessToken: string;
}

export interface PaymentData {
  title: string;
  description: string;
  price: number;
  quantity: number;
  currency_id: string;
  plan_id: string;
  payer_email?: string;
}

export interface PreferenceResponse {
  id: string;
  init_point: string;
  sandbox_init_point: string;
}

// Configuração do ambiente
const MP_CONFIG: MercadoPagoConfig = {
  publicKey: import.meta.env.VITE_MP_PUBLIC_KEY || 'TEST-your-public-key',
  accessToken: import.meta.env.VITE_MP_ACCESS_TOKEN || 'TEST-your-access-token'
};

export class MercadoPagoService {
  private baseURL = 'https://api.mercadopago.com';

  async createPreference(paymentData: PaymentData): Promise<PreferenceResponse> {
    const preference = {
      items: [
        {
          title: paymentData.title,
          description: paymentData.description,
          quantity: paymentData.quantity,
          currency_id: paymentData.currency_id,
          unit_price: paymentData.price,
        }
      ],
      payer: {
        email: paymentData.payer_email || ''
      },
      back_urls: {
        success: `${window.location.origin}/sucesso?plan=${paymentData.plan_id}`,
        failure: `${window.location.origin}/falha`,
        pending: `${window.location.origin}/pendente`
      },
      auto_return: 'approved',
      external_reference: `webpulse-${paymentData.plan_id}-${Date.now()}`,
      notification_url: `${window.location.origin}/webhook/mercadopago`,
      expires: true,
      expiration_date_from: new Date().toISOString(),
      expiration_date_to: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 horas
    };

    try {
      const response = await fetch(`${this.baseURL}/checkout/preferences`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MP_CONFIG.accessToken}`
        },
        body: JSON.stringify(preference)
      });

      if (!response.ok) {
        throw new Error('Erro ao criar preferência de pagamento');
      }

      return await response.json();
    } catch (error) {
      console.error('Erro no MercadoPago:', error);
      throw error;
    }
  }

  getPublicKey(): string {
    return MP_CONFIG.publicKey;
  }
}

export const mercadoPagoService = new MercadoPagoService();
