import { makeStyles } from '@mui/styles';

const rowStyles = makeStyles((theme) => ({
  corner: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    height: '30px',
    width: '30px',
    borderRadius: '50%',
    backgroundColor: '#ddd80',
    // color: 'white',
    display: 'flex',
    alignItems: 'center',
    // alignContent: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: '#ddd',
      cursor: 'pointer',
      color: 'white',
    },
  },
}));
export default rowStyles;
