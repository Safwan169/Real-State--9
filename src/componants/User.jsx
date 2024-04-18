import React, { useContext } from 'react';
import { myContext } from './All';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const User = () => {
    const data = useContext(myContext)
    const { user, setLoading, loading } = data
    if (loading) {
        return <div className='flex justify-center my-16'> <span className="  loading loading-ring loading-lg"></span></div>

    }

    else return (
        <div className='bg-base-200 md:p-10 lg:p-10'>
            <Helmet>
                <title>LivingSpace | Profile</title>
            </Helmet>
            <div className=" animate__animated animate__bounceInUp animate__delay-0.99s mt-10   card w-full  flex  mx-auto justify-center border-2  shadow-2xl  lg:w-[500px] h-[600px] my-10 pt-4  ">
                <div className='text-wrap overflow-ellipsis'>
                    <figure><img className='rounded-[50%] w-[150px]' src={user.photoURL} alt="car!" /></figure>
                    <div className="card-body items-center flex">
                        <h2 className="card-title font-bold text-blue-500 md:text-4xl lg:text-4xl text-xl mb-2 justify-center">{user.displayName?user.displayName:'Not Available'}</h2>
                        <div>
                            <p className='font-semibold text-xl h-[40px] mb-0 text-center'>E-Mail : {user.email?user.email:'Not Available'}</p>

                        </div>
                        <div className="  card-actions text-center flex-1  h-[50px]">
                            <p className='font-semibold  lg:max-w-[480px] md:w-[480px] flex px-2 justify-center text-wrap text-center'><span className=' flex font-bold'>PhotoURL   <span className='block'>  :</span></span> <span className='w-full text-wrap  overflow-hidden overflow-ellipsis max-w-[500px] block flex-wrap'> {user.photoURL}</span></p>

                        </div>
                        <div className=' w-full  flex justify-end '>
                            <Link to={'/update'}> <button className='btn w-[100px] mt-10 text-white font-bold bg-red-400 p-4 rounded-2xl'>  Edit</button></Link>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default User;