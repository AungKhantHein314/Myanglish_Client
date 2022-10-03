import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { TextField } from "@mui/material";
import Button from "../../elements/Buttons/Button";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import {InputAdornment} from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useDispatch } from "react-redux"
import CustomSnackbar from "../../elements/SnackBars/SnackBars";
import { useNavigate } from "react-router-dom";

import { login } from "../../../redux/features/userSlice";


const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState(false);
    const [error, setError] = useState(false);
    const [created, setCreated] = useState(false);

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleRegister(e) {
        e.preventDefault();
        if(email && password) {
            dispatch(login({ email, password })).then((data) => {if(data.payload.message === "Invalid Email or Password") {
                setError(true);
            } else if (data.payload.message === "Login Successful") {
                setCreated(true);
                navigate("/profile");
            }})
        } else {
            setCheck(true);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setCheck(false);
            setError(false);
        }, 5000);
    }, [check, error])

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <br />
            <Typography variant="h4"
                sx={{
                    mr: 2,
                    flexGrow: 1,
                    fontFamily: '	Georgia, Times New Roman, Garamond',
                    fontWeight: 700,
                    color: 'black',
                }}> <LoginIcon fontSize="large"/> Login </Typography>
            <br />
            <TextField
                sx={{
                    width: { xs: "90vw", sm: "60vw", md: "40vw", lg: "30vw", xl: "30vw" },
                    margin: 1
                }}
                hiddenLabel
                id="filled-hidden-label-normal"
                label="Email"
                variant="standard"
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  type="email"
                onChange={handleEmailChange}
            />
            <TextField
                sx={{
                    width: { xs: "90vw", sm: "60vw", md: "40vw", lg: "30vw", xl: "30vw" },
                    margin: 1
                }}
                hiddenLabel
                id="filled-hidden-label-normal"
                label="Password"
                variant="standard"
                type="password"
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                onChange={handlePasswordChange}
            />
            <br/>
            <Button variant="contained" bgcolor="#198754" onClick={handleRegister}> <HowToRegIcon /> Login </Button>
            {check && <CustomSnackbar
            run="1"
            severity="warning"
            message="Please Fill Your Information Completely."
          />}
          {error && <CustomSnackbar
            run="1"
            severity="error"
            message="Invalid Email or Password"
          />
          }
          {created && <CustomSnackbar
            run="1"
            severity="success"
            message="Loggined Successfully."
          />
          }
        </div>
    )
}

export default Form;