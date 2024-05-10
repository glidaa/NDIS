import { Stack, Typography } from "@mui/material"
import VStack from "app/components/utility/VStack"
import { ButtonNDIS } from "../buttonNDIS"
import HStack from "app/components/utility/HStack"
import { useWindowSize } from "usehooks-ts"
// import { HandShake } from "app/assets/svg/HandShake"
import ScreenGraphs from '@/assets/images/screen-graphs.png'
import Image from "next/image"

interface IHero3 {
  header: string
  text: string
  button1: {
    title: string
    link: string
  }
  button2: {
    title: string
    link: string
  }
}

const Hero3 = ({ header, text, button1, button2 }: IHero3) => {
  const { height = 0 } = useWindowSize()
  return (
    <HStack height={'100vh'} width={'100vw'}>
      <VStack gap={'32px'} width={'45%'} alignItems={'flex-start'}>
        <Typography fontWeight={700} color={'#056FD9'} fontSize={'64px'}>
          {header}
        </Typography>
        <Typography color={'#056FD9'} fontSize={'36px'}>
          {text}
        </Typography>
        <Stack width={'100%'}>
          <ButtonNDIS sx={{ width: '268px', height: '72px' }} variant="blue" label={button1.title} onClick={() => window.open(button1.link)} />
        </Stack>
        <Stack width={'100%'}>
          <ButtonNDIS sx={{ width: '268px', height: '72px' }} variant="outlined" label={button2.title} onClick={() => window.open(button2.link)} />
        </Stack>
      </VStack>

      <Stack marginLeft={'10%'}>
        <Image
          src={ScreenGraphs}
          alt="Graphs on a computer screen"
        />
      </Stack>
    </HStack>
  )
}

export { Hero3, type IHero3 }