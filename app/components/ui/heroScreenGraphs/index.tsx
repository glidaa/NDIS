import { Stack, Typography } from "@mui/material"
import VStack from "app/components/utility/VStack"
import { ButtonNDIS } from "../buttonNDIS"
import HStack from "app/components/utility/HStack"
import ScreenGraphs from '@/assets/images/screen-graphs.png'
import Image from "next/image"

interface IHeroScreenGraphs {
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

const HeroScreenGraphs = ({ header, text, button1, button2 }: IHeroScreenGraphs) => {
  return (
    <HStack height={'100vh'} width={'100vw'} px={'7%'}>
      <VStack gap={'32px'} width={'55%'} alignItems={'flex-start'}>
        <Typography fontWeight={700} color={'#056FD9'} fontSize={'64px'}>
          {header}
        </Typography>
        <Typography color={'#056FD9'} fontSize={'36px'}>
          {text}
        </Typography>
        <Stack width={'100%'}>
          <ButtonNDIS sx={{ width: '268px', height: '72px', fontSize: '18px' }} variant="blue" label={button1.title} onClick={() => window.open(button1.link)} />
        </Stack>
        <Stack width={'100%'}>
          <ButtonNDIS sx={{ width: '315px', height: '72px', fontSize: '18px' }} variant="outlined" label={button2.title} onClick={() => window.open(button2.link)} />
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

export { HeroScreenGraphs, type IHeroScreenGraphs }