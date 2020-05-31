import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  Menu,
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import CloseIcon from '@material-ui/icons/Close'

import ThemeContext from '../../context'
import { AppState } from '../../types'
import { removeCountry } from '../../redux/actions/countries'
import useStyles from './styles'

interface Props {
  anchorEl: HTMLElement | null
  isCartOpen: boolean
  handleCartClose: () => void
}

const ShoppingCart: React.FC<Props> = ({
  anchorEl,
  isCartOpen,
  handleCartClose,
}) => {
  const classes = useStyles()
  const inCart = useSelector((state: AppState) => state.countries.inCart)
  const dispatch = useDispatch()
  const { theme } = useContext(ThemeContext)

  const handleRemoveCountry = (name: string) => dispatch(removeCountry(name))

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="shopping-cart"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isCartOpen}
      onClose={handleCartClose}
    >
      <Typography component="div">
        <Box className={classes.cartCloseIcon}>
          <IconButton
            edge="end"
            aria-label="close cart"
            aria-controls={`close cart`}
            aria-haspopup="true"
            onClick={handleCartClose}
            color="inherit"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          fontWeight="fontWeightBold"
          fontSize="h6.fontSize"
          className={classes.cartHeader}
        >
          {inCart.length !== 1
            ? `Cart: ${inCart.length} countries`
            : `Cart: 1 country`}
        </Box>
        <Divider />
      </Typography>
      {inCart.map(({ flag, name }) => (
        <li key={name} className={classes.cartContainer}>
          <Grid container>
            <Grid item xs={9} className={classes.cartCountry}>
              <Link
                to={`/react-redux-countries-app/country/${name}`}
                className={classes.cartLink}
              >
                <img
                  src={flag}
                  width={90}
                  alt={flag}
                  style={{ paddingRight: 10 }}
                />
              </Link>
              <Typography>
                <Link
                  to={`/react-redux-countries-app/country/${name}`}
                  className={classes.cartLink}
                  style={{ paddingRight: 20 }}
                >
                  {name}
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                edge="end"
                aria-label="remove country from cart"
                aria-controls={`remove ${name} from cart`}
                aria-haspopup="true"
                onClick={() => handleRemoveCountry(name)}
                color="inherit"
              >
                <DeleteIcon style={{ fill: theme.color }} />
              </IconButton>
            </Grid>
          </Grid>
        </li>
      ))}
    </Menu>
  )
}

export default ShoppingCart
