import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Router>
          <ul>
            <li>Quienes somos</li>
            <li>Proximos conciertos</li>
            <li>Contacto</li>
          </ul>
        </Router>
      </nav>
    </header>
  );
}

export default Header;
