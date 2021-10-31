import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, loading} = UseAuth();
    if(loading){
        return <div className="text-center mx-auto my-5"><Spinner animation="border" variant="primary" /></div>
    }
    // This is a private route
    return (
        <Route
        {...rest}
        render={
            ({location})=>
                user?.email? children
                :<Redirect
                    to={
                        {
                            pathname:'/login',
                            state:{from:location}
                        }
                    }
                    >
                    </Redirect>
        }
        >
        </Route>
    );
};

export default PrivateRoute;