import React from "react"
import { darkTheme, lightTheme } from "./DarkTheme"
const DarkMode = () => {
  const [theme, setTheme] = React.useState("dark")
  if (typeof window !== "undefined") {
    if (localStorage.theme === "dark") {
      darkTheme(theme)
    } else {
      lightTheme(theme)
    }
  } else {
    let localStorage = { theme: "light" }
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
    <div className="topnav-info">
      <div>Display</div>
      <label className="topnav-theme">
        <input className="helloworld" type="checkbox" onClick={toggleTheme} />
        <span
          className={`check ${theme === "dark" ? "dark-span" : "light-span"}`}
        />
      </label>
    </div>
  )
}

export default DarkMode
