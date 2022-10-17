import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CardRow from './cardRow';
import DragnDrop from '../dnd';
import useStyles from './styles/cardContainerStyle';

export default function QuestionCard({ title = '' }) {
  const classes = useStyles();
  const surveyData = useSelector((state) => state.surveySlice.data);
  React.useEffect(() => console.log(surveyData), [surveyData]);
  return (
    <Box>
      <Typography variant="h5">{title}</Typography>
      <Box className={classes.container}>
        {surveyData.surveys.map((item, index) => (
          <CardRow data={item} index={index} />
        ))}
      </Box>
    </Box>
  );
}
QuestionCard.prototype = { title: PropTypes.string };
