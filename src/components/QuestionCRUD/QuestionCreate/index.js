import { Box, Button } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { UpdateQuestion } from '../index';

const QuestionCreate = ({
  handleAddQuestion,
  handleModal,
  questions = null,
}) => {
  const [question, setQuestion] = React.useState(
    questions || {
      question: '',
      helperText: '',
      mandatory: 'yes',
      type: 'multiple choice',
      options: [
        {
          optName: '',
          optValue: '',
        },
        {
          optName: '',
          optValue: '',
        },
      ],
    },
  );
  const handleAdd = () => {
    const option = {
      optName: '',
      optValue: '',
    };
    setQuestion((prev) => ({
      ...prev,
      options: [...prev.options, option],
    }));
  };
  const handleDelete = (e, i) => {
    const { options } = question;
    options.splice(i, 1);
    setQuestion((prev) => ({
      ...prev,
      options: [...options],
    }));
  };
  const onSave = () => {
    handleAddQuestion(question);
  };
  const handleChange = (e, i = null) => {
    const { name, value } = e.target;
    if (i !== null) {
      const { options } = question;
      options[i][name] = value;
      setQuestion((prev) => ({
        ...prev,
        options: [...options],
      }));
    } else
      setQuestion((prev) => ({
        ...prev,
        [name]: value,
      }));
  };

  return (
    <>
      <Box display="flex" flexDirection="column" gap={2} marginTop="10px">
        <UpdateQuestion
          question={question}
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
        />
        <Box
          display="flex"
          flexDirection="row"
          gap={2}
          justifyContent="flex-end"
        >
          <Button color="primary" variant="contained" onClick={onSave}>
            {' '}
            Save
          </Button>{' '}
          <Button color="error" variant="contained" onClick={handleModal}>
            Cancle
          </Button>
        </Box>
      </Box>
    </>
  );
};

QuestionCreate.prototype = {
  handleAddQuestion: PropTypes.func,
  handleModal: PropTypes.func,
  questions: PropTypes.object,
};
export default QuestionCreate;
