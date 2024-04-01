import { Input, Stack, TextField, Typography } from "@mui/material"
import { LanguageIcon } from "app/components/icons/language-icon"
import { PhoneIcon } from "app/components/icons/phone-icon"
import { ProfileIcon } from "app/components/icons/profile-icon"
import { DropdownNDIS } from "../dropdownNDIS"

interface IHeaderNDIS { }

const HeaderNDIS = () => {
  return (
    <Stack height={'246px'}>
      <Stack justifyContent={'center'} height={'34px'} bgcolor={'#056FD9'}>
        <Typography fontSize={'12px'} color={'white'} paddingX={'5%'}>Trusted by the public to collect information for the australian government.</Typography>
      </Stack>
      <Stack height={'32px'}>
        <Stack direction={'row'} gap={'2.5%'} justifyContent={'flex-end'} paddingRight={'5%'} paddingTop={'28px'}>
          <Stack direction={'row'} alignItems={'center'} gap={'5px'}>
            <PhoneIcon />
            <Typography fontSize={'20px'} color={'#056FD9'}>1800 035 544</Typography>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} gap={'5px'}>
            <LanguageIcon />
          </Stack>
          <Stack direction={'row'} alignItems={'center'} gap={'5px'}>
            <ProfileIcon />
            <DropdownNDIS label={'Portals'} links={[{label: 'portal 1', link: 'https://google.com'}]} />
          </Stack>
          <Stack height={'42px'} width={'131px'} justifyContent={'center'}>
            <TextField size="small" label="Search" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export { HeaderNDIS, type IHeaderNDIS }