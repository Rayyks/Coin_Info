import React, { useState, createContext, useEffect, useContext } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to track the user's authentication status
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Function to handle SignUp user
  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Sign up failed", error);
    }
  };

  // Function to handle user login
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Login failed", error);
    }
  };

  // Function to handle user logout
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signUp,
        login,
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
