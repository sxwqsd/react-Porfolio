import React from "react";
import foodjunkies from '../../assets/img/foodJunkies.png'
import sloothhound from '../../assets/img/sloothHound.png'
import notetaker from '../../assets/img/noteTaker.png'
import workday from '../../assets/img/workdayScheduler.png'
import OtterJournal from '../../assets/img/OtterJournal.png'


function Portfolio(){
    return(
        <div>
      
      
            <a className="my-5" href="https://s-hound.herokuapp.com/">
                <img src= {sloothhound} alt="sloothhound"
                    width="309px" height="auto"></img>
            </a>
       
        
            <a className="my-5" href="https://notetakeforestthecat.herokuapp.com/">
                <img src= {notetaker} alt="noteTaker" width="309px"
                    height="auto"></img>
            </a>
               <a className="my-5" href="https://zdensamson.github.io/food_junkies/">
                <img src={foodjunkies} alt="foodJunkies"
                 width="309px" height="auto"></img>
            </a>
            <a class="my-5" href="https://sxwqsd.github.io/Work-Day-Scheduler/">
                <img src= {workday}alt="Work-Day-Scheduler"
                    width="309px" height="auto"></img>
            </a>
            <a class="my-5" href="https://quiet-waters-13147.herokuapp.com/">
                <img src= {OtterJournal}alt="OtterJournal"
                    width="309px" height="auto"></img>
            </a>
        
    </div>


    );
}


export default Portfolio;