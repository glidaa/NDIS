import { DefaultRootProps } from "@measured/puck";
import { ReactNode } from "react";
import { Footer } from "./footer";
import { MastHead } from "./masthead";
export type RootProps = {
  children: ReactNode;
  title: string;
} & DefaultRootProps;

function Root({ children, editMode }: RootProps) {
  return (
    <>
      <MastHead />
      {children}
      <Footer />
    </>
  );
}

export default Root;
