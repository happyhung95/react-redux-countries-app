import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

//Drawer Component

const drawerWidth = 300

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'space-between',
    },
    themeIcon: {
      padding: 15,
      marginRight: 10,
      color: 'white',
      justifyContent: 'center',
    },
  })
)

export default useStyles
