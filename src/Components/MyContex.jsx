import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import app from "./firebase.config";


export const MyContextProvider = createContext(null);
const MyContext = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);
    const auth = getAuth(app);
    const handleRegister=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleSignIn =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    const loginWithGoogle=()=>{
        return signInWithPopup(auth, provider)
    }
    const handleSignOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();}
    },[])
    
    const objOfInfo={handleRegister, handleSignIn, handleSignOut, user, loading,loginWithGoogle }
    return (
        <MyContextProvider.Provider value={objOfInfo}>
            {children}
        </MyContextProvider.Provider>
    );
};

export default MyContext;