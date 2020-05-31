import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Typography,
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  ClickAwayListener,
} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { useTheme } from '@material-ui/core/styles'

import { AppState } from '../../types'
import { toggleMenuOpen } from '../../redux/actions/ui'
import ThemeContext, { themes } from '../../context'
import useStyles from './styles'

export default function ThemeMenu() {
  const classes = useStyles()
  const theme = useTheme()
  const dispatch = useDispatch()
  let open = useSelector((state: AppState) => state.ui.isMenuOpened)

  const { switchTheme } = useContext(ThemeContext)

  const handleMenuClose = () => dispatch(toggleMenuOpen(false))

  return (
    <>
      {/* add constraint to prevent dispatching toggleMenuOpen action
    from ClickAwayListener when Drawer is not opened */}
      {open && (
        <div className={classes.root}>
          <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={handleMenuClose}
          >
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <Typography variant="h6" style={{ paddingLeft: 20 }}>
                  SWITCH THEME
                </Typography>
                <IconButton onClick={handleMenuClose}>
                  {theme.direction === 'ltr' ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </div>
              <Divider />
              <List>
                {[themes.hazel, themes.red, themes.blue, themes.yellow].map(
                  (theme) => (
                    <ListItem
                      button
                      key={theme.color}
                      onClick={() => {
                        switchTheme(theme.color)
                      }}
                    >
                      <ListItemIcon
                        className={classes.themeIcon}
                        style={{ backgroundColor: theme.color }}
                      >
                        {theme.name[0]}
                      </ListItemIcon>
                      <ListItemText primary={theme.name} />
                    </ListItem>
                  )
                )}
              </List>
            </Drawer>
          </ClickAwayListener>
        </div>
      )}
    </>
  )
}
