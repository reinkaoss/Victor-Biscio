import type { Skill } from '../data/skills';
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
};

const SkillIcon = ({ skill }: { skill: Skill }) => {
  const svg = skill.icon ? icons[skill.icon] : undefined;
  const wide = skill.icon === 'grpc';

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
