import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Captcha from "./CaptchaTest";
// import Turnstile from '@teamloick/turnstile.js/react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

export default function App() {
  const [formsubmitted, setformsubmitted] = useState(false);
  const [captchaverified, setcaptchaverified] = useState(false);
  useEffect(() => {
    console.log("captcha checked");
  }, [captchaverified]);

  const submitform = () => {
    setformsubmitted(true);
  };

  if (formsubmitted) {
    return (
      <>
        <h1>Successfully Registered</h1>
      </>
    );
  }

  return (
    <>
      {/* //signup from */}

      <div className="container">
        <h1>Sign Up</h1>

        <input type="text" placeholder="Enter Name" required />
        <input type="text" placeholder="Enter email" required />
        <input type="password" placeholder="Enter Password" required />
        <input type="password" placeholder="Enter Confirm password" required />
        {/* <Captcha setcaptchaverified={setcaptchaverified} /> */}
        {captchaverified && (
          <button onClick={() => submitform()} id="submitconfirm">
            Submit
          </button>
        )}
        {!captchaverified && (
          <>
          <Captcha setcaptchaverified={setcaptchaverified} />
            <button id="blockedsubmit">Captcha not verified!!</button>
          </>
        )}
      </div>
    </>
  );
}
