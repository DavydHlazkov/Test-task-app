import React from "react";
import close from "../assets/close.png";
import prev from "../assets/prev.png";

export default function Page3({
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
            value={userData.p3Name}
            onChange={(e) =>
              setUserData({ ...userData, p3Name: e.target.value })
            }
          />
        </div>
        <div className={surnameError ? "unique-input error" : "unique-input"}>
          <input
            type="text"
            placeholder="Введите фамилию"
            value={userData.p3Surname}
            onChange={(e) =>
              setUserData({ ...userData, p3Surname: e.target.value })
            }
          />
        </div>
        <div className={emailError ? "unique-input error" : "unique-input"}>
          <input
            type="email"
            placeholder="Введите E-mail"
            value={userData.p3Email}
            onChange={(e) =>
              setUserData({ ...userData, p3Email: e.target.value })
            }
          />
        </div>
        <div className={phoneError ? "unique-input error" : "unique-input"}>
          <input
            type="text"
            placeholder="+380 (99) 999-99-99"
            value={userData.p3Phone}
            onChange={(e) =>
              setUserData({ ...userData, p3Phone: e.target.value })
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
