import React from "react";
import logo from "../../assets/logo.png"
import "./styles.css"

const Header = () => {
  return (
    <div className="container-header">
      <div className="left-box">
      <img  src={logo} alt=""/>
      <h2>Search for Pokemon by name</h2>
      </div>
      <div className="right-box">
        <input placeholder="What Pokemon you are looking for" />
      </div>
    </div>
  )
}

export default Header