import React from 'react';
import { Route } from 'react-router';

const PrivateRoute = ({children, ...rest}) => {
    return (
        <Route
        // {...rest}
        // render={
        //     ()=>()
        // }
        >
        </Route>
    );
};

export default PrivateRoute;