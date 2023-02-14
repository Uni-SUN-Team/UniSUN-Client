import { NextPage } from "next";
import React, { HTMLAttributes, InputHTMLAttributes, useState } from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { Eye, EyeSlash } from "../svg/index";
import { FormData } from "../../yups/register";
import Icon, { PropsSVG } from "../svg";

type InputProps = {
  label: Path<FormData>;
  register: UseFormRegister<FormData>;
  icon?: JSX.Element;
  iconHTMLAttributes?: HTMLAttributes<HTMLInputElement>;
  InputHTMLAttributes?: InputHTMLAttributes<HTMLInputElement>;
  HTMLAttributes?: HTMLAttributes<HTMLInputElement>;
  showPassword?: boolean;
  HTMLAttributesMain?: HTMLAttributes<HTMLInputElement>;
  errors: FieldErrors<FormData>;
  children?: React.ReactNode;
};

const initSVG: PropsSVG = {
  className: "w-5 h-5 text-gray-500 dark:text-gray-400",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  ariaHidden: "true",
};

const Input: NextPage<InputProps> = ({
  label,
  register,
  icon,
  iconHTMLAttributes,
  InputHTMLAttributes,
  HTMLAttributes,
  showPassword,
  HTMLAttributesMain,
  errors,
  children,
}) => {
  const [isSwitch, setIsSwitch] = useState<boolean>(false);
  const message = errors && errors[`${label}`]?.message?.valueOf().toString();
  return (
    <div className="flex flex-col">
      <div className={`${HTMLAttributesMain ? HTMLAttributesMain.className : "relative w-full"}`}>
        {icon && (
          <div
            {...iconHTMLAttributes}
            className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${iconHTMLAttributes?.className}`}
          >
            {icon}
          </div>
        )}
        <input
          {...HTMLAttributes}
          {...InputHTMLAttributes}
          type={isSwitch ? "text" : InputHTMLAttributes?.type}
          {...register(label)}
        />
        {children}
        {showPassword && (
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={() => {
              setIsSwitch(!isSwitch);
            }}
            {...iconHTMLAttributes}
          >
            {isSwitch ? <Icon.Eye {...initSVG} /> : <Icon.EyeSlash {...initSVG} />}
          </div>
        )}
      </div>
      <p className="text-xs text-red-500">{message}</p>
    </div>
  );
};

export default Input;
