import React from "react";
import "./newStyle.css";
import "./newAdapt.css";
import SaidBar from "./SaidBar";

const Hobby = () => {
  return (
    <div>
      <SaidBar />
      <div class="main main1"></div>

      <h4>HOBBY</h4>
      <div class="education hobby">
        <div class="education__info_1">
          <span>SWIMMING</span>
          <img
            class="hobby1"
            src="https://klike.net/uploads/posts/2020-04/1588230016_1.jpg"
            alt="swim"
          />
        </div>
        <div class="education__info_2">
          <span>TRAVELING</span>
          <img
            class="hobby1"
            src="https://amiel.club/uploads/posts/2022-03/1647774680_2-amiel-club-p-kartinki-s-puteshestviyami-2.jpg"
            alt=""
          />
        </div>
        <div class="education__info_2">
          <span>SHOPPING</span>
          <img
            class="hobby1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4-V_WldLwBieJ14dL109p70uqsVrM-s09bShUYRErU0obOKKI-2jXef7WSUhtb2MyZU&usqp=CAU"
            alt=""
          />
        </div>
        <div class="education__info_2">
          <span>LEARNING ENGLISH</span>
          <img
            class="hobby1"
            src="https://www.pol-i-glot.ru/images/foreign_language.jpg"
            alt="learn"
          />
        </div>
        <div class="education__info_2">
          <span>LEARNING IT DEVELOPMENT</span>
          <img
            class="hobby1"
            src="https://images.aif.by/007/477/937d4717b613daed2e3bdcbb01698232.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hobby;
