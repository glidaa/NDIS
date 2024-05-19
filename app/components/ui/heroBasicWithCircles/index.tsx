import { Box, Stack, Typography } from "@mui/material"
import VStack from "app/components/utility/VStack"
import HStack from "app/components/utility/HStack"
import Image from "next/image"
import Circles from "@/assets/images/circles.png"
import { ComponentConfig } from "@measured/puck"

interface IHeroBasicWithCircles {
  header: string
  text: string
}

const HeroBasicWithCircles = ({ header, text }: IHeroBasicWithCircles) => {
  return (
    <Box>
      <HStack width={'100vw'} height={'391px'} bgcolor={'#056FD9'} justifyContent={'space-between'} pl={'10%'}>
        <VStack gap={'32px'} width={'45%'} alignItems={'flex-start'}>
          <Typography fontWeight={700} color={'#FFFFFF'} fontSize={'48px'}>
            {header}
          </Typography>
          <Typography color={'#FFFFFF'} fontSize={'20px'}>
            {text}
          </Typography>
        </VStack>

        <Stack width={'50%'} display={'flex'} alignItems={'center'}>
          <Image
            src={Circles}
            height={140}
            alt="Government word mounted with wood blocks"
          />
        </Stack>
      </HStack>
      <Stack bgcolor={'#191919'} height={'23px'} width={'100vw'} />
    </Box>
  )
}

const HeroBasicWithCirclesPuck: ComponentConfig<IHeroBasicWithCircles>  = {
  render: (props) => <HeroBasicWithCircles {...props} />,
  fields: {
    header: { type: "text" },
    text: { type: "text" }
  },
  defaultProps: {
    header: "Helping you deliver great government services",
    text: "Find the building blocks for creating user-centred digital services, as well as policy, tools and guidance"
  }
}

export { type IHeroBasicWithCircles, HeroBasicWithCirclesPuck as HeroBasicWithCircles, HeroBasicWithCircles as HeroBasicWithCirclesComponent }