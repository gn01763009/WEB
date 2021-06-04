import React from "react"
import { FaLink } from "react-icons/fa"

const TopNavbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="topnavbar">
      <div className="topnav-center">
        <a href="https://github.com/gn01763009/WEB" className="topnav-link">
          Github
          <FaLink></FaLink>
        </a>
        <div className="topnav-info">
          <div>Display</div>
          <label className="topnav-theme">
            <input type="checkbox" onClick={toggleTheme} />
            <span className="check" />
          </label>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar
