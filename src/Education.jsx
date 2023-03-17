import React from "react";
import "./newAdapt.css";
import "./newStyle.css";
import SaidBar from "./SaidBar";

const Education = () => {
  return (
    <div>
      <SaidBar />
      <div class="education1">
        <h4>EDUCATION</h4>
        <div class="education">
          <div class="education__info_1">
            <span>master's degree in accounting</span> Kyrgyz National
            University of J.Balasagyn.
            <p class="header_block">2001-2006</p>
          </div>
          <div class="education__info_2">
            <span>Certificate in FrontEndDeveloper</span> " Makers Courses"
            <p class="header_block">2022-2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
