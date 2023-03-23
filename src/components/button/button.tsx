import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  return (
    <button className="p-2 rounded bg-blue-500 hover:bg-blue-600 transition">
      {props.children}
    </button>
  );
};
