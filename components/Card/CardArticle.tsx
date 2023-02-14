import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import ButtonSubmit from "../Button/Submit";
import Image from "../Image";

interface Props {
  image?: string;
  title: string;
  description: string;
  path: string;
}

const CardArticle: NextPage<Props> = (props) => {
  return (
    <div className="container grid grid-cols-1 grid-rows-2 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 w-full h-full transition ease-in-out delay-150 max-w-md">
      <div className="w-full relative flex">
        <Link href={`/article/${props.path}`}>
          <Image
            src={props.image ?? ""}
            alt={props.title}
            style={{
              objectFit: "cover",
            }}
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between py-2">
        <div>
          <Link href={`/course/${props.path}`}>
            <span className="text-base font-bold dark:text-white px-2">{props.title}</span>
          </Link>
          <Link href={`/course/${props.path}`}>
            <p className="font-light  text-xs text-gray-500 dark:text-gray-400 line-clamp-6 align-baseline indent-5 px-2">
              {props.description}
            </p>
          </Link>
        </div>
        <div className="w-1/4 h-1/6 px-2">
          <ButtonSubmit
            label={"อ่านต่อ"}
            type={"button"}
            className={"bg-white text-xs text-unisun-purple border-unisun-purple border"}
          />
        </div>
      </div>
    </div>
  );
};

export default CardArticle;
