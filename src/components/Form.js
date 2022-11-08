import React from "react";
import "./Form.css";
import close from "../assets/close.png";
import prev from "../assets/prev.png";
import next from "../assets/next.png";

export default function Form({
  handleBackClick,
  handleNextClick,
  getRadioValue,
  step,
  radio,
}) {
  return (
    <div className="form-container">
      <div className="form-header">
        <h1>
          Тестовое задание для разработчика Тестовое задание для разработчика
        </h1>
        <img src={close} alt="close" onClick={handleBackClick} />
      </div>

      <div className="form-radio-block">
        <div className="radio">
          <label>
            {radio === 2 || radio === undefined ? (
              <input
                type="radio"
                name="page"
                value={2}
                checked
                onChange={(event) => getRadioValue(event.target.value)}
              />
            ) : (
              <input
                type="radio"
                name="page"
                value={2}
                onChange={(event) => getRadioValue(event.target.value)}
              />
            )}
            <i>Тестовое задание для разработчика</i>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              id="tststs"
              type="radio"
              name="page"
              value={3}
              onChange={(event) => getRadioValue(event.target.value)}
            />
            <i>Тестовое задание для разработчика</i>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="page"
              value={4}
              onChange={(event) => getRadioValue(event.target.value)}
            />
            <i>Тестовое задание для разработчика</i>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="page"
              value={5}
              onChange={(event) => getRadioValue(event.target.value)}
            />
            <i>Тестовое задание для разработчика</i>
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="page"
              value={6}
              onChange={(event) => getRadioValue(event.target.value)}
            />
            <i>Тестовое задание для разработчика</i>
          </label>
        </div>
      </div>
      <div className="form-radio-button-block">
        <button id="prev" onClick={handleBackClick}>
          <img id="form-prev-img" src={prev} alt="prev" /> Назад
        </button>
        <button id="next" onClick={handleNextClick}>
          Далее <img src={next} alt="next" />
        </button>
      </div>
    </div>
  );
}
