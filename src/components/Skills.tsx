import FloatingTiles from './FloatingTiles';

const Skills = () => {
  return (
    <section id="skills" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-mute">03 — Skills</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Tools I use, and the ones I&apos;m studying now
        </h2>

        <FloatingTiles />
      </div>
    </section>
  );
};

export default Skills;