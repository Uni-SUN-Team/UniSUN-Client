import { yupResolver } from "@hookform/resolvers/yup";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { formSchema, FormData } from "../../yups/search";
import Icon, { PropsSVG } from "../svg";

interface Props {
  onSubmit: (data: FormData) => Promise<void>;
}

const initSVGevenodd: PropsSVG = {
  className: "w-5 h-5 text-gray-500 dark:text-gray-400",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  ariaHidden: "true",
};

const initSVGround: PropsSVG = {
  className: "w-6 h-6",
  fill: "none",
  viewBox: "0 0 20 20",
  ariaHidden: "true",
};

const InputSearch: NextPage<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon.SearchEvenodd {...initSVGevenodd} />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
          {...register("value")}
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-unisun-purple rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <Icon.SearchRound {...initSVGround} />
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default InputSearch;
