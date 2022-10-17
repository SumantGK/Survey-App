import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';
import { string, array, any, func, object } from 'prop-types';
import OptionRow from './optionsRow';
import DragnDrop from '../../dnd';
import useStyles from './style/updateStyle';

const CommonFields = ({ question, handleChange }) => {
  return (
    <>
      <TextField
        value={question.question}
        InputProps={{ name: 'question' }}
        onChange={(e) => handleChange(e)}
        label="Question"
        autoFocus
        variant="outlined"
      />
      <TextField
        value={question.helperText}
        name="helperText"
        InputProps={{ name: 'helperText' }}
        onChange={(e) => handleChange(e)}
        label="Helper Text"
        variant="outlined"
      />
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <Typography>Is mandatory?</Typography>
          <RadioGroup
            row
            value={question.mandatory}
            name="mandatory"
            onChange={(e) => handleChange(e)}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography>Type</Typography>
          <Select
            sx={{
              '& legend': { display: 'none' },
              '& fieldset': { top: 0 },
            }}
            style={{ width: '150px' }}
            InputLabelProps={{ shrink: false }}
            size="small"
            displayEmpty
            inputProps={{ name: 'type' }}
            onChange={(e) => handleChange(e)}
            value={question.type}
          >
            <MenuItem value="boolean">Boolean</MenuItem>
            <MenuItem value="text">Text</MenuItem>
            <MenuItem value="number">Number</MenuItem>
            <MenuItem value="multiple choice">Multiple Choice</MenuItem>
          </Select>
        </Box>
      </Box>
    </>
  );
};
const QuestionTypeEdit = ({
  question,
  handleChange,
  handleDelete,
  handleSort,
  handleAdd,
}) => {
  const clsass = useStyles();
  switch (question.type.toLocaleLowerCase()) {
    case 'multiple choice':
      return (
        <>
          <CommonFields question={question} handleChange={handleChange} />
          <Box
            display="flex"
            flexDirection="column"
            gap={3}
            // style={{ textAlign: 'center' }}
          >
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
              Options
            </Typography>
            <table>
              <Box display="flex" flexDirection="column" gap={1}>
                <DragnDrop
                  list={question.options}
                  setList={handleSort}
                  className={clsass.container}
                  RenderComponent={OptionRow}
                  handleChange={handleChange}
                  handleDelete={handleDelete}
                  handleAdd={handleAdd}
                  optionsLength={question.options.length}
                />
              </Box>
            </table>
          </Box>
        </>
      );
      break;
    case 'number':
      return (
        <>
          <CommonFields question={question} handleChange={handleChange} />
          <Box display="flex" flexDirection="row" justifyContent="space-around">
            <TextField
              size="small"
              type="text"
              sx={{
                '& fieldset': { top: 0 },
              }}
              inputProps={{
                style: { height: 30, padding: '5px' },
              }}
              margin="dense"
              value={question.options[0].optValue}
              InputProps={{ name: 'optValue' }}
              onChange={(e) => handleChange(e, 0)}
              label="Min"
              variant="outlined"
            />
            <TextField
              size="small"
              type="text"
              sx={{
                '& fieldset': { top: 0 },
              }}
              inputProps={{
                style: { height: 30, padding: '5px' },
              }}
              margin="dense"
              value={question.options[1].optValue}
              InputProps={{ name: 'optValue' }}
              onChange={(e) => handleChange(e, 1)}
              label="Max"
              variant="outlined"
            />
          </Box>
        </>
      );
    case 'boolean':
      return (
        <>
          <CommonFields question={question} handleChange={handleChange} />
          <Box display="flex" flexDirection="row" justifyContent="space-around">
            <TextField
              size="small"
              type="text"
              sx={{
                '& fieldset': { top: 0 },
              }}
              inputProps={{
                style: { height: 30, padding: '5px' },
              }}
              margin="dense"
              value={question.options[0].optName}
              InputProps={{ name: 'optName' }}
              onChange={(e) => handleChange(e, 0)}
              label="Yes"
              variant="outlined"
            />
            <TextField
              size="small"
              type="text"
              sx={{
                '& fieldset': { top: 0 },
              }}
              inputProps={{
                style: { height: 30, padding: '5px' },
              }}
              margin="dense"
              value={question.options[1].optName}
              InputProps={{ name: 'optName' }}
              onChange={(e) => handleChange(e, 1)}
              label="No"
              variant="outlined"
            />
          </Box>
        </>
      );
    case 'text':
      return (
        <>
          <CommonFields question={question} handleChange={handleChange} />
          <Box display="flex" flexDirection="row" justifyContent="space-around">
            <TextField
              size="small"
              type="text"
              sx={{
                '& fieldset': { top: 0 },
              }}
              inputProps={{
                style: { height: 30, padding: '5px' },
              }}
              margin="dense"
              value={question.options[0].optName}
              InputProps={{ name: 'optName' }}
              onChange={(e) => handleChange(e, 0)}
              label="Title"
              variant="outlined"
            />
          </Box>
        </>
      );
    default:
      return '';
  }
};

QuestionTypeEdit.propTypes = {
  question: object,
  handleChange: func,
  handleDelete: func,
  handleAdd: func,
  handleSort: func,
};
CommonFields.propTypes = { question: object, handleChange: func };
export default QuestionTypeEdit;
