# Configuração do EmailJS

## 📧 Como Configurar o EmailJS para Envio Real de Emails

### 1. Criar Conta no EmailJS
1. Acesse: https://www.emailjs.com/
2. Clique em "Sign Up" e crie uma conta gratuita
3. Faça login na sua conta

### 2. Configurar Email Service
1. No dashboard, vá em "Email Services"
2. Clique em "Add New Service"
3. Escolha uma das opções:
   - **Gmail** (recomendado para contas Gmail)
   - **Outlook** (funciona com UOL, Yahoo, Hotmail, etc.)
   - **SMTP** (para configuração manual)
4. Conecte sua conta de email:
   - **Para Gmail**: seu_email@gmail.com
   - **Para UOL**: seu_email@uol.com.br
5. Anote o **Service ID** gerado

### 3. Configuração Específica para Email UOL
Se você quiser usar um email UOL (exemplo: contato@uol.com.br):

#### Opção A: Usando Outlook Service
1. Escolha "Outlook" no EmailJS
2. Use suas credenciais UOL:
   - Email: seu_email@uol.com.br
   - Senha: sua senha UOL
3. O EmailJS reconhecerá automaticamente como conta UOL

#### Opção B: Usando SMTP Manual
1. Escolha "SMTP" no EmailJS
2. Configure:
   - **SMTP Host**: smtp.uol.com.br
   - **SMTP Port**: 587 (ou 465 para SSL)
   - **Username**: seu_email@uol.com.br
   - **Password**: sua senha UOL
   - **Security**: STARTTLS ou SSL

### 4. Criar Email Template
1. Vá em "Email Templates"
2. Clique em "Create New Template"
3. Use este template:

```html
<h2>Novo Orçamento - Clz Solutions</h2>

<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Telefone:</strong> {{telefone}}</p>
<p><strong>Tipo de Evento:</strong> {{tipo_evento}}</p>
<p><strong>Data do Evento:</strong> {{data_evento}}</p>

<h3>Mensagem:</h3>
<p>{{mensagem}}</p>

<hr>
<p><em>Este email foi enviado através do formulário de contato do site Clz Solutions.</em></p>
```

4. Configure:
   - **To Email**: seu_email@uol.com.br (ou seu_email@gmail.com)
   - **From Name**: Clz Solutions
   - **Subject**: Novo Orçamento - {{from_name}}
5. Salve o template e anote o **Template ID**

### 5. Obter Chave Pública
1. Vá em "Account" → "API Keys"
2. Copie sua **Public Key**

### 6. Atualizar o Código
Substitua no arquivo `src/components/Contato.jsx`:

```javascript
// Linha 15 - Substitua YOUR_PUBLIC_KEY
emailjs.init("sua_chave_publica_aqui");

// Linhas 95-97 - Substitua os IDs
const result = await emailjs.send(
  'seu_service_id_aqui',     // Service ID
  'seu_template_id_aqui',    // Template ID
  templateParams
);
```

### 7. Atualizar Email de Destino
No arquivo `src/components/Contato.jsx`, linha 85:
```javascript
to_email: 'seu_email@uol.com.br', // Substitua pelo seu email UOL
```

### 8. Testar
1. Execute `npm run dev`
2. Preencha o formulário
3. Clique em "Enviar Mensagem"
4. Verifique se o email chegou no seu email UOL

## 🔧 Configurações Adicionais

### Variáveis do Template
O template usa estas variáveis:
- `{{from_name}}` - Nome do cliente
- `{{from_email}}` - Email do cliente
- `{{telefone}}` - Telefone do cliente
- `{{tipo_evento}}` - Tipo de evento selecionado
- `{{data_evento}}` - Data do evento
- `{{mensagem}}` - Mensagem do cliente

### Provedores de Email Suportados
- **Gmail** (gmail.com)
- **UOL** (uol.com.br)
- **Yahoo** (yahoo.com)
- **Hotmail/Outlook** (hotmail.com, outlook.com)
- **Provedores SMTP** (configuração manual)

### Plano Gratuito
- 200 emails por mês
- Templates ilimitados
- Suporte por email

### Planos Pagos
- Mais emails por mês
- Suporte prioritário
- Recursos avançados

## 🚨 Importante
- Mantenha suas chaves seguras
- Não compartilhe as chaves no GitHub
- Use variáveis de ambiente em produção
- Teste sempre antes de publicar
- Para UOL, pode ser necessário habilitar "Acesso a apps menos seguros"

## 📞 Suporte
Se precisar de ajuda: support@emailjs.com
