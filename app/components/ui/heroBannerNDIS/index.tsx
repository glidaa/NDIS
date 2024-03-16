import { Button, Stack, Typography } from "@mui/material"

interface IHeroBannerNDIS {
  title: string
  text: string
  buttonText: string
  variant: 'white' | 'blue'
}

const HeroBannerNDIS = ({ title, text, buttonText, variant }: IHeroBannerNDIS) => {
  return (
    <Stack
      direction={'column'}
      justifyContent={'space-between'}
      px={'16px'}
      py={'32px'}
      height={'290px'}
      gap={'16px'}
      sx={{
        backgroundColor: variant === 'white' ? '#FFFFF' : '#056FD9',
        color: variant === 'white' ? '#22272B' : '#FFFFFF'
      }}
    >
      <Typography fontSize={'36px'} fontWeight={600}>
        Helping you deliver great government services
      </Typography>

      <Typography fontSize={'18px'} width={'66%'} minWidth={'343px'}>
        Find the building blocks for creating user-centred digital services,
        as well as policy, tools and guidance
      </Typography>

      <Button
        sx={{
          width: '269px',
          height: '48px',
          fontSize: '16px',
          fontWeight: 600,
        }}
        variant={variant === 'white' ? 'ndis' : 'black'}
      >
        View Digital Service Toolkit
      </Button>
    </Stack >
  )
}

export { HeroBannerNDIS, IHeroBannerNDIS }