import { makeStyles } from '@mui/styles';

const SurveyStyle = makeStyles((theme) => ({
  board: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    height: '100vh',
    gap: 25,
  },

  card: {
    cursor: 'grab',
  },
}));
export default SurveyStyle;
