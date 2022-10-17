import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    overflowX: 'hidden',
    maxWidth: '85vw',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      width: '100%',
      padding: 0,
      justifyContent: 'center',
    },
  },

  leftBox: {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}));

export default useStyles;
