import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { Children, createContext } from 'react';
import { auth } from './firebase.config';
import { GoogleAuthProvider } from 'firebase/auth/cordova';
export const myContext=createContext(null)

const All = ({children}) => {

    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const google = () => {
       return signInWithPopup(auth)}
    const authInfo={
        createUser,
        signInUser,
        google
    }
    return (
        <myContext.Provider value={authInfo}>
            {children}
            
        </myContext.Provider>
    );
};

export default All;