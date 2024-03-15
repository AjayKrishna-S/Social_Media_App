import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = () => {
        setCurrentUser({
            id:1,
            name: "Ajay Krishna",
            profilePicture: "https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
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

