import React from 'react';
import {
  Box,
  IconButton,
  TextField,
  Typography,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Slide,
} from '@mui/material';
import propTypes from 'prop-types';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import dashStyle from './style/dashStyle';
import { QuestionCreate } from '../../QuestionCRUD';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const SurveyQuestion = ({
  data,
  handleAdd,
  handleDelete,
  index,
  handleChangeQuestion,
  DraggerHandle = null,
}) => {
  const { question = '', type } = data;
  const classes = dashStyle();
  const [open, setOpen] = React.useState({
    edit: false,
    view: false,
    delete: false,
  });

  const modalOpen = (mType) => {
    setOpen((prev) => ({
      ...prev,
      [mType]: true,
    }));
  };

  const modalClose = () => {
    setOpen((prev) => ({
      edit: false,
      view: false,
      delete: false,
    }));
  };
  const BeforehandleChangeQuestion = (changedQuestion) => {
    handleChangeQuestion(changedQuestion);
    modalClose();
  };
  return (
    <>
      <Box className={classes.questionBox}>
        <Box>{DraggerHandle && <DraggerHandle />}</Box>
        <Box>{question}</Box>
        <Box fontWeight="bold">{type}</Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          style={{ marginLeft: 'auto', width: '20%' }}
        >
          <IconButton
            color="warning"
            size="medium"
            onClick={() => modalOpen('edit')}
          >
            <ModeEditOutlineIcon />
          </IconButton>
          <IconButton color="success" size="medium">
            <RemoveRedEyeIcon />
          </IconButton>
          <IconButton
            color="error"
            size="medium"
            onClick={(e) => handleDelete(e, index)}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <Dialog
        open={open.edit}
        onClose={modalClose}
        TransitionComponent={Transition}
        maxWidth="xl"
        fullScreen
      >
        <DialogTitle>
          <Box display="flex" flexDirection="row" justifyContent="flex-start">
            <Box>
              <Typography variant="h5">Add Question</Typography>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <QuestionCreate
            handleAddQuestion={BeforehandleChangeQuestion}
            handleModal={modalClose}
            questions={data}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

SurveyQuestion.prototype = {
  data: propTypes.object,
  handleAdd: propTypes.func,
  handleDelete: propTypes.func,
  index: propTypes.number,
  handleChangeQuestion: propTypes.func,
  DraggerHandle: propTypes.func,
};
export default SurveyQuestion;
