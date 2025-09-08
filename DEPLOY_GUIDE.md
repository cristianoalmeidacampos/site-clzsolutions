# 🚀 Guia de Deploy - Clz Solutions

## 📋 Pré-requisitos
- Conta no GitHub
- Conta na Netlify
- Node.js instalado (versão 18+)

## 🔧 Passo a Passo do Deploy

### 1. Preparar o Projeto

#### 1.1 Verificar dependências
```bash
npm install
```

#### 1.2 Testar build local
```bash
npm run build
```

#### 1.3 Verificar se a pasta `dist` foi criada
```bash
ls dist/
```

### 2. Configurar GitHub

#### 2.1 Criar repositório no GitHub
1. Acesse: https://github.com
2. Clique em "New repository"
3. Nome: `clzsolutions-landing`
4. Descrição: "Site da Clz Solutions - Soluções Visuais"
5. Público ou Privado (sua escolha)
6. **NÃO** inicialize com README (já temos arquivos)

#### 2.2 Conectar repositório local ao GitHub
```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Initial commit - Clz Solutions Landing Page"

# Adicionar repositório remoto (substitua USERNAME pelo seu usuário)
git remote add origin https://github.com/USERNAME/clzsolutions-landing.git

# Enviar para GitHub
git branch -M main
git push -u origin main
```

### 3. Configurar Netlify

#### 3.1 Criar conta na Netlify
1. Acesse: https://netlify.com
2. Clique em "Sign up"
3. Escolha "Sign up with GitHub"

#### 3.2 Conectar repositório
1. No dashboard da Netlify, clique em "Add new site"
2. Escolha "Import an existing project"
3. Clique em "Deploy with GitHub"
4. Autorize o acesso ao GitHub
5. Selecione o repositório `clzsolutions-landing`

#### 3.3 Configurar build settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: `18` (ou deixar automático)

#### 3.4 Configurar variáveis de ambiente (opcional)
Se você configurar o EmailJS, adicione as variáveis:
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`

#### 3.5 Deploy
1. Clique em "Deploy site"
2. Aguarde o build (2-3 minutos)
3. Site estará disponível em: `https://random-name.netlify.app`

### 4. Configurar Domínio Personalizado

#### 4.1 Adicionar domínio
1. No dashboard da Netlify, vá em "Domain settings"
2. Clique em "Add custom domain"
3. Digite seu domínio (ex: `clzsolutions.com`)
4. Siga as instruções de DNS

#### 4.2 Configurar DNS
Adicione estes registros no seu provedor de DNS:
```
Type: CNAME
Name: www
Value: random-name.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

### 5. Configurar EmailJS (Opcional)

#### 5.1 Atualizar configuração
No arquivo `src/components/Contato.jsx`, substitua:
```javascript
// Linha 18
emailjs.init(process.env.VITE_EMAILJS_PUBLIC_KEY);

// Linhas 95-97
const result = await emailjs.send(
  process.env.VITE_EMAILJS_SERVICE_ID,
  process.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams
);
```

#### 5.2 Adicionar variáveis no Netlify
1. Vá em "Site settings" > "Environment variables"
2. Adicione:
   - `VITE_EMAILJS_PUBLIC_KEY` = sua chave pública
   - `VITE_EMAILJS_SERVICE_ID` = seu service ID
   - `VITE_EMAILJS_TEMPLATE_ID` = seu template ID

### 6. Atualizações Futuras

#### 6.1 Fazer alterações
```bash
# Fazer alterações no código
# Testar localmente
npm run dev

# Commit e push
git add .
git commit -m "Descrição das alterações"
git push origin main
```

#### 6.2 Deploy automático
- Netlify detecta mudanças automaticamente
- Faz novo deploy em 2-3 minutos
- Site atualizado automaticamente

## 🔍 Troubleshooting

### Problema: Build falha
**Solução:**
1. Verificar se `npm run build` funciona localmente
2. Verificar logs de build na Netlify
3. Verificar versão do Node.js

### Problema: Imagens não carregam
**Solução:**
1. Verificar se imagens estão na pasta `src/assets/`
2. Verificar se imports estão corretos
3. Verificar se caminhos estão corretos

### Problema: Formulário não funciona
**Solução:**
1. Verificar se EmailJS está configurado
2. Verificar variáveis de ambiente
3. Verificar console do navegador

### Problema: Páginas não carregam (404)
**Solução:**
1. Verificar arquivo `netlify.toml`
2. Verificar configuração de redirects
3. Verificar se é SPA (Single Page App)

## 📞 Suporte
- **Netlify Docs**: https://docs.netlify.com
- **Vite Docs**: https://vitejs.dev/guide/deploy.html
- **GitHub Docs**: https://docs.github.com

## 🎯 URLs Importantes
- **Site**: https://seu-dominio.netlify.app
- **Netlify Dashboard**: https://app.netlify.com
- **GitHub Repo**: https://github.com/USERNAME/clzsolutions-landing
