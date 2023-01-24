import React, { createContext } from 'react';
import { useSelector } from 'react-redux';

function PrivateRoute({children}) {
    const authenticated = useSelector( state => state.auth.isAuthenticated)
    const authContext = createContext()
    return (
        <authContext.Provider value={authenticated}>
            {children}
        </authContext.Provider>
    );
}

export default PrivateRoute;