import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  cancleBtn: {
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.main,
    },
  },
  cancleBtnWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
    gap: '5px',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    border: '1px solid #ddd',
    padding: '5px',
    borderRadius: '15px',
    width: '100%',
  },
}));
export default useStyles;
