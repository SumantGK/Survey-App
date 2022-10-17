import React from 'react';
import {
  Box,
  Typography,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
} from '@mui/material';
import USAMap from 'react-usa-map';
import SearchBox from '../../components/searchComponent';
import SurvayReports from '../../components/survayReport';
import QuestionCard from '../../components/questionCard';
import dashStyle from './style/dashStyle';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Dashboard = () => {
  const classes = dashStyle();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState('');
  const handleModal = () => {
    setOpen((prev) => !prev);
  };
  const mapHandler = (event) => {
    setState(event.target.dataset.name);
    handleModal();
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
            <Typography variant="h5">Dashboard</Typography>
            <SearchBox />
          </Box>

          <Box className={classes.mapBox}>
            <USAMap defaultFill="#AEACFA" onClick={(e) => mapHandler(e)} />
          </Box>
          <Box>
            <QuestionCard title="Surveys" />
          </Box>
        </Box>
        <Box className={classes.rightBox}>
          <Box display="flex">
            <img
              src="./static/coffee.jpg"
              alt=""
              style={{
                height: 'auto',
                width: '200px',
                borderRadius: '15px',
              }}
            />
          </Box>
          <Box display="flex">
            <SurvayReports />
          </Box>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleModal}
        TransitionComponent={Transition}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>
          <Typography variant="h5">Report - {state}</Typography>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
            >
              <Box>Farmers</Box>
              <Box>1000+ </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
            >
              <Box>Distributers</Box>
              <Box>500+ </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
            >
              <Box>Dealers</Box>
              <Box>100+ </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};
export default Dashboard;
