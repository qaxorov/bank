import React from "react";
import "./zayem.scss";
import { Mask } from "../../../../assets/image/img";
import { bank } from "../../../../constant/bank";

export default function Zayem() {
  return (
    <div className="container">
      <div className="bank">
        <h1 className="bank__title">
          Почему лучше обратиться к нам,
          <span className="bank__text1">а не в банк</span>
        </h1>
        <div className="bank__cards">
          {bank?.map(({ id, img, summary, title }) => (
            <div key={id} className="bank__card">
              <div className="bank__texts">
                <h1 className="bank__text1">{title}</h1>
                <p className="bank__text2">{summary}</p>
              </div>
              <img className="bank__img" src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
