import React from "react";
import foodjunkies from "../../assets/img/foodJunkies.png";
import sloothhound from "../../assets/img/sloothHound.png";
import notetaker from "../../assets/img/noteTaker.png";
import workday from "../../assets/img/workdayScheduler.png";
import OtterJournal from "../../assets/img/OtterJournal.png";

function Portfolio() {
  return (
    <div class="container">
      <div class="project">
        <a class="my-5" href="https://quiet-waters-13147.herokuapp.com/">
          <img src={OtterJournal} alt="OtterJournal"></img>
        </a>
        <div class="container">
          <h1 class="projectName">Otter Journal</h1>
          <p class="projectDesc">
            An app that allows the user to journal their daily activity and
            mood, with a text entry for discusion. They can get a daily
            affirmation if they are needing help with finding something to
            discuss.
          </p>
        </div>
      </div>

      <div class="project">
        <a className="my-5" href="https://s-hound.herokuapp.com/">
          <img src={sloothhound} alt="sloothhound"></img>
        </a>
        <div class="container">
          <h1 class="projectName">Slooth Hound</h1>
          <p class="projectDesc">
            Slooth Hound an app that allows the user to visually see the
            projects in the workflow of the company, with the ability to drill
            down to view the department and the projects that department is
            currently responsible for.
          </p>
        </div>
      </div>

      <div class="project">
        <a className="my-5" href="https://zdensamson.github.io/food_junkies/">
          <img src={foodjunkies} alt="foodJunkies"></img>
        </a>
        <div class="container">
          <h1 class="projectName">Food Junkies</h1>
          <p class="projectDesc">An application that helps user's use ingridients they have in their fridge or pantry.</p>
        </div>
      </div>
      </div>

  );
}

export default Portfolio;
