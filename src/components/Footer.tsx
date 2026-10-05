const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-3 px-5 py-8 text-sm text-mute sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Victor Biscio</p>
        <p>London</p>
      </div>
    </footer>
  );
};

export default Footer;
