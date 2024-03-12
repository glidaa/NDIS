'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

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
        }
      ]
    }
  }
});

export default theme;
