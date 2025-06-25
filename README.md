�� WebPulse - Solução Completa para Presença Digital
📋 Descrição
WebPulse é uma plataforma moderna de criação de sites institucionais que oferece uma solução completa para empresas que desejam estabelecer sua presença digital. Desenvolvido com React, TypeScript e Tailwind CSS, o projeto oferece um sistema de planos integrado com InfinitePay para pagamentos seguros.
✨ Funcionalidades Principais
�� Interface Moderna
Design responsivo e moderno
Gradientes e animações suaves
Interface intuitiva e amigável
Compatível com mobile, tablet e desktop
�� Sistema de Planos
Plano Mensal: R$ 120/mês
Plano Anual: R$ 1.200/ano (16,67% de desconto)
Integração direta com InfinitePay
Links de pagamento seguros
💬 Chat WhatsApp Integrado
Chat automático com respostas pré-definidas
Simulação de digitação realista
Opções de mensagens rápidas
Redirecionamento para WhatsApp real
�� Páginas Principais
Home: Apresentação da empresa e destaque dos planos
Serviços: Detalhamento dos planos e funcionalidades
Portfólio: Galeria de projetos realizados
Sobre: Informações sobre a empresa
Contato: Formulário de contato integrado
Orçamento: Formulário para solicitação de orçamento
🛠️ Tecnologias Utilizadas
Frontend
React 18 - Biblioteca JavaScript para interfaces
TypeScript - Tipagem estática para JavaScript
Tailwind CSS - Framework CSS utilitário
Vite - Build tool e dev server
React Router - Roteamento da aplicação
Integrações
InfinitePay - Processamento de pagamentos
EmailJS - Envio de emails via JavaScript
WhatsApp API - Integração com WhatsApp
Deploy
Vercel - Plataforma de deploy e hospedagem
GitHub - Controle de versão
📦 Instalação e Configuração
Pré-requisitos
Node.js (versão 16 ou superior)
npm ou yarn
Passos para instalação
Clone o repositório
Apply to WhatsAppChat...
Run
webpulse
Instale as dependências
Apply to WhatsAppChat...
Run
install
Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto:
Apply to WhatsAppChat...
seu_user_id_aqui
Execute o projeto em desenvolvimento
Apply to WhatsAppChat...
Run
dev
Acesse a aplicação
Abra http://localhost:5173 no seu navegador
�� Deploy
Vercel (Recomendado)
Conecte seu repositório GitHub ao Vercel
Configure as variáveis de ambiente no painel do Vercel
Deploy automático a cada push para a branch main
Build para produção
Apply to WhatsAppChat...
Run
build
📁 Estrutura do Projeto
webpulse/
├── public/
│   ├── Imgs/           # Imagens do projeto
│   └── Projetos/       # Imagens dos projetos do portfólio
├── src/
│   ├── components/     # Componentes React reutilizáveis
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── PaymentModal.tsx
│   │   ├── PricingPlans.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── WhatsAppChat.tsx
│   ├── data/          # Dados estáticos
│   │   └── plans.ts
│   ├── pages/         # Páginas da aplicação
│   │   ├── About.tsx
│   │   ├── Budget.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   └── Sucesso.tsx
│   ├── services/      # Serviços e APIs
│   │   └── payment.ts
│   ├── types/         # Definições de tipos TypeScript
│   │   └── Plan.ts
│   ├── App.tsx        # Componente principal
│   ├── index.tsx      # Ponto de entrada
│   └── index.css      # Estilos globais
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
Apply to WhatsAppChat...
json
💳 Configuração do Sistema de Pagamentos
InfinitePay
Crie uma conta no InfinitePay
Configure os links de pagamento nos planos
Atualize os links em src/data/plans.ts:
export const plans: Plan[] = [
    {
        id: 'webpulse',
        name: 'Plano WebPulse',
        monthlyPaymentLink: 'https://invoice.infinitepay.io/plans/webpulse/SEU_LINK_MENSAL',
        yearlyPaymentLink: 'https://invoice.infinitepay.io/plans/webpulse/SEU_LINK_ANUAL',
        // ... outras configurações
    }
];
Apply to WhatsAppChat...
;
🎯 Funcionalidades Detalhadas
Chat WhatsApp
Respostas automáticas para perguntas frequentes
Simulação de digitação para experiência realista
Opções pré-definidas para facilitar o contato
Redirecionamento para WhatsApp real para atendimento personalizado
Sistema de Planos
Comparação entre planos mensal e anual
Cálculo automático de economia no plano anual
Modal de pagamento com detalhes do plano
Integração segura com InfinitePay
Portfólio
Galeria de projetos com modal de detalhes
Links diretos para sites dos clientes
Categorização por tipo de projeto
🔧 Scripts Disponíveis
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Visualiza o build de produção
npm run lint         # Executa o linter
Apply to WhatsAppChat...
Run
linter
📱 Responsividade
O projeto é totalmente responsivo e otimizado para:
Mobile: 320px - 768px
Tablet: 768px - 1024px
Desktop: 1024px+
�� Design System
Cores Principais
Vermelho: #dc2626 (Red-600)
Cinza Escuro: #111827 (Gray-900)
Verde: #22c55e (Green-500) - WhatsApp
Tipografia
Títulos: Inter, sans-serif
Corpo: Inter, sans-serif
🔒 Segurança
HTTPS obrigatório em produção
Validação de formulários
Sanitização de dados
Integração segura com InfinitePay
📞 Suporte
Para suporte técnico ou dúvidas:
WhatsApp: (84) 99869-9449
Email: contato@webpulse.com.br
📄 Licença
Este projeto é proprietário da WebPulse. Todos os direitos reservados.
Desenvolvido com ❤️ pela equipe WebPulse
Esse README está completo e cobre todos os aspectos importantes do projeto! Ele inclui:
✅ Descrição clara do projeto
✅ Instruções de instalação detalhadas
✅ Estrutura do projeto organizada
✅ Configurações necessárias
✅ Funcionalidades explicadas
✅ Scripts disponíveis
✅ Informações de suporte
Quer que eu ajuste alguma parte específica ou adicione mais informações?
