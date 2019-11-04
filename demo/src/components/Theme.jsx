import React, { useState ,useContext } from 'react'

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
}

const ThemeContext = React.createContext(null)

function Theme() {
  const [theme, setTheme] = useState(themes.dark)
  function toggleTheme() {
    setTheme(theme => (theme === themes.light ? themes.dark : themes.light))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <header>Context</header>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

function ThemeButton() {
  const {theme, toggleTheme}= useContext(ThemeContext)
  return (
    <button style={{background: theme.background, color: theme.foreground}} onClick={toggleTheme}>
      i am styled by theme context
    </button>
  )
}

export default Theme


