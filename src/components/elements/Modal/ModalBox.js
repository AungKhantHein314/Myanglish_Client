import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

/**
 * @param Text
 * @param Link
 * @param TextToLink
 * @param BoxColor
 * 
 */

export default function ModalBox(props) {
    const style = {
        position: 'absolute',
        border: '2px solid #000000',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {sm: 400, xs: 280},
        bgcolor: props.BoxColor,
        boxShadow: 24,
        borderRadius: '8px',
        pt: 2,
        px: 4,
        pb: 3,
    };
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
        navigate(props.Link)
    };

    return (
        <div>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style }}>
                    <p id="parent-modal-description">
                        {props.Text}
                    </p>
                    <Button onClick={handleClose}>{props.TextToLink}</Button>
                </Box>
            </Modal>
        </div>
    );
}
