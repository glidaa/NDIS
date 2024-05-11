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
      <HStack width={'100vw'} height={'500px'} bgcolor={'#056FD9'} justifyContent={'space-between'} pl={'10%'}>
        <VStack gap={'32px'} width={'45%'} alignItems={'flex-start'}>
          <Typography fontWeight={700} color={'#FFFFFF'} fontSize={'48px'}>
            {header}
          </Typography>
          <Typography color={'#FFFFFF'} fontSize={'20px'}>
            {text}
          </Typography>
        </VStack>

        <Stack>
          <Image
            src={GovernmentBlocks}
            height={527}
            alt="Government word mounted with wood blocks"
          />
        </Stack>
      </HStack>
  )
}

export { HeroHowWeHelpTheGov, type IHeroHowWeHelpTheGov }