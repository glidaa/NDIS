import { Stack, StackTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { ReactNode } from "react"

type HStackProps = OverridableComponent<StackTypeMap<{}, "div">> & {
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
