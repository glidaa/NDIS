import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { DefaultRootProps } from "@measured/puck";
import { ReactNode } from "react";
import { Footer } from "./footer";
import { MastHead } from "./masthead";
import { ThemeProvider } from '@mui/material';
import theme from 'app/theme';
export type RootProps = {
  children: ReactNode;
  title: string;
} & DefaultRootProps;

function Root({ children, editMode }: RootProps) {
  return (
    <>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
}

export default Root;
