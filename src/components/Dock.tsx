import { useEffect, useRef, useState } from 'react';
import { Briefcase, Home, Mail, Sparkles, Waypoints } from 'lucide-react';

const items = [
  { id: 'home', label: 'Home', href: '#home', icon: Home },
  { id: 'work', label: 'Work', href: '#work', icon: Briefcase },
  { id: 'experience', label: 'Experience', href: '#experience', icon: Waypoints },
  { id: 'skills', label: 'Skills', href: '#skills', icon: Sparkles },
  { id: 'contact', label: 'Contact', href: '#contact', icon: Mail },
];

const REACH = 132;
const MAX_EXTRA = 0.72;

const Dock = ({ hidden }: { hidden: boolean }) => {
  const buttons = useRef<(HTMLAnchorElement | null)[]>([]);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-42% 0px -42% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scaleFromPointer = (clientX: number) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    buttons.current.forEach((button) => {
      if (!button) return;
      const rect = button.getBoundingClientRect();
      const distance = Math.abs(clientX - (rect.left + rect.width / 2));
      const influence = distance >= REACH ? 0 : 1 - distance / REACH;
      button.style.transform = `scale(${1 + influence ** 1.35 * MAX_EXTRA})`;
    });
  };

  const resetScale = () => {
    buttons.current.forEach((button) => {
      if (button) button.style.transform = 'scale(1)';
    });
  };

  if (hidden) return null;

  return (
    <nav
      aria-label="Sections"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 sm:bottom-6"
    >
      <div
        onMouseMove={(event) => scaleFromPointer(event.clientX)}
        onMouseLeave={resetScale}
        className="pointer-events-auto flex items-end gap-1 rounded-full border border-line bg-paper/80 px-2 py-2 shadow-[0_16px_40px_rgb(0_0_0/0.16)] backdrop-blur-md"
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <div key={item.id} className="flex w-11 flex-col items-center">
              <a
                ref={(node) => {
                  buttons.current[index] = node;
                }}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                onFocus={(event) => scaleFromPointer(event.currentTarget.getBoundingClientRect().left + 22)}
                onBlur={resetScale}
                className={`group relative grid h-11 w-11 origin-bottom place-items-center rounded-full transition-colors duration-150 ease-out ${
                  isActive ? 'text-purple-medium' : 'text-ink hover:bg-ink/5'
                }`}
              >
                <Icon size={20} strokeWidth={1.75} />
                <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-2.5 py-1 text-xs text-paper opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {item.label}
                </span>
              </a>
              <span
                aria-hidden
                className={`mt-0.5 h-1 w-1 rounded-full ${isActive ? 'bg-purple-medium' : 'bg-transparent'}`}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Dock;
