import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import emailjs from "emailjs-com";

// import logo from "./assets/logo.png";
import brand from "./assets/brand.png";
import avatar from "./assets/profilepic.png";
import cuteavatar from "./assets/avatar.png";
import product from "./assets/product.png";
import design from "./assets/design.png";
import programme from "./assets/programme.png";
import yada from "./assets/yada.png";
import internship1 from "./assets/42race.png"; 
import internship2 from "./assets/ureg.png"; 
import myresume from "./assets/jh_resume.pdf";
import formalshot from "./assets/formalpic.jpg";

function App() {
  
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const openContactModal = (e) => {
    setShowContactModal(true);
    console.log(e);
  }

  const closeContactModal = () => {
    setShowContactModal(false);
  }

  const openBioModal = () => {
    setShowAboutModal(true);
  }

  const closeBioModal = () => {
    setShowAboutModal(false);
  }

  const submitContactForm = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_4wewrrs', 'template_4bwy3up', e.target, 'user_xJS9Q8XG816gnipQZg67C')
    .then((result) => {
        console.log(result.text);
        alert("email successfully sent!");
    }, (error) => {
        console.log(error.text);
        alert("Something went wrong... Please try again or, email me directly @ lawjiahua97@gmail.com");
    });

    e.target.reset();
  }

  return (
    <div className="main">
      <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item brand" href=".">
            <img src={brand} class="image" alt="Law Jia Hua, Product Manager &amp Front-end Developer"/>
          </a>
        </div>
        
        <div id="navbarLinks" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <button onClick={openBioModal} class="navbar-item button is-info is-inverted">
                  Bio
                </button>
                <a class="button is-info is-inverted" href={myresume} download="jia hua resume.pdf">
                  Resume
                </a>
                <button class="button is-info" onClick={openContactModal}>
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section class="hero is-white has-text-centered">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-centered">
              <div class="column">
                <p class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                  Hi, I'm Jia Hua
                </p>
                <p class="subtitle is-size-4-desktop">
                  An aspiring Product Manager, Tinkerer, Gadget Geek, Hobby Developer in Singapore.
                </p>
                <img src={avatar} height="400" width="400" alt="me"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section hero is-medium is-info has-text-centered">
        <div class="columns">
          <div class="columns is-centered">
            <div class="column is-three-fifths">
              <p class="title is-spaced is-size-3-desktop is-size4-mobile">
                Skillsets
              </p>
              <p class="subtitle is-class-5">
                I am naturally curious, and seek to improve my skils 
                  by reading and practising in my spare time. I am especially 
                    interested finding out why things work the way they do and
                      always seek to challenge assumptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section has-text-centered" className="skills-container">
        <div class="container is-narrow">
          <div class="box">
            <div class="skills-content">
              <div class="columns is-centered">
                <div class="column" className="skill-column">
                  <h1 class="title is-size-4 is-spaced">Product Manager</h1>
                  <img src={product} width="80"  className="skill-icon" alt="product managemnt"/>
                  <p class="list-title has-text-info has-text-weight-normal">PM Tools:</p>
                  <ul>
                    <li>Miro</li>
                    <li>Amplitude</li>
                    <li>Jira</li>
                    <li>Trello</li>
                    <li>Scrumpoker</li>
                  </ul>
                </div>
                <div class="column" className="skill-column">
                  <h1 class="title is-size-4 is-spaced">Developer</h1>
                  <img src={programme} width="80" className="skill-icon" alt="developer"/>
                  <p class="list-title has-text-info has-text-weight-normal">Languages & Tools:</p>
                  <ul>
                    <li>React</li>
                    <li>Flutter</li>
                    <li>Angular</li>
                    <li>Git</li>
                    <li>Postgresql</li>
                    <li>Terminal</li>
                    <li>Express</li>
                  </ul>
                </div>
                <div class="column" className="skill-column-last">
                  <h1 class="title is-size-4 is-spaced">Designer</h1>
                  <img src={design} width="80"  className="skill-icon" alt="Designer"/>
                  <p class="list-title has-text-info has-text-weight-normal">Design Tools:</p>
                  <ul>
                    <li>Figma</li>
                    <li>Whimisical</li>
                    <li>Wix</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section is-medium is-white has-text-centered">
        <div class="container is-narrow">
          <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">My Work experience & projects</h1>
          <p class="subtitle is-class-5">
            Here are some of the work I've done. If you want to find out more, <a href="mailto:lawjiahua97@gmail.com">email me</a>.   
          </p>
          <div class="project-grid">  
            <div class="columns is-multiline is-mobile">
              <div class="column is-12-mobile is-half-tablet is-one-third-desktop"> 
                <div class="image">
                  <img className="project-thumb" alt="Yada app" src={yada}/>
                  <div className="overlay">
                    <div className="overlay-content">
                      <h1 class="title is-size-6 has-text-white has-text-centered ">
                        An app that allows you to deepen existing relationships and create new ones.
                          Conversation prompt cards based on the hit card game "we're not really strangers".
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-12-mobile is-half-tablet is-one-third-desktop"> 
                <div class="image">
                  <img className="project-thumb" alt="42Race" src={internship1}/>
                  <div className="overlay">
                    <div className="overlay-content">
                      <h1 class="title is-size-6 has-text-white has-text-centered ">
                        Product Management Intern reponsible for end to end coordination of the product 
                          development lifecycle.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-12-mobile is-half-tablet is-one-third-desktop"> 
                <div class="image">
                  <img className="project-thumb" alt="Ureg" src={internship2}/>
                  <div className="overlay">
                    <div className="overlay-content">
                      <h1 class="title is-size-6 has-text-white has-text-centered">
                        Software Engineering Intern responsible for design, development and integration 
                        of KYC software with service providers.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="hero is-white has-text-centered">
        <div class="hero-body">
          <div class="container mb-6">
            <div class="columns is-centered">
              <div class="column">
                <p class="title is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">
                  Interested in collaborating or require my services?
                </p>
                <p class="subtitle is-size-5-desktop">
                  I'm always open to discussing work or side project opportunities, 
                    sharing my feedback or input, and really anything. I'll do my best to
                      answer you in a timely fashion. Cheers!
                </p>
                <button onClick={openContactModal} class="button is-outlined is-info is-large is-rounded">
                  Start a conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class={`modal ${showAboutModal ? "is-active" : ""} `}>
        <div class="modal-background" onClick={closeBioModal}></div>
        <div class="modal-content">
          <div class="box">
            <div class="columns is-vcentered">
              <div class="column is-half">
                <div class="block">
                  <p class="title is-size-3">
                    Bio
                  </p>
                  <p class="subtitle is-size-5">
                    I am currently a final year student studying Information systems in the 
                      National University of Singapore. My goal is to bring joy to the world. 
                        I want to do so by creating / optimising products that eases pain points and brings 
                          joy, starting with viewing a product through the lens of the user.
                  </p>
                  <p class="subtitle is-size-5">
                    With my previous experience as a Software Engineer and Product Management Intern,
                    I feel comfortable working with engineers, creatives as well as business-oriented individuals.
                  </p>
                  <p class="subtitle is-size-5">
                    My previous experiences in both product and engineering has given me valuable insights to the 
                      product lifecycle and allows me to make a positive impact.
                  </p>
                </div>
              </div>
              <div class="column is-half is-narrow">
                <img class="image" src={formalshot} alt="formal"/>
              </div>
            </div>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" onClick={closeBioModal}></button>
      </div>

      <div class={`modal ${showContactModal ? "is-active" : ""} `} >
        <div class="modal-background" onClick={closeContactModal}></div>
        <div class="modal-content is-clipped">
          <div class="box">
            <div class="columns is-multiline is-centered">
              <div class="column has-text-centered is-full">
                <p class="title is-size-4">
                  Thanks for reaching out. How many I help you?
                </p>
              </div>
              <div class="column is-narrow">
                <img class="image is-96x96" src={cuteavatar} alt="avatar"/>
              </div>
            </div>
            <form class="column" onSubmit={submitContactForm}>
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input is-info" type="string" name="name" placeholder="e.g alex"/>
                </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input is-info" type="email" name="email" placeholder="e.g alex@example.com"/>
                </div>
              </div>
              <div class="field">
                <label class="label">Subject</label>
                <div class="control">
                  <input class="input is-info" type="string" name="subject" placeholder="Lets work on a project together!"/>
                </div>
              </div>
              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea class="textarea is-info" name="message" placeholder="Type message here"></textarea>
                </div>
              </div>
              <div class="container is-flex is-justify-content-flex-end">
                <div class="buttons">
                  <button class="button is-info" type="submit">Mail Me</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" onClick={closeContactModal}></button>
      </div>

      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            Portfolio site done by Law Jia Hua using <strong>Bulma</strong> and <strong>React</strong>. 
            Some rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
