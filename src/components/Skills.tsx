import { alsoSkills, languages, skillGroups } from '../data/skills';
import SkillIcon from './SkillIcon';

const Skills = () => {
  return (
    <section id="skills" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-mute">03 — Skills</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Tools I use, and the ones I&apos;m studying now
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-2xl text-ink">{group.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-mute">{group.note}</p>
              <ul className="mt-5">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-2.5 border-b border-line py-2 text-sm text-ink">
                    <SkillIcon skill={item} />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8">
          {alsoSkills.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center gap-2 rounded-full bg-[color-mix(in_srgb,var(--color-purple-medium)_14%,transparent)] py-1.5 pl-1.5 pr-3 text-sm text-ink"
            >
              <SkillIcon skill={skill} />
              {skill.name}
            </span>
          ))}
          {languages.map((language) => (
            <span
              key={language}
              className="rounded-full bg-[color-mix(in_srgb,var(--color-purple-medium)_14%,transparent)] px-3 py-1.5 text-sm text-ink"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
