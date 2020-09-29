import React from 'react';
import { Grid, Box, makeStyles } from '@material-ui/core';
import { ControlsStyles } from '../Styles/controlsStyles';
import { Link } from 'react-router-dom';
import {Routes} from '../constants/routes';


const useStyles = makeStyles(ControlsStyles);

export const Controls = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.wrapper}>
                <Grid
                    container
                    justify='space-around'
                    alignItems='center'>
                    <Grid item>
                        <Link to={Routes.MY_PROFILE}>
                        <div className={classes.home} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to={Routes.SEARCH_IMAGES} >
                            <div className={classes.search} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <div className={classes.add} />
                    </Grid>
                    <Grid item>
                        <div className={classes.message} />
                    </Grid>
                    <Grid item>
                        <div className={classes.users} />
                    </Grid>

                </Grid>
            </Box>
        </React.Fragment>
    )
}