import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { verify } from '../../../redux/features/userSlice'
import { useLocation } from 'react-router-dom'
import ModalBox from '../../elements/Modal/ModalBox'
import CircularIndeterminate from '../../elements/Progress/CircularIndeterminate'
import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/material'
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom'

const VerifyProcess = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [verifying, setVerify] = useState(true);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if(success) {
            setTimeout(() => {
                navigate('/profile')
            }, 5000);
        }
    }, [success])

    useEffect(() => {
        const mail = location.pathname.split('/')[2];
        dispatch(verify(mail)).then(data => {
            switch (data.payload.message) {
                case "Verification success.":
                    setSuccess(true);
                    setMessage("Verification success. Return Back To Profile.");
                    break;
                case "Not mail Or Not Secured Path":
                    setMessage("Verification Failed. User with this email address no longer exists. Register Again.")
                    break;
                case "Encrypted data malformated":
                    setMessage("The Mail is not defined. Make sure you are directed from verification email.")
                    break;
                default:
                    setMessage("Verification Failed." + data.payload.message)
                    break;
            }
            setVerify(false);
        })
    }, [])

    return (
        <div  style={{ 
            backgroundImage: `url("../MailVerify.png")`,
            width: "100%",
            height: "1300px",
            backgroundPosition: "center"
          }}>
            {verifying && <ModalBox Text={<CircularIndeterminate text=" Verificating..." />}></ModalBox>}
            {!verifying && <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        height: 128,
                        width: { xs: '90vw', sm: '80vw', md: '70vw', lg: '45vw' },
                        margin: 'auto',
                        marginTop: 10,
                        padding: { xs: 4, sm: 8 }
                    },
                }}
            >
                <Paper elevation={18}>
                    {success ? <CheckCircleIcon color='success'/> : <ErrorIcon color='error'/>}<Typography textAlign="center"> {message}</Typography>
                </Paper>
            </Box>}
        </div>
    )
}

export default VerifyProcess