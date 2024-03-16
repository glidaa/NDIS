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

const theme = createTheme({
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
            fontWeight: 600,
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
    }
  }
});

export default theme;
