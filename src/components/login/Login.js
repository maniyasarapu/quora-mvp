import React from "react";
import "./Login.css";
import mani from "../images/quora_img.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

const login = () => {
  return (
   <div className="login">
        <div className="login_main">
      <div className="login_header">
        <div className="login_img">
        <img src={mani} alt="quora" />
        </div>
        <h4>
          A place to share knowledge and better understand the world 
        </h4> 
      </div> 
      <div className="login_middle">
        <div className="login_links">
         <div className="login_link">
        <div> 
         <p>continue with google </p> 
         </div>
         <div>
         <p>continue with facebook </p> 
         </div>
         </div>
        <h4 id="email">signup with email</h4>
          <p>By continuing you indicate that you have read and agree to Quora's<span style={{color:"blue"}}>Terms of Service</span> and <span style={{color:"blue"}}> Privacy Policy</span>.</p>
         </div>
        <div className="login_inputs">
          <h2> LOGIN </h2> 
         <div className="login_input">
         <label>EMAIL</label>
          <input type="text" placeholder="Email" />
         </div>
        <div className="login_input">
        <label>PASSWORD</label>
          <input type="text" placeholder="Password" />
        </div>
         <div className="login_buttons">
         <p>forget password</p>
          <input type="submit" value="Login"/>
         </div>

        </div> 
      </div> 
      <div className="login_register">
          <input type="submit"  value="Register"/>
          </div>
      <div className="login_language">
    
         <p> हिन्दी </p>
         <p> తెలుగు </p> 
         <p>ENGLISH</p>
         </div>
      <div className="login_footer">
         <p> About </p> 
         <p> Languages </p>
         <p> Careers </p> 
         <p> Bussiness </p> 
         <p> Privacy </p>
         <p> Terms </p>
         <p> Contact </p> 
         <p> Quora fake Inc2022 </p> 
      </div>
    </div>
   </div>
  );
};

export default login;
