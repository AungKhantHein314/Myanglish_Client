import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { getFavourites } from '../../../../redux/features/noteSlice';
import { useEffect } from 'react';

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

export default function Favourite() {
    const dispatch = useDispatch();
    const [expanded, setExpanded] = React.useState('panel1');
    const [favourites, setFavourites] = React.useState([]);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    useEffect(() => {
        dispatch(getFavourites()).then(data => setFavourites(data.payload.favourites))
    }, [])

    return (favourites && favourites.length !== 0 &&
        <>
            <Typography variant='h4'>Favourites</Typography>
            {favourites.map((fav, i) => {
                return <Accordion expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                    <AccordionSummary aria-controls={`panel${i}d-content`} id={`panel${i}d-header`}>
                        <Typography> {fav.myanmarText} </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {fav.myanglishText}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            })}
        </>
    );
}