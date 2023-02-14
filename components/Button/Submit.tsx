import { NextPage } from "next";
import React, { DOMAttributes } from "react";

interface Props extends DOMAttributes<HTMLButtonElement> {
  label: string;
  type: "submit" | "reset" | "button";
  className?: string;
}

const ButtonSubmit: NextPage<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-center w-full h-full ${props.className}`}
    >
      {props.label}
    </button>
  );
};

export default ButtonSubmit;
