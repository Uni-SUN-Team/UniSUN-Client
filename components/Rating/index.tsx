import { NextPage } from "next";
import React from "react";
import { PropsSVG, Star } from "../svg";

interface Props {
  rate?: 1 | 2 | 3 | 4 | 5;
}

const initSVGTrue: PropsSVG = {
  className: "w-4 h-4 text-yellow-400",
};

const initSVGFalse: PropsSVG = {
  className: "w-4 h-4 text-gray-300 dark:text-gray-500",
};

const Rating: NextPage<Props> = ({ rate }) => {
  const difRate = (num: number) => {
    if (rate) {
      const dif = rate - num;
      if (dif >= 0) return initSVGTrue;
      else return initSVGFalse;
    } else return initSVGFalse;
  };
  return (
    <div className="flex items-center space-x-0">
      <Star {...difRate(1)} />
      <Star {...difRate(2)} />
      <Star {...difRate(3)} />
      <Star {...difRate(4)} />
      <Star {...difRate(5)} />
    </div>
  );
};

export default Rating;
