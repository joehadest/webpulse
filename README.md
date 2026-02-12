# WebPulse

Projeto Next.js com TypeScript, Tailwind CSS e estrutura compatível com shadcn/ui.

## Estrutura do projeto

- **Componentes UI:** `components/ui/` — componentes reutilizáveis (ex.: `shape-landing-hero.tsx`)
- **Utilitários:** `lib/utils.ts` — função `cn()` para classes Tailwind
- **Estilos globais:** `app/globals.css` — diretivas do Tailwind

### Por que `components/ui`?

O diretório `components/ui` é o padrão do **shadcn/ui**. Manter esse caminho:

- Mantém consistência com a CLI do shadcn (`npx shadcn@latest add button`)
- Facilita adicionar outros componentes do shadcn no futuro
- Segue a convenção usada na documentação e na comunidade

## Setup inicial (se começar do zero)

1. **Criar projeto Next.js com Tailwind e TypeScript:**
   ```bash
   npx create-next-app@latest . --tailwind --typescript --eslint --app
   ```

2. **Inicializar shadcn/ui (opcional):**
   ```bash
   npx shadcn@latest init
   ```
   Escolha: Style Default, Base color Neutral, CSS variables Yes. Isso cria `components.json` e pode ajustar `tailwind.config` e `globals.css`.

3. **Instalar dependências do hero:**
   ```bash
   npm install framer-motion lucide-react clsx tailwind-merge
   ```

## Como rodar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). A página inicial usa o `DemoHeroGeometric` com o hero de shapes.

## Uso do componente

```tsx
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

<HeroGeometric
  badge="Sua marca"
  title1="Seu título"
  title2="Seu subtítulo"
/>
```

## Dependências do shape-landing-hero

- **framer-motion** — animações
- **lucide-react** — ícone `Circle`
- **@/lib/utils** — `cn()` para classes condicionais (clsx + tailwind-merge)

O componente não usa imagens externas; apenas gradientes e formas. Ícones já vêm do `lucide-react`.
