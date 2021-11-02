import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(){

    const categories = [
        {
          name: "Works",
          description:
            "Links to projects I've led or been apart of.",
        },
        { name: "Resume", description: "For a more in dept tellign of my expierience" },
       
      ];

const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="squid">
            {"🦑 "}
            
          </span>
          Valeria Mercado
          </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => handleClick("About")}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick('Contact')}>
              Contact
            </span>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(category.name); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
