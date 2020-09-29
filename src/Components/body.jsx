import React,{useContext} from 'react';
import {Landing} from './landing';
import {RegisterLayout} from './registerLayout';
import {LogIn} from './logIn';
import {SearchImages} from './searchImages';
import {Route} from 'react-router-dom';
import {Routes} from '../constants/routes';
import {MyProfile} from './myProfile';
import PrivateRoute from '../PrivateRoute';
import {Controls} from './controls';
import {AuthContext} from '../Auth';

export const Body = () =>{

    const {currentUser} = useContext(AuthContext);

    return(
        <React.Fragment>
            <Route exact path={Routes.LANDING} component={Landing} />
            <Route exact path={Routes.REGISTER} component={RegisterLayout}/>
            <Route exact path={Routes.LOGIN} component={LogIn}/>
            <PrivateRoute exact path={Routes.MY_PROFILE} component={MyProfile}/>
            <Route exact path={Routes.SEARCH_IMAGES} component={SearchImages}/>
            {currentUser ? <Controls/>: <span/>}
        </React.Fragment>    
    )
}