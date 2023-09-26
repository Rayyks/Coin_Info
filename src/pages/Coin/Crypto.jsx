import React, { useEffect } from "react";
import { useCoin } from "../../context/CryptoContext";
import ReactPaginate from "react-paginate";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Crypto = () => {
  const {
    data,
    searchQuery,
    setSearchQuery,
    pageNumber,
    setPageNumber,
    filterOption,
    setFilterOption,
    isLoading,
  } = useCoin();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const itemsPerPage = 10;
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Calculate the slice range for displaying coins
  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = data.slice(startIndex, endIndex);

  // Search Query
  const filteredData = slicedData.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleFilterChange = (option) => {
    setFilterOption(option);
  };

  // Sort FilteredData
  if (filterOption === "highest") {
    filteredData.sort((a, b) => b.price - a.price);
  } else if (filterOption === "lowest") {
    filteredData.sort((a, b) => a.price - b.price);
  }

  return (
    <div className="flex flex-col bg-mainBg">
      <div className="overflow-x-auto">
        <div className="flex flex-col md:flex-row justify-between py-3 pl-2">
          <div className="relative max-w-md mb-4 md:mb-0">
            <label htmlFor="hs-table-search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              name="hs-table-search"
              id="hs-table-search"
              className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              placeholder="Search..."
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                className="h-3.5 w-3.5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
          <div className="relative mb-4 md:mb-0">
            <button
              className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1"
              onClick={() => handleFilterChange("highest")}
            >
              <span className="relative inline-flex items-center px-3 py-2 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md md:py-2">
                Highest
              </span>
            </button>
            <button
              className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 ml-2"
              onClick={() => handleFilterChange("lowest")}
            >
              <span className="relative inline-flex items-center px-3 py-2 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md md:py-2">
                Lowest
              </span>
            </button>
          </div>
        </div>

        <div className="p-1.5 w-full inline-block align-middle overflow-x-auto overflow-y-auto">
          {/* Table */}

          <table className="min-w-full divide-y divide-purple-800">
            <thead className=" bg-zinc-800">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xl font-bold text-left text-white uppercase"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xl font-bold text-left text-white uppercase"
                >
                  Action
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xl font-bold text-left text-white uppercase"
                >
                  Coin
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xl font-bold text-left text-white uppercase"
                >
                  1 hour
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xl font-bold text-left text-white uppercase"
                >
                  1 day
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xl font-bold text-left text-white uppercase"
                >
                  1 week
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xl font-bold text-right text-white uppercase"
                >
                  Price (USD)
                </th>
              </tr>
            </thead>

            <tbody className="min-w-full divide-y divide-purple-800">
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                {isLoading
                  ? Array.from({ length: 12 }).map((_, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Skeleton height={40} width={40} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Skeleton height={24} width={100} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Skeleton height={24} width={60} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Skeleton height={24} width={60} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Skeleton height={24} width={60} />
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <Skeleton height={24} width={80} />
                        </td>
                      </tr>
                    ))
                  : filteredData.map((coin) => (
                      <tr key={coin.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Tippy
                            content={coin.name}
                            placement="top"
                            arrow={false}
                          >
                            <img
                              src={coin.icon}
                              alt={`${coin.name} icon`}
                              className="w-8 h-8"
                            />
                          </Tippy>
                        </td>
                        <td className="px-6 py-4 text-lg font-semibold text-white whitespace-nowrap">
                          <Link to={`/coin/${coin.id}`}>
                            <button
                              type="button"
                              className="py-1 px-4 font-raj font-semibold text-lg text-slate-300 border-2 border-btnBorder rounded-xl hover:border-btnHover shadow-btnHover shadow-3xl focus:outline-btnHover "
                            >
                              Coin Detail
                            </button>
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-lg font-semibold text-white whitespace-nowrap">
                          {coin.symbol}
                        </td>
                        <td className="px-6 py-4 text-lg font-semibold text-white whitespace-nowrap">
                          {currencyFormatter.format(coin.priceChange1d)}
                        </td>
                        <td className="px-6 py-4 text-lg font-semibold text-white whitespace-nowrap">
                          {currencyFormatter.format(coin.priceChange1h)}
                        </td>
                        <td className="px-6 py-4 text-lg font-semibold text-white whitespace-nowrap">
                          {currencyFormatter.format(coin.priceChange1w)}
                        </td>
                        <td className="px-6 py-4 text-lg font-semibold text-right text-white whitespace-nowrap">
                          {currencyFormatter.format(coin.price)}
                        </td>
                      </tr>
                    ))}
              </SkeletonTheme>
            </tbody>
          </table>
        </div>
      </div>
      <ReactPaginate
        previousLabel={<span>&#9664; Prev</span>}
        nextLabel={<span>Next &#9654;</span>}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination flex justify-center mt-4"}
        pageLinkClassName={"pagination__link"}
        previousLinkClassName={"pagination__link pagination__link--prev"}
        nextLinkClassName={"pagination__link pagination__link--next"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
};

export default Crypto;
