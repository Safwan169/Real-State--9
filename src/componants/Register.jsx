import React, { useContext, useState } from 'react';
import { myContext } from './All';
import { Navigate, useNavigate } from 'react-router';
import { Navigation } from 'swiper/modules';

const Register = () => {
    const navigate = useNavigate()
    const [ok, setOk] = useState([])
    const [okk, setOkk] = useState()
    const info = useContext(myContext)
    const { createUser } = info

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = (e.target.email.value)
        const password = (e.target.password.value)
        setOkk('')

        if (password.length < 6 ) {
            setOkk('your password must be 6 letters')
            return
            
        }
        else if(!/[A-Z]/.test(password)){
            setOkk('must be upper case')
            return
        }
        console.log(ok)
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setOk('Successfully Register')
                navigate('/')


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorMessage)
                setOk('Email already in use')


            })

    }
    return (



        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            {
                                okk && <p>{okk}</p>
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {ok && <p className='text-green'>{ok}</p>
           }
                    </form>
                </div>
            </div>
           
        </div>

    );
};

export default Register;