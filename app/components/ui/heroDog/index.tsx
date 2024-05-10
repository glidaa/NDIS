import { Box, Stack, Typography } from "@mui/material"
import VStack from "app/components/utility/VStack"
import { ButtonNDIS } from "../buttonNDIS"
import HStack from "app/components/utility/HStack"
import Dog from '@/assets/images/dog.png'
import Image from "next/image"
import { useWindowSize } from "usehooks-ts"

interface IHeroDog {
  header: string
  text: string
  button: {
    title: string
    link: string
  }
}

const HeroDog = ({ header, text, button }: IHeroDog) => {
  return (
    <VStack>
      <HStack width={'100vw'} bgcolor={'#056FD9'} justifyContent={'space-between'} pl={'10%'}>
        <VStack gap={'32px'} width={'45%'} alignItems={'flex-start'}>
          <Typography fontWeight={700} color={'#FFFFFF'} fontSize={'48px'}>
            {header}
          </Typography>
          <Typography color={'#FFFFFF'} fontSize={'20px'}>
            {text}
          </Typography>
          <Stack width={'100%'}>
            <ButtonNDIS sx={{ width: '268px', height: '72px' }} variant="outlined" label={button.title} onClick={() => window.open(button.link)} />
          </Stack>
        </VStack>

        <Stack marginLeft={'10%'}>
          <Image
            src={Dog}
            height={463}
            alt="hand shake"
          />
        </Stack>
      </HStack>
      <HStack>
        <Stack bgcolor={'#191919'} height={'23px'} width={'20vw'} />
        <Stack bgcolor={'#02BA43'} height={'23px'} width={'20vw'} />
        <Stack bgcolor={'#E3B505'} height={'23px'} width={'20vw'} />
        <Stack bgcolor={'#A400AE'} height={'23px'} width={'20vw'} />
        <Stack bgcolor={'#A0BF42'} height={'23px'} width={'20vw'} />
      </HStack>
    </VStack>
  )
}

export { HeroDog, type IHeroDog }