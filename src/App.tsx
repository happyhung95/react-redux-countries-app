import React, { useState } from 'react'

import Routes from './Routes'
import ThemeContext, { themes } from './context'

export default function App() {
  const [context, setContext] = useState({
    theme: themes.red,
    switchTheme: (color: string) => {
      setContext((current) => ({
        ...current,
        theme:
          color === themes.blue.color
            ? themes.blue
            : color === themes.hazel.color
              ? themes.hazel
              : color === themes.yellow.color
                ? themes.yellow
                : themes.red,
      }))
    },
  })

  return (
    <ThemeContext.Provider value={context}>
      <Routes />
    </ThemeContext.Provider>
  )
}
