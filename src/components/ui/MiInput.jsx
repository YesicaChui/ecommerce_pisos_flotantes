import React from 'react'

export const MiInput = ({ type, placeholder, myStyles ,onChange, value, name}) => {
  return (
    <input
      type={type}
      className={`border border-gray-300 w-full px-3 py-2 mb-4 rounded-md focus:outline-none focus:ring-1 ${myStyles}`}
      placeholder={placeholder}
      onChange={onChange}
      value={value} 
      name={name} 
    />
  );
};
