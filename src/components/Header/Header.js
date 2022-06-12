import SearchBar from "./../SearchBar/SearchBar";

function Header() {
  return (
    <div className="header">
      <img
        src="https://i.ibb.co/XJqQL82/logo.png"
        className="header-logo"
        height="100px"
        width="225px"
      />
      <div className="header-left">
        <SearchBar></SearchBar>
        <div className="header-left-left">
          <a className="header-button" href="#">
            Căutare certificat
          </a>
          <a className="header-button" href="#">
            Autentificare certificat
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
