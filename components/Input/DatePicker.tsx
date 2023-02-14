import React, { HTMLAttributes, useEffect, useState } from "react";
import { ChangeHandler, Path, UseFormRegister } from "react-hook-form";
import { FormData } from "../../yups/register";
// @ts-ignore
import Datepicker from "flowbite-datepicker/Datepicker";
import { handleDocumentId } from "../../config/handleDocumentId";

type InputProps = {
  label: Path<FormData>;
  register: UseFormRegister<FormData>;
  icon?: JSX.Element;
  iconHTMLAttributes?: HTMLAttributes<HTMLInputElement>;
  placeholderText?: string;
  className?: string;
  id?: string;
};

const option = {
  autoHide: true,
  defaultDate: new Date(),
  clearBtn: true,
  datepickerClassNames: "top-12",
  orientation: "bottom",
};

const InputDatePicker = ({
  label,
  register,
  icon,
  iconHTMLAttributes,
  placeholderText,
  className,
}: InputProps) => {
  useEffect(() => {
    handleDocumentId("datepickerId", option, "datepicker");
  }, []);

  return (
    <div className="relative w-full">
      {icon && (
        <div
          {...iconHTMLAttributes}
          className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10 ${iconHTMLAttributes?.className}`}
        >
          {icon}
        </div>
      )}
      <div className="relative max-w-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          id="datepickerId"
          datepicker-autohide={"true"}
          datepicker-orientation="bottom right"
          type="text"
          className={className}
          placeholder={placeholderText}
          {...register(label)}
        />
      </div>
    </div>
  );
};

export default InputDatePicker;
