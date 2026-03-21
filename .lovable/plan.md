

## Plano: Otimização WebP + Framer Motion

### O que será feito

**1. Otimização de imagens para WebP**
- Instalar `vite-imagetools` como dependência de dev — permite importar imagens com query params (`?format=webp`) para conversão automática durante o build
- Atualizar todos os imports de `.png` nos 5 arquivos de seção para usar `?format=webp&quality=80`
- Arquivos afetados: `SectionAplicacoes.tsx`, `SectionIlustracoes.tsx`, `SectionElementosVisuais.tsx`, `SectionConstrucaoSimbolo.tsx`
- SVGs permanecem como estão (já são otimizados)

**2. Framer Motion — Animações nas seções**
- Instalar `framer-motion` como dependência
- Criar componente utilitário `src/components/miv/AnimatedSection.tsx` usando `motion.div` com `whileInView` para animação de entrada (fade-up)
- Aplicar animações em:
  - `SectionWrapper` — cada seção aparece com fade-in ao entrar na viewport
  - Cards `glass-card` — animação escalonada (stagger) nos grids de imagens
  - Sidebar links — hover com scale sutil
  - Imagens individuais — fade-in ao carregar

### Detalhes técnicos

- **vite-imagetools**: Plugin Vite que processa imagens em build-time, convertendo para WebP sem necessidade de API externa. Precisa de declaração de tipos para TypeScript.
- **framer-motion**: Biblioteca React para animações declarativas. Usaremos `motion.div`, `whileInView`, `viewport={{ once: true }}` e `transition` com stagger.
- Total de **~18 imagens PNG** serão convertidas para WebP
- 7 arquivos editados + 1 novo componente criado

