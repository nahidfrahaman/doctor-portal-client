import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    const location = useLocation()
    console.log(loading)

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    
    if(user && user.uid){
        return children ;
    }

    return <Navigate to="/login" state={{from:location}} replace/>


   
};

export default PrivateRoute;