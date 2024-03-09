import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
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
      <AppRouterCacheProvider>
        <MastHead />
        {children}
        <Footer />
      </AppRouterCacheProvider>
    </>
  );
}

export default Root;
