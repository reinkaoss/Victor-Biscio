import { ArrowUpRight, Github } from 'lucide-react';
import { projects, type Project } from '../data/projects';

const ProjectSection = ({ project, index }: { project: Project; index: number }) => {
  const shotHref = project.demo ?? project.github;

  return (
    <section id={index === 0 ? 'work' : undefined} className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-mute">
            {String(index + 1).padStart(2, '0')} — Work
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl">{project.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink">{project.summary}</p>
          <p className="mt-4 text-sm leading-relaxed text-mute">{project.body}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-line px-3 py-1 text-xs text-mute">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-purple-medium px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Open the live demo
                <ArrowUpRight size={16} />
              </a>
            ) : null}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={
                project.demo
                  ? 'inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-purple-medium decoration-2 underline-offset-4'
                  : 'inline-flex items-center gap-2 rounded-full bg-purple-medium px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90'
              }
            >
              <Github size={16} />
              Source
            </a>
          </div>
        </div>

        <a
          href={shotHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-10 block overflow-hidden rounded-[1.75rem] border border-line bg-stage shadow-[0_30px_80px_-40px_rgba(22,20,28,0.7)] ${
            project.phone ? 'mx-auto max-w-[440px]' : ''
          }`}
        >
          <img src={project.image} alt={project.imageAlt} className="w-full" />
        </a>
        {project.demo ? (
          <p className="mt-3 text-xs text-mute">
            The{' '}
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-purple-medium underline-offset-4"
            >
              live demo
            </a>
            .
          </p>
        ) : null}

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {project.features.map((feature, featureIndex) => (
            <li key={feature.title}>
              <span className="font-display text-purple-medium">0{featureIndex + 1}</span>
              <p className="mt-2 font-medium text-ink">{feature.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-mute">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectSection key={project.title} project={project} index={index} />
      ))}
    </>
  );
};

export default Projects;
