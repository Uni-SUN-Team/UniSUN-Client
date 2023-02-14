import { NextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import Image from "../Image";
import { UserIcon, ClockIcon } from "@heroicons/react/24/outline";
import currencyFormatter from "currency-formatter";
import ButtonSubmit from "../Button/Submit";

const Rate = dynamic(() => import("../Rating"), { ssr: false });

interface Props {
  image?: string;
  rate: 1 | 2 | 3 | 4 | 5;
  title: string;
  description: string;
  price: number;
  specialPrice?: number;
  path: string;
  teacher: {
    image: string;
    name: string;
    role: string;
    path: string;
  };
  studyNumber: number;
  time: number;
  view: number;
}

const Card: NextPage<Props> = (props) => {
  return (
    <div className="container grid grid-cols-1 grid-rows-2 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 w-full h-full transition ease-in-out delay-150 max-w-md">
      <div className="w-full relative flex">
        <Link href={`/course/${props.path}`}>
          <Image
            src={props.image ?? ""}
            alt={props.title}
            style={{
              objectFit: "cover",
            }}
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between">
        <div className="py-2 flex flex-col justify-between h-4/5">
          <div className="w-full flex items-center px-2 space-x-3">
            <Rate rate={props.rate} />
            <span className="text-[10px] text-gray-500">{`(${props.view} Reviews)`}</span>
          </div>
          <Link href={`/course/${props.path}`}>
            <span className="text-base font-bold dark:text-white px-2">{props.title}</span>
          </Link>
          <Link href={`/course/${props.path}`}>
            <p className="font-light  text-xs text-gray-500 dark:text-gray-400 line-clamp-2 inline-block align-top px-2 indent-8">
              {props.description}
            </p>
          </Link>
          <div className="w-full flex justify-between items-center px-2">
            <Link href={"/".concat(props.teacher.path)} className="flex flex-row space-x-2">
              <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <Image
                  className="w-8 h-8 rounded-full"
                  src={props.teacher.image}
                  alt="user photo"
                  style={{
                    objectFit: "cover",
                  }}
                  priority
                />
              </div>
              <span className="space-y-0">
                <p className="text-sm truncate font-bold">{props.teacher.name}</p>
                <p className="text-[10px] truncate font-light">{props.teacher.role}</p>
              </span>
            </Link>
            <div className="flex flex-col items-start space-y-1">
              <div className="flex justify-between items-cente space-x-1">
                <UserIcon className="h-3 text-gray-500" />
                <p className="text-[10px] truncate font-light">
                  <span className="font-bold">{props.studyNumber}</span> ผู้เข้าเรียน
                </p>
              </div>
              <div className="flex justify-between items-cente space-x-1">
                <ClockIcon className="h-3 text-gray-500" />
                <p className="text-[10px] truncate font-light">
                  <span className="font-bold">{props.time}</span> ชั่วโมง
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1/5 bg-slate-300 px-2 flex flex-row justify-between items-center">
          {props.specialPrice ? (
            <div className="flex flex-row space-x-2 items-center">
              <h2 className="flex text-lg font-bold items-center">
                {currencyFormatter.format(props.specialPrice, { code: "THB" })}
              </h2>
              <span className="line-through text-xs font-light text-gray-500">
                {currencyFormatter.format(props.price, { code: "THB" })}
              </span>
            </div>
          ) : (
            <div>
              <h2 className="flex text-lg font-bold items-center">
                {currencyFormatter.format(props.price, { code: "THB" })}
              </h2>
            </div>
          )}
          <div className="w-1/2 flex justify-center py-0 items-center h-full">
            <div className="w-1/2 h-2/3">
              <ButtonSubmit
                label={"ซื้อคอร์สนี้"}
                type={"button"}
                className={
                  "bg-unisun-purple text-xs hover:text-unisun-purple hover:border-unisun-purple hover:bg-white border"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
