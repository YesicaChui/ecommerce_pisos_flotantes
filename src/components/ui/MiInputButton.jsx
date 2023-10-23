import React from 'react'

export const MiInputButton = ({ type, value,myStyles,onClick}) => {
  return (
    <input
    onClick={onClick}
    type={type}
    className={`bg-blue-500 py-2 text-white rounded-md cursor-pointer ${myStyles}`}
    value={value} 
    role="button"
  />
  )
}