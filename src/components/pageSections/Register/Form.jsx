import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { TextField } from "@mui/material";
import Button from "../../elements/Buttons/Button";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import {InputAdornment} from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useDispatch } from "react-redux"
import CustomSnackbar from "../../elements/SnackBars/SnackBars";
import { useNavigate } from "react-router-dom";

import { register } from "../../../redux/features/userSlice";


const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState(false);
    const [exists, setExists] = useState(false);
    const [created, setCreated] = useState(false);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleRegister(e) {
        e.preventDefault();
        if(name && email && password) {
            dispatch(register({ name, email, password })).then((data) => {if(data.payload.message === "User Already Exists") {
                setExists(true);
            } else {
                setCreated(true);
                navigate("/verify/notice")
            }})
        } else {
            setCheck(true);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setCheck(false);
            setExists(false);
        }, 5000);
    }, [check, exists])

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
                }}> <PersonAddAltIcon fontSize="large"/> Create Account </Typography>
            <br />
            <TextField
                sx={{
                    width: { xs: "90vw", sm: "60vw", md: "40vw", lg: "30vw", xl: "30vw" },
                    margin: 1
                }}
                hiddenLabel
                id="filled-hidden-label-small"
                label="Name"
                variant="standard"
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                onChange={handleNameChange}
            />
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
            <Button variant="contained" bgcolor="#198754" onClick={handleRegister}> <HowToRegIcon /> Register </Button>
            {check && <CustomSnackbar
            run="1"
            severity="warning"
            message="Please Fill Your Information Completely."
          />}
          {exists && <CustomSnackbar
            run="1"
            severity="error"
            message="User With This Email Already Exists."
          />
          }
          {created && <CustomSnackbar
            run="1"
            severity="success"
            message="Your Account Created Successfully."
          />
          }
        </div>
    )
}

export default Form;