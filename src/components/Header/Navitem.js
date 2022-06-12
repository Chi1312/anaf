import React, { useState } from "react";

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        💥
      </a>

      {open && props.children}
    </li>
  );
}

export default NavItem;
