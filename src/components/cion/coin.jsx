import React from "react";
import "./coin.scss";
import { Minus, Plyus } from "../../assets/image/img";
export default function Coin() {
  return (
    <div className="container">
      <div>
        <div className="coin__title">
          <div className="coin__box">
            <h1 className="coin__title">
              Задайте свои параметры, и
              <span className="coin__text1">расчитайте кредит онлайн</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="coin">
        <div className="coin__left">
          <p className="coin__text">Сумма кредита</p>

          <hr className="coin__hra"></hr>
          <h2 className="coin__num">1 000 000 Uzs</h2>
          <hr className="coin__hr"></hr>
          <hr className="coin__hv"></hr>

          <p className="coin__text">Срок кредита</p>
          <h2 className="coin__num">6 месяцев</h2>
          <div className="coin__mun">
            <hr className="coin__hrab"></hr>
            <hr className="coin__6"></hr>
          </div>

          <p className="coin__text">Первоначальный взнос</p>
          <h2 className="coin__num">30% (300 000</h2>
          <div className="coin__puls">
            <hr className="coin__hram"></hr>
            <hr className="coin__hrac"></hr>
          </div>
          <p className="coin__text">Первоначальный взнос</p>
          <div className="coin__puls">
            <img className="coin__minus" src={Minus}></img>
            <h2 className="coin__nummu">30% (200 000 so’m)</h2>
            <img className="coin__plyus" src={Plyus}></img>
          </div>
          <p className="coin__text">Hisoblash turi</p>
          <ul>
            <li className="coin__btn__klass">
              <button className="coin__btn">Annuitet</button>
              <button className="coin__byn">Oddiy</button>
            </li>
          </ul>
        </div>
        <div className="coin__right">
          <p className="coin__text">Сумма кредита</p>
          <h2 className="coin__num">294 005 000 so’m</h2>
          <hr className="coin__sum"></hr>
          <p className="coin__text">Срок кредита</p>
          <h2 className="coin__num">7 161 128.31 UZS</h2>
          <button className="coin__bnt">Оформить кредит</button>
        </div>
      </div>
    </div>
  );
}
