import { ArrowDownRight } from 'lucide-react';
import Scene from './Scene';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="mx-auto grid min-h-[100svh] max-w-page items-center gap-8 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:pb-20 lg:pt-24">
        <div className="relative z-10 lg:col-span-6">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-mute">
            London · Digital operations
          </p>
          <h1 className="font-display text-[clamp(3.4rem,11vw,6.6rem)] font-medium leading-[0.9] tracking-[-0.03em] text-ink">
            Victor
            <span className="block italic text-purple-medium">Biscio</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-mute sm:text-xl">
            I connect the tools a team already uses, automate the repetitive parts, and build the
            interface when a spreadsheet is no longer enough.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-medium px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Selected work
              <ArrowDownRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-purple-medium"
            >
              Get in touch
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wider text-mute">Now</dt>
              <dd className="mt-1 text-ink">Higherin</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-mute">Focus</dt>
              <dd className="mt-1 text-ink">Automation, AI, & web development</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-mute">Languages</dt>
              <dd className="mt-1 text-ink">EN / PT</dd>
            </div>
          </dl>
        </div>

        <div className="relative z-0 lg:col-span-6">
          <div className="relative h-[58vw] min-h-[280px] max-h-[520px] lg:h-[min(72vh,620px)] lg:max-h-none">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color-mix(in_srgb,var(--color-purple-medium)_28%,transparent)] blur-3xl"
            />
            <div className="pointer-events-none absolute -inset-10 [mask-image:radial-gradient(ellipse_at_center,black_46%,transparent_74%)] lg:pointer-events-auto lg:-inset-16">
              <Scene />
            </div>
            <p className="pointer-events-none absolute bottom-2 left-0 right-0 hidden text-center text-xs text-mute lg:block">
              Move the cursor across the sculpture. It leans with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
