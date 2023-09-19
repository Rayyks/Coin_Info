import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { Navbar, Footer, NotFound, Loader } from "./components";

const Home = React.lazy(() => import("./pages/Home"));
const Crypto = React.lazy(() => import("./pages/Crypto"));
const Nft = React.lazy(() => import("./pages/Nft"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
// const BuyToken = React.lazy(() => import("./pages/BuyToken"));

const App = () => (
  <div className="min-h-screen flex flex-col overflow-hidden">
    <Navbar />
    <Routes>
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
            <Portfolio />
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

export default App;
