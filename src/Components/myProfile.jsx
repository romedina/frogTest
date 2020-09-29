import React from 'react';
import app from '../base';
import { Grid, Box, Typography, Button, makeStyles } from '@material-ui/core'
import {myProfileStyles} from '../Styles/myProfileStyles';
import {logInStyles} from '../Styles/logInStyles';

const useStyles = makeStyles({...myProfileStyles,...logInStyles});

export const MyProfile = () => {

    const classes = useStyles();

    const handleSignOut = () => {
        app
            .auth()
            .signOut()
    }

    return (
        <React.Fragment>
            <Box p={5}>
                <Grid container spacing={2} justify='center'>
                    <Grid item>
                        <div className={classes.profilePic}></div>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h4'>Jane</Typography>
                        <Typography variant='subtitle2'>SAN FRANCISCO, CA</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button size='large' fullWidth className={classes.register} variant='outlined'>Follow Jane</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button size='large'  fullWidth className={classes.login} variant='outlined'>Message</Button>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Button size='large' fullWidth className={classes.login} variant='outlined' onClick={handleSignOut}>Sign Out</Button>
                    </Grid>

                    <Grid item xs={12}>
                        <p>hola</p>
                    </Grid>
                    <Grid item xs={12}>
                        <p>hola</p>
                    </Grid>
                    <Grid item xs={12}>
                        <p>hola</p>
                    </Grid>
                    <Grid item xs={12}>
                        <p>hola</p>
                    </Grid>
                    <Grid item xs={12}>
                        <p>hola</p>
                    </Grid>
                    <Grid item xs={12}>
                        <p>hola</p>
                    </Grid>
                    <Grid item xs={12}>
                        <p>hola</p>
                    </Grid>
                    <Grid item xs={12}>
                        <p>hola</p>
                    </Grid>
                    <Grid item xs={12}>
                        <p>hola</p>
                    </Grid>
                    
                    
                </Grid>
            </Box>
        </React.Fragment>
    )
}