import React from "react";
import { FaWhatsappSquare, FaTelegram } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="header">
            <h1 className="title">
              <img src={logo} alt="Logo" />
            </h1>
            <p className="subtitle">
              Магазин по продаже оригинальной одежды и обуви мировых брендов
            </p>
            <div className="contact">
              <a href="tel:+78000418338" className="phone">
                7 (800) 041-83-38
              </a>
              <span>order@ogstyle.ru</span>
              <div className="icons">
                <FaWhatsappSquare/>
                <FaTelegram/>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="links-container">
            <div className="links-column">
              <ul>
                <li>
                  <a href="#">Кроссовки</a>
                </li>
                <li>
                  <a href="#">Футболки</a>
                </li>
                <li>
                  <a href="#">Тапочки</a>
                </li>
                <li>
                  <a href="#">Куртки</a>
                </li>
              </ul>
            </div>

            <div className="links-column">
              <ul>
                <li>
                  <a href="#">Штаны</a>
                </li>
                <li>
                  <a href="#">Шорты</a>
                </li>
                <li>
                  <a href="#">Толстовки</a>
                </li>
                <li>
                  <a href="#">Аксессуары</a>
                </li>
              </ul>
            </div>

            <div className="links-column">
              <ul>
                <li>
                  <a href="#">Оплата и доставка</a>
                </li>
                <li>
                  <a href="#">Обмен и возврат</a>
                </li>
                <li>
                  <a href="#">Оригинал 100%</a>
                </li>
              </ul>
            </div>

            <div className="links-column">
              <ul>
                <li>
                  <a href="#">О компании</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="divider"></div>

          <div className="footer-bottom">
            <p>© STYLE 2023</p>
            <div>
              <a href="#">Политика конфиденциальности</a>
              <span> | </span>
              <span>Разработано ООО “Maxocom”</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
