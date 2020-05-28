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

export default React.createContext({
  theme: themes.blue,
  switchTheme: (name: string) => {},
})
