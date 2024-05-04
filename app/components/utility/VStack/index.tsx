import { Stack, StackProps } from "@mui/material"
import { ReactNode } from "react"

interface VStackProps extends StackProps {
  children?: ReactNode
}

const VStack = ({ children, ...props }: VStackProps) => (
  <Stack
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
    justifyContent={'center'}
    {...props}
  >
    {children}
  </Stack>
)

export default VStack
