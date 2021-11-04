import React from 'react';
import resumeimg from '../../assets/img/resumeimg.jpg'

function Resume(){
    return(
        <div>
               <a class="my-5" href="https://drive.google.com/file/d/1bW7pLz3vDXGTh5OeACLCdFq_oyz9nFf6/view?usp=sharing">
                <img src= {resumeimg}alt="resume"
                    width="309px" height="auto"></img>
            </a>
        </div>
    );
}

export default Resume;