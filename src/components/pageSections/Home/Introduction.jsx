import React from 'react'
import { Paper } from '@mui/material'
import { Typography } from '@mui/material'
import { Container } from '@mui/material'

const Introduction = () => {
    return (
        <Paper elevation={20} sx={{ backgroundColor: "transparent", marginTop: 8, marginBottom: 8, padding: 2 }}>
            <Container>
                <Typography variant='h5'>
                    This is the very first release of Myanmar-To-Myanglish and Myanglish-To-Myanmar translator.
                    Many More Features on Myanmar Language are going to be added here.
                </Typography>
            </Container>
        </Paper>

    )
}

export default Introduction
