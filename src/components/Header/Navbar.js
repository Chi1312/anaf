import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <span className="navbar-span">Meniu &rarr;</span>
        {props.children}
      </ul>
    </nav>
  );
}

export default Navbar;
