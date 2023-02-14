import { NextPage } from "next";
import React from "react";
import Icon, { Booleanish } from "../svg";

interface Props {
  initial: {
    className?: string | undefined;
    fill?: string | undefined;
    viewBox?: string | undefined;
    "aria-hidden"?: Booleanish | undefined;
    stroke?: string | undefined;
  };
}

const SocialFooter: NextPage<Props> = ({ initial }) => {
  return (
    <>
      <Icon.Facebook {...initial} />
      <Icon.Line {...initial} />
    </>
  );
};

export default SocialFooter;
