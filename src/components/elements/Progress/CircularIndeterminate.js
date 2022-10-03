import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

/**
 * @param text
 * @returns 
 */

export default function CircularIndeterminate(props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress color="success" /> <Typography> {props.text} </Typography>
    </Box>
  );
}