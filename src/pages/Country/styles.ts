import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  image: {
    width: 250,
  },
  img: {
    marginBottom: 50,
    display: 'block',
    maxWidth: 200,
    maxHeight: '100%',
  },
}))

export default useStyles
