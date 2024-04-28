import { Stack } from "@mui/material"
import { YourGov } from "app/components/icons/your-gov"
import { DropdownNDIS } from "../dropdownNDIS"
import { ButtonNDIS } from "../buttonNDIS"

interface IHeader2 {
  headerDropdowns: {
    label: string,
    links: {
      label: string,
      link: string
    }[]
  }[]
}

const Header2 = ({ headerDropdowns }: IHeader2) => {
  return (
    <Stack display={'flex'} direction={'row'} alignItems={'center'} justifyContent={'center'} bgcolor={'#056FD9'} width={'100%'} height={'160px'}>
      <YourGov />
      {
        headerDropdowns?.map((dropdown, i) => (
          <DropdownNDIS label={dropdown.label} links={dropdown.links} color={'#FFFFFF'} iconColor={'#FFFFFF'} sx={i === 0 ? { marginLeft: '5%' } : null} />
        ))
      }
      <ButtonNDIS label="Signup" variant="blue" sx={{ marginLeft: '5%' }} />
      <ButtonNDIS label="Login" variant="outlined" sx={{ marginLeft: '16px' }} />
    </Stack>
  )
}

export { Header2, type IHeader2 }