import React, { useContext } from 'react';
import { myContext } from './All';

const Anotherlogin = () => {
    const info = useContext(myContext)

    const {  google } = info
    console.log(google)

  
    return (
  google
    

        
)
};

export default Anotherlogin;