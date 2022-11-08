import "./App.css";
import clock from "../src/assets/clock.png";
import coins from "../src/assets/coins.png";
import wallet from "../src/assets/wallet.png";
import video from "../src/assets/bg.mp4";
import React, { useState } from "react";
import Form from "./components/Form";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";

function App() {
  const [step, setStep] = useState(0);
  const [radio, setRadio] = useState();
  const [userData, setUserData] = useState({
    p1Name: "",
    p1Surname: "",
    p1Email: "",
    p1Phone: "",
    p2Name: "",
    p2Surname: "",
    p2Email: "",
    p2Phone: "",
    p3Name: "",
    p3Surname: "",
    p3Email: "",
    p3Phone: "",
    p4Name: "",
    p4Surname: "",
    p4Email: "",
    p4Phone: "",
    p5Name: "",
    p5Surname: "",
    p5Email: "",
    p5Phone: "",
  });
  const [nameError, setNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const DisplayPage = () => {
    if (step === 1) {
      return (
        <Form
          handleNextClick={handleNextClick}
          handleBackClick={handleBackClick}
          getRadioValue={getRadioValue}
          step={step}
          radio={radio}
        />
      );
    } else if (step === 2) {
      return (
        <Page1
          userData={userData}
          setUserData={setUserData}
          handleSubmit={handleSubmit}
          handlePrevClick={handlePrevClick}
          handleBackClick={handleBackClick}
          nameError={nameError}
          surnameError={surnameError}
          phoneError={phoneError}
          emailError={emailError}
        />
      );
    } else if (step === 3) {
      return (
        <Page2
          userData={userData}
          setUserData={setUserData}
          handleSubmit={handleSubmit}
          handlePrevClick={handlePrevClick}
          handleBackClick={handleBackClick}
          nameError={nameError}
          surnameError={surnameError}
          phoneError={phoneError}
          emailError={emailError}
        />
      );
    } else if (step === 4) {
      return (
        <Page3
          userData={userData}
          setUserData={setUserData}
          handleSubmit={handleSubmit}
          handlePrevClick={handlePrevClick}
          handleBackClick={handleBackClick}
          nameError={nameError}
          surnameError={surnameError}
          phoneError={phoneError}
          emailError={emailError}
        />
      );
    } else if (step === 5) {
      return (
        <Page4
          userData={userData}
          setUserData={setUserData}
          handleSubmit={handleSubmit}
          handlePrevClick={handlePrevClick}
          handleBackClick={handleBackClick}
          nameError={nameError}
          surnameError={surnameError}
          phoneError={phoneError}
          emailError={emailError}
        />
      );
    } else if (step === 6) {
      return (
        <Page5
          userData={userData}
          setUserData={setUserData}
          handlePrevClick={handlePrevClick}
          handleSubmit={handleSubmit}
          handleBackClick={handleBackClick}
          nameError={nameError}
          surnameError={surnameError}
          phoneError={phoneError}
          emailError={emailError}
        />
      );
    }
  };

  const handleBackClick = () => {
    setStep(0);
  };

  const handleNextClick = () => {
    setStep(radio);
  };

  const handlePrevClick = () => {
    setStep(1);
    setRadio(2);
  };

  const handleSubmit = () => {
    let page = radio - 1;
    if (userData[`p${page}Surname`] === "") {
      setSurnameError(true);
    } else {
      setSurnameError(false);
    }
    if (userData[`p${page}Email`] === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (userData[`p${page}Phone`] === "") {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    if (userData[`p${page}Name`] === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (
      userData[`p${page}Name`] !== "" &&
      userData[`p${page}Surname`] !== "" &&
      userData[`p${page}Email`] !== "" &&
      userData[`p${page}Phone`] !== ""
    ) {
      setNameError(false);
      setSurnameError(false);
      setPhoneError(false);
      setEmailError(false);
      setStep(0);
    }
  };

  const getRadioValue = (value) => {
    setRadio(+value);
  };

  return (
    <div className="container">
      <video id="background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="main">
        {step <= 0 ? (
          <div>
            {" "}
            <h1>
              Тестовое задание для разработчика <span>Тестовое задание</span>{" "}
              для разработчика
            </h1>
            <h4>Тестовое задание для разработчика</h4>
            <p>Вы получаете:</p>
            <ul>
              <li>Тестовое задание для разработчика</li>
              <li>Тестовое задание для разработчика</li>
              <li>Тестовое задание для разработчика</li>
            </ul>
            <button onClick={handlePrevClick}>Регистрироваться</button>{" "}
          </div>
        ) : (
          <div className="pages">{DisplayPage()}</div>
        )}
      </div>
      {step <= 0 ? (
        <footer>
          <div className="block">
            <img src={clock} alt="clock" />
            <div className="points">
              <div className="test"></div>
              <ul>
                <li>Тестовое задание для разработчика</li>
                <li>Тестовое задание для разработчика</li>
                <li>Тестовое задание для разработчика</li>
              </ul>
            </div>
          </div>
          <div className="block">
            <img src={coins} alt="coins" />
            <div className="points">
              <div className="test"></div>
              <ul>
                <li>Тестовое задание Тестовое задание для разработчика</li>
                <li>Тестовое задание Тестовое задание для разработчика</li>
              </ul>
            </div>
          </div>
          <div className="small-block">
            <img src={wallet} alt="wallet" />
            <div className="points">
              <div className="test"></div>
              <ul>
                <li>Тестовое задание для разработчика</li>
                <li>Тестовое задание для разработчика</li>
              </ul>
            </div>
          </div>
        </footer>
      ) : null}
    </div>
  );
}

export default App;
