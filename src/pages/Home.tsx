import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { CssBaseline } from '@material-ui/core'

import { fetchCountriesFromSaga } from '../redux/actions'
import NavBar from '../containers/NavBar'
import CountriesList from '../containers/CountriesList'
import ThemeMenu from '../components/ThemeMenu'

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCountriesFromSaga())
  }, [dispatch])

  return (
    <>
      <CssBaseline />
      <ThemeMenu />
      <NavBar />
      <CountriesList />
    </>
  )
}
