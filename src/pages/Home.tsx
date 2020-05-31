import React from 'react'

import { CssBaseline } from '@material-ui/core'

import NavBar from '../containers/NavBar'
import CountriesList from '../containers/CountriesList'
import ThemeMenu from '../components/ThemeMenu'

export default function Home() {
  return (
    <>
      <CssBaseline />
      <ThemeMenu />
      <NavBar />
      <CountriesList />
    </>
  )
}
