import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha
} from "react-simple-captcha";

// import React from 'react'


    class CaptchaTest extends Component {
        constructor(props) {
            super(props);
        }
      componentDidMount() {
        loadCaptchaEnginge(5);
      }
    
      doSubmit = () => {
        let user_captcha = document.getElementById("user_captcha_input").value;
    
        if (validateCaptcha(user_captcha) == true) {
          
          
            // alert("Captcha Matched");
            this.props.setcaptchaverified(true)
          // loadCaptchaEnginge(6);
          // document.getElementById("user_captcha_input").value = "";
        } else {
          alert("Captcha Does Not Match");
          document.getElementById("user_captcha_input").value = "";
        }
      };
    
      render() {
        return (
          <div>
           
                <div className="col mt-3">
                  <LoadCanvasTemplate />
                </div>
    
         
                    <input
                      placeholder="Enter Captcha"
                      id="user_captcha_input"
                      name="user_captcha_input"
                      type="text"
                    ></input>
         
        
    
          
                  <div className="verifycaptcha">
                    <button
                      
                      onClick={() => this.doSubmit()}
                    >
                      Verify Captcha
                    </button>
                    
          
        
             
              </div>
            </div>
     
        );
      }
    }
 




export default CaptchaTest;
