import React from "react";
import "./newStyle.css";
import "./newAdapt.css";
import fasebook from "./newImg/fasebook.png";
import watsup from "./newImg/watsup.png";
import instagram from "./newImg/png-transparent-instagram-logo-icon.png";

const Header = () => {
  return (
    <div class="header">
      <div class="navbar">
        <div class="navbar__content">
          <h1>KURMANKULOVA SALTANAT</h1>
          <h2>Front End Developer</h2>
        </div>
        <div class="navbar__link">
          <a
            href="https://instagram.com/kurmankulova_saltanat?igshid=ZDdkNTZiNTM="
            target="_blank"
          >
            <img
              class="navbar__img"
              src={instagram}
              alt="Instagram"
              target="_blank"
            />
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
  );
};

export default Header;
