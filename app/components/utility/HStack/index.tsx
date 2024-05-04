import { Stack, StackTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

const HStack = ({ ...props }: OverridableComponent<StackTypeMap<{}, "div">>) => {
  <Stack
    display={'flex'}
    flexDirection={'row'}
    alignItems={'center'}
    justifyContent={'center'}
    {...props}
  />
}

export default HStack