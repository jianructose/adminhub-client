const Header = ({ title }) => {
  return (
    <header className="mb-4">
      <p className="text-slate-800 text-3xl font-extrabold tracking-wide">
        {title}
      </p>
    </header>
  );
};

export default Header;
