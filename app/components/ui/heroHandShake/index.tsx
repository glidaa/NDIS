import { Stack, Typography } from "@mui/material"
import VStack from "app/components/utility/VStack"
import { ButtonNDIS } from "../buttonNDIS"
import HStack from "app/components/utility/HStack"
import { useWindowSize } from "usehooks-ts"
// import { HandShake } from "app/assets/svg/HandShake"
import HandShake from '@/assets/images/hand_shake.png'
import Image from "next/image"

interface IHeroHandShake {
  header: string
  text1: string
  text2: string
  button: {
    title: string
    link: string
  }
}

const HeroHandShake = ({ header, text1, text2, button }: IHeroHandShake) => {
  const { height = 0, width = 0 } = useWindowSize()
  const isMobile = width < 1200
  return (
    <HStack height={'100vh'} width={'100vw'} fontSize={{ desktop: '18px', mobile: '12px' }} flexDirection={{ mobile: 'column-reverse', desktop: 'row' }}>
      <VStack gap={'32px'} width={'45%'} alignItems={{ desktop: 'flex-start', mobile: 'center' }} textAlign={{ desktop: 'start', mobile: 'center' }}>
        <Typography fontWeight={700} color={'#056FD9'} fontSize={'2em'}>
          {header}
        </Typography>
        <Typography color={'#056FD9'} fontSize={'1.125em'}>
          {text1}
        </Typography>
        <Typography color={'#056FD9'} fontSize={'1em'}>
          {text2}
        </Typography>
        <Stack width={'100%'} alignItems={{ desktop: 'flex-start', mobile: 'center' }}>
          <ButtonNDIS sx={{ width: '268px', height: '72px' }} variant="blue" label={button.title} onClick={() => window.open(button.link)} />
        </Stack>
      </VStack>

      {!isMobile && (
        <Stack marginLeft={{ desktop: '10%', mobile: null }} height={{ desktop: '100%', mobile: 'auto' }} width={{ desktop: 'auto', mobile: '100%' }}>
          <Image
            src={HandShake}
            objectFit="contain"
            alt="hand shake"
          />
        </Stack>
      )}
    </HStack>
  )
}

export { HeroHandShake, type IHeroHandShake }