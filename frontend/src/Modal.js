// src/Modal.js
import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-xl shadow-lg w-[90%] md:w-[600px] p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-white text-xl hover:text-red-400"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
