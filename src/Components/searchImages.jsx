import React,{useState} from 'react';
import { Box, Grid, Typography,TextField, Button, makeStyles, CircularProgress  } from '@material-ui/core';
import axios from 'axios';
import { myProfileStyles } from '../Styles/myProfileStyles';
import { logInStyles } from '../Styles/logInStyles';

const useStyles = makeStyles({ ...myProfileStyles, ...logInStyles });
const PINTEREST_API_KEY = "bsEAgAjoOdSaupFCbSl55iwPeDetua_kb7pls8vA4ns";

export const SearchImages = () => {

    const classes = useStyles();

    const [query,setQuery] = useState("")
    const [result,setResult] = useState([]);
    const [isSearching,setIsSearching] = useState(false);

    const handleQuery = event =>{
        setQuery(event.target.value);
    }

    const handleSearch = () =>{
        setIsSearching(true)
        const url = `https://api.unsplash.com/search/photos?page=${Math.round(Math.random()*100)}&query=${query}&client_id=${PINTEREST_API_KEY}`;
        axios
            .get(url)
            .then((response) => {
                setResult(response.data.results);
            })
            .catch((error) => {
                alert(error);
            });
    }

    const handleScroll = event =>{
        const target = event.target;
        if(target.scrollHeight - target.scrollTop === target.clientHeight){
            console.log('llegaste hasta abajo');
        } else{
            console.log('scrolling')
        }
    }

    return (
        <React.Fragment>
            <Box p={2} onScroll={handleScroll}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align='left'>Search</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        label='What are you looking for...'
                        fullWidth 
                        onChange={handleQuery}
                        variant='outlined' ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                        fullWidth
                        className={classes.register}
                        onClick={handleSearch}
                        variant='contained'>Find Images</Button>
                    </Grid>
                    {
                        result.length > 0 ? 
                        result.map((photo) => {
                            return (
                                <Grid item xs={6}  key={photo.id} >
                                    <img className={classes.images} src={photo.urls.small} alt={`${photo.id}`}/>
                                </Grid>
                            )
                        }):
                        isSearching?
                        <Grid item xs={12}>
                            <CircularProgress/>
                        </Grid>:<span/>
                    }
                </Grid>
            </Box>

        </React.Fragment>
    )
}