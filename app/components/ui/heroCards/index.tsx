import { Avatar, Box, Stack, Typography } from "@mui/material"
import VStack from "app/components/utility/VStack"
import HStack from "app/components/utility/HStack"
import Image from "next/image"
import Circles from "@/assets/images/circles.png"
import { ComponentConfig } from "@measured/puck"
import { CardNDIS } from "../cardNDIS"

interface IHeroCards {
  cards: {
    title: string,
    text: string,
  }[]
}

const HeroCards = ({ cards }: IHeroCards) => {
  return (
    <Stack flexDirection={{ desktop: 'row', mobile: 'column' }} justifyContent={{ desktop: 'space-around', mobile: 'center' }} alignItems={'center'} bgcolor={'#E5E9EF'} width={'100vw'} py={'32px'}>
      {cards?.map(card => (
        <Box my={'24px'}>
          <CardNDIS title={card?.title} text={card?.text} variant="major" />
        </Box>
      ))}
    </Stack >
  )
}

const HeroCardsPuck: ComponentConfig<IHeroCards> = {
  render: (props) => <HeroCards {...props} />,
  fields: {
    cards: {
      type: 'array',
      arrayFields: {
        title: { type: 'text' },
        text: { type: 'text' },
      }
    }
  },
  defaultProps: {
    cards: [
      {
        title: 'Your Voice Matters',
        text: "Allow citizens to talk to government about the policies affecting their federal and state services including education, health, transport and infrastructure as well as how it affects business especially in import, export, job safety, taxation, grant programs and other federal, state and council services.",
      },
      {
        title: 'Government has changed',
        text: "Their ears are open and they want to engage. There has been a cultural revolution at Federal, State and Councils. Human centered design is the focus in all government, but they struggle to get past their own bureaucracy. Your thoughts, opinions, and experiences are pivotal. Dive into discussions on policies and initiatives that matter most to you. From healthcare and education to transport and business, your voice is needed now.",
      },
      {
        title: 'Slowly, Slowly, Suddenly',
        text: "The sound of the crack under the iceberg that is breaking is loud and deafening. The wave of change is coming and the government needs your voice to build the business case. They know they need to expand their understanding of language, accessibility, and culture as our country grows. We have a team that works to get your opinion to the people that matter. ",
      }
    ]
  }
}

export { type IHeroCards, HeroCardsPuck, HeroCards }