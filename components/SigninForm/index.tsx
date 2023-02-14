import { NextPage } from "next";
import React, { HTMLAttributes, useEffect } from "react";
import { FormData, formSchema } from "../../yups/signin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Icon, { PropsSVG } from "../svg/index";
import dynamic from "next/dynamic";

const Input = dynamic(() => import("../Input/Input"), { ssr: false });

const optionAttribute = (id: string) => {
  const result: HTMLAttributes<HTMLInputElement> = {
    className:
      "bg-gray-50 font-[Montserrat] border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    id: id,
  };
  return result;
};

interface Props {
  onSubmit: (value: FormData) => Promise<void>;
}

const initSVG: PropsSVG = {
  className: "w-5 h-5 text-gray-500 dark:text-gray-400",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  ariaHidden: "true",
};

const SigninForm: NextPage<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
      <Input
        icon={<Icon.Email {...initSVG} />}
        HTMLAttributes={optionAttribute("email")}
        InputHTMLAttributes={{
          type: "email",
          placeholder: "E-mail",
        }}
        register={register}
        label={"email"}
        errors={errors}
      />
      <Input
        icon={<Icon.Key {...initSVG} />}
        showPassword
        HTMLAttributes={optionAttribute("password")}
        InputHTMLAttributes={{
          type: "password",
          placeholder: "PASSWORD",
        }}
        register={register}
        label={"password"}
        errors={errors}
      />
      <p className="w-full text-right text-xs font-[Montserrat] text-[#7B7B7B]">
        <a href="#">Forgot password?</a>
      </p>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="text-white bg-unisun-purple hover:bg-purple-900  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-10 py-2 text-center dark:bg-purple-900 dark:hover:bg-purple-700 dark:focus:ring-blue-800"
        >
          LOG IN
        </button>
      </div>
    </form>
  );
};

export default SigninForm;
