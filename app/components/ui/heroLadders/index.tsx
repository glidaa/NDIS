import { Stack, Typography } from "@mui/material"
import { ComponentConfig } from "@measured/puck"
import Image from "next/image"
import Ladders from '@/assets/images/ladders.jpeg'

interface IHeroLadders {
  text: string
}

const HeroLadders = ({ text }: IHeroLadders) => {
  return (
    <Stack flexDirection={{ desktop: 'row', mobile: 'column-reverse' }} justifyContent={'center'} alignItems={'center'} width={'100vw'} height={{ desktop: '50vh', mobile: '100vh' }}>
      <Stack
        flexGrow={1}
        display="flex"
        alignItems={{ desktop: 'flex-end', mobile: 'center' }}
        sx={{ height: { desktop: '100%', mobile: '50vh' }, width: { desktop: '50%', mobile: '100%' } }}
      >
        <Image
          src={Ladders}
          alt="Person climbing ladders image"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </Stack>
      <Typography fontWeight={700} fontSize={{ desktop: '42px', mobile: '32px' }} color={'#056FD9'} width={{ desktop: '50%', mobile: '80%' }} p={'5%'}>
        {text}
      </Typography>
    </Stack >
  )
}

const HeroLaddersPuck: ComponentConfig<IHeroLadders> = {
  render: (props) => <HeroLadders {...props} />,
  fields: {
    text: { type: 'text' }
  },
  defaultProps: {
    text: 'Your Gov bridges the gap between Australians and their government, fostering direct dialogue and collaboration for better government.'
  }
}

export { type IHeroLadders, HeroLaddersPuck, HeroLadders }