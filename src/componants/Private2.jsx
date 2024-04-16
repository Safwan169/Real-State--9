import { useContext } from "react";
import { myContext } from "./All";
import { Navigate } from "react-router";


const Private2 = ({children}) => {
    const data=useContext(myContext)
    const {user,loading}=data
    if (loading) {
      return <div className='flex justify-center my-16'> <span className="  loading loading-ring loading-lg"></span></div>

      
    }
    if (user) {
      return  <Navigate to={'/'}></Navigate>
        
    }
    return children
};

export default Private2;