import React from "react";
import image1 from "../assets/email-removebg-preview 1.png";
import image2 from"../assets/R 1.png";
import image3 from"../assets/call2.png";

import "./index.css";

function Contact() {
    return (
      <section className="section" id="05" style={{backgroundColor: 'hwb(0 13% 87%)'}}>
      <h2 id="h22" style={{color: '#7a5b0c', textAlign: 'center'}}><b>Contact Me</b></h2>
      <hr />
      {/* <di>
        <figure>
          <img src="./assets/underline.svg" style="margin-bottom: 2cm;">
        </figure>
      </div> */}
      <br /><br />
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter"><br />
          {/* <div class="square" style="padding-left: 7rem ;width: 650px;height: 400px;"><br> */}
          <div className="columns">
            <div className="column is-one-fifth">
              <img src={image1} /><br /><br /><br />
              <img src={image2} /><br /><br /><br />
              <img src={image3} /><br /><br />
            </div>
            <div className="column pt-6"><h1 style={{color: '#a87a05', textAlign: 'left', lineHeight: '3.4ch'}} id="p13"> E-mail :-  ashan@webd.gmail.com<br /><br /><br />
                Whatsapp :-  0774637273 <br /><br /><br /> Tel-No :-  0775567277
              </h1>
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
    );
}

export default Contact;