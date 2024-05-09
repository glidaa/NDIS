import { Stack, Typography } from "@mui/material"
import VStack from "app/components/utility/VStack"
import { ButtonNDIS } from "../buttonNDIS"
import HStack from "app/components/utility/HStack"
import { useWindowSize } from "usehooks-ts"
// import { HandShake } from "app/assets/svg/HandShake"
import HandShake from '@/assets/images/hand_shake.png'
import Image from "next/image"

interface IHeroTwo {
  header: string
  text1: string
  text2: string
  button: {
    title: string
    link: string
  }
}

const HeroTwo = ({ header, text1, text2, button }: IHeroTwo) => {
  const { height = 0 } = useWindowSize()
  return (
    <HStack height={'100vh'} width={'100vw'}>
      <VStack gap={'32px'} width={'45%'} alignItems={'flex-start'}>
        <Typography fontWeight={700} color={'#056FD9'} fontSize={'64px'}>
          {header}
        </Typography>
        <Typography color={'#056FD9'} fontSize={'36px'}>
          {text1}
        </Typography>
        <Typography color={'#056FD9'} fontSize={'32px'}>
          {text2}
        </Typography>
        <Stack width={'100%'}>
          <ButtonNDIS sx={{ width: '268px', height: '72px' }} variant="blue" label={button.title} onClick={() => window.open(button.link)} />
        </Stack>
      </VStack>

      <Stack marginLeft={'10%'}>
        <Image
          src={HandShake}
          height={height}
          alt="hand shake"
        />
      </Stack>
    </HStack>
  )
}

export { HeroTwo, type IHeroTwo }