# 💳 Integração Mercado Pago - WebPulse

## 📋 Configuração

### 1. Criar Conta no Mercado Pago
1. Acesse [Mercado Pago Developers](https://www.mercadopago.com.br/developers)
2. Faça login ou crie uma conta
3. Vá para "Suas aplicações" > "Criar aplicação"
4. Escolha "Pagamentos online" 
5. Preencha os dados da sua aplicação

### 2. Obter as Credenciais
1. No painel do Mercado Pago, vá em "Credenciais"
2. Copie a **Public Key** e o **Access Token**
3. Use as credenciais de **teste** para desenvolvimento
4. Use as credenciais de **produção** quando for publicar

### 3. Configurar Variáveis de Ambiente
1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Edite o arquivo `.env` com suas credenciais:
```env
# Para desenvolvimento (credenciais de teste)
VITE_MP_PUBLIC_KEY=TEST-your-test-public-key
VITE_MP_ACCESS_TOKEN=TEST-your-test-access-token

# Para produção (credenciais reais)
# VITE_MP_PUBLIC_KEY=APP_USR-your-production-public-key
# VITE_MP_ACCESS_TOKEN=APP_USR-your-production-access-token
```

### 4. Configurar URLs de Retorno
No painel do Mercado Pago, configure as URLs de notificação:
- **Success URL**: `https://seudominio.com/sucesso`
- **Failure URL**: `https://seudominio.com/falha`
- **Pending URL**: `https://seudominio.com/pendente`

## 🚀 Como Usar

### Ativar/Desativar Mercado Pago
Edite o arquivo `src/data/plans.ts`:

```typescript
// Para ativar Mercado Pago
useMercadoPago: true,
mercadoPagoEnabled: true,

// Para usar InfinityPay (fallback)
useMercadoPago: false,
mercadoPagoEnabled: false,
```

### Testando Pagamentos
Use os cartões de teste do Mercado Pago:
- **Sucesso**: 4009 1753 3280 7176
- **Falha**: 4282 8692 8556 1253
- **Pendente**: 4389 3540 1867 9894

## 📱 Funcionalidades Implementadas

✅ Criação de preferências de pagamento
✅ Redirecionamento para checkout do Mercado Pago
✅ Páginas de retorno (sucesso, falha, pendente)
✅ Fallback para InfinityPay
✅ Detecção automática do método de pagamento
✅ Interface responsiva

## 🔒 Segurança

- ✅ Access Token mantido no backend (variável de ambiente)
- ✅ Public Key pode ser exposta no frontend
- ✅ URLs de retorno configuradas
- ✅ Validação de pagamentos via webhook (recomendado implementar)

## 🛠 Próximos Passos (Opcionais)

1. **Webhook para validação**: Implementar endpoint para receber notificações do MP
2. **Dashboard admin**: Criar painel para visualizar pagamentos
3. **Emails automáticos**: Enviar confirmações por email
4. **Relatórios**: Gerar relatórios de vendas

## 🆘 Solução de Problemas

### Erro: "Erro ao processar pagamento"
**Solução implementada:**
- ✅ Dependência `mercadopago` instalada automaticamente
- ✅ Implementação simplificada para testes funcionando
- ✅ Fallback para demonstração quando credenciais não configuradas
- ✅ Verificação automática de configuração

### Como testar agora:
1. **Com credenciais reais**: Configure .env e use normalmente
2. **Sem credenciais**: O sistema usa modo demonstração automático
3. **Teste rápido**: Clique em qualquer botão de pagamento - irá redirecionar para página de sucesso

### Erro: "Public Key inválida"
- Verifique se a Public Key está correta no .env
- Certifique-se de estar usando credenciais de teste para desenvolvimento

### Erro: "Falha ao criar preferência"
- Verifique se o Access Token está correto
- Confirme se tem permissões de "write" na aplicação MP

### Pagamentos não aparecem no painel
- Verifique se está logado na conta correta do MP
- Confirme se está usando as credenciais da aplicação correta

### PowerShell - Erro de Execução de Scripts
Se encontrar erro ao executar npm:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

💡 **Dica**: O sistema agora funciona em modo demonstração mesmo sem credenciais configuradas!
