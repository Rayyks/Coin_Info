import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConfirmationDialog = ({ message, onConfirm }) => {
  const handleConfirm = () => {
    toast.dismiss(); // Close the confirmation dialog
    onConfirm();
  };

  return (
    <div className="confirmation-dialog">
      <p>{message}</p>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default ConfirmationDialog;
