import React, { useState } from 'react'

import Routes from './Routes'
import ThemeContext, { themes } from './context'

export default function App() {
  const [context, setContext] = useState({
    theme: themes.blue,
    switchTheme: (color: string) => {
      setContext((current) => ({
        ...current,
        theme:
          color === themes.blue.color
            ? themes.blue
            : color === themes.green.color
              ? themes.green
              : themes.orange,
      }))
    },
  })

  return (
    <ThemeContext.Provider value={context}>
      <Routes />
    </ThemeContext.Provider>
  )
}
