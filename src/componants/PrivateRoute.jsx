import React, { useContext } from 'react';
import { myContext } from './All';
import { Navigate, useNavigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const data=useContext(myContext)
    const {user,loading}=data
    // const navigate=useNavigate()
    console.log(user)
    if (loading) {
        return <div className='flex justify-center my-16'> <span className="  loading loading-ring loading-lg"></span></div>
        
    }
   else if (user) {
    return children
    
   }
   else {
   return <Navigate to={'/login'}></Navigate>}
};

export default PrivateRoute;