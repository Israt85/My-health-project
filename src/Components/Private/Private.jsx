import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const Private = ({children}) => {
     const {user, loading} = useContext(AuthContext);

      if(loading){
        return <p><span className="loading loading-spinner loading-lg"></span></p>
      }

     if(user)
       return children;
    return <Navigate to="/login"></Navigate>
};

export default Private;