import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import Favourite from "./Favourite/Favourite"

export default function UserDetail() {
    const user = useSelector(state => state.user);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          minHeight: 128,
          width: {xs: '90vw', sm: '80vw', md: '70vw', lg: '45vw'},
          margin: 'auto',
          marginTop: 10,
          padding: {xs: 4, sm: 8}
        },
      }}
    >
      <Paper elevation={20}>
        <Container >
            <Typography variant='h5'> <BadgeIcon /> {user.name} </Typography>
            <Typography variant='h6'> <ContactMailIcon fontSize='small' /> {user.email} </Typography>
            <hr />
            <Favourite />
        </Container>
      </Paper>
    </Box>
  );
}