import React, { useContext, useState } from 'react';
import { myContext } from './All';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import 'animate.css'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase.config';
import { GithubAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";


const Login = () => {


    const navigate = useNavigate()
    const [eye, setEye] = useState(false)
    const [ok, setOk] = useState([])
    const [okk, setOkk] = useState()
    const info = useContext(myContext)
    const { signInUser } = info
    const google = () => {
        const provider = new GoogleAuthProvider();

        // google(provider)
        signInWithPopup(auth, provider)
            .then(() => {
                navigate('/')
            })
            .catch((error) => {
                console.log(error.message)
            })
        // console.log(google)
    }
    // const fb=()=>{
    //     const provider1=new FacebookAuthProvider()

    //     signInWithRedirect(auth, provider1)
    //      .then(p=>{
    //         console.log(p)
    //      })
    //      .catch((error)=>{
    //          console.log(error.massage)
    //      })
    //  }
    const git = () => {
        const provider = new GithubAuthProvider();

        signInWithPopup(auth, provider)
            .then(() => {
                navigate('/')
            })
            .catch((error) => {
                console.log(error.massage)
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const email = (e.target.email.value)
        const password = (e.target.password.value)
        setOkk('')
        setOk('')
        // if (password.length < 6) {
        //     setOkk('your password must be 6 letters')
        //     return
        // }
        // else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
        //     setOkk('Password must include both uppercase and lowercase letters')
        //     return
        // }
        // console.log(ok)
        signInUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // toast.success('You have successfully registered')
                navigate('/')


            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // console.log(errorMessage)
                toast.error('Incorrect email or password')



            })
    }
    return (


        <div>
            <Helmet>
                <title>Log In </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-[500px] max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                {/* {
                                ok && <p className=' ml-3 text-red-500'>{ok}</p>
                            } */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <div className='flex'>
                                    <input type={eye ? 'text' : 'password'} name='password' placeholder="password" className="input w-full input-bordered" required /><div className='absolute mt-4 left-[325px]'>{eye ? <p onClick={() => setEye(!eye)}><FaEyeSlash /></p> : <p onClick={() => setEye(!eye)}><FaEye /></p>}</div>

                                </div>
                                {/* {
                                okk && <p className=' ml-2 text-red-500'>{okk}</p>
                            } */}

                                <p className='mt-6 ml-3'>New to LivingSpaces <Link className='ml-2 text-blue-500 underline font-semibold hover:text-blue-600' to={'/register'} >Register </Link></p>

                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Log In</button>

                            </div>
                            <div>
                            <Toaster
                                position="top-center"
                                reverseOrder={false}
                            />

                            </div>
                           
                            <div className="flex mt-4 justify-around">
                                <button onClick={() => google()} className="btn bg-red-500 text-white font-semibold"><FaGoogle />+ Google</button>
                                <button onClick={() => git()} className="btn bg-black text-white font-semibold "> <FaGithub /> GitHub</button>
                                {/* <button onClick={()=>fb()} className="btn bg-blue-500 text-white font-semibold "> fb</button> */}

                            </div>

                        </form>
                    </div>
                </div>

            </div>


        </div>

    )

};

export default Login;