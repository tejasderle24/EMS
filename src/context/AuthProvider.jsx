import React, { createContext } from 'react'
import { useState, useEffect } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);

    
    useEffect(() => {
        const {employee,admin} = getLocalStorage();
        setUserData({employee,admin})
    }, []);

    
    const data = getLocalStorage();
    console.log(data);


    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
