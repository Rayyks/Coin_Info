import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router";
import { Navbar, Footer, NotFound, Loader, Transactions } from "./components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = React.lazy(() => import("./pages/Home"));
const Crypto = React.lazy(() => import("./pages/Crypto"));
const Nft = React.lazy(() => import("./pages/Nfts"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const SignUp = React.lazy(() => import("./pages/Auth/SignUp"));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to show the login notification
  const showLoginNotification = () => {
    toast.error("Please log in to access your portfolio.", {
      position: "top-center",
      autoClose: 5000, // 5 seconds
    });
  };
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader full={true} />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Suspense fallback={<Loader full={true} />}>
              <SignUp />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader full={true} />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          index
          element={
            <Suspense fallback={<Loader full={true} />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={"/crypto"}
          element={
            <Suspense fallback={<Loader full={true} />}>
              <Crypto />
            </Suspense>
          }
        />
        <Route
          path={"/nft"}
          element={
            <Suspense fallback={<Loader full={true} />}>
              <Nft />
            </Suspense>
          }
        />
        <Route
          path={"/portfolio"}
          element={
            <Suspense fallback={<Loader full={true} />}>
              <ToastContainer />
              {!isLoggedIn ? (
                <>
                  {showLoginNotification()}
                  <Login />
                </>
              ) : (
                <Portfolio />
              )}
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader full={true} />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
