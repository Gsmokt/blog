import { Navigate } from "react-router-dom";

const Required = ({isLogged, children}) => {
    
    if(!isLogged){
        return <Navigate to='/login' />
    }
    return children;
};

export default Required;