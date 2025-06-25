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

