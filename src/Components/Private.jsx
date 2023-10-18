import { useContext } from "react";
import { MyContextProvider } from "./MyContex";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({children}) => {

    const {user, loading}= useContext(MyContextProvider);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    } else{
        return <Navigate state={location.pathname} to={'/signIn'}></Navigate> 
    }
    
};

export default Private;