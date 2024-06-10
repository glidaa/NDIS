import { Avatar, Box, CardActions, CardContent, CardMedia, Stack, Typography, Card } from "@mui/material"
import VStack from "app/components/utility/VStack"
import HStack from "app/components/utility/HStack"
import Image from "next/image"
import Circles from "@/assets/images/circles.png"
import { ComponentConfig } from "@measured/puck"
import { CardNDIS } from "../cardNDIS"
import { ButtonNDIS } from "../buttonNDIS"

interface ICardWithImage {
  numberedTitle: string,
  title: string,
  text1: string,
  text2: string,
  buttonText: string,
  imageUrl: string
  index?: number
}


const CardWithImage = ({ numberedTitle, title, text1, text2, buttonText, index, imageUrl }: ICardWithImage) => {
  return (
    <Card sx={{ desktop: 460, mobile: 350 }}>
      <CardMedia
        sx={{ height: 283 }}
        image={imageUrl}
      />
      <CardContent style={{ margin: '32px 24px 0 24px' }}>
        <Typography fontSize={'18px'} fontWeight={700} mb={2}>
          {`${index}. ${numberedTitle}`}
        </Typography>
        <Typography fontSize={'16px'} fontWeight={700} mb={2}> 
          {title}
        </Typography>
        <Typography fontSize={'16px'} mb={1}>
          {text1}
        </Typography>
        <Typography fontSize={'16px'}>
          {text2}
        </Typography>
      </CardContent>
      <CardActions style={{ margin: '0px 24px 32px 24px' }}>
        <ButtonNDIS variant="blue" label={buttonText} sx={{ width: 'auto' }}/>
      </CardActions>
    </Card>
  )
}

interface ICardsWithImage {
  cards: ICardWithImage[]
}

const HeroCardsWithImage = ({ cards }: ICardsWithImage) => {
  return (
    <Stack bgcolor={'#FFFFFF'} flexDirection={{ desktop: 'row', mobile: 'column'}} gap={6} justifyContent={'center'} alignItems={'center'} p={'5%'}>
      {cards?.map((card, i) => (
        <CardWithImage {...card} index={i + 1} />
      ))}
    </Stack>
  )
}

const HeroCardsWithImagePuck: ComponentConfig<ICardsWithImage> = {
  render: (props) => <HeroCardsWithImage {...props} />,
  fields: {
    cards: {
      type: 'array',
      arrayFields: {
        numberedTitle: { type: 'text' },
        title: { type: 'text' },
        text1: { type: 'text' },
        text2: { type: 'text' },
        buttonText: { type: 'text' },
        imageUrl: { type: 'text' }
      }
    }
  },
  defaultProps: {
    cards: [
      {
        numberedTitle: 'Advocate for Specific Change',
        title: 'Drive the Difference You Desire',
        text1: 'Do you have a specific policy change in mind? A direct suggestion that can revolutionize an aspect of our nation? We\'re all ears.',
        text2: 'Your insights could be the catalyst for transformative national reforms.',
        buttonText: 'Submit Your Specific Change',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/5a3f/1956/609360789f662005f105ae296c152842?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K1Eap-C3Gth5Z2wCRqy1sadyLavX7EAICPLXYdBK4WiaWyJsmIZ-~j0bYJezMSp6yeBGApL1U4XNrAaIsBYhLwWvBqSwnhVs3FWAKxWQtTgLhRIl981ut8ohsCbCADPBLZuWa~e63MVqkF1ZhWggvPcWk0M1iDLAyblOStTei9WxEIKqiTtdKlq47Yftq2TAStb~LbZWePbVqPD8kPkz5u8hpJF4ylJcx2EfXL~hP8290fkeuJP2hz1p6MmQjSpUQHcI2jaRSWI4taCtsHyGu68--VtE-ZJusfJ3AFi6KU8t6udPqOYmIOeVCsSDAPz6r5HZAvZ4z7zX3OHkh2E97Q__'
      },
      {
        numberedTitle: 'Stay Informed & Engaged',
        title: 'Join the "your gov" Community',
        text1: 'Let\'s reshape Australia\'s future together. Register with us and be the first to hear about new discussions, policy updates, and direct dialogues with officials.',
        text2: 'Be part of a proactive community, driving forward a shared vision for Australia.',
        buttonText: 'Register Now',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/9ef6/c0bd/285a36ecd860a80bd37e517f52c71349?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OaMWVFVZmtCypuQqaKybRvuevicoNdRizK41rCIdAH8eCN1qVUYWnLGN7VFLsuHsy0JGFT660LNWwrIcMcloLPZIXabl0bsYtQHTngKDQFHbC8fRB2xoa48doZDRQy~VnZY15vi-SqtZBNCG94IOaSULo7cMmgqrXOvSoF~2a3hWF3XpYyXTfGZWf13Wa1SjIpDEb64rvkmE5Ujovo2je8Yd3DXGdLIeI54pttFFnbmTYYmZ8APfV7svLnxM2or6eXPxYwCvWgzV7soqKwjvZ6ETPgvlh8kfKnr0ITPa4YPU-9zTdxUDN5HkwnFHw9KFamwVzto9Ct5RYx0uYvxI7A__'
      },
      {
        numberedTitle: 'Share Your Thoughts Across the Spectrum',
        title: 'Broaden the Discussion',
        text1: 'From education and health to business and infrastructure, every domain awaits your insights. Explore a myriad of topics and voice your perspectives.',
        text2: 'Your opinions hold the potential to impact diverse sectors of our nation. Dive in.',
        buttonText: 'Explore & Contribute',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/c6c4/308f/3481f82a763207e55ebb02b9b795ca27?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aXLAJtU1jxHFhoEsdp0Kd5O9wMZNYqk2-Cm2cQv0JambOJXvv1F3ONltLm2p6ERZFSKz9caDoHV8Iv5aTOAHvX4HpjzkEA1-usHtzwffpq~BFYN32MtIhUOv9DKBSC5M6TTvxuVF8mtbPYv2q-bQSerEMUcG8uvRlmBaNH0c5fFKkRAHoR3mDZaoO11UJH~RBSDhx6VL~yxradIJl37-iyif4rZW9x96-OYmJ8eMhMBHaXf6ngz06YH0b98PLn5Kd3IrWA~bz~Eg4IxaqvwVyLCtA4raJ6zTOWNqikS-FpS1Fo~e5LrTyLLhUS3EFar04sa0U9HLTPVjSmYYYlQdVg__'
      }
    ]
  }
}

export { type ICardsWithImage, HeroCardsWithImagePuck, HeroCardsWithImage }