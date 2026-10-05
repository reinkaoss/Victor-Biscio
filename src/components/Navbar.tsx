import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const links = [
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'bg-paper/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5 text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-line text-xs font-medium tracking-wide">
            VB
          </span>
          <span className="text-sm font-medium tracking-wide">Victor Biscio</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-mute transition-colors hover:text-ink"
            >
              {link.name}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="ml-2 grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors hover:border-purple-medium"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

    </header>
    {open && (
      <nav className="fixed inset-0 z-30 overflow-y-auto bg-paper px-5 pb-10 pt-24 md:hidden">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setOpen(false)}
            className="block border-b border-line py-4 font-display text-4xl text-ink"
          >
            {link.name}
          </a>
        ))}
      </nav>
    )}
    </>
  );
};

export default Navbar;
