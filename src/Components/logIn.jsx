import React, { useState, useCallback } from 'react';
import { Box, Typography, Grid, makeStyles, TextField, Button } from '@material-ui/core';
import backArrow from '../assets/backArrow.svg';
import { registerLayoutStyles } from '../Styles/registerLayoutStyles';
import { Routes } from '../constants/routes';
import { Link } from 'react-router-dom';

import { withRouter} from 'react-router';
import app from '../base';

import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(registerLayoutStyles);

export const LogIn = ({ history }) => {

    const classes = useStyles();

     

    const [user, setUser] = useState({
        mail: '',
        pass: '',
        showPass: false
    })

    const handleLogIn = useCallback(async user => {
        try {
            await app
                .auth()
                .signInWithEmailAndPassword(user.mail,user.pass);
            history.push(Routes.MY_PROFILE);
        } catch (error) {
            alert(error)
        }
    }, [history]);

    const [mailError, setMailError] = useState(false);
    const [passError, setPassError] = useState(false);

    const handleMail = event => {
        setUser({
            ...user,
            mail: event.target.value
        })
        setMailError(false);
    }

    const handlePass = event => {
        setUser({
            ...user,
            pass: event.target.value
        })
        setPassError(false);
    }

    const handleClickshowPass = () => {
        setUser({
            ...user,
            showPass: !user.showPass
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMailError = () => {
        if (user.mail === '') {
            setMailError(true);
        } else {
            setMailError(false)
        }
    }

    const handlePassError = () => {
        if (user.pass === '') {
            setPassError(true)
        } else {
            setPassError(false)
        }
    }

    const handleAccess = () => {
        if (user.mail !== '' && user.pass !== '') {
            handleLogIn(user);
        } else {
            alert('porfavor verifica tu correo o tu contraseña')
        }
    }

    const handleNext = () => {
        handleMailError();
        handlePassError();
        handleAccess();
    }


    return (
        <React.Fragment>
            <Link to={Routes.LANDING}>
                <img
                    className={classes.backArrow}
                    src={`${backArrow}`}
                    alt='return to preview section' />
            </Link>
            <Box
                p={5}
            >
                <Grid
                    container
                    spacing={2}
                    justify='center'
                    alignItems='center'>
                    <Grid item xs={12}>
                        <Typography
                            className={classes.title}
                            align='left'
                            variant='h3'
                        > Log in</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label='Mail'
                            onChange={handleMail}
                            error={mailError}
                            helperText={mailError ? 'Porfavor ingresa un mail' : ''}
                            variant='outlined'></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl
                            fullWidth
                            error={passError}
                            variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={user.showPass ? 'text' : 'password'}
                                value={user.password}
                                onChange={handlePass}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickshowPass}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {user.showPass ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            className={classes.next}
                            size='large'
                            onClick={handleNext}
                            variant='contained'>Next</Button>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )

}

export default withRouter(LogIn);