import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { Children, createContext } from 'react';
import { auth } from './firebase.config';
export const myContext=createContext(null)

const All = ({children}) => {
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo={
        createUser

    }
    return (
        <myContext.Provider value={authInfo}>
            {children}
            
        </myContext.Provider>
    );
};

export default All;