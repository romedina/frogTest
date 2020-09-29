import React from 'react';
import {Landing} from './landing';
import {RegisterLayout} from './registerLayout';
import {LogIn} from './logIn';
import {Route} from 'react-router-dom';
import {Routes} from '../constants/routes';
import {MyProfile} from './myProfile';
import PrivateRoute from '../PrivateRoute';

export const Body = () =>{

    

    return(
        <React.Fragment>
            <Route exact path={Routes.LANDING} component={Landing} />
            <Route exact path={Routes.REGISTER} component={RegisterLayout}/>
            <Route exact path={Routes.LOGIN} component={LogIn}/>
            <PrivateRoute exact path={Routes.MY_PROFILE} component={MyProfile}/>
        </React.Fragment>
        
    )
}