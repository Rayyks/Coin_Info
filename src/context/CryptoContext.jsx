import React, { useState, createContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [filterOption, setFilterOption] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    useFetch(setData, setIsLoading);
  }, []);

  return (
    <CryptoContext.Provider
      value={{
        data,
        setData,
        searchQuery,
        setSearchQuery,
        pageNumber,
        setPageNumber,
        filterOption,
        setFilterOption,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoProvider;
