import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '@material-ui/core/Button'

import ThemeContext from '../../context'
import { Country, AppState } from '../../types'
import { addCountry } from '../../redux/actions/countries'
import useStyles from './styles'

const AddButton: React.FC<{ country: Country }> = ({ country }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { theme } = useContext(ThemeContext)

  const inCart = useSelector((state: AppState) => state.countries.inCart)

  let isDisabled =
    inCart.find((inCartCountry) => inCartCountry.name === country.name) !==
      undefined || false // return true if there's match

  const handleClick = () => dispatch(addCountry(country))

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={handleClick}
      disabled={isDisabled}
      style={{ backgroundColor: theme.color }}
    >
      Add
    </Button>
  )
}

export default AddButton
