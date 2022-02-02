import React from "react";
import { Link, withRouter } from "react-router-dom";


function Nav(props){


  return (
    <header className="flex-row px-1">
    <nav>
      <div class="flex-row">
        <Link class="navbar-brand" to="/">
        <div class="typewriter">
            <h1>Valeria Mercado 🦑</h1>
          </div>
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
      
          </ul>
        </div>
      </div>
    </nav>
  </header>
   
  );
}

export default withRouter(Nav);
