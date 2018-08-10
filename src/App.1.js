import React, { Component } from 'react';
import imgLogo from './logo.png';
import imgProgram3yr from './program-3yr.jpg';
import imgProgram4yrHalf from './program-4yr-half.jpg';
import imgProgram4yrFull from './program-4yr-full.jpg';
import imgGraduation from './graduation.jpg';
import imgStaff from './staff.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
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
            <li><a class="nav-button" href="#">Home</a></li>
            <li><a class="nav-button" href="#">About</a></li>
            <li><a class="nav-button" href="#">Contact</a></li>
          </ul>
          <div className="clear"></div>
        </header>
        <div id="content">
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
        <footer>
          <div>ST JUDE'S PRESCHOOL © 2013</div>
        </footer>
      </div>
    );
  }
}

export default App;
