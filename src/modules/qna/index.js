import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import SearchBox from '../../components/searchComponent';
import QuestionCard from '../../components/questionCard';
import useStyle from './style/surveyStyle';

const Survey = () => {
  const classes = useStyle();

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
            <Typography variant="h5">Surveys</Typography>
            <SearchBox />
          </Box>
          <Box>
            <QuestionCard title="" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default Survey;
