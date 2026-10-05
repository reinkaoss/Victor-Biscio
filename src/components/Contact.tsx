import { FormEvent, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio note from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:victorbiscio1@hotmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-page gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-mute">04 — Contact</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-ink sm:text-6xl">
            Let&apos;s talk.
          </h2>
          <p className="mt-5 max-w-sm text-mute">
            Open to digital operations, automation, and front-end work. Based in London.
          </p>
          <a
            href="mailto:victorbiscio1@hotmail.com"
            className="mt-8 inline-flex items-center gap-2 text-lg text-ink underline decoration-purple-medium decoration-2 underline-offset-4"
          >
            victorbiscio1@hotmail.com
            <ArrowUpRight size={18} />
          </a>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="https://www.linkedin.com/in/victor-biscio-160621167/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mute transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/reinkaoss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mute transition-colors hover:text-ink"
            >
              GitHub
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7">
          {sent ? (
            <p className="rounded-3xl border border-line bg-[color-mix(in_srgb,var(--color-purple-medium)_12%,transparent)] p-8 text-ink">
              Your mail app should be open with the note ready. If it isn&apos;t, write to
              victorbiscio1@hotmail.com.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-mute">
                Name
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  className="mt-2 w-full rounded-2xl border border-line bg-transparent px-4 py-3 text-ink outline-none transition-colors focus:border-purple-medium"
                />
              </label>
              <label className="block text-sm text-mute">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  className="mt-2 w-full rounded-2xl border border-line bg-transparent px-4 py-3 text-ink outline-none transition-colors focus:border-purple-medium"
                />
              </label>
              <label className="block text-sm text-mute sm:col-span-2">
                Message
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  className="mt-2 w-full resize-y rounded-2xl border border-line bg-transparent px-4 py-3 text-ink outline-none transition-colors focus:border-purple-medium"
                />
              </label>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-purple-medium px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
                >
                  Send message
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
