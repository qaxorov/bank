import React, { useState } from "react";
import { Logo, Vector } from "../../assets/image/img";
import "./header.scss";
import "./index.css";
import { listt } from "../../constant/list";
import { Link } from "react-router-dom";
export default function Header() {
  const [state, setState] = useState(1);
  return (
    <header>
      <div className="container">
        <div className="header__navbar">
          <ul className="header__item__right">
            <img className="header__navbar__img" src={Logo}></img>
            <p className="header__top">г.Ташкент</p>
            <p className="header__top__1"> Помощь</p>
            {listt?.map((e) => (
              <Link key={e.id} to={`${e.path}`} onClick={() => setState(e.id)}>
                <li
                  className={`${state == e.id ? "active" : null} header__list`}
                >
                  {e.title}
                </li>
              </Link>
            ))}
          </ul>
          <ul className="header__item__left">
            <li className="header__list__fb">
              <img src={Vector}></img>
              <p className="header__list__fr">RU</p>
            </li>
            <Link to={'tel:+998909919029'}>
              <li className="header__list__br">+71 245-70-10</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
