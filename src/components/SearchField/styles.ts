import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

// SearchField Component
// from MUI
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50ch',
      },
    },
  })
)

export default useStyles
