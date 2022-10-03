import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CustomSnackbar from '../../elements/SnackBars/SnackBars';

import Main from './Main';
import { saveSuggestion } from '../../../redux/features/noteSlice';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Suggestion() {
    const dispatch = useDispatch();
    const [savedSuggestion, setSavedSuggestion] = React.useState(false);
    const [open, setOpen] = React.useState(true);
    const [change, setChange] = useState(false);
    const [inputsParams, setInputsParams] = useState([{ isDisabled: false, defaultValue: "မြန်းဂလိရှ်", label: "Myanmar Text", rows: 8, value: '' },
                                                      { isDisabled: false, defaultValue: "Myanglish", label: "Myanglish Text", rows: 8, value: '' }])
    function handleSwap() {
        setChange(true);
        const newInputsParams = inputsParams.reverse();
        setInputsParams(newInputsParams);
    }

    useEffect(() => {
        setTimeout(() => {
            setChange(false)
        }, 1);
    }, [change])


    const handleClose = () => {
        setOpen(false);
    };

    const createRequest = (p1, p2, mytomg) => {
        return {
            MyanmarText: p1.value,
            MyanglishText: p2.value,
            userId: localStorage.getItem("id") || null,
            MyanmarToMyanglish: mytomg
        }
    }

    const handleSuggest = () => {
        let request = {};
        if(inputsParams[0].label === "Myanmar Text") {
            request = createRequest(inputsParams[0], inputsParams[1], true);
        } else {
            request = createRequest(inputsParams[1], inputsParams[0], false);
        }
        dispatch(saveSuggestion(request)).then(data => {
            if(data.payload.message === "Suggestion Created Successfully.") {
                setSavedSuggestion(true);
                setOpen(false);
            }
        })
    }

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Suggest what word should be translated to what
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleSuggest}>
                            Suggest
                        </Button>
                    </Toolbar>
                </AppBar>
                <br />
                {!change && <Main onclick={handleSwap} inputsParams={inputsParams} />}
            </Dialog>
            {savedSuggestion && <CustomSnackbar severity="success" message="Thank you very much. We have received your suggestion."/>}
        </div>
    );
}
