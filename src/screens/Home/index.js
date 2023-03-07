import React from "react";
import image1 from "../assets/p1.jpg";
import image2 from "../assets/Group 2.png";
import "./index.css";

function Home() {
    return (
      <><nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="button is-warning is-ghost" href="#01" style={{ fontWeight: 'bolder', fontSize: '0.5cm', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
              <i> About Me</i>
            </a>
            <a className="button is-warning is-ghost" href="#02" style={{ fontWeight: 'bolder', fontSize: '0.5cm', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
              <i> Education</i>
            </a>
            <a className="button is-warning is-ghost" href="#03" style={{ fontWeight: 'bolder', fontSize: '0.5cm', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
              <i> Experience</i>
            </a>
            <a className="button is-warning is-ghost" href="#04" style={{ fontWeight: 'bolder', fontSize: '0.5cm', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
              <i> Projects</i>
            </a>
            <a className="button is-warning is-ghost" href="#05" style={{ fontWeight: 'bolder', fontSize: '0.5cm', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
              <i> Contact</i>
            </a>
          </div>
        </div>
      </nav><div>
          {/* section hero  */}
          <section className="home hero">
            {/* <div class="section-center home-center"> */}
            <div className="columns is-mobile">
              <div className="column is-one-third"> <figure className="image is-432x437">
                <img src={image2} id="r2" />
                <img src={image1} id="pp" />
              </figure>
              </div><br />
              <div className="column" style={{ textAlign: 'center' }}>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h1 id="h11"><b> Hi! I'M <br /> ASHAN PRABODA</b></h1>
                <h3 id="h33"><b> Web Designer | Freelancer</b></h3>
                <div style={{ textAlign: 'center' }}><a className="link-insta" href="https://www.facebook.com/ashan.praboda.79?mibextid=ZbWKwL">
                  <i className="fa-brands fa-square-facebook" />
                </a>
                  <a className="link-insta" href="https://www.instagram.com/_a_s._h_i._y_a/">
                    <i className="fa-brands fa-square-instagram" />
                  </a>
                  <a className="link-insta" href="https://github.com/AshanPraboda">
                    <i className="fa-brands fa-square-github" />
                  </a>
                  <a className="link-insta" href="https://twitter.com/login">
                    <i className="fa-brands fa-square-twitter" />
                  </a>
                </div>
                <div className="button is-warning is-warning " style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'right' }}>RESUME
                </div>
              </div>
              <br />
            </div>
          </section></div></>
    );
        
    }
    
    export default Home;