import React from "react";
import "./newStyle.css";
import "./newAdapt.css";
import photo from "./newImg/photo.jpg";
import fasebook from "./newImg/fasebook.png";
import watsup from "./newImg/watsup.png";
import instagram from "./newImg/png-transparent-instagram-logo-icon.png";
import SaidBar from "./SaidBar";

const Contacts = () => {
  return (
    <div>
      <SaidBar />
      <div class="header_form">
        <div class="header__photo">
          <img class="header__photo_img" src={photo} alt="photo" />
        </div>
        <div class="header__info">
          <p class="header_block">Hello & Welcome!</p>
          <h2>
            I'm <span>KURMANKULOVA SALTANAT</span>
          </h2>
          <p>Front End Developer</p>
          <div class="header__list">
            <ul class="header__list_info" id="header__list_id">
              <li class="list_info">Address</li>
              <li class="list_info">Email</li>
              <li class="list_info">Phone</li>
              <li class="list_info">Website</li>
            </ul>
            <ul class="header__list_info">
              <li class="list_info">
                71G Ak-Tilek street, Chui district, Kyrgyzstan
              </li>
              <li class="list_info">Salta_84.84@mail.ru</li>
              <li class="list_info">+996700501686</li>
              <li class="list_info">http://www.SALTANAT.com</li>
            </ul>
          </div>
          <div class="header__link">
            <a href="https://instagram.com/kurmankulova_saltanat?igshid=ZDdkNTZiNTM=">
              <img class="navbar__img" src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100052921583138">
              <img class="navbar__img" src={fasebook} alt="facebook" />
            </a>
            <a href="https://call.whatsapp.com/video/bzU09yqjavNING9KkR0XX4">
              <img class="navbar__img" src={watsup} alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
