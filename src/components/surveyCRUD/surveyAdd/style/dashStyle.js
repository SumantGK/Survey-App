import { makeStyles } from '@mui/styles';

const dashStyle = makeStyles((theme) => ({
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
  mapBox: {
    borderRadius: '5px',
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    border: '1px solid #ddd',
    width: '100%',
    height: 'auto',
  },
  leftBox: {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  rightBox: {
    gap: 5,
    width: '25%',
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      paddingBottom: '10px',
    },
  },
  questionBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    borderRadius: '10px',
    paddingLeft: '10px',
    '&:hover': {
      color: 'white',

      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

export default dashStyle;
