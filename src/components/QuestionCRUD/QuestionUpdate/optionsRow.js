import React from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import PropTypes, { string, array, any, func, object } from 'prop-types';
import { Typography, TextField, IconButton, Box } from '@mui/material';
import useStyles from './style/optionRowStyle';

const optionsRow = ({
  data,
  index,
  handleChange,
  handleDelete,
  handleAdd,
  optionsLength,
  DraggerHandle = '',
}) => {
  const classes = useStyles();

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        border: '1px solid #ddd',
      }}
    >
      <Box>{DraggerHandle && <DraggerHandle />}</Box>
      <Box
        style={{
          padding: '10px',
          alignContent: 'center',
          verticalAlign: 'baseline',
        }}
        className={classes.tableCell}
      >
        Option {index + 1}
      </Box>
      <Box className={classes.tableCell}>
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
          value={data.optValue}
          InputProps={{ name: 'optValue' }}
          onChange={(e) => handleChange(e, index)}
          label="Option Value"
          variant="outlined"
        />
      </Box>
      <Box className={classes.tableCell}>
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
          value={data.optName}
          InputProps={{ name: 'optName' }}
          onChange={(e) => handleChange(e, index)}
          label="Option Label"
          variant="outlined"
        />
      </Box>
      <Box className={classes.tableCell}>
        {optionsLength > 2 && (
          <IconButton
            color="error"
            size="medium"
            onClick={(e) => handleDelete(e, index)}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        )}
      </Box>
      <Box className={classes.tableCell}>
        {optionsLength === index + 1 && (
          <IconButton color="success" size="medium" onClick={handleAdd}>
            <AddCircleOutlinedIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

optionsRow.prototype = {
  data: PropTypes.object,
  index: PropTypes.number,
  handleChange: PropTypes.func,
  handleDelete: PropTypes.func,
  handleAdd: PropTypes.func,
  optionsLength: PropTypes.number,
  DraggerHandle: PropTypes.any,
};

export default optionsRow;
