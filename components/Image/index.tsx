import { NextPage } from "next";
import React, { DOMAttributes } from "react";
import Image from "next/image";

interface Props extends DOMAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  alt: string;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
  fill?: boolean;
  priority?: boolean;
}

const _Image: NextPage<Props> = ({
  className,
  src,
  alt,
  style,
  loading,
  fill,
  priority,
  onClick,
}) => {
  return (
    <Image
      className={`${className ?? "w-full h-full"}`}
      src={src}
      alt={alt ?? src}
      fill={fill ?? true}
      loading={priority ? undefined : loading ?? "lazy"}
      style={
        style ?? {
          objectFit: "contain",
        }
      }
      priority={priority}
      onClick={onClick}
    />
  );
};

export default _Image;
