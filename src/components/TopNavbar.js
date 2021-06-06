import React from "react"
import DarkMode from "./DarkMode"
import { darkTheme, lightTheme } from "../components/DarkTheme"
import { FaLink } from "react-icons/fa"
// import DarkMode from "./DarkMode"
const TopNavbar = () => {
  const [theme, setTheme] = React.useState("dark")
  if (localStorage.theme === "dark") {
    darkTheme(theme)
  } else {
    lightTheme(theme)
  }
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
    if (theme === "dark") {
      localStorage.setItem("theme", darkTheme(theme))
    } else {
      localStorage.setItem("theme", lightTheme(theme))
    }
  }
  return (
    <nav className="topnavbar">
      <div className="topnav-center">
        <a
          href="https://github.com/gn01763009/WEB"
          className="topnav-link"
          target="_blank"
        >
          Github
          <FaLink></FaLink>
        </a>
        <DarkMode localStorage={localStorage} toggleTheme={toggleTheme} />
      </div>
    </nav>
  )
}

export default TopNavbar
