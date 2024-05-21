import { Avatar, Box, Stack, Typography } from "@mui/material"
import VStack from "app/components/utility/VStack"
import HStack from "app/components/utility/HStack"
import Image from "next/image"
import Circles from "@/assets/images/circles.png"
import { ComponentConfig } from "@measured/puck"

const avatarSRC = "https://s3-alpha-sig.figma.com/img/f89d/b836/41bb906adb1604f260e8fe4b09ed6652?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BTdIMrgT7fm8hiCirM0z7NeqbChQPgf28rUOer9vjg9AI7iIzGljUx3weI5BSg6vBeayd5eJWnzXzmgxFhWtKRnQIARLieFn0nUeHTqJ32TkrmBm24qzpNN7o7nLYPShcr5YPrGCPI6ta0LANhkGkPW-gCK~-5gF2WdjkgBP81LW53r0IuLK1YtgGcaP5kYuDznqolVaK7KNyrtTWT4oXdixsmqlCLhPGC~CeSjUOG0mKXgKYiKFAHP3kbGQi0tKKVroFxu6dDlIyFD5TRZRzL5DdRBdDscKAfZcodifht8AFqWZKIar0jH-67OIZAGakBiZj6rNAXBDHmTWQCbmdQ__"

interface iHeroTestimonials {
  testimonials: {
    avatarURL: string,
    text: string,
    name: string,
    role: string
  }[]
}

const TestimonialCard = ({ avatarURL, text, name, role }) => (
  <Stack
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'center'}
    bgcolor={'#FFFFFF'}
    width={'100%'}
    minWidth={'300px'}
    maxWidth={'480px'}
    height={'284px'}
    px={'16px'}
    py={'32px'}
    gap={'16px'}
    borderRadius={'4px'}
    boxShadow={"0px 4px 12px 0px #00000026"}
  >
    <Avatar src={avatarURL ?? avatarSRC} />
    <Typography fontSize={'20px'} fontWeight={700}>
      {text ?? 'Lorem ipsum dolor sit amet consectetur. Commodo porttitor nam volutpat egestas sollicitudin.'}
    </Typography>
    <Typography fontSize={'20px'} fontWeight={700}>{name ?? 'David Jones'}</Typography>
    <Typography fontSize={'16px'}>{role ?? 'Director, Platinum'}</Typography>
  </Stack>
)

const HeroTestimonials = ({ testimonials }: iHeroTestimonials) => {
  return (
    <Stack
      bgcolor={'#0026641A'}
      width={'100vw'}
      p={'5%'}

      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={{ mobile: 'center', desktop: 'flex-start' }}
    >
      <Typography color={'#056FD9'} fontWeight={700} fontSize={{ mobile: '48px', desktop: '64px '}} mb={'48px'}>Testimonials</Typography>

      <Stack gap={'32px'} width={'100%'} flexDirection={{ mobile: 'column', desktop: 'row' }} alignItems={'center'} justifyContent={{ mobile: 'center', desktop: 'space-between' }}>
        {testimonials?.map(({ avatarURL, text, name, role }) => (
          <TestimonialCard avatarURL={avatarURL} text={text} name={name} role={role} />
        ))}
      </Stack>
    </Stack >
  )
}

const HeroTestimonialsPuck: ComponentConfig<iHeroTestimonials> = {
  render: (props) => <HeroTestimonials {...props} />,
  fields: {
    testimonials: {
      type: 'array',
      arrayFields: {
        avatarURL: { type: 'text' },
        text: { type: 'text' },
        name: { type: 'text' },
        role: { type: 'text' },
      }
    }
  },
  defaultProps: {
    testimonials: [
      {
        avatarURL: avatarSRC,
        text: "Lorem ipsum dolor sit amet consectetur. Commodo porttitor nam volutpat egestas sollicitudin.",
        name: "David Jones",
        role: "Director, Platinum",
      },
      {
        avatarURL: avatarSRC,
        text: "Lorem ipsum dolor sit amet consectetur. Commodo porttitor nam volutpat egestas sollicitudin.",
        name: "David Jones",
        role: "Director, Platinum",
      },
      {
        avatarURL: avatarSRC,
        text: "Lorem ipsum dolor sit amet consectetur. Commodo porttitor nam volutpat egestas sollicitudin.",
        name: "David Jones",
        role: "Director, Platinum",
      }
    ]
  }
}

export { type iHeroTestimonials, HeroTestimonialsPuck, HeroTestimonials }