import React from 'react';
import app from '../base';
import {Button} from '@material-ui/core'

export const MyProfile = () =>{

    const handleSignOut = () =>{
        app
        .auth()
        .signOut()
    }

    return(
        <React.Fragment>
            <h2>Llegaste a tu perfil</h2>
            <Button onClick={handleSignOut}>Sign Out</Button>
        </React.Fragment>
    )
}