import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

export const AuthPublicRoute = ({
    isLoggedIn,
    component: Component,
    ...rest
}) => {
    return (
        <Route { ...rest }
            component={ (props) =>(
                (!isLoggedIn)
                    ? (<Component { ...props } />)
                    : ( <Redirect to="/inicio" /> )
            )}
        />
    )
}

AuthPublicRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}