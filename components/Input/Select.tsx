import React, { HTMLAttributes, SelectHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { FormData } from "../../yups/register";

type InputProps = {
  label: Path<FormData>;
  register: UseFormRegister<FormData>;
  icon?: JSX.Element;
  iconHTMLAttributes?: HTMLAttributes<HTMLInputElement>;
  option?: { label: string; value: string }[];
  HTMLAttributes?: HTMLAttributes<HTMLSelectElement>;
  SelectHTMLAttributes?: SelectHTMLAttributes<HTMLSelectElement>;
};

const Select = ({
  label,
  register,
  icon,
  iconHTMLAttributes,
  option,
  HTMLAttributes,
  SelectHTMLAttributes,
}: InputProps) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div
          {...iconHTMLAttributes}
          className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${iconHTMLAttributes?.className}`}
        >
          {icon}
        </div>
      )}
      <select {...HTMLAttributes} {...SelectHTMLAttributes} {...register(label)}>
        {option?.map((value: { label: string; value: string }) => {
          return (
            <option key={value.value} value={value.value}>
              {value.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
