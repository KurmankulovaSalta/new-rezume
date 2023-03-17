import React from "react";
import "./newStyle.css";
import "./newAdapt.css";
import SaidBar from "./SaidBar";

const Footer = () => {
  return (
    <div>
      <SaidBar />
      <footer>
        <h4 id="footer__id" class="footer__links">
          Social Links
        </h4>
        <div class="footer__list">
          <a
            class="footer__item"
            href="https://instagram.com/kurmankulova_saltanat?igshid=ZDdkNTZiNTM="
          >
            Instagram
          </a>
          <a
            class="footer__item"
            href="https://www.facebook.com/profile.php?id=100052921583138"
          >
            facebook
          </a>
          <a
            class="footer__item"
            href="https://call.whatsapp.com/video/bzU09yqjavNING9KkR0XX4"
          >
            whatsapp
          </a>
        </div>
        <p class="footer__info">© 2023 Bishkek Kyrgyzstan</p>
      </footer>
    </div>
  );
};

export default Footer;
