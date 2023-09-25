import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { NftContext } from "../context/NftContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Nft = () => {
  const { data } = useContext(NftContext);
  const { id } = useParams();
  const nftId = Number(id);
  const Enft = data.find((nft) => nft.id === nftId);

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
            {/* <div className="flex items-center space-x-2">
              <button
                className="bg-orange-500 text-white hover:bg-orange-600 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={decrementQuantity}
              >
                -
              </button>
              <input
                type="number"
                className="text-center w-10 border border-gray-300 focus:ring focus:ring-orange-400 rounded"
                value={quantity}
                readOnly
              />
              <button
                className="bg-orange-500 text-white hover:bg-orange-600 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div> */}
          </div>
          <div className="mt-4 flex justify-between">
            <button className="bg-fuchsia-600 transition ease-in-out  hover:bg-fuchsia-800 text-white px-2 py-2 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#ffffff" }}
                className="px-2"
              />
              Add to Cart
            </button>
            <button className="bg-fuchsia-600 transition ease-in-out  hover:bg-fuchsia-800 text-white px-4 py-2 rounded-md flex items-center">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft;
