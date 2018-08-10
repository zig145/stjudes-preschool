import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import imgLogo from './images/logo.png';
import imgProgram3yr from './images/program-3yr.jpg';
import imgProgram4yrHalf from './images/program-4yr-half.jpg';
import imgProgram4yrFull from './images/program-4yr-full.jpg';
import imgGraduation from './images/graduation.jpg';
import imgStaff from './images/staff.jpg';
import './App.css';
import ReactGoogleMap from "./ReactGoogleMap";

const App = () => (
  <Router>      
    <div id="app">
      <header id="header">
        <img src={imgLogo} id="header-logo" alt="logo" />
        <div id="header-contact">
          <h1>St Jude's Preschool</h1>
          <div>ST JUDE THE APOSTLE CHURCH</div>
          <div>4100 LYELL ROAD ROCHESTER, NY 14606</div>
          <div className="bold">Dianna Grant - Teacher and Registrar</div>
          <div>585-426-1872 OR 585-615-9182</div>
          <div><a href="mailto:info@stjudespreschool.org">INFO@STJUDESPRESCHOOL.ORG</a></div>
        </div>
        <ul id="header-nav">
          <li><Link class="nav-button" to="/">Home</Link></li>
          <li><Link class="nav-button" to="/about">About</Link></li>
          <li><Link class="nav-button" to="/contact">Contact</Link></li>
        </ul>
        <div className="clear"></div>
      </header>
      <div id="content">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
      <footer>
        <div>ST JUDE'S PRESCHOOL © 2013</div>
      </footer>
    </div>
  </Router>
);

const Home = () => (
  <div>
    <div id="programs">
      <h1>Our Programs</h1>
      <ul>
        <li>
          <img src={imgProgram3yr} />
          <h2>3 YEAR OLD HALF DAY PRESCHOOL</h2>
          <span>Our three year old program focuses on social and emotional development, as well as cognitive and motor skills. Age appropriate readiness skills taught include cutting, coloring, and shape, color, and number recognition. Our three year old program runs two days per week on Tuesday and Thursday.</span>
        </li>
        <li>
          <img src={imgProgram4yrHalf} />
          <h2>4 YEAR OLD HALF DAY PRESCHOOL</h2>
          <span>Our four year old program prepares the student for kindergarten and beyond. We continue to build on the three year old curriculum, with an increased emphasis on language development and reading readiness. Our 4 year old half day program runs three days per week on Monday, Wednesday, and Friday.</span>
        </li>
        <li>
          <img src={imgProgram4yrFull} />
          <h2>4 YEAR OLD ENRICHMENT PRESCHOOL</h2>
          <span>The children enrolled in this program complete all activities provided in our half-day morning program. In addition, in the afternoon they are exposed to a variety of enrichment activities, including math, science, and more advanced pre-reading skills. There is also time built in for lunch and rest. Our four year old Enrichment program runs three days per week on Monday, Wednesday, and Friday.</span>
        </li>
      </ul>
    </div>
    <div id="family">
      <h1>Our St Jude's Preschool Family</h1>
      <ul>
        <li>
          <img src={imgGraduation} />
          <div>4 Year old graduation ceremony</div>
        </li>
        <li>
          <img src={imgStaff} />
          <div>The incredible teaching staff at St Jude's Preschool</div>
        </li>
      </ul>
    </div>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Contact = () => (
  <div>
    <ul>
        <li>
          <h2>GET IN TOUCH!</h2>
          <form id="emailForm">
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="text" placeholder="Message"></textarea>
            <input type="hidden" name="access_token" value="38sru7w9nlldvi9drz5jwdck" />
            <input type="hidden" name="success_url" value="/" />
            <input type="hidden" name="error_url" value="/" />
            <input type="button" value="Send" onClick={handleContactSend} />
          </form>
        </li>
        <li>
          <h2>ST JUDE'S PRESCHOOL</h2>
          <ReactGoogleMap/>
          <span>ST JUDE'S PRESCHOOL<br/>4100 Lyell Road, Rochester, NY 14606</span>
        </li>
    </ul>
  </div>
);

const handleContactSend = () => {
  const emailForm = document.getElementById('emailForm');
  const request = new Request('https://postmail.invotes.com/send', {
    method: 'POST', 
    redirect: 'manual',
    body: new URLSearchParams(new FormData(emailForm)),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  fetch(request).then((response) => { 
    alert('Email sent');
    emailForm.reset();
  }).catch((error) => {
    alert(error);
    console.log(error);
  });
}

export default App;

