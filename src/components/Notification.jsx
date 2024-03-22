// Notification.js
import React from 'react';

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-md shadow-md flex items-center">
      <p className="mr-4">{message}</p>
      <button className="ml-4 bg-white text-gray-800 font-semibold px-3 py-1 rounded-md" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Notification;
