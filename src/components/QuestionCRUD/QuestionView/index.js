import React from 'react';
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
  Slider,
  Input,
} from '@mui/material';
import PropTypes from 'prop-types';

const NumberSlider = ({ min, max }) => {
  const [value, setValue] = React.useState(min);

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Number
      </Typography>
      <Box gap={10} alignItems="center" display="flex" flexDirection="row">
        <Box width={250}>
          <Slider
            value={value}
            onChange={handleInputChange}
            aria-labelledby="input-slider"
            step={1}
            min={Number(min)}
            max={Number(max)}
          />
        </Box>
        <Box width={100}>
          <Input
            value={value}
            size="medium"
            fullWidth
            onChange={handleInputChange}
            inputProps={{
              min,
              max,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
const RadioValues = ({ name, question }) => {
  return (
    <>
      <RadioGroup name={name}>
        {question.options.map((option) => {
          return (
            <FormControlLabel
              value={option.optValue}
              control={<Radio />}
              label={option.optName}
            />
          );
        })}
      </RadioGroup>
    </>
  );
};

const QuestionTypeView = ({ question }) => {
  switch (question.type.toLocaleLowerCase()) {
    case 'multiple choice':
      return <RadioValues name={question.question} question={question} />;
    case 'number':
      return (
        <Box style={{ width: 400 }}>
          <NumberSlider
            min={question.options[0].optValue}
            max={question.options[1].optValue}
          />
        </Box>
      );
    case 'boolean':
      return (
        <>
          <RadioValues name={question.question} question={question} />
        </>
      );
    case 'text':
      return (
        <TextField
          size="small"
          type="text"
          sx={{
            '& fieldset': { top: 0 },
          }}
          inputProps={{
            style: { height: 30, padding: '5px' },
          }}
          multiline
          margin="dense"
          value={question.options[0].optValue}
          InputProps={{ name: 'optName' }}
          // onChange={(e) => handleChange(e, 0)}
          label={question.options[0].optName}
          variant="outlined"
        />
      );
  }
};
NumberSlider.prototype = { min: PropTypes.number, max: PropTypes.number };
RadioValues.prototype = { name: PropTypes.string, question: PropTypes.object };
QuestionTypeView.prototype = { question: PropTypes.object };
export default QuestionTypeView;
