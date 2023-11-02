import React from "react";
import "./_Login.css";
import img1 from "../images-20231018T171719Z-001/images/cta-logo-one.svg";
import img2 from "../images-20231018T171719Z-001/images/cta-logo-two.png";
import Header from "./Header";

const Login = () => {
    return (
        <>
         <Header></Header>
            <div className="Conatiner" >
           
                <div className="Content">

                    <div className="Content_items">
                        <img src={img1} alt="logo1"></img>
                        <button id="btn" >GET ALL THERE</button>
                        <p id="offer">Get Premier acess to raya and the House of a Dragon for an additional fee with Disney+ subscription.As of 12/11/2023, the price of Disney+ will increase by $1 by the end of this months . </p>
                        <img src={img2}></img>
                    </div>
                </div>

            </div>
        </>)
};

export default Login;