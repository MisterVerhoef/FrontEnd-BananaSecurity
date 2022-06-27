import React, {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";



// 1. Maak de Context
export const AuthContext = createContext({});

// 2. Maak het custom provider component:
function AuthContextProvider ({children}){
    const history = useHistory();


    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending'
    });

    function login (jwt){
        console.log("de gebruiker is ingelogd");
        localStorage.setItem('token', jwt)
        const decode = jwtDecode(jwt)
        console.log(decode)
        getData(decode.sub, jwt)
        setIsAuth(true);

    }

    function logout (jwt){
        console.log("de gebruiker is uitgelogd");
        setIsAuth(false);
        localStorage.removeItem('token', jwt)
        history.push('/')
    }



    async function getData(id, token){
        try{
            const data = await axios.get(`http://localhost:3000/600/users/${id}`, {
                headers: {
                 "Content-Type":"application/json",
                 Authorization: `Bearer ${token}`,
                }
            })
            setIsAuth( {
                isAuth: true,
                user: {
                    username: data.data.username,
                    email: data.data.email,
                    id: data.data.id,
                },
            });
            console.log(isAuth)
        } catch (e) {
            console.error(e)
        }
    }

   const data = {

       isAuth: isAuth.isAuth,
       user: isAuth.user,
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