import { Stack, StackTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { ReactNode } from "react"

type VStackProps = OverridableComponent<StackTypeMap<{}, "div">> & {
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
