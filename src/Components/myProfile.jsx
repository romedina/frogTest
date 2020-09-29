import React, { useState, useEffect } from 'react';
import app from '../base';
import { Grid, Box, Typography, Button, makeStyles } from '@material-ui/core'
import { myProfileStyles } from '../Styles/myProfileStyles';
import { logInStyles } from '../Styles/logInStyles';
import axios from 'axios';

const useStyles = makeStyles({ ...myProfileStyles, ...logInStyles });
const PINTEREST_API_KEY = "bsEAgAjoOdSaupFCbSl55iwPeDetua_kb7pls8vA4ns";

export const MyProfile = () => {

    const classes = useStyles();

    const [result, setResult] = useState([]);

    const handleSignOut = () => {
        app
            .auth()
            .signOut()
    }


    useEffect(() => {
        const url = `https://api.unsplash.com/search/photos?page=${Math.round(Math.random()*100)}&query=elephant&client_id=${PINTEREST_API_KEY}`;
        axios
            .get(url)
            .then((response) => {
                setResult(response.data.results);
            })
            .catch((error) => {
                alert(error);
            });
    }, [])

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
                        <Button size='large' fullWidth className={classes.login} variant='outlined'>Message</Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Button size='large' fullWidth className={classes.login} variant='outlined' onClick={handleSignOut}>Sign Out</Button>
                    </Grid>

                    {
                        result.map((photo) => {
                            return (
                                <Grid item xs={6}  key={photo.id} >
                                    <img className={classes.images} src={photo.urls.small} alt={`${photo.id}`}/>
                                </Grid>
                            )

                        })
                    }


                </Grid>
            </Box>
        </React.Fragment>
    )
}