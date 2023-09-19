import React, { useState } from "react";

const Nft = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h3>{inputValue}</h3>
      <input type="text" onChange={handleInputValue} />
    </div>
  );
};

export default Nft;
