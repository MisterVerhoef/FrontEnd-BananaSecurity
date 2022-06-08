import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";



// 1. Maak de Context
export const AuthContext = createContext({});

// 2. Maak het custom provider component:
function AuthContextProvider ({children}){
    const history = useHistory();


    const [isAuth, setIsAuth] = useState(false);

    function login (e){
        console.log("de gebruiker is ingelogd");
        setIsAuth(true);
        history.push('/profile')
    }

    function logout (e){
        console.log("de gebruiker is ingelogd");
        setIsAuth(false);
        history.push('/')
    }

   const data = {

       isAuth: isAuth,
       login: login,
       logout: logout

    }

    return (
        <AuthContext.Provider value={data}>
            { children }
        </AuthContext.Provider>
    )
}
    export default AuthContextProvider;