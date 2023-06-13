import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
      <Typography sx={{textAlign: "center", fontWeight: "700", fontSize: "12px"}}>LVL {props.level}</Typography>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35, alignSelf: "end"}}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function ProgressBar({ value, level }) {
  return (
    <Box sx={{minWidth: "200px", width: "100%", maxWidth: "250px"}}>
      <LinearProgressWithLabel level={level} value={value} />
    </Box>
  );
}