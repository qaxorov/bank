import React from "react";
import "./kredit.scss";
import { Dollar } from "../../../../assets/image/img";
export default function Kredit() {
  return (
    <div className="kredit">
      <div className="container">
        <div className="kredit__box">
          <div className="kredit__right">
            <div className="kredit__texts">
              <div className="kredit__tittle">
                <span className="kredit__span">Быстрые кредиты</span>
                по низким процентам, оформление в течение 10 минут
              </div>
              <p className="kredit__text2">
                Срок кредита — от 6 до 60 месяцев, чтобы у вас была возможность
                выбрать комфортный размер платежаАвтокредит без лишних
                документов
              </p>
            </div>
            <button className="kredit__btn">Свяжитесь с нами</button>
          </div>
          <div className="kredit__left">
            <img src={Dollar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
