import type { Skill } from '../data/skills';
import {
  siApple,
  siAstro,
  siBootstrap,
  siCss,
  siFlutter,
  siGit,
  siGoogleads,
  siGoogleanalytics,
  siGoogleappsscript,
  siGraphql,
  siHandlebarsdotjs,
  siHtml5,
  siJavascript,
  siJquery,
  siMake,
  siModelcontextprotocol,
  siMysql,
  siN8n,
  siNodedotjs,
  siNuxt,
  siPython,
  siReact,
  siSelenium,
  siShadcnui,
  siSupabase,
  siTailwindcss,
  siZapier,
} from 'simple-icons';
import playwright from '../icons/playwright.svg?raw';
import grpc from '../icons/grpc.svg?raw';
import premiere from '../icons/premiere.svg?raw';
import photoshop from '../icons/photoshop.svg?raw';
import webhooks from '../icons/webhooks.svg?raw';

export type SkillBrand = {
  hex: string;
  svg?: string;
  wide?: boolean;
  multicolor?: boolean;
  raster?: string;
};

type ResolvedBrand = SkillBrand & {
  foreground: string;
  markup: string;
  tileHex: string;
  mode: 'mark' | 'multicolor' | 'mono' | 'raster';
};

const LIGHT_TILE = 'F3EFE8';

const customBrands: Record<string, SkillBrand> = {
  playwright: { hex: LIGHT_TILE, svg: playwright, multicolor: true },
  grpc: { hex: LIGHT_TILE, svg: grpc, wide: true, multicolor: true },
  premiere: { hex: LIGHT_TILE, svg: premiere, multicolor: true },
  photoshop: { hex: LIGHT_TILE, svg: photoshop, multicolor: true },
  dotdigital: { hex: 'FEFBEC', raster: '/icons/dotdigital-symbol.png' },
  webhooks: { hex: '7C3AED', svg: webhooks },
};

const simpleBrands: Record<string, SkillBrand> = {
  html5: { hex: siHtml5.hex, svg: siHtml5.svg },
  css: { hex: siCss.hex, svg: siCss.svg },
  javascript: { hex: siJavascript.hex, svg: siJavascript.svg },
  react: { hex: siReact.hex, svg: siReact.svg },
  nuxt: { hex: siNuxt.hex, svg: siNuxt.svg },
  astro: { hex: siAstro.hex, svg: siAstro.svg },
  tailwindcss: { hex: siTailwindcss.hex, svg: siTailwindcss.svg },
  shadcnui: { hex: siShadcnui.hex, svg: siShadcnui.svg },
  bootstrap: { hex: siBootstrap.hex, svg: siBootstrap.svg },
  handlebars: { hex: siHandlebarsdotjs.hex, svg: siHandlebarsdotjs.svg },
  jquery: { hex: siJquery.hex, svg: siJquery.svg },
  python: { hex: siPython.hex, svg: siPython.svg },
  selenium: { hex: siSelenium.hex, svg: siSelenium.svg },
  googleappsscript: { hex: siGoogleappsscript.hex, svg: siGoogleappsscript.svg },
  zapier: { hex: siZapier.hex, svg: siZapier.svg },
  make: { hex: siMake.hex, svg: siMake.svg },
  n8n: { hex: siN8n.hex, svg: siN8n.svg },
  git: { hex: siGit.hex, svg: siGit.svg },
  mcp: { hex: siModelcontextprotocol.hex, svg: siModelcontextprotocol.svg },
  nodedotjs: { hex: siNodedotjs.hex, svg: siNodedotjs.svg },
  mysql: { hex: siMysql.hex, svg: siMysql.svg },
  supabase: { hex: siSupabase.hex, svg: siSupabase.svg },
  googleanalytics: { hex: siGoogleanalytics.hex, svg: siGoogleanalytics.svg },
  googleads: { hex: siGoogleads.hex, svg: siGoogleads.svg },
  flutter: { hex: siFlutter.hex, svg: siFlutter.svg },
  graphql: { hex: siGraphql.hex, svg: siGraphql.svg },
  apple: { hex: siApple.hex, svg: siApple.svg },
};

const markBrands: Record<string, string> = {
  API: '0EA5E9',
  AI: '10A37F',
  LLM: '10A37F',
  RAG: '7062AB',
  EM: 'E34F26',
  WS: '2563EB',
};

function luminance(hex: string): number {
  const value = hex.replace('#', '');
  const r = parseInt(value.slice(0, 2), 16) / 255;
  const g = parseInt(value.slice(2, 4), 16) / 255;
  const b = parseInt(value.slice(4, 6), 16) / 255;
  const toLinear = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

export function brandForeground(hex: string): string {
  return luminance(hex) > 0.62 ? '#16141c' : '#ffffff';
}

function tileBackground(hex: string): string {
  if (hex === LIGHT_TILE) return LIGHT_TILE;
  if (luminance(hex) < 0.12) return LIGHT_TILE;
  return hex;
}

function stripTitle(svg: string): string {
  return svg.replace(/<title>[\s\S]*?<\/title>/g, '');
}

function tintMonoSvg(svg: string, fill: string, wide?: boolean): string {
  let out = stripTitle(svg).replace(/<path\b([^>]*?)(\/?)>/gi, (_match, attrs: string, close: string) => {
    const withoutFill = attrs.replace(/\s*fill="[^"]*"/gi, '');
    return `<path fill="${fill}"${withoutFill}${close}>`;
  });
  if (wide) {
    out = out.replace('viewBox="0 0 128 128"', 'viewBox="4 40 120 52"');
  }
  return out;
}

function preserveColorSvg(svg: string, wide?: boolean): string {
  let out = stripTitle(svg);
  if (wide) {
    out = out.replace('viewBox="0 0 128 128"', 'viewBox="4 40 120 52"');
  }
  return out;
}

export function skillTileLabel(skill: Skill): string {
  if (skill.mark) return skill.mark;
  const compact = skill.name.replace(/[^a-zA-Z0-9]/g, '');
  if (compact.length >= 2) return compact.slice(0, 3).toUpperCase();
  const words = skill.name.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return `${words[0][0]}${words[1][0]}`.toUpperCase();
  }
  return skill.name.slice(0, 2).toUpperCase();
}

function resolveBrand(skill: Skill): SkillBrand | undefined {
  if (skill.icon) {
    return customBrands[skill.icon] ?? simpleBrands[skill.icon];
  }
  return undefined;
}

export function getSkillBrand(skill: Skill): ResolvedBrand {
  const brand = resolveBrand(skill);

  if (brand?.raster) {
    return {
      ...brand,
      svg: '',
      foreground: '#16141c',
      markup: '',
      tileHex: brand.hex,
      mode: 'raster',
    };
  }

  if (!brand) {
    const label = skillTileLabel(skill);
    const hex = markBrands[label] ?? markBrands[skill.mark ?? ''] ?? '7062AB';
    const foreground = brandForeground(hex);
    return {
      hex,
      svg: '',
      foreground,
      markup: '',
      tileHex: hex,
      mode: 'mark',
    };
  }

  if (brand.multicolor && brand.svg) {
    const markup = preserveColorSvg(brand.svg, brand.wide);
    return {
      ...brand,
      foreground: '#16141c',
      markup: markup.includes('<path') || markup.includes('linearGradient') ? markup : '',
      tileHex: LIGHT_TILE,
      mode: markup ? 'multicolor' : 'mark',
    };
  }

  const tileHex = tileBackground(brand.hex);
  const onTile = tileHex === LIGHT_TILE ? '#16141c' : brandForeground(brand.hex);
  const markup = brand.svg ? tintMonoSvg(brand.svg, onTile, brand.wide) : '';

  return {
    ...brand,
    foreground: onTile,
    markup: markup.includes('<path') ? markup : '',
    tileHex,
    mode: markup ? 'mono' : 'mark',
  };
}

export function isMarkOnly(skill: Skill): boolean {
  return getSkillBrand(skill).mode === 'mark';
}