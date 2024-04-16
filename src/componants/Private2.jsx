import { useContext } from "react";
import { myContext } from "./All";
import { Navigate } from "react-router";


const Private2 = ({children}) => {
    const data=useContext(myContext)
    const {user}=data
    if (user) {
      return  <Navigate to={'/'}></Navigate>
        
    }
    return children
};

export default Private2;