import { Stack, StackProps } from "@mui/material"
import { ReactNode } from "react"

interface HStackProps extends StackProps {
  children?: ReactNode
}

const HStack = ({ children, ...props }: HStackProps) => (
  <Stack
    display={'flex'}
    flexDirection={'row'}
    alignItems={'center'}
    justifyContent={'center'}
    {...props}
  >
    {children}
  </Stack>
)

export default HStack
