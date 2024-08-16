import { createContext, useState } from "react";



export const AuthContext = createContext()


const MyContext = ({ children }) => {

    const [valueOne, setValueOne] = useState('name')



    const value = {
        valueOne,
        setValueOne
    }
    return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
};

export default MyContext;