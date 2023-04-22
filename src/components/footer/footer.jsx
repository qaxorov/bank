import React from "react";
import "./footer.scss";
import {
  Soat,
  Lokatsa,
  Phone,
  Mail,
  Twiter,
  Inst,
  Face,
} from "../../assets/image/img";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div>
        <div className="container">
          <ul className="footer__item">
            <li className="footer__list">
              <h3 className="footer__title">Компания</h3>
              <p className="footer__about">
                ООО «Alfa Mikrokredit Tashkiloti» — микрофинансовая организация,
                ориентрированная на оперативность и современную финансовую
                помощь
              </p>
            </li>
            <li className="footer__list">
              <h3 className="footer__title">Услуги</h3>
              <p className="footer__about__1">Микрозаймы</p>
              <p className="footer__about__1">Микрокредиты</p>
              <p className="footer__about__1">Лизинг</p>
              <p className="footer__about__1">Факторинг</p>
            </li>
            <li className="footer__list">
              <h3 className="footer__title">Время работы</h3>
              <div className="footer__gmi">
                <img className="footer__img" src={Soat}></img>
                <p className="footer__about__E">
                  Мы работаем без выходных с 10:00 до 19:00
                </p>
              </div>

              <div className="footer__facebook">
                <Link>
                  <img className="footer__face" src={Face}></img>
                </Link>
                <Link>
                  <img className="footer__face" src={Inst}></img>
                </Link>
                <Link>
                  <img className="footer__face" src={Twiter}></img>
                </Link>
              </div>
            </li>
            <li className="footer__list">
              <h3 className="footer__title">Наши контакты</h3>
              <div className="footer__gmi">
                <img className="footer__img" src={Lokatsa}></img>
                <p className="footer__about__5">
                  Toshkent, Tuman: Chilonzor, Olmazor dahasi, Furqat ko'chasi,
                  15/2
                </p>
              </div>
              <div className="footer__gmi">
                <img className="footer__img" src={Phone}></img>
                <p className="footer__about__2">+998 71 245-70-20</p>
              </div>
              <div className="footer__gmi">
                <Link>
                  <img className="footer__img" src={Mail}></img>
                </Link>
                <p className="footer__about__2">alfamikro@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <hr className="footer__chiziq"></hr>
          <ul className="footer__end">
            <li className="footer__texts">Политика безопасности</li>
            <li className="footer__texts">Условия соглашения</li>
            <li className="footer__texts">Публичная оферта</li>
            <li className="footer__texts">
              © 2023 ООО «Nayuta Mikrokredit Tashkiloti». All rights reserved
            </li>
            <li className="footer__texts">
              Designed by:{" "}
              <strong>
                <Link to={"https://getter.uz/"} target="_blank">
                  Getter
                </Link>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
