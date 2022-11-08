import React from "react";
import "./Page.css";
import close from "../assets/close.png";
import prev from "../assets/prev.png";

export default function Page1({
  userData,
  setUserData,
  handleSubmit,
  handlePrevClick,
  handleBackClick,
  nameError,
  surnameError,
  phoneError,
  emailError,
}) {
  return (
    <div className="form-container">
      <img src={close} alt="close" onClick={handleBackClick} />
      <div className="form-input-block">
        <div className={nameError ? "unique-input error" : "unique-input"}>
          <input
            type="text"
            placeholder="Введите имя"
            value={userData.p1Name}
            onChange={(e) =>
              setUserData({ ...userData, p1Name: e.target.value })
            }
          />
        </div>
        <div className={surnameError ? "unique-input error" : "unique-input"}>
          <input
            type="text"
            placeholder="Введите фамилию"
            value={userData.p1Surname}
            onChange={(e) =>
              setUserData({ ...userData, p1Surname: e.target.value })
            }
          />
        </div>
        <div className={emailError ? "unique-input error" : "unique-input"}>
          <input
            id={emailError === true ? "error" : ""}
            type="email"
            placeholder="Введите E-mail"
            value={userData.p1Email}
            onChange={(e) =>
              setUserData({ ...userData, p1Email: e.target.value })
            }
          />
        </div>
        <div className={phoneError ? "unique-input error" : "unique-input"}>
          <input
            type="text"
            placeholder="+380 (99) 999-99-99"
            value={userData.p1Phone}
            onChange={(e) =>
              setUserData({ ...userData, p1Phone: e.target.value })
            }
          />
        </div>
      </div>
      <div className="form-button-block">
        <button id="prev" onClick={handlePrevClick}>
          <img src={prev} alt="prev" /> Назад
        </button>
        <button id="next" onClick={handleSubmit}>
          Регистрироваться
        </button>
      </div>
    </div>
  );
}
