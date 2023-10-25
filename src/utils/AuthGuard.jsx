import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthGuard = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    toast.error("You must be logged in to access this page", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthGuard;
