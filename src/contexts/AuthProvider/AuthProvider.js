import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const googleProviderLogin = (googleProvider) => {
        return signInWithPopup(auth, googleProvider);
    }
    const githubProviderLogin = (githubProvider) => {
        return signInWithPopup(auth, githubProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state changed', currentUser);
            if (currentUser == null || currentUser.email) {
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = { user, loading, createUser, signIn, verifyEmail, logOut, updateUserProfile, googleProviderLogin, githubProviderLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;