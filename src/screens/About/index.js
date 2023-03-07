import React from "react";
import image1 from "../assets/underline.png";
import image2 from "../assets/Group 4.png";

import "./index.css";

function About() {
  return (
    <section className="home hero" id="01" style={{backgroundColor: 'rgb(252, 236, 201)'}}>
          <div>
            <h2 id="h22"><b>About me</b></h2></div>
          <div>
            <figure>
              <img src={image1} />
            </figure>
          </div>
          <div className="columns is-mobile">
            <div className="column is-one-third">
            </div>
            <div className="column">
              <p id="p11" style={{zIndex: 1, marginLeft: '2cm'}}><b><i><br /><br /><br />
                    Hello and welcome to my portfolio! My name is Ashan and I am a talented web<br /> 
                    designer and freelancer with 3 years of experience in the field. I have a strong<br />
                    passion for creating visually stunning and user-friendly websites that not only<br />
                    look great, but also effectively communicate the message and goals of my<br />
                    clients.I am proficient in a variety of web design software and technologies,<br />
                    and I am always striving to<br /> 
                    stay up-to-date with the latest industry trends and best practices.<br /><br />
                    I am a creative and reliable professional who is committed to delivering the<br /> 
                    best results for my clients. Thank you for considering me for your web design<br />
                    needs. Please take a look at my portfolio to see some of my past work, and <br />don't 
                    hesitate to contact me if you have any questions or would like<br /> to discuss your
                    project&nbsp;further.<br />
                  </i></b></p>
              <img src={image2} alt="noo" id="g4" />
            </div>
          </div>
        </section>
  );
}

export default About;
