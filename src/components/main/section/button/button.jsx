import React from 'react'
import "./button.scss";

export default function Button() {
  return (
    <div className="container">
      <div className="button">
        <ul className="button__item">
          <li className="button__list">
            <p className="button__title">Срок кредита</p>
            <span className="button__text">Срок кредита</span>
          </li>
          <li className="button__list__1">
            <p className="button__title">Второй слайд</p>
            <span className="button__text">Срок кредита</span>
          </li>
          <li className="button__list__1">
            <p className="button__title">Срок кредита</p>
            <span className="button__text">Срок кредита</span>
          </li>
          <li className="button__list__1">
            <p className="button__title">Срок кредита</p>
            <span className="button__text">Срок кредита</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
