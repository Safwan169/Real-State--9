import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import { auth } from './firebase.config';
import { GoogleAuthProvider } from 'firebase/auth/cordova';
import { onAuthStateChanged } from "firebase/auth";
export const myContext = createContext(null)


const All = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const [dep, setDep] = useState(false)
    const [dep2, setDep2] = useState(false)


    const createUser = (email, password) => {

        return (createUserWithEmailAndPassword(auth, email, password))



    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const google = () => {
        setLoading(true)

        return signInWithPopup(auth)
    }
    useEffect(() => {
    //    const unSubscribe=
       onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                setLoading(false)

                setUser(user)
            } else {
                // User is signed out
                // ...
                console.log('kao nai')
                setLoading(false)

                setUser(false)
            }
        });
//    return unSubscribe
    }, [dep],[dep2])
    const authInfo = {
        createUser,
        signInUser,
        google,
        user,
        dep2,
        setDep,
        setDep2,
        loading,
        setLoading
    }
    return (
        <myContext.Provider value={authInfo}>
            {children}

        </myContext.Provider>
    );
};

export default All;