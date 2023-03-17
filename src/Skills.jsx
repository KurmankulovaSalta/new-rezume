import React from "react";
import "./newStyle.css";
import SaidBar from "./SaidBar";

const Skills = () => {
  return (
    <div>
      <SaidBar />
      <div class="content content1">
        <h4>SKILLS</h4>
        <div class="content__info">
          <div class="content__text">
            Hello! I'm frontend Developer from Bishkek,Kyrgyzstan.Worked with
            project teams to create user-friendly and appealing application
            interfaces websites for users.Met with project.
            <a href="#">
              <button class="resume">DOWNLOAD RESUME</button>
            </a>
          </div>
          <div class="content_disc">
            <p>Front End Developer</p>
            <div class="container">
              <div class="skills html">90%</div>
            </div>
            <p>HTML & CSS</p>
            <div class="container">
              <div class="skills react">100%</div>
            </div>
            <p>Java Script</p>
            <div class="container">
              <div class="skills html">90%</div>
            </div>
            <p>Bootstrap</p>
            <div class="container">
              <div class="skills react">100%</div>
            </div>
            <p>React</p>
            <div class="container">
              <div class="skills react">100%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
