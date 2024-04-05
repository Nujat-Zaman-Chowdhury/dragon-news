import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import {Navigate} from "react-router-dom"
import {useLocation} from "react-router-dom"

const PrivateRoute = ({children}) => {

    const location = useLocation();
    console.log(location.pathname);

    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <div className="flex justify-center py-10"><span className="loading loading-spinner text-primary"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;