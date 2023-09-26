import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo.svg";
import MenuItem from "./MenuItem";
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const showMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="bg-mainBg  w-full border-b top-0 border-slate-400/5 z-20 shadow-lg text-2xl">
      <div className="px-4 py-5 mx-auto animate-fade-in-up sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <NavLink
            to={"/"}
            aria-label="Home"
            title="Home"
            className="inline-flex items-center"
          >
            <img src={Logo} alt="CryptoAce" />
            <span className="text-3xl font-raj font-semibold tracking-wider text-white">
              Coin
              <span className="text-logo-gradient">Info</span>
            </span>
          </NavLink>

          {/* Navigation Buttons */}

          <ul className="hidden mf:flex font-medium items-center text-slate-300 uppercase space-x-8">
            <li>
              <NavLink
                to={"/crypto"}
                aria-label="Crypto"
                title="Crypto"
                className={({ isActive, isPending }) =>
                  `hoverEffect ${
                    isPending ? "pending" : isActive ? "active" : ""
                  }`
                }
              >
                Cryptocurrency
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/nfts"}
                aria-label="Nft"
                title="Nft"
                className={({ isActive, isPending }) =>
                  `hoverEffect ${
                    isPending ? "pending" : isActive ? "active" : ""
                  }`
                }
              >
                NFT
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/portfolio"}
                aria-label="send ether"
                title="send ether"
                className={({ isActive, isPending }) =>
                  `hoverEffect ${
                    isPending ? "pending" : isActive ? "active" : ""
                  }`
                }
              >
                Portfolio
              </NavLink>
            </li>
          </ul>

          {/* Button */}
          {!isLoggedIn ? (
            <ul className="hidden mf:flex items-center space-x-8">
              <li>
                <button className="bg-violet-300 hover:bg-violet-700 transition duration-300 ease-in-out rounded-full px-4 py-2 font-medium">
                  <Link to="/login">Login</Link>
                </button>
              </li>
            </ul>
          ) : (
            <ul className="hidden mf:flex items-center space-x-8 relative">
              <li>
                <button
                  className="bg-violet-300 hover:bg-violet-700 transition duration-300 ease-in-out rounded-full px-4 py-2 font-medium"
                  onClick={toggleDropdown}
                >
                  <span className="sr-only">Open user menu</span>
                  <FontAwesomeIcon icon={faUser} style={{ color: "#ee00ff" }} />
                </button>
                {showDropdown && (
                  <CSSTransition
                    in={showDropdown}
                    timeout={300} // Adjust the duration as needed
                    classNames="dropdown"
                    unmountOnExit
                  >
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Profile
                        </Link>
                        <Link
                          to="/cart"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Cart
                        </Link>
                        <button
                          onClick={logout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </CSSTransition>
                )}
              </li>
            </ul>
          )}
          {/* Mobile Toggler */}
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
