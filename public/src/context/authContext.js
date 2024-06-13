import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import profilePic from "../assets/images/dp.jpg"


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = () => {
        setCurrentUser({
            id:1,
            name: "Ajay Krishna",
            profilePicture: profilePic
        });
    };

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser]
    );
    return(
        <AuthContext.Provider value={{currentUser, login  }}>
            {children}
        </AuthContext.Provider>
    );
};

