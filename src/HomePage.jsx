import React from "react";
import Contacts from "./Contacts";

import Footer from "./Footer";
import Header from "./Header";
import Hobby from "./Hobby";
import SaidBar from "./SaidBar";
import photo from "./newImg/photo.jpg";
import fasebook from "./newImg/fasebook.png";
import watsup from "./newImg/watsup.png";
import instagram from "./newImg/png-transparent-instagram-logo-icon.png";

const HomePage = () => {
  return (
    <div>
      <SaidBar />
      <div class="header">
        <div class="navbar">
          <div class="navbar__content">
            <h1>KURMANKULOVA SALTANAT</h1>
            <h2>Front End Developer</h2>
          </div>
          <div class="navbar__link">
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

      <div class="content">
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
      <h4>EDUCATION</h4>
      <div class="education">
        <div class="education__info_1">
          <span>master's degree in accounting</span> Kyrgyz National University
          of J.Balasagyn.
          <p class="header_block">2001-2006</p>
        </div>
        <div class="education__info_2">
          <span>Certificate in FrontEndDeveloper</span> " Makers Courses"
          <p class="header_block">2022-2023</p>
        </div>
      </div>

      <div class="main"></div>

      <h4>HOBBY</h4>
      <div class="education">
        <div class="education__info_1">
          <span>SWIMMING</span>
        </div>
        <div class="education__info_2">
          <span>TRAVELING</span>
        </div>
        <div class="education__info_2">
          <span>SHOPPING</span>
        </div>
        <div class="education__info_2">
          <span>LEARNING ENGLISH</span>
        </div>
        <div class="education__info_2">
          <span>LEARNING IT DEVELOPMENT</span>
        </div>
      </div>

      <footer>
        <h4 id="footer__id" class="footer__links">
          Social Links
        </h4>
        <div class="footer__list">
          <a class="footer__item" href="">
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

export default HomePage;
