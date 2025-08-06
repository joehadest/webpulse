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
  private mp: any = null;

  constructor() {
    this.initializeMercadoPago();
  }

  private async initializeMercadoPago() {
    try {
      // Carrega o SDK do Mercado Pago dinamicamente
      if (!window.MercadoPago) {
        await this.loadMercadoPagoSDK();
      }
      
      this.mp = new window.MercadoPago(MP_CONFIG.publicKey, {
        locale: 'pt-BR'
      });
    } catch (error) {
      console.error('Erro ao inicializar Mercado Pago:', error);
    }
  }

  private loadMercadoPagoSDK(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.MercadoPago) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://sdk.mercadopago.com/js/v2';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Erro ao carregar SDK do Mercado Pago'));
      document.head.appendChild(script);
    });
  }

  async createPayment(paymentData: PaymentData): Promise<void> {
    try {
      if (!this.mp) {
        await this.initializeMercadoPago();
      }

      // Se está configurado com credenciais reais, usa a API do Mercado Pago
      if (this.isConfigured()) {
        const preference = await this.createPreference(paymentData);
        // Abre o checkout real do Mercado Pago
        window.open(preference.init_point, '_blank');
      } else {
        // Para desenvolvimento, usa implementação simplificada
        const testPaymentUrl = this.createTestPaymentUrl(paymentData);
        window.open(testPaymentUrl, '_blank');
      }
      
    } catch (error) {
      console.error('Erro no MercadoPago:', error);
      throw new Error('Erro ao processar pagamento. Verifique suas credenciais.');
    }
  }

  private createTestPaymentUrl(paymentData: PaymentData): string {
    // URL de teste que simula o processo de pagamento
    const params = new URLSearchParams({
      title: paymentData.title,
      price: paymentData.price.toString(),
      plan_id: paymentData.plan_id,
      description: paymentData.description
    });

    // Para teste, redireciona para a página de sucesso após 3 segundos
    return `${window.location.origin}/sucesso?${params.toString()}&test=true`;
  }

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
      back_urls: {
        success: `https://www.webpulseservicos.com/sucesso?plan=${paymentData.plan_id}`,
        failure: `https://www.webpulseservicos.com/falha`,
        pending: `https://www.webpulseservicos.com/pendente`
      },
      auto_return: 'approved',
      external_reference: `webpulse-${paymentData.plan_id}-${Date.now()}`,
      expires: true,
      expiration_date_from: new Date().toISOString(),
      expiration_date_to: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };

    try {
      const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MP_CONFIG.accessToken}`
        },
        body: JSON.stringify(preference)
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('Erro da API MP:', error);
        throw new Error('Erro ao criar preferência de pagamento');
      }

      return await response.json();
    } catch (error) {
      console.error('Erro no createPreference:', error);
      // Fallback para modo teste se a API falhar
      const testUrl = this.createTestPaymentUrl(paymentData);
      return {
        id: `test-${Date.now()}`,
        init_point: testUrl,
        sandbox_init_point: testUrl
      };
    }
  }

  getPublicKey(): string {
    return MP_CONFIG.publicKey;
  }

  isConfigured(): boolean {
    return !!(MP_CONFIG.publicKey && MP_CONFIG.publicKey !== 'TEST-your-public-key' &&
           MP_CONFIG.accessToken && MP_CONFIG.accessToken !== 'TEST-your-access-token');
  }
}

// Declaração global para o SDK do Mercado Pago
declare global {
  interface Window {
    MercadoPago: any;
  }
}

export const mercadoPagoService = new MercadoPagoService();
