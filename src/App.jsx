import React, { Suspense, useContext } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { Navbar, Footer, NotFound, Loader } from "./components";
import { AuthContext } from "./context/AuthContext";

const Login = React.lazy(() => import("./pages/Auth/Login"));
const SignUp = React.lazy(() => import("./pages/Auth/SignUp"));
const Home = React.lazy(() => import("./pages/Home"));
const Crypto = React.lazy(() => import("./pages/Coin/Crypto"));
const CoinDetail = React.lazy(() => import("./pages/Coin/CoinDetail"));
const Nfts = React.lazy(() => import("./pages/Nfts"));
const Nft = React.lazy(() => import("./pages/Nft"));
const Portfolio = React.lazy(() => import("./pages/Profile/Portfolio"));
const Cart = React.lazy(() => import("./pages/Cart/Cart"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const showNotificationAndRedirect = () => {
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
    navigate("/login");
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
          path={"/coin/:id"}
          element={
            <Suspense fallback={<Loader full={true} />}>
              <CoinDetail />
            </Suspense>
          }
        />
        <Route
          path={"/nfts"}
          element={
            <Suspense fallback={<Loader full={true} />}>
              <Nfts />
            </Suspense>
          }
        />
        <Route
          path={"/nft/:id"}
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
                  {showNotificationAndRedirect()}
                  {showAlert && (
                    <SweetAlert
                      danger
                      title="Please log in"
                      onConfirm={closeAlert}
                    >
                      You need to log in to access this page.
                    </SweetAlert>
                  )}
                </>
              ) : (
                <Portfolio />
              )}
            </Suspense>
          }
        />
        <Route
          path={"/profile"}
          element={
            <Suspense fallback={<Loader full={true} />}>
              <ToastContainer />
              {!isLoggedIn ? (
                <>
                  {showNotificationAndRedirect()}
                  {showAlert && (
                    <SweetAlert
                      danger
                      title="Please log in"
                      onConfirm={closeAlert}
                    >
                      You need to log in to access this page.
                    </SweetAlert>
                  )}
                </>
              ) : (
                <Profile />
              )}
            </Suspense>
          }
        />
        <Route
          path={"/cart"}
          element={
            <Suspense fallback={<Loader full={true} />}>
              <ToastContainer />
              {!isLoggedIn ? (
                <>
                  {showNotificationAndRedirect()}
                  {showAlert && (
                    <SweetAlert
                      danger
                      title="Please log in"
                      onConfirm={closeAlert}
                    >
                      You need to log in to access this page.
                    </SweetAlert>
                  )}
                </>
              ) : (
                <Cart />
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
