import { Box, Stack, Typography } from "@mui/material"
import VStack from "app/components/utility/VStack"
import { ButtonNDIS } from "../buttonNDIS"
import HStack from "app/components/utility/HStack"
import ManWithMic from '@/assets/images/man-with-mic.png'
import Image from "next/image"
import { mdColumnReverseLgRow } from "app/components/utils/responsive"

interface IHeroYourVoice {
  header: string
  text: string
}

const HeroYourVoice = ({ header, text }: IHeroYourVoice) => {
  return (
    <HStack width={'100vw'} height={'100%'} bgcolor={'#056FD9'} justifyContent={'space-between'} pl={{ desktop: '10%' }} fontSize={{ desktop: '32px', mobile: '24px'}} flexDirection={{ mobile: 'column-reverse', desktop: 'row' }}>
      <VStack gap={'32px'} width={{ mobile: '60%', desktop: '45%' }} alignItems={'flex-start'} pr={{ desktop: '5%' }} pt={{ mobile: '5%' }} pb={{ desktop: null, mobile: '5%' }}>
        <Typography fontWeight={700} color={'#FFFFFF'} fontSize={'1em'}>
          {header}
        </Typography>
      </VStack>

      <Stack width={'100%'} direction="row" justifyContent={{ mobile: 'center', desktop: 'flex-end' }} >
        <Image
          src={ManWithMic}
          sizes="100%"
          alt="Government word mounted with wood blocks"
        />
      </Stack>
    </HStack>
  )
}

export { HeroYourVoice, type IHeroYourVoice }