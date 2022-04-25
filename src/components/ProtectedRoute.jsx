import { Navigate } from "react-router-dom";
import { Employees } from "../contexts/employees";
import { useContext } from "react";

export const ProtectedRoute = ({children})=>{
    const {isAuth} = useContext(Employees)
    if(!isAuth){
        return <Navigate to={"/login"} />
    }
    return children;
}