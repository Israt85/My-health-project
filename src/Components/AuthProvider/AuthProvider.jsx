import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.init";

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const auth = getAuth(app);
     
      const userSignUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
      }


     const userLogin =(email,password) =>{
       return signInWithEmailAndPassword(auth,email,password)
     }

     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser)
        })

        
        return unSubscribe;
     },[])

     const UserLogOut= ()=>{
        return signOut(auth)
    }




    const authInfo={
        user,
        userLogin,
        userSignUp,
        UserLogOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;