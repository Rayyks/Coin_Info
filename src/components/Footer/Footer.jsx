import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.svg";
import { Twitter, Github, LinkedIn } from "../../Icons";

const Footer = () => {
  return (
    <div className="relative isolate w-full flex md:justify-center justify-between items-center flex-col border-t border-slate-400/5 drop-shadow-2xl p-4 bg-mainBg">
      <div className="w-full flex sm:flex-row animate-fade-in-down  flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <Link
            to={"/"}
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={Logo} alt="CryptoAce Logo" />
            <span className="text-3xl font-raj font-semibold tracking-wider text-white">
              Coin
              <span className="text-logo-gradient">Info</span>
            </span>
          </Link>
        </div>

        <div className="flex flex-1 justify-evenly items-center antialiased text-slate-300 font-medium md:text-2xl lg:text-2xl uppercase flex-wrap sm:mt-0 mt-5 w-full">
          <div className="flex">
            <Link
              to={"/crypto"}
              aria-label="Buy Token"
              title="Buy Token"
              className="tracking-wide hoverEffect"
            >
              Cryptocurrency
            </Link>
          </div>

          <div className="flex">
            <Link
              to={"/nfts"}
              aria-label="Lottery"
              title="Lottery"
              className="tracking-wide hoverEffect"
            >
              NFT
            </Link>
          </div>

          <div className="flex">
            <Link
              to={"/portfolio"}
              aria-label="Send Ether"
              title="Send Ether"
              className="tracking-wide hoverEffect"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>

      <div className="sm:w-[90%] h-[1px] animate-fade-in-down w-full bg-slate-400/40 mt-5"></div>

      <div className="sm:w-[90%] w-full flex justify-between animate-fade-in-down items-center mt-3">
        <div className="w-full grid grid-cols-1 py-5 px-10 text-xl lg:grid-cols-3 md:grid-cols-3">
          <p className="text-slate-200 text-center font-medium py-2 text-sm lg:text-left lg:text-base md:text-left md:text-base">
            © 2023 - 2077, All rights reserved
          </p>

          <div className="flex items-center mt-1 py-2 space-x-5 justify-center">
            <a
              target="_blank"
              href="https://twitter.com/Rayy__And"
              title="Twitter"
              className="transition ease-in-out delay-120 text-slate-200 hover:-translate-y-1 hover:scale-125 hover:text-btnBorder duration-300"
            >
              <Twitter />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/rayyand/"
              title="Linkedin"
              className="transition ease-in-out delay-120 text-slate-200 hover:-translate-y-1 hover:scale-125 hover:text-btnBorder duration-300"
            >
              <LinkedIn />
            </a>

            <a
              target="_blank"
              href="https://github.com/Rayyks"
              title="Github"
              className="transition ease-in-out delay-120 text-slate-200 hover:-translate-y-1 hover:scale-125 hover:text-btnBorder duration-300"
            >
              <Github />
            </a>
          </div>

          <div className="text-center text-sm py-2 lg:text-right lg:text-base md:text-right md:text-base">
            <p className=" text-slate-200 font-medium">
              Made with fingers and my chaotic brain dead by {""}
              <a
                target="_blank"
                href="https://github.com/Rayyks"
                className="font-raj font-semibold tracking-wide hoverEffect"
              >
                Rayyand Kananda
              </a>
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
