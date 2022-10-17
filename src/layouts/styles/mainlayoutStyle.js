import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  active: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  addNewQuestion: {
    backgroundColor: '#AEACFA80',
    minHeight: '100px',
    minWidth: '100px',
    border: 'none',
    borderRadius: '15px',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'Column',
  },
  content: {
    flexGrow: 1,
    padding: 3,
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
  },
  addIcon: {
    borderRadius: '50%',
    width: '25px',
    height: '25px',
    backgroundColor: '#AEACFA',
    color: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
  },
  hideOnClose: {
    display: 'none',
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
