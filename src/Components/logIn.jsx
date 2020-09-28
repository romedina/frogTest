import React from 'react';
import { Grid, Box,Button, makeStyles } from '@material-ui/core';
import { logInStyles } from '../Styles/logInStyles';
import photoLogo from '../assets/photo_logo.svg';

const useStyles = makeStyles(logInStyles);

export const LogIn = () => {

    const classes = useStyles();

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
                                <Button fullWidth size='large' variant='outlined'>Log In</Button>
                            </Grid>    
                            <Grid item xs={6}>
                            <Button fullWidth size='large' variant='contained'>register</Button>
                            </Grid>
                        </Grid>
                    </Grid>  

                </Grid>
            </Box>
        </React.Fragment>
    )
}