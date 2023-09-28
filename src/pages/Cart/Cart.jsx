import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import "./Cart.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import emptyCart from "../../../assets/images/empty-cart.webp";

const Cart = () => {
  const { cartItem, removeOneFromCart, incrementQuantity, decrementQuantity } =
    useCart();

  // Calculate the total price
  const total = cartItem.reduce((acc, item) => {
    // Check if the price is free
    if (item.totalPrice === 0) {
      return acc;
    }
    // if not do the shik
    return acc + item.totalPrice;
  }, 0);

  return (
    <div className="bg-mainBg">
      <div className="flex flex-col md:flex-row shadow-md my-10">
        {/* Left Section - Shopping Cart */}
        <div className="w-full md:w-3/4 px-4 md:px-10 py-10">
          <div className="flex justify-between border-b pb-4 md:pb-8">
            <h1 className="font-semibold text-xl md:text-2xl text-gray-100">
              Shopping Cart
            </h1>
            <h2 className="font-semibold text-xl md:text-2xl text-gray-100">
              {cartItem.length} Items
            </h2>
          </div>
          <div className="flex flex-col md:flex-row mt-4 md:mt-10 mb-2 md:mb-5">
            <div className="w-full md:w-2/5">
              <h3 className="font-semibold text-gray-100 text-xs md:text-base uppercase">
                Product Details
              </h3>
            </div>
            <div className="flex items-center w-full md:w-1/5 justify-center">
              <h3 className="font-semibold text-center text-gray-100 text-xs md:text-base uppercase">
                Quantity
              </h3>
            </div>
            <div className="flex items-center w-full md:w-1/5 justify-center">
              <h3 className="font-semibold text-center text-gray-100 text-xs md:text-base uppercase">
                Price
              </h3>
            </div>
            <div className="flex items-center w-full md:w-1/5 justify-center">
              <h3 className="font-semibold text-center text-gray-100 text-xs md:text-base uppercase">
                Total
              </h3>
            </div>
          </div>
          {cartItem.length > 0 ? (
            cartItem.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center transition ease-in-out hover:bg-zinc-800 -mx-2 md:-mx-8 px-4 md:px-6 py-4 md:py-5"
              >
                <Link to={`/nft/${item.id}`}>
                  <div className="w-full md:w-2/5 flex items-center mb-2 md:mb-0">
                    {/* product */}
                    <div className="w-16 md:w-20 mr-2 md:mr-4">
                      <img
                        className="w-auto md:w-80 lg:w-96"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <span className="font-bold text-sm md:text-base text-gray-100">
                        {item.title}
                      </span>
                      <span className="text-red-500 text-xs md:text-sm text-gray-100">
                        {item.vendor}
                      </span>
                    </div>
                  </div>
                </Link>
                <button
                  onClick={() => {
                    removeOneFromCart(item.id);
                    toast.success(`${item.title} removed from cart`, {
                      position: "bottom-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    });
                  }}
                  className="flex mx-auto z-10 mt-12 py-1 px-4 font-raj  mb-10 font-semibold text-lg text-slate-300 border-2 border-btnBorder rounded-xl hover:border-btnHover shadow-btnHover shadow-3xl focus:outline-btnHover "
                >
                  Remove
                </button>
                <div className="flex items-center w-full md:w-1/5 justify-center">
                  <button
                    className="quantity-button"
                    onClick={() => decrementQuantity(item)}
                  >
                    <FontAwesomeIcon
                      icon={faMinus}
                      style={{ color: "#ffffff" }}
                    />
                  </button>
                  <p className="mx-2 border text-center w-6 md:w-8 text-gray-100">
                    {item.quantity}
                  </p>
                  <button
                    className="quantity-button"
                    onClick={() => incrementQuantity(item)}
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ color: "#ffffff" }}
                    />
                  </button>
                </div>
                <span className="text-center w-full md:w-1/5 font-semibold text-xs md:text-base text-gray-100">
                  ${item.totalPrice.toFixed(2)}
                </span>
                <span className="text-center w-full md:w-1/5 font-semibold text-xs md:text-base text-gray-100">
                  ${item.totalPrice.toFixed(2)}
                </span>
              </div>
            ))
          ) : (
            <div className="px-10 sm:px-40 py-14 sm:py-20 rounded-md">
              <div className="flex flex-col items-center">
                <img
                  src={emptyCart} // Make sure to provide the correct image source here
                  alt="Empty Cart"
                  className="font-rubik text-logo-gradient text-9xl w-auto md:w-80 lg:w-96 animate-fade-in-upont-rubik text-logo-gradient text-9xl animate-fade-in-up"
                />

                <div className="animate-fade-in-down">
                  <h6 className="mb-2 text-xl font-bold text-center text-slate-300 md:text-3xl">
                    <span className="text-red-500">Gyat!</span> Your Cart Is
                    Empty
                  </h6>

                  <p className="mb-8 text-center text-textBg md:text-lg">
                    Please add some items to your cart.
                  </p>
                </div>
                <Link
                  to="/nfts"
                  className="flex mx-auto mt-12 py-1 px-4 mb-10 font-semibold text-center text-lg text-slate-300 border-2 border-btnBorder rounded-xl hover:border-btnHover shadow-btnHover shadow-2xl focus:outline-btnHover animate-fade-in-down"
                >
                  Shop
                </Link>
              </div>
            </div>
          )}
          {total > 1000 && (
            <div className="total-price-warning mt-2 md:mt-4">
              <p className="text-center ">
                Your total price is above [$1000] which mean u spend $
                {total.toFixed(2)}, please don't spend too much money on NFTs.
                You have a lot of things to do...
              </p>
            </div>
          )}
          <Link
            to="/nfts"
            className="flex font-semibold text-purple-600 text-sm md:text-base mt-4 md:mt-10"
          >
            <svg
              className="fill-current mr-2 md:mr-4 text-purple-600 w-3 md:w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        {/* Right Section - Order Summary */}
        <div id="summary" className="w-full md:w-1/4 px-4 md:px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-4 md:pb-8 text-gray-100">
            Order Summary
          </h1>
          <div className="flex justify-between mt-4 md:mt-10 mb-2 md:mb-5">
            <span className="font-semibold text-sm md:text-base uppercase text-gray-100">
              Items {cartItem.length}
            </span>
            <span className="font-semibold text-sm md:text-base text-gray-100">
              ${total.toFixed(2)}
            </span>
          </div>

          <div className="border-t mt-4 md:mt-8">
            <div className="flex font-semibold justify-between py-2 md:py-6 text-xs md:text-sm uppercase text-gray-100">
              <span>Total cost</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-2 md:py-3 text-xs md:text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
