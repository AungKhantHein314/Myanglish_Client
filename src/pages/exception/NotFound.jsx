import React from 'react';
import { Box } from '@mui/material';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';

const NotFound = () => {
    return (<Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                height: '50vh',
                width: { xs: '90vw', sm: '80vw', md: '70vw', lg: '45vw' },
                margin: 'auto',
                marginTop: 10,
                padding: { xs: 4, sm: 8 }
            },
        }}
    >
        <Paper elevation={18}>
            <Typography textAlign="center"> 404 | Not Found </Typography>
        </Paper>
    </Box>);
}

export default NotFound;