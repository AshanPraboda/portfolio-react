
import React from "react";
import image1 from "../assets/underline.png";

import "./index.css";

function Education() {
return (
  <section className="section" style={{backgroundColor: 'rgb(252, 236, 201)'}} id="02">
  <div>
    <h2 id="h22"><b>Educational Qualification</b></h2></div>
  <div>
    <figure>
      <img src={image1} />
    </figure>
  </div>
  <div className="card-container">
    <div className="card-1">
      <h3>School Education <br /><br /><br />Mahinda College <br />2020-2021</h3>
    </div>
    <div className="card-2">
      <h3> * Passed General Certificate of Education Ordinary Level  Exams with 7 A and 2 B passes <br /><br />* Passed General Certificate of Education Advanced Level Exams with 3 B passes</h3>
    </div>
  </div>
  <div className="card-container">
    <div className="card-3">
      <h3>Bachelors Degree<br /><br /><br /> University Of Colombo <br />2020-2021</h3>
    </div>
    <div className="card-2 card-4">
      <h3> Bsc.  in Information Systems<br /><br />
        Currently reading for my Bachelors' Degree in<br /> 
        Information Systems at University of Colombo<br />
        School of Computing</h3>
    </div>
  </div>
</section>
);
}

export default Education;
