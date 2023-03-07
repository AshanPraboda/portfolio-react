import React from "react";
import image1 from "../assets/underline.png";
import image2 from "../assets/Group 6.png";

import "./index.css";

function Experience() {
  return (

    <section className="section" id="03" style={{backgroundColor: 'rgb(252, 236, 201)'}}>
          <h2 id="h22"><b>Experience</b></h2>
          <div>
            <figure>
              <img src={image1} />
            </figure>
          </div>
          <div style={{marginTop: '2cm'}}>
            <ul><li><h1 id="h23"><i>* Working in Innodata Pvt ltd about 1 years</i></h1></li></ul><i><br />
              <br />
            </i><h1 id="h23"><i>* Working as a freelancer in Fiver about 1 years as a designer</i></h1><br /><br />
          </div>
          <div>
            <figure>
              <img src={image2} style={{marginLeft: '15ch', marginRight: '15ch'}} />
            </figure>
          </div><br /><br />
          <br />
        </section>
        
  );
}

export default Experience;
