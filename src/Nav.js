import React, { useEffect, useState } from "react";
import "./Nav.css"
function Nav(){
    const[show,handleShow]=useState(false)
    useEffect(() =>{
        window.addEventListener("scroll",() => {
            if(window.scrollY >100){
                handleShow(true)

            }else handleShow(false)
        });
        return () =>{
        window.removeEventListener("scroll");
        };
    },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
        <img
        className="nav__logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix-Logo"
        />
        <img 
        className="nav__avatar"
        src="https://i.pinimg.com/736x/bd/ee/4c/bdee4c328550aaf21aa9f43fd19e2136.jpg"
        alt="avatar"
         />
        </div>
    )
}

export default Nav