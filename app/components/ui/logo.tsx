import React from "react";
import Image, { ImageProps } from "next/image";
import LogoImage from "../../assets/images/logo.png";

export const Logo = (
  props: Omit<ImageProps, "src" | "alt">,
) => {
  return (
    <a href="#!">
      <Image src={LogoImage} alt="NDIS Logo" {...props} />
    </a>
  );
};
