const Header = ({ title }) => {
  return (
    <div className="mb-10">
      <p className="text-slate-800 text-3xl font-extrabold tracking-tight">
        {title}
      </p>
    </div>
  );
};

export default Header;
