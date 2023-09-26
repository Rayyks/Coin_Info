import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import ConfirmationDialog from "../../utils/ConfirmationDialog";
import "./Cart.css";

const Cart = () => {
  const {
    cartItem,
    addToCart,
    removeOneFromCart,
    removeAllItem,
    removeAllFromChart,
  } = useCart();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Calculate the total price
  const total = cartItem.reduce((acc, item) => acc + item.totalPrice, 0);

  const handleRemoveAllItem = (item) => {
    setShowConfirmation(true);
    setSelectedItem(item); // Store the selected item
  };

  const confirmRemoveAllItems = () => {
    removeAllItem(selectedItem.id); // Use the selected item here
    toast.success("All items have been removed from your cart.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setShowConfirmation(false);
  };

  return (
    <div className="cart-container">
      {cartItem.length > 0 ? (
        <div>
          {cartItem.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="item-image"
              />
              <div className="item-details">
                <h1 className="item-title">{item.title}</h1>
                <h3 className="item-description">{item.description}</h3>
                <p className="item-price">Total Price: ${item.totalPrice}</p>
              </div>
              <div className="item-actions">
                <button
                  className="remove-all-button"
                  onClick={() => handleRemoveAllItem(item)}
                >
                  Remove From Cart
                </button>
                <button
                  className="remove-one-button"
                  onClick={() => {
                    removeOneFromCart(item.id);
                    toast.success(
                      `${item.title} has been removed from your cart.`,
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
                  }}
                >
                  Remove Item
                </button>
              </div>
              <p className="item-quantity">Quantity: {item.quantity}</p>
            </div>
          ))}
          {total > 1000 && (
            <div className="total-price-warning">
              <p>
                Your total price is ${total}, please don't spend too much money
                on NFTs :)
              </p>
            </div>
          )}
        </div>
      ) : (
        <h1>Your Cart Is Empty</h1>
      )}

      {showConfirmation && (
        <ConfirmationDialog
          message="Are you sure you want to remove all items from your cart?"
          onConfirm={confirmRemoveAllItems}
        />
      )}
    </div>
  );
};

export default Cart;
