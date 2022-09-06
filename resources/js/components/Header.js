import Navbar from "./Navbar";

function Header({ logo, user }) {
  return (
    <header className="header">
      <div className="header__brand">
        <img src={logo} alt="Logo Oke Garden" />
      </div>
      <Navbar />
      <div className="user">
        <img src={user} alt="user" />
      </div>
    </header>
  );
}

export default Header;
