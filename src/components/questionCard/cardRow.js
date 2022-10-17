import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {
  TypographyButton,
  Button,
  Slide,
  Typography,
  TextField,
  Dialog,
  Box,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { SurveyView } from '../surveyCRUD';
import {
  addQuestion,
  updateQuestion,
  addSurvey,
  updateSurvey,
} from '../../../store/surveySlice';
import useStyles from './styles/cardRowStyle';
import Notification from '../notification';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CardRow({ index }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openMod, setOpenMod] = React.useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [notify, setNotify] = React.useState({
    isOpen: false,
    message: '',
    type: '',
    horizontal: 'top',
    vertical: 'center',
  });
  const data = useSelector((state) => state.surveySlice.data).surveys[index];

  const updateQuestions = (qData, i) => {
    dispatch(updateQuestion({ index, data: { value: qData, index: i } }));
    setNotify({
      ...notify,
      isOpen: true,
      type: 'success',
      message: 'Update successful',
    });
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const modalOpen = () => {
    handleClose();
    setOpenMod(true);
  };
  const closeModal = () => {
    setOpenMod(false);
  };

  return (
    <Box className={classes.mainContainer}>
      <Typography variant="body1">{data.name}</Typography>
      <IconButton
        style={{ marginLeft: 'auto' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertOutlinedIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={modalOpen}>View</MenuItem>
        <MenuItem onClick={handleClose}>Get reports</MenuItem>
      </Menu>
      <Dialog
        // classes={{Paper:classes.dialogPaper}}
        open={openMod}
        onClose={(event) => closeModal(event)}
        maxWidth="xl"
        fullScreen
        TransitionComponent={Transition}
      >
        <DialogTitle
          id=""
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <Box>{data.name}</Box>
          <Box style={{ marginLeft: 'auto' }}>
            <Box className={classes.cancleBtnWrapper}>
              <Box>
                <Button
                  size="small"
                  variant="contained"
                  className={classes.cancleBtn}
                  onClick={(e) => closeModal(e)}
                >
                  Close
                </Button>
              </Box>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <SurveyView surveyIndex={index} updateQuestions={updateQuestions} />
        </DialogContent>
      </Dialog>
      <Notification notify={notify} setNotify={setNotify} />
    </Box>
  );
}

CardRow.prototype = { index: PropTypes.number };
