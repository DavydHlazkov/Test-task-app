import React from "react";
import close from "../assets/close.png";
import prev from "../assets/prev.png";

export default function Page2({
  userData,
  setUserData,
  handleSubmit,
  handlePrevClick,
  handleBackClick,
  nameError,
  surnameError,
  emailError,
  phoneError,
}) {
  return (
    <div className="form-container">
      <img src={close} alt="close" onClick={handleBackClick} />
      <div className="form-input-block">
        <div className={nameError ? "unique-input error" : "unique-input"}>
          <input
            type="text"
            placeholder="Введите имя"
            value={userData.p2Name}
            onChange={(e) =>
              setUserData({ ...userData, p2Name: e.target.value })
            }
          />
        </div>
        <div className={surnameError ? "unique-input error" : "unique-input"}>
          <input
            type="text"
            placeholder="Введите фамилию"
            value={userData.p2Surname}
            onChange={(e) =>
              setUserData({ ...userData, p2Surname: e.target.value })
            }
          />
        </div>
        <div className={emailError ? "unique-input error" : "unique-input"}>
          <input
            type="email"
            placeholder="Введите E-mail"
            value={userData.p2Email}
            onChange={(e) =>
              setUserData({ ...userData, p2Email: e.target.value })
            }
          />
        </div>
        <div className={phoneError ? "unique-input error" : "unique-input"}>
          <input
            type="text"
            placeholder="+380 (99) 999-99-99"
            value={userData.p2Phone}
            onChange={(e) =>
              setUserData({ ...userData, p2Phone: e.target.value })
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
