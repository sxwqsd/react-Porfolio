import React from "react";
import PortPic from "../../assets/cover/cover-image.png";

function About() {
  return (
    <div class="container">
      <div class="portpic"></div>
      <div>
        <div class="portSec"></div>
        <div class="portSec">
          <h1 class="title">Education</h1>

          <p>
            Bootcamp Certificate in Full Stack Web Development University of
            Arizona –Tucson, AZ
          </p>
          <p>
            A 24-week intensive program focused on gaining technical programming
            skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node
            Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.
          </p>
        </div>

        <div class="portSec">
          <h1 class="title">Skills</h1>
          <p>Languages:
          SQL, HTML/CSS, JavaScript, CSS, CSS3, HTML5, JSON,</p>
          <p>
            Database: MySQL 5.7, MongoDB, SQLAlchemy, Access, Other:Heroku, Git,
            Bash
          </p>
        </div>

        <div class="portSec">
          <h1 class="title">Experience</h1>
          <p>
            Amazon Tucson, AZ Fulfillment Associate 2020 – Current Identify,
            investigate and correct shipment errors through the use of Kick Out,
            Optimized Outbound Problem Solve (OOPS).PuTTY tools to ensure that
            customers orders are delivered. Coach associates in how to work
            safely, and keep their work area clean.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
