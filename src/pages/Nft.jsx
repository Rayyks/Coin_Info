import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useNft } from "../context/NftContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useState } from "react";

const Nft = () => {
  const { data } = useNft();
  const { id } = useParams();
  const nftId = Number(id);
  const Enft = data.find((nft) => nft.id === nftId);

  const { currentUser } = useAuth();
  const { cartItem, addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isItemInCart = cartItem.some((item) => item.id === Enft.id);
    if (isItemInCart) {
      setAddedToCart(true);
    }
  }, [cartItem, Enft.id]);

  const handleCartBtn = () => {
    if (!currentUser) {
      const nftType = Enft.title.includes("Special") ? "DOPE" : "CUTE";
      return toast.error(
        `You must be logged in to add this ${nftType} ${Enft.title} to cart`,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }

    const addItem = {
      id: Enft.id,
      image: Enft.imageUrl,
      title: Enft.title,
      desc: Enft.description,
      price: Enft.price,
    };

    addToCart(addItem);
    toast.success(`${Enft.title} has been added to your cart.`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setAddedToCart(true);
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="bg-mainBg min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={Enft.imageUrl}
          alt={Enft.title}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        />
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            {Enft.title}
          </h2>
          <p className="text-gray-600 mb-4">{Enft.description}</p>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold text-fuchsia-600 ">
              ${Enft.price}
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <button
              className={`bg-fuchsia-600 transition ease-in-out  hover:bg-fuchsia-800 text-white px-2 py-2 rounded-md flex items-center ${
                addedToCart ? "cursor-pointer" : ""
              }`}
              onClick={addedToCart ? goToCart : handleCartBtn}
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#ffffff" }}
                className="px-2"
              />
              {addedToCart ? "Go To Cart" : "Add To Cart"}
            </button>
            <button className="bg-fuchsia-600 transition ease-in-out  hover:bg-fuchsia-800 text-white px-4 py-2 rounded-md flex items-center">
              Buy Now
            </button>
          </div>
          <div>
            <Link
              to="/nfts"
              className="my-5 bg-fuchsia-600 transition ease-in-out  hover:bg-fuchsia-800 text-white px-4 py-2 rounded-md flex items-center"
            >
              <FontAwesomeIcon
                icon={faArrowCircleLeft}
                style={{ color: "#ffffff" }}
                className="px-2"
              />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft;
