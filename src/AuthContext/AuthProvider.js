import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';


export const AuthContext= createContext()
const auth= getAuth(app)





const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading]= useState(true)

    
    
    //create user:
     
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }

    // user  login
   
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //updateUser 
    const upDateUser=(userInfo)=>{
        updateProfile(auth.currentUser, userInfo)
    }
   


    //observer
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, currentUser=>{
           console.log('user obserbing')
           setUser(currentUser)
           setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    
 //logOUt

 const logOut =()=>{
    setLoading(true)
    return signOut(auth)
 }
   

    //provide 
    const AuthInfo={
        createUser,
        login,
        setUser,
        user,
        logOut,
        upDateUser,
        loading,
        
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;