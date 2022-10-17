import React from 'react';
import { Box } from '@mui/material';
// import Sortable from 'sortablejs';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ViewRow from './viewRow';
import SurveyStyle from './style/surveyViewStyle';
// const ViewCard = (question, i, updateQuestions) => (
//   <ViewRow question={question} index={i} updateQuestions={updateQuestions} />
// );
const SurveyView = ({ surveyIndex, updateQuestions }) => {
  const data = useSelector((state) => state.surveySlice.data).surveys[
    surveyIndex
  ];
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      {data.questions &&
        data.questions.map((question, i) => (
          <ViewRow
            question={question}
            surveyIndex={surveyIndex}
            questionIndex={i}
            updateQuestions={updateQuestions}
          />
        ))}
    </Box>
  );
};
SurveyView.prototype = {
  surveyIndex: PropTypes.number,
  updateQuestions: PropTypes.func,
};
export default SurveyView;
