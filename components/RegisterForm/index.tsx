import React, { HTMLAttributes } from "react";
import { NextPage } from "next";
import Icon, { PropsSVG } from "../svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema, FormData } from "../../yups/register";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("../Input/Select"), { ssr: false });
const InputDatePicker = dynamic(() => import("../Input/DatePicker"), { ssr: false });
const Input = dynamic(() => import("../Input/Input"), { ssr: false });
const AuthenSocial = dynamic(() => import("./social"), { ssr: false });

const initSVG: PropsSVG = {
  className: "w-5 h-5 text-gray-500 dark:text-gray-400",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  ariaHidden: "true",
};

const optionAttribute = (id: string) => {
  const result: HTMLAttributes<HTMLInputElement> = {
    className:
      "bg-gray-50 font-[Montserrat] border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    id: id,
  };
  return result;
};

const optionAttributeSelect = (id: string) => {
  const result: HTMLAttributes<HTMLSelectElement> = {
    className:
      "bg-gray-50 font-[Montserrat] border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none",
    id: id,
  };
  return result;
};

interface Props {
  onSubmit: (registerValue: FormData) => Promise<void>;
}

const optionSelect: { value: string; label: string }[] = [
  { value: "default", label: "GENDER" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const RegisterForm: NextPage<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  return (
    <div className="basis-11/12 sm:basis-1/2 flex flex-col text-center justify-center items-center space-y-4">
      <a href="http://localhost:3000/" className="flex items-center relative h-16 w-full">
        <div className="h-full bg-LogoUnisun-removebg-preview bg-contain bg-no-repeat bg-center w-full" />
      </a>
      <p className="suptitle">
        Use the form below to create your account
        <style jsx>{`
          .suptitle {
            font: normal normal normal 16px/19px Montserrat;
            letter-spacing: 0px;
            color: #7b7b7b;
            opacity: 1;
          }
        `}</style>
      </p>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <Input
            icon={<Icon.Account {...initSVG} />}
            HTMLAttributes={optionAttribute("name")}
            InputHTMLAttributes={{
              type: "text",
              placeholder: "NAME",
            }}
            register={register}
            label={"name"}
            errors={errors}
          />
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
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:gap-3 w-full">
            <InputDatePicker
              label={"brithday"}
              icon={<Icon.Calendar {...initSVG} />}
              register={register}
              placeholderText="BRITHDAY"
              className="bg-gray-50 font-[Montserrat] border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <Select
              label={"gender"}
              icon={<Icon.Sex {...initSVG} />}
              HTMLAttributes={{
                ...optionAttributeSelect("gender"),
                style: {
                  width: "100%",
                  height: "100%",
                  color: "gray",
                },
              }}
              SelectHTMLAttributes={{
                placeholder: "GENDER",
              }}
              register={register}
              option={optionSelect}
            />
          </div>
          <Input
            icon={<Icon.Telephone {...initSVG} />}
            HTMLAttributes={optionAttribute("telephone")}
            InputHTMLAttributes={{
              placeholder: "TELEPHONE",
            }}
            register={register}
            label={"telephone"}
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
          <Input
            icon={<Icon.Key {...initSVG} />}
            showPassword
            HTMLAttributes={optionAttribute("confirm_password")}
            InputHTMLAttributes={{
              type: "password",
              placeholder: "CONFIRM PASSWORD",
            }}
            register={register}
            label={"confirm_password"}
            errors={errors}
          />
          <div className="flex items-center mb-4 justify-center">
            <Input
              HTMLAttributes={{
                id: "accept_consent",
                className:
                  "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
              }}
              InputHTMLAttributes={{
                type: "checkbox",
              }}
              HTMLAttributesMain={{
                className: "w-auto flex items-center object-center",
              }}
              register={register}
              label={"accept_consent"}
              errors={errors}
            >
              <label
                htmlFor="accept_consent"
                className="ml-2 text-sm text-gray-900 dark:text-gray-300 font-[Montserrat]"
              >
                I have reed the{" "}
                <a href="www.google.com/" className="text-orange-300 pl-2 font-[Montserrat]">
                  agreement
                </a>
              </label>
            </Input>
          </div>
          <div className="flex items-center mb-4 justify-center">
            <button
              type="submit"
              className="text-white font-[Montserrat] bg-purple-900 hover:bg-purple-500  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-900 dark:hover:bg-purple-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
          </div>
        </form>
        <div className="inline-flex items-center justify-center w-full h-5">
          <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 text-gray-900 bg-white dark:text-white dark:bg-gray-900 font-[Montserrat]">
            or
          </span>
        </div>
        <span className="text-gray-400 text-xs font-[Montserrat]">Sign up with social media</span>
        <div className="mt-6">
          <AuthenSocial />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
