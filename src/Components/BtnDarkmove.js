import React, { useEffect, useState, useRef} from 'react'
import sun from "./Navbar/icon/sun.svg";
import moon from './Navbar/icon/moon.svg';
export default function BtnDarkmove() {
    const[darkMode,setDarkMode]= useState("Light");
    const btnRef = useRef(null);
    useEffect(()=>{
        if(darkMode==="dark"){
            document.body.classList.add("dark");
            btnRef.current.classList.add("dark-mode-btn--active")
        }else{
            document.body.classList.remove("dark")
            btnRef.current.classList.remove("dark-mode-btn--active")
        }
    },[darkMode])
    const toggleDarkMode = () => {
        setDarkMode((currentValue)=>{
            return currentValue === "Light" ? "dark" : "Light"
        })
    }
    
  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  )
}
