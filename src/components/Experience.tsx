import { roles } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-mute">02 — Path</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl">
              Where the work happened
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mute">
            Operations first, then the engineering that makes an operation quieter. Currently
            finishing a full-stack postgraduate alongside the job.
          </p>
        </div>

        <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
          {roles.map((role) => (
            <li key={role.title} className="bg-paper p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-purple-medium">{role.period}</p>
              <h3 className="mt-4 font-display text-2xl leading-tight text-ink">{role.title}</h3>
              <p className="mt-1 text-sm text-mute">{role.place}</p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink/90">
                {role.points.map((point) => (
                  <li key={point} className="border-t border-line pt-3">
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
