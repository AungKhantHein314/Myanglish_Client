import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import CustomSnackbar from '../../elements/SnackBars/SnackBars';
import { reverify } from '../../../redux/features/userSlice';

const Notice = () => {
    const dispatch = useDispatch();
    const [resend, setResend] = useState(false);
    const [canResend, setCanResend] = useState(true);

    function resendHandle() {
        if(resend == true) {
            setCanResend(false);
        } else {
            const mail = localStorage.getItem("cryptedMail").replaceAll("/", "%2F");
            dispatch(reverify(mail)).then(data => {
                if(data.payload.message == "Mail sent again.") {
                    setResend(true);
                }
            })
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setCanResend(true)
        }, 2000);
    }, [canResend])

    useEffect(() => {
        setTimeout(() => {
            setResend(false)
        }, 60000);
    }, [resend])

    return <Container style={{ 
        backgroundImage: `url("../MailVerify.png")`,
        width: "100%",
        height: "1000px",
        backgroundPosition: "center"
      }}>
        <Typography variant='h4'> Check Your Email And Verify Your Account </Typography>
        <br />
        <Typography variant='h5'> Check Your Spam Folder in case you can't find email </Typography>
        <Typography variant='h5'> Didn't receive email? </Typography>
        <br />
        <br />
        <Typography variant='h5' component="button" onClick={resendHandle}> Resend </Typography>
        {resend && <CustomSnackbar
            run="1"
            severity="success"
            message="Email Resend Successfully."
          />
          }
          {!canResend && <CustomSnackbar
            run="1"
            severity="warning"
            message="Email Can Be Resent only once a minute!"
          />
          }
      </Container>
}

export default Notice