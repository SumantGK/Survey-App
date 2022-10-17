import React from 'react';
import { Typography, Box } from '@mui/material';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import SurvayData from './staticData/SurvayData.json';
import cardStyle from './styles/cardStyle';

const SurvayReports = () => {
  const classes = cardStyle();
  const keyValues=Object.keys(SurvayData.data);
  const [filter, setFilter] = React.useState(keyValues[0]);

  const addFilter = (value) => {
    setFilter(value);
  };
  return (
    <>
      <Box display="flex" flexDirection="column" gap={1} overflowY="scroll">
        <Box display="flex" flexDirection="row" gap={1}>
          {keyValues.map((keys) => {
            return (
              <Box
              key={keys}
                onClick={() => addFilter(keys)}
                className={`${classes.filterBox} ${
                  filter === keys ? classes.active : ''
                }`}
              >
                <Typography sx={{ fontSize: 12}}> {keys}</Typography>
              </Box>
            );
          })}
          
        </Box>
        {SurvayData.data.[filter].map((data,i) => (
          <Box key={data.name} className={classes.outerBox} key={`${data.name}${i}`}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box className={classes.iconBox}>
                <BarChartOutlinedIcon />
              </Box>
              <Typography variant="body1">{data.survayName}</Typography>
              <Box display="flex" flexDirection="row">
                {data.UpnDown.toLocaleLowerCase() === 'up' ? (
                  <ArrowDropUpOutlinedIcon />
                ) : (
                  <ArrowDropDownOutlinedIcon />
                )}{' '}
                <Typography
                  color={`${
                    data.UpnDown.toLocaleLowerCase() === 'up' ? 'green' : 'red'
                  }`}
                  style={{ fontSize: 12 }}
                >
                  {data.percent}%
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
export default SurvayReports;
