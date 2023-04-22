import React from "react";
import "./bank.scss";
import { Banim,Alba } from "../../assets/image/img";

export default function Bank() {
  return (
    <div className="container">
      <div className="bank">
        <div className="bank__box">
          <h1 className="bank__title">
            Почему лучше обратиться к нам,
            <span className="bank__text1">а не в банк</span>
          </h1>
        </div>
        <div className="bank__iz">
          <div className="bank__box__2">
            <div className="bank__photo">
              <img className="bank__foto" src={Banim}></img>
              <p className="bank__photo_text">Банк</p>
            </div>

            <div className="bank__konsul">
              <ul className="bank__konsol">
                <li className="bank__kun">
                  <p className="bank__texts">Бесплантая консультация</p>
                  <h6 className="bank__text__text">Не везде</h6>
                </li>
                <li>
                  <p className="bank__texts">Скоринг</p>
                  <h6 className="bank__text__5">1 день</h6>
                </li>
              </ul>
            </div>
            <div className="bank__konsultatsiya">
              <ul className="bank__konsol">
                <li className="bank__kun">
                  <p className="bank__texts">Выдача</p>
                  <h6 className="bank__text__1">
                    Зависит от продукта или услуги
                  </h6>
                </li>
                <li>
                  <p className="bank__texts__3">Условия</p>
                  <h6 className="bank__text__2">Пакет документов</h6>
                </li>
              </ul>
            </div>
          </div>

          <div className="bank__box__2">
            <div className="bank__photo">
              <img className="bank__foto" src={Alba}></img>
              <p className="bank__photo__alfa">Alfa Mikrokredit</p>
            </div>

            <div className="bank__konsul">
              <ul className="bank__konsol">
                <li className="bank__kun">
                  <p className="bank__texts">Бесплантая консультация</p>
                  <h6 className="bank__text__text">Есть</h6>
                </li>
                <li>
                  <p className="bank__texts">Скоринг</p>
                  <h6 className="bank__text__B">
                    На второй день после оформления заявки
                  </h6>
                </li>
              </ul>
            </div>
            <div className="bank__konsultatsiya">
              <ul className="bank__konsol">
                <li className="bank__kun">
                  <p className="bank__texts">Выдача</p>
                  <h6 className="bank__text__1">1 день</h6>
                </li>
                <li>
                  <p className="bank__texts__C">Условия</p>
                  <h6 className="bank__text__H">Наличия пасспорта или ID</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
