import { Box, Stack, Typography } from "@mui/material"
import VStack from "app/components/utility/VStack"
import { ButtonNDIS } from "../buttonNDIS"
import HStack from "app/components/utility/HStack"
import ManWithMic from '@/assets/images/man-with-mic.png'
import Image from "next/image"

interface IHeroYourVoice {
  header: string
  text: string
}

const HeroYourVoice = ({ header, text }: IHeroYourVoice) => {
  return (
    <HStack width={'100vw'} height={'500px'} bgcolor={'#056FD9'} justifyContent={'space-between'} pl={'10%'}>
      <VStack gap={'32px'} width={'45%'} alignItems={'flex-start'}>
        <Typography fontWeight={700} color={'#FFFFFF'} fontSize={'48px'}>
          {header}
        </Typography>
      </VStack>

      <Stack>
        <Image
          src={ManWithMic}
          height={500}
          alt="Government word mounted with wood blocks"
        />
      </Stack>
    </HStack>
  )
}

export { HeroYourVoice, type IHeroYourVoice }