import { roles } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-mute">02 — Experience</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Professional experience
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">
          From hospitality and teaching into digital operations. The recent work is automation,
          integrations, and the internal tools that sit on top of them.
        </p>

        <ol className="mt-12 border-t border-line">
          {roles.map((role) => (
            <li
              key={`${role.title}-${role.period}`}
              className="grid gap-2 border-b border-line py-8 sm:grid-cols-[9.5rem_1fr] sm:gap-10"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-purple-medium sm:pt-1">{role.period}</p>
              <div>
                <h3 className="font-display text-2xl leading-tight text-ink">{role.title}</h3>
                <p className="mt-1 text-sm text-mute">{role.place}</p>
                {role.points.length > 0 ? (
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
