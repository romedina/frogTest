import React,{useContext} from 'react';
import { Grid, Box, Button, makeStyles } from '@material-ui/core';
import { logInStyles } from '../Styles/logInStyles';
import photoLogo from '../assets/photo_logo.svg';
import { Link } from 'react-router-dom';
import { Routes } from '../constants/routes';
import {Redirect} from'react-router';
import {AuthContext} from '../Auth';

const useStyles = makeStyles(logInStyles);

export const Landing = () => {

    const classes = useStyles();

    const {currentUser} = useContext(AuthContext);

    if(currentUser){
        return <Redirect to={Routes.MY_PROFILE} />
    }

    return (
        <React.Fragment>
            <Box className={classes.container}>
                <Grid container className={classes.gridContainer} justify='center' alignItems='flex-end'>
                    <Grid item xs={12}>
                        <img src={`${photoLogo}`} alt='svg logo' />
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2} className={classes.buttonWrapper}>
                            <Grid item xs={6}>
                                <Link to={Routes.LOGIN} className={classes.link}>
                                    <Button
                                        className={classes.login}
                                        fullWidth
                                        size='large'
                                        variant='outlined'>Log In</Button>
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <Link to={Routes.REGISTER} className={classes.link}>
                                    <Button
                                        className={classes.register}
                                        fullWidth
                                        size='large'
                                        variant='contained'>Register</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </React.Fragment>
    )
}