import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Button,
  Select,
  MenuItem,
} from '@mui/material';
import PropTypes from 'prop-types';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { addOptions } from '../../../../store/surveySlice';
import rowStyles from './style/viewRowStyle';
import { UpdateQuestion, QuestionTypeView } from '../../QuestionCRUD';

const ViewRow = ({ surveyIndex, questionIndex, updateQuestions }) => {
  const classes = rowStyles();
  const question = useSelector((state) => state.surveySlice.data).surveys[
    surveyIndex
  ].questions[questionIndex];
  const [qData, setQData] = React.useState(
    JSON.parse(JSON.stringify(question)),
  );
  const dispatch = useDispatch();
  const [edit, setEdit] = React.useState(false);
  const handleEdit = () => {
    setEdit((prev) => !prev);
  };
  const handleSave = () => {
    updateQuestions(qData, questionIndex);
    handleEdit();
  };

  const handleAdd = () => {
    const newOption = {
      optName: '',
      optValue: '',
    };
    dispatch(addOptions({ surveyIndex, questionIndex, data: newOption }));
  };
  const handleCancel = () => {
    setQData(JSON.parse(JSON.stringify(question)));
    handleEdit();
  };
  const handleDelete = (e, i) => {
    const { options } = qData;
    options.splice(i, 1);
    setQData((prev) => ({
      ...prev,
      options: [...options],
    }));
  };
  const handleChange = (event, i = null) => {
    const { name, value } = event.target;
    if (i !== null) {
      const optns = [...qData.options];
      optns[i][name] = value;
      setQData((prev) => ({
        ...prev,
        options: [...optns],
      }));
    } else setQData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSort = (list) => {
    setQData((prev) => ({
      ...prev,
      options: [...list],
    }));
  };
  useEffect(() => {
    setQData(JSON.parse(JSON.stringify(question)));
  }, [question]);
  return (
    <Box
      key={questionIndex}
      style={{
        border: '1px solid #ddd',
        padding: '10px',
        position: 'relative',
      }}
    >
      {!edit ? (
        <>
          <Typography varient="body1">
            {qData && qData.question}
            {qData.mandatory &&
              qData.mandatory.toLocaleLowerCase() === 'yes' && (
                <span style={{ color: 'red' }}>*</span>
              )}
          </Typography>
          <Typography varient="body2">
            {qData.helperText && qData.helperText}
          </Typography>
          <QuestionTypeView question={qData} />
        </>
      ) : (
        <Box display="flex" flexDirection="column" gap={1} maxWidth="80%">
          <UpdateQuestion
            question={qData}
            handleChange={handleChange}
            handleDelete={handleDelete}
            handleSort={handleSort}
            handleAdd={handleAdd}
          />
          <Button onClick={() => handleSave()}>Save</Button>
        </Box>
      )}
      {edit ? (
        <Box className={classes.corner} onClick={(e) => handleCancel(e)}>
          <CloseOutlinedIcon />
        </Box>
      ) : (
        <Box className={classes.corner} onClick={(e) => handleEdit(e)}>
          <EditOutlinedIcon />
        </Box>
      )}
    </Box>
  );
};
ViewRow.prototype = {
  surveyIndex: PropTypes.number,
  questionIndex: PropTypes.number,
  updateQuestions: PropTypes.func,
};
export default ViewRow;
