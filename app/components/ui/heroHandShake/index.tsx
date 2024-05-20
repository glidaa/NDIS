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
  return (
    <HStack height={'100%'} width={'100vw'} fontSize={{ md: '16px', lg: '24px', xl: '32px' }} >
      <VStack ml={width > 900 ? '10%' : null} gap={'32px'} width={width > 900 ? '45%' : '60%'} alignItems={'flex-start'}>
        <Typography fontWeight={700} color={'#056FD9'} fontSize={'2em'}>
          {header}
        </Typography>
        <Typography color={'#056FD9'} fontSize={'1.125em'}>
          {text1}
        </Typography>
        <Typography color={'#056FD9'} fontSize={'1em'}>
          {text2}
        </Typography>
        <Stack width={'100%'}>
          <ButtonNDIS sx={{ width: '268px', height: '72px' }} variant="blue" label={button.title} onClick={() => window.open(button.link)} />
        </Stack>
      </VStack>

      <Stack height={'100%'} marginLeft={'10%'} sx={{ flex: 1 }}>
        <Image
          src={HandShake}
          layout="fill"
          objectFit="contain"
          alt="Hand Shake"
        />
      </Stack>
    </HStack>
  )
}

export { HeroHandShake, type IHeroHandShake }