import { Box, Stack, Typography } from "@mui/material"
import VStack from "app/components/utility/VStack"
import { ButtonNDIS } from "../buttonNDIS"
import HStack from "app/components/utility/HStack"
import GovernmentBlocks from '@/assets/images/government-blocks.png'
import Image from "next/image"

interface IHeroHowWeHelpTheGov {
  header: string
  text: string
}

const HeroHowWeHelpTheGov = ({ header, text }: IHeroHowWeHelpTheGov) => {
  return (
    <HStack width={'100vw'} height={'500px'} bgcolor={'#056FD9'} justifyContent={'space-between'} pl={{ mobile: '0%', desktop: '10%' }} flexDirection={{ desktop: 'row', mobile: 'column-reverse' }} >
      <VStack gap={'32px'} width={'45%'} alignItems={'flex-start'} fontSize={{ desktop: '48px', mobile: '34px' }} textAlign={{ mobile: 'center', desktop: 'start' }}>
        <Typography fontWeight={700} color={'#FFFFFF'} fontSize={'1em'}>
          {header}
        </Typography>
        <Typography color={'#FFFFFF'} fontSize={'0.6em'}>
          {text}
        </Typography>
      </VStack>

      <Stack width={{ mobile: '100vw', desktop: null }} height={{ desktop: '100%', mobile: null }} flexGrow={1} position={'relative'} py={{ desktop: '0%', mobile: '5%' }}>
        <Image
          alt="Government word mounted with wood blocks"
          src={GovernmentBlocks}
          layout="fill"
          objectFit="cover" // Make the image cover the entire area while maintaining aspect ratio
          objectPosition="50% 50%" // Center the image
        />
      </Stack>
    </HStack>
  )
}

export { HeroHowWeHelpTheGov, type IHeroHowWeHelpTheGov }