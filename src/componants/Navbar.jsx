import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { myContext } from "./All";

import { getAuth, signOut } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "./firebase.config";

const Navbar = () => {

  const signOutt = () => {

    const auth = getAuth();
    signOut(auth).then(() => {
      // console.log('sign out hoisa ')
      // toast.success('You have been successfully logged out')
      toast.success('You have been successfully logged out', {
        position: 'top-center',
        style: {
          marginTop: '80px',
          marginLeft: '70px',

          border: '1px solid green',

        }
      })

    }).catch((error) => {
    });
  }
  const info = useContext(myContext)
  const { user } = info
  console.log(user)

  const nav = <>
    <li className="text-xl font-semibold"><NavLink to={'/'} style={({ isActive }) => ({
      background: isActive ? "white" : "", color: isActive ? "#1bc91b" : "black"
    })}>Home</NavLink></li>

   {
    user ?"":<div className="lg:flex">  <li className="text-xl font-semibold">
    <NavLink to={'/register'} style={({ isActive }) => ({
      background: isActive ? "white" : "", color: isActive ? "#1bc91b" : "black"
    })}>Register</NavLink>
  </li>
 </div>
   }
    {user && <div className="lg:flex"> <li className="text-xl font-semibold"><NavLink to={'/user'} style={({ isActive }) => ({
      background: isActive ? "white" : "", color: isActive ? "#1bc91b" : "black"
    })} >User Profile</NavLink></li>
      <li className="text-xl font-semibold"><NavLink to={'/update'} style={({ isActive }) => ({
        background: isActive ? "white" : "", color: isActive ? "#1bc91b" : "black"
      })} >Update Profile</NavLink></li></div>}
  </>
  return (
    <div className="navbar bg-base-100">
      <Toaster></Toaster>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52">
            {nav}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><img className="w-10 h-full" src="/logo2-removebg-preview.png" alt="" />  <span className="bg-gradient-to-r from-yellow-500 to-indigo-500 text-transparent bg-clip-text">Living</span><span className="bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text"> Spaces</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {nav}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <div className="  -ml-[50px] tooltip hover:tooltip-open tooltip-bottom z-30" data-tip={user.displayName}  ><img className="rounded-[50%] w-[50px] bg-white " src={user.photoURL} alt="" /></div> : ''
        }
      </div>
      <div className="navbar-end  w-[120px] ml-4">
        {
          user ? <Link ><button onClick={() => signOutt()} className="btn font-bold bg-orange-400 p-2 btn text-white justify-center flex rounded-xl w-[100px]">Log out</button></Link> : <Link to={'/login'}><button className="btn font-bold bg-orange-400 p-2  text-white justify-center flex rounded-xl w-[100px]">Log in</button></Link>
        }
      </div>
      {/* <Toaster></Toaster> */}
      {/* <Toaster toastOptions={{
        className: '',
        style: {
          marginTop: '50px',
          marginRight: '70px',
          fontWeight: 'bolder'
        },
      }}
        position="top-right"
        reverseOrder={false}

      /> */}
    </div>
  );
};

export default Navbar;