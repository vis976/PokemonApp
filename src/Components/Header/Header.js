import React from "react";
import pokmLogo from "../../assets/img/pokmLogo.png"
import "./styles.css"

const Header = () => {
  return (
    <div className="container-header">
      <div>
      <img title="Go to home" alt="Go to home" src={pokmLogo} />
      <h2>Search for Pokemon by name</h2>
      </div>
      <div>
        <input placeholder="What Pokemon you are looking for" />
      </div>
    </div>
  )
}

export default Header