import React, { useEffect, useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { useTheme } from '@material-ui/core/styles'
import {
  useMediaQuery,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core'

import AddButton from '../../components/AddButton'
import ThemeContext from '../../context'
import { AppState } from '../../types'
import useStyles from './styles'

function CountriesList() {
  // countries is already sorted in the saga
  let countries = useSelector((state: AppState) => state.countries.countries)
  const searchKey = useSelector((state: AppState) => state.ui.searchKey)
  const [ascendingOrder, setSortOrder] = useState(true)
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    countries = countries.reverse()
  }, [ascendingOrder, countries])

  const handleSort = () => setSortOrder(!ascendingOrder)

  const classes = useStyles()

  const renderMobile = () => (
    <div style={{ marginTop: 60 }}>
      {countries
        .filter(({ name }) =>
          name.toLowerCase().includes(searchKey.toLowerCase())
        )
        .map((country, index) => (
          <div className={classes.root} key={index}>
            <Paper className={classes.paper}>
              <Grid container direction="column" alignItems="center">
                <Link to={`/country/${country.name}`} className={classes.image}>
                  <img
                    className={classes.img}
                    src={country.flag}
                    alt={country.name}
                  />
                </Link>
                <Typography variant="h5">
                  <Link
                    to={`/country/${country.name}`}
                    className={classes.countryName}
                    style={{ color: theme.color }}
                  >
                    {country.name}
                  </Link>
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                  Population
                </Typography>
                <Typography variant="body1">
                  {new Intl.NumberFormat('fi-FI', { useGrouping: true }).format(
                    country.population
                  )}
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                  Languages
                </Typography>
                <Typography variant="body1">
                  {country.languages
                    .map((language) => language.name)
                    .join(', ')}
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                  Region
                </Typography>
                <Typography gutterBottom variant="body1">
                  {country.region}
                </Typography>
                <AddButton country={country} />
              </Grid>
            </Paper>
          </div>
        ))}
    </div>
  )

  const renderDesktop = () => (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Flag</TableCell>
            <TableCell align="left">
              <TableSortLabel
                direction={ascendingOrder ? 'asc' : 'desc'}
                onClick={handleSort}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell align="left">Languages</TableCell>
            <TableCell align="right">Population</TableCell>
            <TableCell align="left">Region</TableCell>
            <TableCell>{/*button column */}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries
            .filter(({ name }) =>
              name.toLowerCase().includes(searchKey.toLowerCase())
            )
            .map((country, index) => (
              <TableRow key={index}>
                <TableCell align="right" className={classes.image}>
                  <Link to={`/country/${country.name}`}>
                    <img
                      className={classes.img}
                      src={country.flag}
                      alt={country.name}
                    />
                  </Link>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Link
                    to={`/country/${country.name}`}
                    className={classes.countryName}
                  >
                    {country.name}
                  </Link>
                </TableCell>
                <TableCell align="left">
                  {country.languages.map(({ name }, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </TableCell>
                <TableCell align="right">
                  {new Intl.NumberFormat('fi-FI', { useGrouping: true }).format(
                    country.population
                  )}
                </TableCell>
                <TableCell align="left">{country.region}</TableCell>
                <TableCell align="left">
                  <AddButton country={country} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

  // Responsive render
  const themeMUI = useTheme()
  const desktopView = useMediaQuery(themeMUI.breakpoints.up('sm')) // min view width = 600px

  return <>{desktopView ? renderDesktop() : renderMobile()}</>
}

export default CountriesList
