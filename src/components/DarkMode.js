import React from "react"

const DarkMode = ({ localStorage, toggleTheme }) => {
  return (
    <div className="topnav-info">
      <div>Display</div>
      <label className="topnav-theme">
        <input className="helloworld" type="checkbox" onClick={toggleTheme} />
        <span
          className={`check ${
            localStorage.theme === "dark" ? "dark-span" : "light-span"
          }`}
        />
      </label>
    </div>
  )
}

export default DarkMode
