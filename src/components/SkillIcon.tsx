import type { Skill } from '../data/skills';
import { getSkillBrand, skillTileLabel } from '../lib/skillBrand';
import html5 from 'simple-icons/icons/html5.svg?raw';
import css from 'simple-icons/icons/css.svg?raw';
import javascript from 'simple-icons/icons/javascript.svg?raw';
import react from 'simple-icons/icons/react.svg?raw';
import nuxt from 'simple-icons/icons/nuxt.svg?raw';
import astro from 'simple-icons/icons/astro.svg?raw';
import tailwindcss from 'simple-icons/icons/tailwindcss.svg?raw';
import shadcnui from 'simple-icons/icons/shadcnui.svg?raw';
import bootstrap from 'simple-icons/icons/bootstrap.svg?raw';
import handlebars from 'simple-icons/icons/handlebarsdotjs.svg?raw';
import jquery from 'simple-icons/icons/jquery.svg?raw';
import python from 'simple-icons/icons/python.svg?raw';
import selenium from 'simple-icons/icons/selenium.svg?raw';
import playwright from '../icons/playwright.svg?raw';
import googleappsscript from 'simple-icons/icons/googleappsscript.svg?raw';
import zapier from 'simple-icons/icons/zapier.svg?raw';
import make from 'simple-icons/icons/make.svg?raw';
import n8n from 'simple-icons/icons/n8n.svg?raw';
import git from 'simple-icons/icons/git.svg?raw';
import mcp from 'simple-icons/icons/modelcontextprotocol.svg?raw';
import nodedotjs from 'simple-icons/icons/nodedotjs.svg?raw';
import mysql from 'simple-icons/icons/mysql.svg?raw';
import supabase from 'simple-icons/icons/supabase.svg?raw';
import googleanalytics from 'simple-icons/icons/googleanalytics.svg?raw';
import googleads from 'simple-icons/icons/googleads.svg?raw';
import flutter from 'simple-icons/icons/flutter.svg?raw';
import graphql from 'simple-icons/icons/graphql.svg?raw';
import grpc from '../icons/grpc.svg?raw';
import premiere from '../icons/premiere.svg?raw';
import photoshop from '../icons/photoshop.svg?raw';
import apple from 'simple-icons/icons/apple.svg?raw';
import webhooks from '../icons/webhooks.svg?raw';
import dotdigitalSymbol from '../icons/dotdigital-symbol.png';

const icons: Record<string, string> = {
  html5,
  css,
  javascript,
  react,
  nuxt,
  astro,
  tailwindcss,
  shadcnui,
  bootstrap,
  handlebars,
  jquery,
  python,
  selenium,
  playwright,
  googleappsscript,
  zapier,
  make,
  n8n,
  git,
  mcp,
  nodedotjs,
  mysql,
  supabase,
  googleanalytics,
  googleads,
  flutter,
  graphql,
  grpc,
  premiere,
  photoshop,
  apple,
  webhooks,
};

type SkillIconProps = {
  skill: Skill;
  variant?: 'inline' | 'tile';
};

const TileMark = ({
  label,
  tileHex,
  foreground,
}: {
  label: string;
  tileHex: string;
  foreground: string;
}) => (
  <span
    aria-hidden
    className="relative grid h-full w-full place-items-center overflow-hidden rounded-2xl"
    style={{ backgroundColor: `#${tileHex}`, color: foreground }}
  >
    <span
      className="pointer-events-none absolute inset-0 opacity-25"
      style={{
        background: `radial-gradient(circle at 30% 20%, #ffffff 0%, transparent 55%)`,
      }}
    />
    <span className="relative font-bold tracking-tight" style={{ fontSize: label.length > 3 ? '0.62rem' : '0.78rem' }}>
      {label}
    </span>
  </span>
);

const SkillIcon = ({ skill, variant = 'inline' }: SkillIconProps) => {
  const svg = skill.icon ? icons[skill.icon] : undefined;
  const wide = skill.icon === 'grpc';

  if (variant === 'tile') {
    const brand = getSkillBrand(skill);
    const label = skillTileLabel(skill);

    if (brand.mode === 'mark') {
      return <TileMark label={label} tileHex={brand.tileHex} foreground={brand.foreground} />;
    }

    if (brand.mode === 'raster' && brand.raster) {
      return (
        <span
          aria-hidden
          className="grid h-full w-full place-items-center rounded-2xl p-2"
          style={{ backgroundColor: `#${brand.tileHex}` }}
        >
          <img src={brand.raster} alt="" className="h-[78%] w-[78%] object-contain" draggable={false} />
        </span>
      );
    }

    if (brand.mode === 'multicolor') {
      const fullBleed = skill.icon === 'premiere' || skill.icon === 'photoshop';
      return (
        <span
          aria-hidden
          className={`grid h-full w-full place-items-center overflow-hidden rounded-2xl ${
            fullBleed ? 'p-0 [&_svg]:h-full [&_svg]:w-full' : 'p-1.5 [&_svg]:h-full [&_svg]:w-full'
          } ${brand.wide && !fullBleed ? '[&_svg]:h-[88%] [&_svg]:w-[88%]' : ''}`}
          style={{ backgroundColor: `#${brand.tileHex}` }}
          dangerouslySetInnerHTML={{ __html: brand.markup }}
        />
      );
    }

    return (
      <span
        aria-hidden
        className={`grid h-full w-full place-items-center rounded-2xl p-2.5 ${
          brand.wide ? '[&_svg]:h-5 [&_svg]:w-9' : '[&_svg]:h-[58%] [&_svg]:w-[58%]'
        }`}
        style={{ backgroundColor: `#${brand.tileHex}` }}
        dangerouslySetInnerHTML={{ __html: brand.markup }}
      />
    );
  }

  if (skill.icon === 'dotdigital') {
    return (
      <span aria-hidden className="grid h-6 w-8 shrink-0 place-items-center rounded-md bg-[#fefbec]">
        <img src={dotdigitalSymbol} alt="" className="h-4 w-4 object-contain" draggable={false} />
      </span>
    );
  }

  if (!svg) {
    return (
      <span
        aria-hidden
        className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[#f3efe8] text-[8px] font-semibold tracking-tight text-[#7062ab]"
      >
        {skill.mark}
      </span>
    );
  }

  const markup = svg
    .replace(/<title>[\s\S]*?<\/title>/g, '')
    .replace('viewBox="0 0 128 128"', wide ? 'viewBox="4 40 120 52"' : 'viewBox="0 0 128 128"');

  return (
    <span
      aria-hidden
      className={`grid shrink-0 place-items-center rounded-md bg-[#f3efe8] text-[#16141c] ${
        wide ? 'h-6 w-10 [&_svg]:h-4 [&_svg]:w-8' : 'h-6 w-6 [&_svg]:h-3.5 [&_svg]:w-3.5'
      }`}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
};

export default SkillIcon;