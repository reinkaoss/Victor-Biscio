import { ArrowUpRight, Github } from 'lucide-react';
import { projects, type Project } from '../data/projects';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const shotHref = project.demo ?? project.github;
  const image = (
    <img
      src={project.image}
      alt={project.imageAlt}
      className={`w-full object-cover object-top ${project.phone ? 'aspect-[4/5]' : 'aspect-[16/10]'}`}
    />
  );

  return (
    <article className="flex flex-col">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-mute">
        {String(index + 1).padStart(2, '0')} — Work
      </p>
      <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">{project.title}</h2>
      <p className="mt-4 text-base leading-relaxed text-ink">{project.summary}</p>
      <p className="mt-3 text-sm leading-relaxed text-mute">{project.body}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full border border-line px-3 py-1 text-xs text-mute">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-purple-medium px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Open the live demo
            <ArrowUpRight size={16} />
          </a>
        ) : null}
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={
              project.demo
                ? 'inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-purple-medium decoration-2 underline-offset-4'
                : 'inline-flex items-center gap-2 rounded-full bg-purple-medium px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90'
            }
          >
            <Github size={16} />
            Source
          </a>
        ) : null}
      </div>

      {shotHref ? (
        <a
          href={shotHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block overflow-hidden rounded-[1.5rem] border border-line bg-stage"
        >
          {image}
        </a>
      ) : (
        <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-line bg-stage">{image}</div>
      )}

      <ul className="mt-6 grid overflow-hidden rounded-[1.5rem] border border-line bg-ink/[0.03] sm:grid-cols-2">
        {project.features.map((feature, featureIndex) => (
          <li
            key={feature.title}
            className="border-b border-line p-4 last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
          >
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-sm tabular-nums text-purple-medium">
                {String(featureIndex + 1).padStart(2, '0')}
              </span>
              <p className="font-medium text-ink">{feature.title}</p>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-mute">{feature.text}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="work" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-page grid-cols-1 gap-x-12 gap-y-20 px-5 sm:px-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
