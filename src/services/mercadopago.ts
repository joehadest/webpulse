// Configuração do Mercado Pago
export interface MercadoPagoConfig {
  publicKey: string;
  accessToken: string;
}

export interface SubscriptionData {
  title: string;
  description: string;
  price: number;
  frequency: number;
  frequency_type: 'months' | 'years';
  plan_id: string;
  payer_email: string; // Obrigatório para assinaturas
}

export interface SubscriptionResponse {
  id: string;
  init_point: string;
  sandbox_init_point: string;
}

// Declaração global para o SDK do Mercado Pago
declare global {
  interface Window {
    MercadoPago: any;
  }
}

const MP_CONFIG: MercadoPagoConfig = {
  publicKey: import.meta.env.VITE_MP_PUBLIC_KEY || 'TEST-your-public-key',
  accessToken: import.meta.env.VITE_MP_ACCESS_TOKEN || 'TEST-your-access-token'
};

export class MercadoPagoService {
  constructor() {
    console.log('MercadoPagoService inicializado para assinaturas');
    this.initializeMercadoPago();
  }

  private async initializeMercadoPago() {
    try {
      // Carrega o SDK do Mercado Pago dinamicamente
      if (!window.MercadoPago) {
        await this.loadMercadoPagoSDK();
      }
      
      console.log('Mercado Pago SDK carregado com sucesso');
    } catch (error) {
      console.error('Erro ao inicializar o SDK do Mercado Pago:', error);
    }
  }

  private loadMercadoPagoSDK(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://sdk.mercadopago.com/js/v2';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Falha ao carregar o SDK do Mercado Pago'));
      document.head.appendChild(script);
    });
  }

  async createSubscription(subscriptionData: SubscriptionData): Promise<SubscriptionResponse> {
    // Primeiro tenta criar via API direta
    try {
      return await this.createSubscriptionViaAPI(subscriptionData);
    } catch (error) {
      console.log('API direta falhou, tentando via checkout preferência:', error);
      // Se falhar, usa abordagem alternativa com preferência
      return await this.createSubscriptionViaPreference(subscriptionData);
    }
  }

  private async createSubscriptionViaAPI(subscriptionData: SubscriptionData): Promise<SubscriptionResponse> {
    const subscription = {
      reason: subscriptionData.title,
      external_reference: `webpulse-subscription-${subscriptionData.plan_id}-${Date.now()}`,
      payer_email: subscriptionData.payer_email,
      back_url: `https://www.webpulseservicos.com/sucesso?plan=${subscriptionData.plan_id}&payment_type=mp&subscription=true`,
      auto_recurring: {
        frequency: subscriptionData.frequency,
        frequency_type: subscriptionData.frequency_type,
        transaction_amount: subscriptionData.price,
        currency_id: 'BRL'
      }
    };

    const response = await fetch('https://api.mercadopago.com/preapproval', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MP_CONFIG.accessToken}`,
        'X-Idempotency-Key': `webpulse-${Date.now()}-${Math.random()}`
      },
      body: JSON.stringify(subscription),
      mode: 'cors'
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    
    if (result.init_point) {
      window.location.href = result.init_point;
    }
    
    return {
      id: result.id,
      init_point: result.init_point,
      sandbox_init_point: result.sandbox_init_point || result.init_point
    };
  }

  private async createSubscriptionViaPreference(subscriptionData: SubscriptionData): Promise<SubscriptionResponse> {
    console.log('Criando preferência para assinatura:', subscriptionData.title);

    // Cria uma preferência de pagamento que pode ser convertida em assinatura
    const preference = {
      items: [
        {
          title: `[ASSINATURA] ${subscriptionData.title}`,
          description: `Assinatura ${subscriptionData.frequency_type === 'months' ? 'mensal' : 'anual'} - ${subscriptionData.description}`,
          quantity: 1,
          currency_id: 'BRL',
          unit_price: subscriptionData.price,
        }
      ],
      payer: {
        email: subscriptionData.payer_email
      },
      back_urls: {
        success: `https://www.webpulseservicos.com/sucesso?plan=${subscriptionData.plan_id}&payment_type=mp&subscription=true`,
        failure: `https://www.webpulseservicos.com/falha`,
        pending: `https://www.webpulseservicos.com/pendente`
      },
      auto_return: 'approved',
      external_reference: `webpulse-sub-${subscriptionData.plan_id}-${Date.now()}`,
      metadata: {
        subscription_type: subscriptionData.frequency_type,
        subscription_frequency: subscriptionData.frequency,
        plan_id: subscriptionData.plan_id
      }
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
        const errorText = await response.text();
        throw new Error(`Preference Error: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      
      if (result.init_point) {
        window.location.href = result.init_point;
      }
      
      return {
        id: result.id,
        init_point: result.init_point,
        sandbox_init_point: result.sandbox_init_point || result.init_point
      };
      
    } catch (error) {
      console.error('Erro na criação de preferência:', error);
      
      // Última tentativa: redirecionar direto para o MP com parâmetros
      const mpUrl = this.buildDirectMPUrl(subscriptionData);
      window.location.href = mpUrl;
      
      return {
        id: 'direct-redirect',
        init_point: mpUrl,
        sandbox_init_point: mpUrl
      };
    }
  }

  private buildDirectMPUrl(subscriptionData: SubscriptionData): string {
    const params = new URLSearchParams({
      public_key: MP_CONFIG.publicKey,
      title: `[ASSINATURA] ${subscriptionData.title}`,
      price: subscriptionData.price.toString(),
      currency_id: 'BRL',
      external_reference: `webpulse-direct-${subscriptionData.plan_id}`,
      back_url: `https://www.webpulseservicos.com/sucesso?plan=${subscriptionData.plan_id}&payment_type=mp&subscription=true`
    });

    return `https://www.mercadopago.com.br/checkout/v1/redirect?${params.toString()}`;
  }
}

export const mercadoPagoService = new MercadoPagoService();