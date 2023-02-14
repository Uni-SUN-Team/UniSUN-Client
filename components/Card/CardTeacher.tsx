import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import ButtonSubmit from "../Button/Submit";
import Image from "../Image";

interface Props {
  image?: string;
  title: string;
  role: string;
  path: string;
}

const CardTeacher: NextPage<Props> = (props) => {
  return (
    <div className="container grid grid-cols-1 grid-rows-3 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 w-full h-full transition ease-in-out delay-150 max-w-md">
      <Link
        href={`/article/${props.path}`}
        className="w-full flex justify-center row-span-2 relative pt-12 px-5"
      >
        <div className="bg-[#DDE1FE] rounded-2xl w-full h-full z-0">
          <Image src={props.image ?? ""} alt={props.title} className={"z-10"} />
        </div>
      </Link>
      <div className="flex flex-col py-2 px-5 space-y-3">
        <div>
          <Link href={`/course/${props.path}`}>
            {/* <p className="font-light  text-xs text-gray-500 dark:text-gray-400 line-clamp-6 align-baseline indent-5 px-2">
              {props.role}
            </p> */}
            <span>
              <h1 className="truncate font-bold text-2xl">{props.title}</h1>
              <p className="text-base truncate">{props.role}</p>
            </span>
          </Link>
        </div>
        <div className="w-1/3 h-1/4">
          <ButtonSubmit
            label={"ดูเพิ่มเติม"}
            type={"button"}
            className={
              "bg-white text-base font-bold text-unisun-purple border-unisun-purple border"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CardTeacher;
