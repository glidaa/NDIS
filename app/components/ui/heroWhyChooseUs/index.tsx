import { Stack, Typography } from "@mui/material"
import { ComponentConfig } from "@measured/puck"
import Image from "next/image"
import ThumbsUp from '@/assets/images/thumbs-up.png'

interface IHeroWhyChooseUs {
  orderedList: {
    header: string,
    text: string,
  }[]
}

interface IOrderedList {
  header: string,
  text: string
  index: number
}

const OrderedList = ({ header, text, index }: IOrderedList) => (
  <Stack key={index}>
    <Typography color={'#056FD9'} fontSize={'36px'} mb={'16px'} mt={index !== 0 ? '10px' : '0'}>
      {`${index + 1}. ${header}`}
    </Typography>
    <Typography fontWeight={700} fontSize={'20px'}>
      {text}
    </Typography>
  </Stack>
)

const HeroWhyChooseUs = ({ orderedList }: IHeroWhyChooseUs) => {
  return (
    <Stack
      display={'flex'}
      flexDirection={{ desktop: 'row', mobile: 'column-reverse' }}
      alignItems={{ desktop: 'flex-start', mobile: 'center' }}
      textAlign={{ desktop: 'start', mobile: 'center' }}
      p={'10vh 5vw'}
    >
      <Stack
        width={{ desktop: '55%', mobile: '80%' }}
        mr={{ desktop: '5%', mobile: '0%' }}
        pt={{ desktop: '0', mobile: '5%' }}
      >
        <Typography fontWeight={700} fontSize={{ mobile: '48px', desktop: '64px' }} color={'#056FD9'} mb={{ desktop: '0', mobile: '2%' }}>
          Why Choose Us?
        </Typography>

        {orderedList?.map((item, i) => (
          <OrderedList header={item.header} text={item?.text} index={i} />
        ))}
      </Stack>

      <Stack flexGrow={3} display={'flex'} alignItems={{ desktop: 'flex-end', mobile: 'center' }}>
        <Image
          src={ThumbsUp}
          sizes="100%"
          alt="Government word mounted with wood blocks"
          objectPosition="50% 50%"
          objectFit="contain"
        />
      </Stack>
    </Stack >
  )
}

const HeroWhyChooseUsPuck: ComponentConfig<IHeroWhyChooseUs> = {
  render: (props) => <HeroWhyChooseUs {...props} />,
  fields: {
    orderedList: {
      type: 'array',
      arrayFields: {
        header: { type: 'text' },
        text: { type: 'text' },
      }
    }
  },
  defaultProps: {
    orderedList: [
      {
        header: 'Efficiency and Accessibility',
        text: "By offering digital government services, citizens can access information and complete tasks conveniently from their homes. This streamlines processes, reduces paperwork, and saves time for both citizens and government employees",
      },
      {
        header: 'Transparency',
        text: "Digital services provide transparency by making information readily available. Citizens can track the status of applications, payments, and requests, fostering trust in the government",
      },
      {
        header: 'Improved Service Delivery',
        text: "Digital platforms allow for personalized interactions, quick responses, and automated notifications. Citizens receive timely updates, enhancing overall service quality",
      },
      {
        header: 'Data-Driven Decision Making',
        text: "Digital services generate valuable data. Governments can analyze trends, identify pain points, and make informed decisions to enhance service delivery",
      }
    ]
  }
}

export { type IHeroWhyChooseUs, HeroWhyChooseUsPuck, HeroWhyChooseUs }