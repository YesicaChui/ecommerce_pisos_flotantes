import React from 'react'

export const MiInput = ({ ...props }) => {
  return (
    <input
      className="border border-gray-300 w-full px-3 py-2 mb-4 rounded-md focus:outline-none focus:ring-1"
      {...props} // Propagación de props adicionales al input
    />
  );
};
