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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: props.BoxColor,
        border: '2px solid #000',
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
                <Box sx={{ ...style, width: 400 }}>
                    <p id="parent-modal-description">
                        {props.Text}
                    </p>
                    <Button onClick={handleClose}>{props.TextToLink}</Button>
                </Box>
            </Modal>
        </div>
    );
}
