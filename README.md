# 🚀 WebPulse - Solução Completa para Presença Digital

## 📋 Descrição

WebPulse é uma plataforma moderna de criação de sites institucionais que oferece uma solução completa para empresas que desejam estabelecer sua presença digital. Desenvolvido com React, TypeScript e Tailwind CSS, o projeto oferece um sistema de planos integrado com InfinitePay para pagamentos seguros.

## ✨ Funcionalidades Principais

### 🎨 Interface Moderna
- Design responsivo e moderno
- Gradientes e animações suaves
- Interface intuitiva e amigável
- Compatível com mobile, tablet e desktop

### 💳 Sistema de Planos
- **Plano Mensal**: R$ 120/mês
- **Plano Anual**: R$ 1.200/ano (16,67% de desconto)
- Integração direta com InfinitePay
- Links de pagamento seguros

### 💬 Chat WhatsApp Integrado
- Chat automático com respostas pré-definidas
- Simulação de digitação realista
- Opções de mensagens rápidas
- Redirecionamento para WhatsApp real

### 📄 Páginas Principais
- **Home**: Apresentação da empresa e destaque dos planos
- **Serviços**: Detalhamento dos planos e funcionalidades
- **Portfólio**: Galeria de projetos realizados
- **Sobre**: Informações sobre a empresa
- **Contato**: Formulário de contato integrado
- **Orçamento**: Formulário para solicitação de orçamento

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool e dev server
- **React Router** - Roteamento da aplicação

### Integrações
- **InfinitePay** - Processamento de pagamentos
- **EmailJS** - Envio de emails via JavaScript
- **WhatsApp API** - Integração com WhatsApp

### Deploy
- **Vercel** - Plataforma de deploy e hospedagem
- **GitHub** - Controle de versão

## 📦 Instalação e Configuração

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone https://github.com/joehadest/webpulse.git
cd webpulse
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo `.env` na raiz do projeto:
```env
REACT_APP_INFINITPAY_API_KEY=sua_chave_api_aqui
REACT_APP_EMAILJS_SERVICE_ID=seu_service_id_aqui
REACT_APP_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
REACT_APP_EMAILJS_USER_ID=seu_user_id_aqui
```

4. **Execute o projeto em desenvolvimento**
```bash
npm run dev
```

5. **Acesse a aplicação**
Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente no painel do Vercel
3. Deploy automático a cada push para a branch main

### Build para produção
```bash
npm run build
```

## 📁 Estrutura do Projeto

```
webpulse/
├── public/
│   ├── Imgs/           # Imagens do projeto
│   │   └── Projetos/       # Imagens dos projetos do portfólio
│   ├── src/
│   │   ├── components/     # Componentes React reutilizáveis
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── PaymentModal.tsx
│   │   │   ├── PricingPlans.tsx
│   │   │   ├── ProjectModal.tsx
│   │   │   ├── ScrollToTop.tsx
│   │   │   └── WhatsAppChat.tsx
│   │   ├── data/          # Dados estáticos
│   │   │   └── plans.ts
│   │   ├── pages/         # Páginas da aplicação
│   │   │   ├── About.tsx
│   │   │   ├── Budget.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Sucesso.tsx
│   │   ├── services/      # Serviços e APIs
│   │   │   └── payment.ts
│   │   ├── types/         # Definições de tipos TypeScript
│   │   │   └── Plan.ts
│   │   ├── App.tsx        # Componente principal
│   │   ├── index.tsx      # Ponto de entrada
│   │   └── index.css      # Estilos globais
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vercel.json
```

## 💳 Configuração do Sistema de Pagamentos

### InfinitePay
1. Crie uma conta no [InfinitePay](https://infinitepay.io)
2. Configure os links de pagamento nos planos
3. Atualize os links em `src/data/plans.ts`:

```typescript
export const plans: Plan[] = [
    {
        id: 'webpulse',
        name: 'Plano WebPulse',
        monthlyPaymentLink: 'https://invoice.infinitepay.io/plans/webpulse/SEU_LINK_MENSAL',
        yearlyPaymentLink: 'https://invoice.infinitepay.io/plans/webpulse/SEU_LINK_ANUAL',
        // ... outras configurações
    }
];
```

## 🎯 Funcionalidades Detalhadas

### Chat WhatsApp
- **Respostas automáticas** para perguntas frequentes
- **Simulação de digitação** para experiência realista
- **Opções pré-definidas** para facilitar o contato
- **Redirecionamento** para WhatsApp real para atendimento personalizado

### Sistema de Planos
- **Comparação** entre planos mensal e anual
- **Cálculo automático** de economia no plano anual
- **Modal de pagamento** com detalhes do plano
- **Integração segura** com InfinitePay

### Portfólio
- **Galeria de projetos** com modal de detalhes
- **Links diretos** para sites dos clientes
- **Categorização** por tipo de projeto

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Visualiza o build de produção
npm run lint         # Executa o linter
```

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Design System

### Cores Principais
- **Vermelho**: `#dc2626` (Red-600)
- **Cinza Escuro**: `#111827` (Gray-900)
- **Verde**: `#22c55e` (Green-500) - WhatsApp

### Tipografia
- **Títulos**: Inter, sans-serif
- **Corpo**: Inter, sans-serif

## 🔒 Segurança

- **HTTPS** obrigatório em produção
- **Validação** de formulários
- **Sanitização** de dados
- **Integração segura** com InfinitePay

## 📞 Suporte

Para suporte técnico ou dúvidas:
- **WhatsApp**: (84) 99869-9449
- **Email**: contato@webpulse.com.br

## 📄 Licença

Este projeto é proprietário da WebPulse. Todos os direitos reservados.

---

**Desenvolvido com ❤️ pela equipe WebPulse** 