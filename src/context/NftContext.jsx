import { useState, createContext, useEffect, useReducer } from "react";
import enefte from "../../assets/Backend/nfts.js";

export const NftContext = createContext();

const NftProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData(enefte);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <NftContext.Provider
      value={{
        data,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </NftContext.Provider>
  );
};

export default NftProvider;
