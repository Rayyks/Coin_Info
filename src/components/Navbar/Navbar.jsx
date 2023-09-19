import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/images/logo.svg";
import MenuItem from "./MenuItem";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const showMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-mainBg  w-full border-b top-0 border-slate-400/5 z-20 shadow-lg text-2xl">
      <div className="px-4 py-5 mx-auto animate-fade-in-up sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to={"/"}
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={Logo} alt="CryptoAce" />
            <span className="text-3xl font-raj font-semibold tracking-wider text-white">
              Coin
              <span className="text-logo-gradient">Info</span>
            </span>
          </Link>

          {/* Navigation Buttons */}

          <ul className="hidden mf:flex font-medium items-center text-slate-300 uppercase space-x-8">
            <li>
              <Link
                to={"/crypto"}
                aria-label="Buy Token"
                title="Buy Token"
                className="tracking-wide hoverEffect"
              >
                Cryptocurrency
              </Link>
            </li>
            <li>
              <Link
                to={"/nft"}
                aria-label="Lottery"
                title="Lottery"
                className="tracking-wide hoverEffect"
              >
                NFT
              </Link>
            </li>
            <li>
              <Link
                to={"/portfolio"}
                aria-label="send ether"
                title="send ether"
                className="tracking-wide hoverEffect"
              >
                Portfolio
              </Link>
            </li>
          </ul>

          {/* Button */}
          {!isLoggedIn ? (
            <ul className="hidden mf:flex items-center space-x-8">
              <li>
                <button
                  className="bg-violet-300 hover:bg-violet-700 transition duration-300 ease-in-out rounded-full px-4 py-2 font-medium"
                  onClick={() => setIsLoggedIn(!isLoggedIn)}
                >
                  Login
                </button>
              </li>
            </ul>
          ) : (
            <ul className="hidden mf:flex items-center space-x-8">
              <li>
                <button
                  className="bg-violet-300 hover:bg-violet-700 transition duration-300 ease-in-out rounded-full px-4 py-2 font-medium"
                  onClick={() => setIsLoggedIn(!isLoggedIn)}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          )}

          {/* Toggler */}

          <div className="absolute right-6 mf:hidden top-[5px] scale-150">
            <button
              className={isMenuOpen ? "menu opened" : "menu"}
              onClick={showMenu}
              aria-label="Main Menu"
            >
              <svg width="30" height="30" viewBox="0 -16 100 100">
                <path
                  className="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path className="line line2" d="M 20,50 H 80" />
                <path
                  className="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <MenuItem showMenu={showMenu} active={isMenuOpen} />
    </div>
  );
};

export default Navbar;
