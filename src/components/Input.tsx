import React from "react";

export const fieldsClassName =
  "p-2 outline-none rounded-lg bg-neutral-700 border-neutral-500 border-2 focus:border-emerald-600 transition-all duration-300 focus:shadow-md focus:shadow-emerald-900/50";

const Input = ({ type, id, placeholder, value, setState }: any) => {
  return (
    <input
      required
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setState(e.target.value);
      }}
      className={fieldsClassName}
    />
  );
};

export default Input;
