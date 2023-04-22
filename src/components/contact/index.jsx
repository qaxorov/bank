import React from "react";
import "./contact.scss";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <div className="container">
      <div className="contact">
        <div className="contact__texts">
          <h1 className="contact__title">
            Остались вопросы? Позвоните нам, и мы вас проконсультируем
          </h1>
          <p className="contact__pargrf">
            Срок кредита — от 6 до 60 месяцев, чтобы у вас была возможность
            выбрать комфортный размер платежаАвтокредит без лишних документов
          </p>
        </div>
        <Link className="contact__btn">Свяжитесь с нами</Link>

        <div
          className="contact__map"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div className="contact__elip

          "></div>
          <a
            href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: 12,
              position: "absolute",
              top: 0,
            }}
          >
            Ташкент
          </a>
          <a
            href="https://yandex.uz/maps/10335/tashkent/?ll=69.279737%2C41.311151&utm_medium=mapframe&utm_source=maps&z=12"
            style={{
              color: "#eee",
              fontSize: 12,
              position: "absolute",
              top: 14,
            }}
          >
            Яндекс&nbsp;Карты — транспорт, навигация, поиск мест
          </a>
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&z=12"
            width={791}
            height={412}
            frameBorder={1}
            allowFullScreen="true"
            style={{ position: "relative" }}
          />
        </div>
      </div>
    </div>
  );
}
