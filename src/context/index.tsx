import React from 'react'

export const themes = {
  hazel: {
    color: '#8E7618 ',
    name: 'Hazel',
  },
  red: {
    color: '#d3003f',
    name: 'Utah Crimson',
  },
  blue: {
    color: '#000080',
    name: 'Navy Blue',
  },
  yellow: {
    color: '#fcc200',
    name: 'Golden Poppy',
  },
}

export const handleSwitchTheme = (color: string) => {
  switch (color) {
  case themes.hazel.color:
    return themes.hazel
  case themes.red.color:
    return themes.red
  case themes.blue.color:
    return themes.blue
  case themes.yellow.color:
    return themes.yellow
  default:
    return themes.red
  }
}

export default React.createContext({
  theme: themes.blue,
  switchTheme: (name: string) => {},
})
