'use client';
import { createTheme } from '@mui/material/styles';
import { roboto } from './assets/fonts/roboto';

declare module '@mui/material/Button/Button' {
  interface ButtonPropsVariantOverrides {
    'ndis',
    'ndis-outlined',
    'black'
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    desktop: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      desktop: 1200,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'ndis' },
          style: {
            color: '#FFFFFF',
            backgroundColor: '#056FD9',
            fontWeight: 600,
            ":hover": {
              backgroundColor: '#055cb3'
            },
            ":disabled": {
              color: '#FFFFFF',
              backgroundColor: '#056FD9',
              fontWeight: 600,
              opacity: '62%'
            }
          }
        },
        {
          props: { variant: 'ndis-outlined' },
          style: {
            color: '#056FD9',
            border: '2px solid #056FD9',
            backgroundColor: '#FFFFFF',
            fontWeight: 600,
            ":hover": {
              backgroundColor: '#FFFFFF'
            },
            ":disabled": {
              opacity: '80%',
              color: '#056FD9'
            }
          }
        },
        {
          props: { variant: 'black' },
          style: {
            color: '#22272B',
            backgroundColor: '#FFFFFF',
            fontWeight: 600,
            ":disabled": {
              opacity: '80%',
              color: '#22272B'
            },
            ":hover": {
              backgroundColor: '#FFFFFF'
            },
          }
        }
      ]
    },
    MuiLink: {
      defaultProps: {
        color: '#FFFFFF',
        fontSize: '12px'
      },
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'pointer'
          }
        }
      }
    }
  }
});

export default theme;
