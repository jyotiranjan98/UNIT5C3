import { createContext,useState } from "react";
export const Employees = createContext()
export const EmployeesProvider = ({children})=>{
    const [isAuth,setIsAuth] =useState(false)
    const handlechange =(state)=>{
        setIsAuth(state)
    }
    return <Employees.Provider value={{isAuth,handlechange}}>{children}</Employees.Provider>
}