import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Drawer } from '@mui/material';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { getRecents } from '../../../redux/features/noteSlice';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Recents = (props) => {
    const dispatch = useDispatch();
    const [recents, setRecents] = useState([])
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    useEffect(() => {
        dispatch(getRecents()).then(data => setRecents(data.payload.recents))
    }, [0])

    return (
        <div>
            <Drawer
                anchor='right'
                open={true}
                onClose={props.onClose}
            >
                <Box
                    sx={{ width: 400 }}
                    role="presentation"
                    padding={2}
                >
                    <Typography variant='h4'> Recents </Typography>
                    {recents.length !== 0 ? recents.map((recent, i) => {
                        return <Accordion expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                            <AccordionSummary aria-controls={`panel${i}d-content`} id={`panel${i}d-header`}>
                                <Typography> {recent.myanmarText} </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {recent.myanglishText}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    }) : <Typography variant='h6'> No Recents Activities </Typography>}
                </Box>
            </Drawer>
        </div>
    )
}

export default Recents
