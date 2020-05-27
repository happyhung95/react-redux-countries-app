import React from 'react'

export const themes = {
  green: {
    color: '#20B2AA',
    name: 'Teal',
  },
  orange: {
    color: '#ff9700',
    name: 'Amber',
  },
  blue: {
    color: '#407294',
    name: 'Cerulean',
  },
}

export default React.createContext({
  theme: themes.blue,
  switchTheme: (name: string) => {},
})
