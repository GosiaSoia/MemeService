const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="95" width="100" alt="Meme service logo" />
        <h1>
          {" "}
          Don't let your <span className="italic">MEMES</span> be Dreams
        </h1>
      </div>
    </header>
  );
};

export default Header;
