import React from 'react';
import {
  Box,
  TextField,
  Typography,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  IconButton,
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { useDispatch } from 'react-redux';
import SurveyQuestion from './surveyQuestionRow';
import SearchBox from '../../searchComponent';
import dashStyle from './style/dashStyle';
import { QuestionCreate } from '../../QuestionCRUD';
import { addSurvey } from '../../../../store/surveySlice';
import Notification from '../../notification';
import DragnDrop from '../../dnd';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const NewSurvey = () => {
  const classes = dashStyle();
  const dispatch = useDispatch();
  const initialState = { name: '', questions: [] };
  const [open, setOpen] = React.useState(false);
  const [notify, setNotify] = React.useState({
    isOpen: false,
    message: '',
    type: '',
    horizontal: 'top',
    vertical: 'center',
  });

  const [state, setState] = React.useState(initialState);
  const handleModalOpen = () => {
    setOpen((prev) => true);
  };

  const onSave = () => {
    dispatch(addSurvey({ state }));
    setNotify({
      ...notify,
      isOpen: true,
      type: 'success',
      message: 'Survey Added successfully',
    });
  };
  const handleModalClose = () => {
    setOpen((prev) => false);
  };
  const onReset = () => {
    setState(initialState);
    handleModalClose();
  };
  const handleAdd = (newQuestion) => {
    setState((prev) => ({
      ...prev,
      questions: [...prev.questions, newQuestion],
    }));
    handleModalClose();
  };

  const handleDelete = (e, i) => {
    const { questions } = state;
    questions.splice(i, 1);
    setState((prev) => ({
      ...prev,
      questions: [...questions],
    }));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeQuestion = (changedQuestion, i = null) => {
    const { questions } = state;
    questions.splice(i, 1);
    questions.splice(i, 0, changedQuestion);
    setState((prev) => ({ ...prev, questions: [...questions] }));
  };
  const sortQuestions = (list) => {
    // alert(JSON.stringify(list));
    setState((prev) => ({ ...prev, questions: [...list] }));
  };
  return (
    <Container maxWidth="xl">
      <Box className={classes.mainContainer}>
        <Box className={classes.leftBox}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5">New Survey</Typography>
            <SearchBox />
          </Box>
          <Box display="flex" flexDirection="column" gap={2} width="100%">
            <Box display="flex" flexDirection="row">
              <TextField
                size="small"
                type="text"
                inputProps={{
                  style: { height: 30, padding: '5px' },
                }}
                margin="dense"
                value={state.name}
                onChange={(e) => handleChange(e)}
                fullWidth
                autoFocus
                InputProps={{ name: 'name' }}
                onChange={(e) => handleChange(e)}
                label="Survey Name"
                variant="outlined"
              />
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box>Questions</Box>
              <Box>
                <Button onClick={(e) => handleModalOpen()}>+ Add</Button>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              style={{ minWidth: '100%' }}
            >
              {state.questions.length > 0 ? (
                <DragnDrop
                  list={state.questions}
                  setList={sortQuestions}
                  RenderComponent={SurveyQuestion}
                  handleAdd={handleAdd}
                  handleDelete={handleDelete}
                  handleChangeQuestion={handleChangeQuestion}
                />
              ) : (
                'No questions yet'
              )}
            </Box>
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
              <Button color="error" variant="contained" onClick={onReset}>
                Reset
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleModalClose}
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
            handleAddQuestion={handleAdd}
            handleModal={handleModalClose}
          />
        </DialogContent>
      </Dialog>
      <Notification notify={notify} setNotify={setNotify} />
    </Container>
  );
};
export default NewSurvey;
