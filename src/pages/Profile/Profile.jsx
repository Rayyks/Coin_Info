import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import profileImg from "../../../assets/nfts/special.jpg";
import { useCoin } from "../../context/CryptoContext";

const Profile = () => {
  const { currentUser } = useAuth();
  const { cartItem } = useCart();
  const { data } = useCoin();

  return (
    <main className="profile-page">
      <section className="relative h-96">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://preview.redd.it/el-quan-dingle-in-victorian-england-v0-c9v4xdqptd5a1.png?width=640&crop=smart&auto=webp&s=ab1339a82a9564022054065a7ffd5938e3c798e9')",
          }}
        >
          <div
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-14"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="py-16 bg-mainBg">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-zinc-800 w-full mb-6 shadow-xl rounded-lg -mt-48">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <img
                    alt="Profile"
                    src={profileImg}
                    className="shadow-xl rounded-full h-auto w-48  align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150"
                  />
                </div>

                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-green-500 active:bg-green-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-white">
                        {data.length}
                      </span>
                      <span className="text-sm text-white">Coins</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-white">
                        10
                      </span>
                      <span className="text-sm text-white">Transactions</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-white">
                        {cartItem.length}
                      </span>
                      <span className="text-sm text-white">Cart</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-white">
                  {currentUser.email}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-white"></i>
                  Location : behind you😈
                </div>
                <div className="mb-2 text-white mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-white"></i>
                  Your Occupation
                </div>
                <div className="mb-2 text-white">
                  <i className="fas fa-university mr-2 text-lg text-white"></i>
                  Your University
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-white">
                      Describe yourself here. Talk about your cryptocurrency
                      journey, investments, or anything related to
                      cryptocurrencies.
                    </p>
                    <a href="#pablo" className="font-normal text-green-500">
                      Show more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
