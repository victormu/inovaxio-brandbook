import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

// URL base pública onde os arquivos de logo estão hospedados.
const ASSET_BASE = 'https://inovaxio-brandbook.lovable.app/brand'

const brandbook = {
  marca: {
    nome: 'INOVAXIO',
    tagline: 'Transformamos ideias em realidade digital.',
    significado:
      'A identidade da INOVAXIO une "Inovação", "Axio" (Axioma) e "IO" (Input/Output). O sufixo "xio" evoca excelência e o "vazio" na palavra sugere um espaço pronto para novas ideias.',
    pilares: [
      'Inovação com propósito',
      'Tecnologia humanizada',
      'Parceria além da entrega',
    ],
  },
  cores: {
    primarias: [
      { nome: 'Azul Primário', hex: '#2E2EFE', rgb: '46, 46, 254', cmyk: 'C89 / M73 / Y0 / K0' },
      { nome: 'Azul Secundário', hex: '#3245FD', rgb: '50, 69, 253', cmyk: 'C87 / M70 / Y0 / K0' },
      { nome: 'Dark / Base', hex: '#231F20', rgb: '35, 31, 32', cmyk: 'C72 / M67 / Y59 / K79' },
      { nome: 'Neutro Claro', hex: '#E6E7E8', rgb: '230, 231, 232', cmyk: 'C12 / M8 / Y8 / K0' },
    ],
    gradientes: [
      { nome: 'Gradiente Principal', css: 'linear-gradient(135deg, #2E2EFE, #3245FD)' },
      { nome: 'Gradiente de Fundo Dark', css: 'radial-gradient(ellipse at 30% 70%, rgba(46,46,254,0.35) 0%, #231F20 70%)' },
      { nome: 'Gradiente de Texto', css: 'linear-gradient(90deg, #6366ff 0%, #5555f0 30%, #4a4cc8 60%, #3b3d8e 100%)' },
    ],
  },
  tipografia: {
    titulos: 'Quicksand',
    corpo: 'Inter',
    regras:
      'Quicksand para títulos institucionais, wordmarks e textos decorativos; Inter para interface digital, redes sociais e corpo de texto. O wordmark "INOVAXIO" usa Quicksand com letter-spacing de -0.04em.',
  },
  logos: [
    { nome: 'Logo Principal', url: `${ASSET_BASE}/logo-principal.svg`, formato: 'svg' },
    { nome: 'Logo Colorido Vertical', url: `${ASSET_BASE}/logo-colorido-vertical.svg`, formato: 'svg' },
    { nome: 'Logo Mono Branca', url: `${ASSET_BASE}/logo-mono-branca.svg`, formato: 'svg' },
    { nome: 'Logo Negativo', url: `${ASSET_BASE}/logo-negativo.svg`, formato: 'svg' },
    { nome: 'Símbolo', url: `${ASSET_BASE}/logo-simbolo.svg`, formato: 'svg' },
    { nome: 'Símbolo Branco', url: `${ASSET_BASE}/logo-simbolo-branco.svg`, formato: 'svg' },
  ],
  tomDeVoz: {
    atributos: ['Direto', 'Empático', 'Humano', 'Parceiro', 'Confiável', 'Sem Jargão'],
    canais: [
      { nome: 'Instagram', tom: 'Provocativo e direto. Usa perguntas retóricas, imperativo e frases de impacto curtas.' },
      { nome: 'Proposta Comercial', tom: 'Consultivo e empático. Fala a língua do cliente, não da tecnologia.' },
      { nome: 'Site', tom: 'Claro e orientado a benefícios. Zero jargão técnico.' },
    ],
    frasesChave: [
      'Visualize. Toque. Acredite.',
      'Transformamos ideias em realidade digital.',
      'Sem jargão, sem surpresas, com foco no que importa: o seu negócio.',
      'Entrega não é o fim. É o começo da nossa parceria.',
    ],
  },
  elementosVisuais: {
    linguagem: ['Glassmorphism', 'Glows e brilhos azuis', 'Gradientes lúdicos'],
    elementosChave: [
      { nome: 'Mãos', significado: 'Parceria / confiança' },
      { nome: 'Pessoas', significado: 'Figuras abstratas' },
      { nome: 'Esfera', significado: 'Inovação / globalidade' },
    ],
  },
  usosIncorretos: [
    'Alterar as cores do logo',
    'Distorcer proporções',
    'Usar em fundo de baixo contraste',
    'Adicionar sombra ou efeito ao logo',
    'Rotacionar o logo',
    'Usar o wordmark sem o símbolo',
    'Usar fontes fora do sistema',
    'Criar gradientes com cores fora da paleta',
    'Usar opacidade reduzida no logo',
  ],
  versao: '2.0',
}

Deno.serve((req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  return new Response(JSON.stringify(brandbook, null, 2), {
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
    status: 200,
  })
})
