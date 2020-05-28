import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

// CountriesList Component
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      [theme.breakpoints.up('md')]: {
        flexGrow: 0,
      },
    },
    paper: {
      padding: theme.spacing(2),
      background: '#F9F9F9',
    },
    image: {
      width: 150,
    },
    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    },

    table: {
      marginTop: 65,
    },
    countryName: {
      textDecoration: 'none',
      color: 'black',
      fontWeight: 'bolder',
    },
  })
)

export default useStyles
