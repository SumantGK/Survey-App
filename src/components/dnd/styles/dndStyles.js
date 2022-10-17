import { makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => ({
  dragItem: {
    '&:hover': {
      cursor: 'grab',
    },
  },
  draggingItem: {
    cursor: 'grabbing',
  },
}));
export default styles;
