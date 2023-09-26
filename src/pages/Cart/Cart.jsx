import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import ConfirmationDialog from "../../utils/ConfirmationDialog";

const Cart = () => {
  const { cartItem, removeOneFromCart, removeAllFromCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Calculate the total price
  const total = cartItem.reduce((acc, item) => acc + item.totalPrice, 0);

  const handleRemoveAllItems = (item) => {
    setShowConfirmation(true);
    setSelectedItem(item); // Store the selected item
  };

  const confirmRemoveAllItems = () => {
    removeAllFromCart(selectedItem.id); // Use the selected item here
    toast.success("All items have been removed from your cart.");
    setShowConfirmation(false);
  };

  return (
    <div>
      {cartItem.length > 0 ? (
        <div>
          {cartItem.map((item) => (
            <div key={item.id}>
              <img src={item.imageUrl} alt={item.title} />
              <h1>{item.title}</h1>
              <h3>{item.description}</h3>
              <p>Total Price: ${item.totalPrice}</p>
              <button onClick={() => handleRemoveAllItems(item)}>
                Remove all item's
              </button>
              <button
                onClick={() => {
                  removeOneFromCart(item.id);
                  toast.success(
                    `${item.title} has been removed from your cart.`
                  );
                }}
              >
                Remove From Cart
              </button>
              <p>{item.quantity}</p>
            </div>
          ))}
          {total > 1000 && (
            <div>
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
