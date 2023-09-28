import React, { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  // For load the cart item
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItem(JSON.parse(savedCart));
    }
  }, []);

  // For Save the cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  // Add item to cart
  const addToCart = (item) => {
    // Check if the item with the same ID already exists in the cart
    const existingItemIndex = cartItem.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // Item already exists in the cart, update the quantity and recalculate the price
      const updatedCart = [...cartItem];
      updatedCart[existingItemIndex].quantity += 1;
      updatedCart[existingItemIndex].totalPrice =
        updatedCart[existingItemIndex].price *
        updatedCart[existingItemIndex].quantity;
      setCartItem(updatedCart);
      console.log("Item quantity updated");
    } else {
      // Item doesn't exist in the cart, add it with quantity and total price
      const newItem = { ...item, quantity: 1, totalPrice: item.price };
      setCartItem([...cartItem, newItem]);
      console.log("Item Added");
    }
  };

  const incrementQuantity = (item) => {
    // Find the index of the item in the cart
    const itemIndex = cartItem.findIndex((cartItem) => cartItem.id === item.id);

    // Create a copy of the cart and update the quantity and total price
    const updatedCart = [...cartItem];
    updatedCart[itemIndex] = {
      ...updatedCart[itemIndex],
      quantity: updatedCart[itemIndex].quantity + 1,
      totalPrice:
        updatedCart[itemIndex].price * (updatedCart[itemIndex].quantity + 1),
    };

    // Update the cart state
    setCartItem(updatedCart);
  };

  const decrementQuantity = (item) => {
    // Find the index of the item in the cart
    const itemIndex = cartItem.findIndex((cartItem) => cartItem.id === item.id);

    // Create a copy of the cart and update the quantity and total price
    const updatedCart = [...cartItem];
    if (updatedCart[itemIndex].quantity > 1) {
      updatedCart[itemIndex] = {
        ...updatedCart[itemIndex],
        quantity: updatedCart[itemIndex].quantity - 1,
        totalPrice:
          updatedCart[itemIndex].price * (updatedCart[itemIndex].quantity - 1),
      };
    }

    // Update the cart state
    setCartItem(updatedCart);
  };

  // Remove one item from cart by reducing its quantity
  const removeOneFromCart = (itemId) => {
    const existingItemIndex = cartItem.findIndex(
      (cartItem) => cartItem.id === itemId
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItem];
      if (updatedCart[existingItemIndex].quantity > 1) {
        // Reduce the quantity of the item by 1
        updatedCart[existingItemIndex].quantity -= 1;
        updatedCart[existingItemIndex].totalPrice =
          updatedCart[existingItemIndex].price *
          updatedCart[existingItemIndex].quantity;
      } else {
        // If the quantity is 1, remove the item from the cart
        updatedCart.splice(existingItemIndex, 1);
      }
      setCartItem(updatedCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        removeOneFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
