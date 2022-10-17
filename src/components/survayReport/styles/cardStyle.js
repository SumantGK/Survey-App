import { makeStyles } from '@mui/styles';

const cardStyle = makeStyles((theme) => ({
  outerBox: {
    borderRadius: '15px',
    border: '1px solid #ddd',
    padding: '10px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: '#fff',
      cursor: 'pointer',
    },
  },
  iconBox: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    color: '#fff',
  },
  filterBox: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1px 15px 1px 15px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  active: {
    backgroundColor: theme.palette.primary.main,
    border: 'none',
    color: '#fff',
  },
}));

export default cardStyle;
