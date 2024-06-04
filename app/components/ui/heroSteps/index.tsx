import { Box, Stack, Typography } from "@mui/material"
import { ComponentConfig } from "@measured/puck"
import Image from "next/image"
import Ladders from '@/assets/images/ladders.jpeg'

interface IHeroStepsCard {
  stepNumber: number,
  header: string,
  text: string
}

const HeroStepsCard = ({ stepNumber, header, text }: IHeroStepsCard) => {
  return (
    <Stack bgcolor={'#FFFFFF'} minWidth={'350px'} width={{ desktop: '30%', mobile: '80%' }} minHeight={{ desktop: '284px', mobile: '150px' }} border={'4px solid #056FD9'} flexDirection={'row'} p={'32px'}>
      <Stack minWidth={'48px'} height={'48px'} border={'4px solid #056FD9'} borderRadius={'50%'} alignItems={'center'} justifyContent={'center'}>
        <Typography fontSize={'20px'} color={'#056FD9'} fontWeight={700}>
          {stepNumber ?? 1}
        </Typography>
      </Stack>
      <Stack ml={'36px'}>
        <Typography fontWeight={700} fontSize={'32px'} lineHeight={'40px'}>
          {header ?? 'Sign Up & Profile Creation'}
        </Typography>
        <Typography fontSize={'16px'} mt={'16px'}>
          {text ?? 'Begin by creating your personal profile. This is more than just a login – it\'s your identity in a community of proactive Australians.'}
        </Typography>
      </Stack>
    </Stack>
  )
}

interface IHeroSteps {
  stepCards: IHeroStepsCard[]
}

const HeroSteps = ({ stepCards }: IHeroSteps) => {
  return (
    <Stack bgcolor={'#0026641A'} width={'100vw'} height={'auto'} flexDirection={'column'} p={'5%'}>
      <Stack flexDirection={{ desktop: 'row', mobile: 'column' }} alignItems={'center'} justifyContent={'center'} mb={'50px'}>
        <HeroStepsCard stepNumber={stepCards[0]?.stepNumber} header={stepCards[0]?.header} text={stepCards[0]?.text} />
        <Box border={'2px solid #056FD9'} width={{ desktop: '5%', mobile: '0' }} height={{ desktop: '0', mobile: '20px' }} />
        <HeroStepsCard stepNumber={stepCards[1]?.stepNumber} header={stepCards[1]?.header} text={stepCards[1]?.text} />
        <Box border={'2px solid #056FD9'} width={{ desktop: '5%', mobile: '0' }} height={{ desktop: '0', mobile: '20px' }} />
        <HeroStepsCard stepNumber={stepCards[2]?.stepNumber} header={stepCards[2]?.header} text={stepCards[2]?.text} />
      </Stack>
      <Stack flexDirection={{ desktop: 'row', mobile: 'column' }} alignItems={'center'} justifyContent={'center'} mb={'50px'}>
        <HeroStepsCard stepNumber={stepCards[3]?.stepNumber} header={stepCards[3]?.header} text={stepCards[3]?.text} />
        <Box border={'2px solid #056FD9'} width={{ desktop: '5%', mobile: '0' }} height={{ desktop: '0', mobile: '20px' }} />
        <HeroStepsCard stepNumber={stepCards[4]?.stepNumber} header={stepCards[4]?.header} text={stepCards[4]?.text} />
        <Box border={'2px solid #056FD9'} width={{ desktop: '5%', mobile: '0' }} height={{ desktop: '0', mobile: '20px' }} />
        <HeroStepsCard stepNumber={stepCards[5]?.stepNumber} header={stepCards[5]?.header} text={stepCards[5]?.text} />
      </Stack>
      <Stack flexDirection={{ desktop: 'row', mobile: 'column' }} alignItems={'center'} justifyContent={'center'} mb={'50px'}>
        <HeroStepsCard stepNumber={stepCards[6]?.stepNumber} header={stepCards[6]?.header} text={stepCards[6]?.text} />
        <Box border={'2px solid #056FD9'} width={{ desktop: '5%', mobile: '0' }} height={{ desktop: '0', mobile: '20px' }} />
        <HeroStepsCard stepNumber={stepCards[7]?.stepNumber} header={stepCards[7]?.header} text={stepCards[7]?.text} />
        <Box border={'2px solid #056FD9'} width={{ desktop: '5%', mobile: '0' }} height={{ desktop: '0', mobile: '20px' }} />
        <HeroStepsCard stepNumber={stepCards[8]?.stepNumber} header={stepCards[8]?.header} text={stepCards[8]?.text} />
      </Stack>
    </Stack>
  )
}

const HeroStepsPuck: ComponentConfig<IHeroSteps> = {
  render: (props) => <HeroSteps {...props} />,
  fields: {
    stepCards: {
      type: 'array',
      arrayFields: {
        stepNumber: { type: 'number' },
        header: { type: 'text' },
        text: { type: 'text' }
      }
    }
  },
  defaultProps: {
    stepCards: [
      {
        stepNumber: 1,
        header: 'Sign Up & Profile Creation',
        text: "Begin by creating your personal profile. This is more than just a login - it’s your identity in a community of proactive Australians.",
      },
      {
        stepNumber: 2,
        header: 'Discover & Learn',
        text: "Before diving into discussions, familiarize yourself with our resource library. From policy breakdowns to expert insights, equip yourself with knowledge.",
      },
      {
        stepNumber: 3,
        header: 'Engage in Topics',
        text: "Explore a range of topics spanning healthcare, infrastructure, business, and more. Contribute your thoughts, stories, and suggestions.",
      },
      {
        stepNumber: 4,
        header: 'Multimedia Engagement',
        text: "Use photos and videos to enhance your messages. Show real-life impacts, narrate personal experiences, or simply share visual feedback.",
      },
      {
        stepNumber: 5,
        header: 'Direct Dialogues',
        text: "Join scheduled Q&A sessions with public servants and ministers. It’s your chance to ask questions, seek clarity, and understand their perspectives.",
      },
      {
        stepNumber: 6,
        header: 'Collaborative Workshops',
        text: "Periodically, we host collaborative workshops where users and officials co-design solutions for pressing issues. Be part of the change!",
      },
      {
        stepNumber: 7,
        header: 'Feedback Loop',
        text: "After discussions, we consolidate and relay your feedback to the relevant government departments. They, in turn, provide updates on actions taken.",
      },
      {
        stepNumber: 8,
        header: 'Track & Impact',
        text: "Using our impact tracker, see the tangible changes your feedback instigates. Watch as your insights transform into policies.",
      },
      {
        stepNumber: 9,
        header: 'Continuous Learning',
        text: "The landscape of governance is ever-evolving. Stay updated with our regular webinars, expert sessions, and news updates.",
      },
      {
        stepNumber: 10,
        header: 'Build & Grow',
        text: "Beyond just discussions, 'your gov' is a community. Network with other users, collaborate on initiatives, and grow together.",
      }
    ]
  }
}

export { type IHeroSteps, HeroStepsPuck, HeroSteps }