import { Stack, Typography } from "@mui/material"
import { ComponentConfig } from "@measured/puck"
import Image from "next/image"
import Bridge from '@/assets/images/bridge.png'

interface IHeroBridge {
  text: string
}

const HeroBridge = ({ text }: IHeroBridge) => {
  return (
    <Stack flexDirection={{ desktop: 'row', mobile: 'column' }} justifyContent={'center'} alignItems={'center'} bgcolor={'#056FD9'} width={'100vw'} height={{ desktop: '50vh', mobile: '100vh' }}>
      <Typography fontWeight={700} fontSize={{ desktop: '42px', mobile: '32px' }} color={'#FFFFFF'} width={{ desktop: '50%', mobile: '80%' }} p={'5%'}>
        {text}
      </Typography>

      <Stack
        flexGrow={1}
        display="flex"
        alignItems={{ desktop: 'flex-end', mobile: 'center' }}
        sx={{ height: { desktop: '100%', mobile: '50vh' }, width: { desktop: '50%', mobile: '100%' } }}
      >
        <Image
          src={Bridge}
          alt="Bridge image"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </Stack>
    </Stack >
  )
}

const HeroBridgePuck: ComponentConfig<IHeroBridge> = {
  render: (props) => <HeroBridge {...props} />,
  fields: {
    text: { type: 'text' }
  },
  defaultProps: {
    text: 'Your Gov bridges the gap between Australians and their government, fostering direct dialogue and collaboration for better government.'
  }
}

export { type IHeroBridge, HeroBridgePuck, HeroBridge }