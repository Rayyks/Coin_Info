import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthGuard = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    toast.error("You must be logged in to access this page");
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthGuard;
