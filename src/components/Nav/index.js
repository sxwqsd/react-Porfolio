import React from "react";
import { Link, withRouter } from "react-router-dom";


function Nav(props){


  return (
    <header className="flex-row px-1">
    <nav>
      <div class="flex-row">
        <Link class="navbar-brand" to="/">
        <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="squid"> 🦑</span> Valeria Mercado
        </a>
      </h2>
          
        </Link>

        <div>
          <ul class="flex-row">
            <li
              class={` mx-2 ${
                props.location.pathname === "/" ? "navactive" : ""
              }`}
            >
              <Link class="nav-link" to="/">
                About
                <span class="sr-only"></span>
              </Link>
            </li>
            <li
              class={`mx-2  ${
                props.location.pathname === "/portfolio" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li
              class={`mx-2  ${
                props.location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li
              class={`mx-2  ${
                props.location.pathname === "/Resume" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/Resume">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
   
  );
}

export default withRouter(Nav);
