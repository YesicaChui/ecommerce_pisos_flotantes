import React from 'react'

export const MiInputButton = ({ type, value,myStyles,onClick}) => {
  return (
    <input
    onClick={onClick}
    type={type}
    className={`bg-blue-500 w-full py-2 text-white rounded-md cursor-pointer ${myStyles}`}
    value={value} // Propagación de props adicionales al input
  />
  )
}