import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { NftContext } from "../context/NftContext";

const Nft = () => {
  const { data, quantity, incrementQuantity, decrementQuantity } =
    useContext(NftContext);
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
            <div className="text-2xl font-semibold text-orange-500">
              ${Enft.price}
            </div>
            <div className="flex items-center space-x-2">
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
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add to Cart
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center">
              Buy Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-1 1v8a1 1 0 001 1h5a1 1 0 100-2H10V3a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M7 2a1 1 0 00-1 1v5a1 1 0 112 0V4a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M5 4a3 3 0 113-3 3 3 0 01-3 3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft;
