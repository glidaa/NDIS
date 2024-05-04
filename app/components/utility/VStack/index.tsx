import { Stack, StackTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

const VStack = ({ ...props }: OverridableComponent<StackTypeMap<{}, "div">>) => {
  <Stack
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
    justifyContent={'center'}
    {...props}
  />
}

export default VStack