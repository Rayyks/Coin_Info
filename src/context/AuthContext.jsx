import { useState, createContext, useEffect, useContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to track the user's authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // State to store user data (username, email, etc.)
  const [userData, setUserData] = useState({
    username: localStorage.getItem("username") || "",
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
  });

  // Function to handle SingUp user
  const signUp = (username, email, password) => {
    try {
      setUserData({ username, email, password });

      // Store data in localStorage
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } catch (error) {
      console.log("Please Go fuck you selft", error);
    }
  };

  // Function to handle user login
  const login = (email, password) => {
    try {
      setIsLoggedIn(true);
      setUserData({ email, password });

      // Store data in localStorage
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } catch (error) {
      console.log("Login failed like you life", error);
    }
  };

  // Function to handle user logout
  const logout = () => {
    setIsLoggedIn(false);
    setUserData({
      username: "",
      email: "",
      password: "",
    });

    // Clear data from localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };

  // useEffect to persist the login status
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userData,
        user: userData.username,
        signUp,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
