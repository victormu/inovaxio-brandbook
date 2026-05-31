# Endpoint público do Brandbook INOVAXIO

Vou criar um endpoint HTTP público e simples (uma Supabase Edge Function) que qualquer ferramenta externa pode acessar via uma única URL `GET`, recebendo todo o conteúdo do brandbook em formato JSON estruturado. Sem necessidade de autenticação, sem montar uma API complexa — apenas um link que devolve os dados.

## Como vai funcionar

Uma ferramenta externa (n8n, Zapier, Figma, outro app, etc.) faz uma requisição simples:

```text
GET https://wplgbbsecmlwkljbmkba.supabase.co/functions/v1/brandbook
```

E recebe de volta algo como:

```text
{
  "marca": { "nome": "INOVAXIO", "tagline": "...", "significado": "..." },
  "cores": [ { "nome": "...", "hex": "...", "uso": "..." } ],
  "tipografia": { "titulos": "Quicksand", "corpo": "Inter", "regras": "..." },
  "logos": [ { "nome": "Logo principal", "url": "https://.../logo-principal.svg" } ],
  "tomDeVoz": { ... },
  "elementosVisuais": { ... },
  "usosIncorretos": [ ... ]
}
```

## O que será incluído no JSON

- **Marca**: nome, tagline e significado (do conteúdo já existente do site)
- **Cores**: paleta com nome, valor hex e uso
- **Tipografia**: fontes de título/corpo e regras
- **Logos/assets**: URLs públicas e acessíveis de cada variação de logo e símbolo
- **Tom de voz**, **elementos visuais** e **usos incorretos**: resumidos em texto estruturado

Os dados serão extraídos do conteúdo atual das seções do site (`src/components/sections/*`) para que o JSON reflita exatamente o que está publicado.

## Detalhes técnicos

- Criar a Edge Function `supabase/functions/brandbook/index.ts`.
- Responde a `GET` retornando o objeto JSON; responde a `OPTIONS` (preflight CORS).
- **CORS liberado** (`Access-Control-Allow-Origin: *`) para que ferramentas e navegadores acessem sem bloqueio.
- **Público**: deploy com `verify_jwt = false` em `supabase/config.toml`, sem checagem de token — qualquer ferramenta acessa direto.
- Os logos serão referenciados por URL pública. Como os arquivos hoje vivem em `src/assets`, vou colocar cópias dos SVGs em `public/brand/` para que tenham URLs estáveis e diretamente acessíveis (ex.: `https://inovaxio-brandbook.lovable.app/brand/logo-principal.svg`), e o JSON apontará para essas URLs.
- O conteúdo do JSON ficará centralizado dentro da própria função, fácil de atualizar depois.

## Resultado

Você terá uma única URL pública para compartilhar com qualquer ferramenta, devolvendo todo o brandbook em JSON pronto para consumo — sem complexidade de API nem autenticação.
