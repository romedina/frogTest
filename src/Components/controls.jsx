import React from 'react';
import {Grid,Box,makeStyles} from '@material-ui/core';
import {ControlsStyles} from '../Styles/controlsStyles';


const useStyles = makeStyles(ControlsStyles);

export const Controls = () =>{

    const classes = useStyles();

    return(
        <React.Fragment>
            <Box className={classes.wrapper}>
                <Grid 
                container 
                justify='space-around' 
                alignItems='center'>
                    <Grid item>
                        <div className={classes.home}/>
                    </Grid>
                    <Grid item>
                        <div className={classes.search}/>
                    </Grid>
                    <Grid item>
                        <div className={classes.add}/>
                    </Grid>
                    <Grid item>
                        <div className={classes.message}/>
                    </Grid>
                    <Grid item>
                        <div className={classes.users}/>
                    </Grid>
                    
                </Grid>
            </Box>
        </React.Fragment>
    )   
}