import { Stack, Typography } from "@mui/material"
import VStack from "app/components/utility/VStack"
import { ButtonNDIS } from "../buttonNDIS"
import Image from "next/image"
import handShake from '../../../assets/images/hand_shake.jpg'
import HStack from "app/components/utility/HStack"

interface IHeroTwo {
  header: string
  text1: string
  text2: string
  buttonText: string
}

const HeroTwo = ({ header, text1, text2, buttonText }: IHeroTwo) => {
  const {heigth} = use
  return (
    <HStack pl={18} height={'100vh'}>
      <VStack gap={'32px'}>
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
          <ButtonNDIS sx={{ width: '268px', height: '72px' }} variant="blue" label={buttonText} />
        </Stack>
      </VStack>

      <Stack height={'100%'}>
        <Image
          src={handShake}
          alt="Hand shake"
        />
      </Stack>
    </HStack>
  )
}

export { HeroTwo, type IHeroTwo }