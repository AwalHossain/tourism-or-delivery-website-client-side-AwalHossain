import React, { useContext } from 'react';
import { AuthContext } from '../ContexApi/AuthProvider';

const UseAuth = () => {
    return useContext(AuthContext)
};

export default UseAuth;