import React, { useState } from 'react'

import Routes from './Routes'
import ThemeContext, { themes, handleSwitchTheme } from './context'

export default function App() {
  const [context, setContext] = useState({
    theme: themes.red,
    switchTheme: (color: string) => {
      setContext((current) => ({
        ...current,
        theme: handleSwitchTheme(color),
      }))
    },
  })

  return (
    <ThemeContext.Provider value={context}>
      <Routes />
    </ThemeContext.Provider>
  )
}
