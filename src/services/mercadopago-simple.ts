// Implementação simplificada do Mercado Pago para demonstração
// Esta versão funciona sem backend e é ideal para testes

export interface PaymentData {
  title: string;
  description: string;
  price: number;
  plan_id: string;
  billingType: 'monthly' | 'yearly';
}

export class SimpleMercadoPagoService {
  private publicKey: string;
  private isProduction: boolean;

  constructor() {
    this.publicKey = import.meta.env.VITE_MP_PUBLIC_KEY || '';
    this.isProduction = !this.publicKey.includes('TEST-');
  }

  async processPayment(paymentData: PaymentData): Promise<void> {
    // Simula processamento do pagamento
    await this.simulateProcessing();

    // Para demonstração, redireciona para diferentes páginas baseado no valor
    const { price, plan_id, billingType } = paymentData;
    const redirectUrl = this.getRedirectUrl(price, plan_id, billingType);
    
    // Abre em nova aba para simular o fluxo do Mercado Pago
    window.open(redirectUrl, '_blank');
  }

  private async simulateProcessing(): Promise<void> {
    // Simula tempo de processamento
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

  private getRedirectUrl(price: number, planId: string, billingType: string): string {
    const baseUrl = window.location.origin;
    const params = new URLSearchParams({
      plan: planId,
      billing: billingType,
      amount: price.toString(),
      payment_id: `test_${Date.now()}`,
      status: 'approved',
      merchant_order_id: `order_${Date.now()}`
    });

    // Para demonstração, sempre redireciona para sucesso
    // Em produção, isso seria determinado pelo Mercado Pago
    return `${baseUrl}/sucesso?${params.toString()}`;
  }

  isConfigured(): boolean {
    return !!this.publicKey && this.publicKey !== 'TEST-your-public-key';
  }

  getStatus(): string {
    if (!this.isConfigured()) {
      return 'Não configurado - verifique as credenciais no arquivo .env';
    }
    return this.isProduction ? 'Modo Produção' : 'Modo Teste';
  }
}

export const simpleMercadoPagoService = new SimpleMercadoPagoService();
