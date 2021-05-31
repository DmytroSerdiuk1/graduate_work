import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './Footer.scss'

import logo from '../../img/logo1.png';
import phone from '../../img/phone.png';
import inst from '../../img/inst.png';
import mail from '../../img/mail.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
          <div className="container">
            <div className="footer-wrapper d-flex justify-content-end justify-content-md-between">
              <div className="footer-left d-none d-md-inline-block">
                <h6 className="footer-nav-title">НАВИГАЦИЯ</h6>
                <div className="footer-left-wrapper d-flex">
                  <div className="footer-left-col">
                    <Link className="footer-link" to="">
                      Кухни
                    </Link>
                    <Link className="footer-link" to="">
                      Спальни
                    </Link>
                    <Link className="footer-link" to="">
                      Гостинные
                    </Link>
                  </div>
                  <div className="footer-left-col">
                    <Link className="footer-link" to="">
                      Прихожие
                    </Link>
                    <Link className="footer-link" to="">
                      Офисная мебель
                    </Link>
                    <Link className="footer-link" to="">
                      Детская
                    </Link>
                  </div>
                  <div className="footer-left-col">
                    <Link className="footer-link" to="">
                      Шкафы
                    </Link>
                    <Link className="footer-link" to="">
                      Матрасы
                    </Link>
                    <Link className="footer-link" to="">
                      Мягкая мебель
                    </Link>
                  </div>
                </div>
              </div>
              <div className="footer-right d-flex flex-column align-items-end">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
                <a className="footer-adress mt-2" href="https://www.google.com/maps/place/%D0%96%D0%9A+%D0%A7%D0%B5%D1%80%D0%BD%D0%BE%D0%B5+%D0%BC%D0%BE%D1%80%D0%B5/@44.8986358,37.3547096,15z/data=!4m2!3m1!1s0x0:0x92571820e3e8237b?sa=X&ved=2ahUKEwiBw4Pmou_wAhWz_rsIHaeKDI8Q_BIwEnoECD8QBQ">
                  г. Анапа, Анапское шоссе,<br />
                  30 Ж/К Черное море
                </a>
              </div>
            </div>
            <div className="footer-bottom d-flex justify-content-between mt-3">
              <div className="footer-bottom-left d-none d-md-inline-block">
                <Link className="footer-link  mr-3" to="">
                  Акция
                </Link>
                <Link className="footer-link" to="">
                  Новинки
                </Link>
              </div>
              <div className="footer-bottom-right d-flex flex-wrap justify-content-end">
                <a className="footer-bottom-link" href="tel:8968999119">
                  <img src={phone} alt="" />
                  <span>8 (964) 89 99 119</span>
                </a>
                <a className="footer-bottom-link" href="https://instagram.com">
                  <img src={inst} alt="" />
                  <span>INSTAGRAM</span>
                </a>
                <a className="footer-bottom-link" href="https://instagram.com">
                  <img src={mail} alt="asd" />
                  <span>mebel_loft_anapa@mail.ru</span>
                </a>
              </div>
            </div>
          </div>
      </footer>
    );
  }
}

export default Footer;
