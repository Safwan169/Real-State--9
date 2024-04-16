import React, { useContext } from 'react';
import { myContext } from './All';

const User = () => {
    const data = useContext(myContext)
    const { user,setLoading,loading } = data
    if (loading) {
        return <div className='flex justify-center my-16'> <span className="  loading loading-ring loading-lg"></span></div>
 
    }

   else return (
        <div className='flex justify-center'>
            <div className="card w-96 my-10 pt-4 glass">
                <figure><img className='rounded-[50%] w-[150px]' src={user.photoURL } alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold justify-center">{user.displayName}</h2>
                    <p className='font-semibold text-center'>E-Mail : {user.email}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;