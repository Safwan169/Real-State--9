import React, { useContext, useState } from 'react';
import { myContext } from './All';
import { FaEye } from "react-icons/fa6";
import 'animate.css'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaEyeSlash } from "react-icons/fa6";

const Register = () => {
    const [eye,setEye]=useState(false)
    const [ok, setOk] = useState([])
    const [okk, setOkk] = useState()
    const info = useContext(myContext)
    const { createUser } = info

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = (e.target.email.value)
        const password = (e.target.password.value)
        setOkk('')
        setOk('')
        if (password.length < 6) {
            setOkk('your password must be 6 letters')
            return
        }
        else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            setOkk('Password must include both uppercase and lowercase letters')
            return
        }
        console.log(ok)
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                toast.success('You have successfully registered')


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


            <Helmet>
                <title>Register </title>
            </Helmet>

            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card shrink-0 w-[500px] max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            {
                                ok && <p className=' ml-3 text-red-500'>{ok}</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='flex'>
                            <input type={eye?'text':'password'} name='password' placeholder="password" className="input w-full input-bordered" required /><div className='absolute mt-4 left-[325px]'>{eye?<p onClick={()=>setEye(!eye)}><FaEyeSlash /></p>:<p onClick={()=>setEye(!eye)}><FaEye /></p>}</div>

                            </div>

                            {
                                okk && <p className=' ml-2 text-red-500'>{okk}</p>
                            }
                            <label className="label">
                                <span className="label-text">photoURL</span>
                            </label>
                            <input type="url" name='photoURL' placeholder="Your photoURL" className="input input-bordered" required  />
                            <p className='mt-6 ml-3'>Already have an account?<Link className='ml-2 text-blue-500 underline font-semibold hover:text-blue-600' to={'/login'} >Sign In</Link ></p>

                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Sign up</button>

                        </div>
                        <Toaster toastOptions={{
                            className: '',
                            style: {
                                marginTop: '50px',
                                marginRight: '70px',
                                fontWeight: 'bolder'
                            },
                        }}
                            position="top-right"
                            reverseOrder={false}

                        />

                    </form>
                </div>
            </div>

        </div>

    );
};

export default Register;