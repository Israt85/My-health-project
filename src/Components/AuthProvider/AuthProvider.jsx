import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

     
      const userSignUp = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
      }
      const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
      }

     const userLogin =(email,password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
     }

     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })

        
        return unSubscribe;
     },[])

     const UserLogOut= ()=>{
        setLoading(true)
        return signOut(auth)
    }




    const authInfo={
        user,
        userLogin,
        userSignUp,
        UserLogOut,loading,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;