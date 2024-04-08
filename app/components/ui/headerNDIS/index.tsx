import { Button, Input, Stack, TextField, Typography } from "@mui/material"
import { LanguageIcon } from "app/components/icons/language-icon"
import { PhoneIcon } from "app/components/icons/phone-icon"
import { ProfileIcon } from "app/components/icons/profile-icon"
import { DropdownNDIS } from "../dropdownNDIS"
import { isEmpty } from "lodash"

interface IHeaderNDIS {
  headerText: string
  headerPhone: string | number
  headerDropdowns: { label: string, links: { label: string, link: string }[] }[]
  headerAboveDropdown: { labelLink: string, link: string }
  button: { title: string, link: string }
}

const HeaderNDIS = ({ headerText, headerPhone, headerDropdowns, headerAboveDropdown, button }: IHeaderNDIS) => {
  return (
    <Stack>
      <Stack justifyContent={'center'} height={'34px'} bgcolor={'#056FD9'}>
        <Typography fontSize={'12px'} color={'white'} paddingX={'5%'}>{headerText}</Typography>
      </Stack>
      <Stack direction={'row'} gap={'2.5%'} justifyContent={'flex-end'} paddingRight={'5%'} paddingTop={'28px'}>
        <Stack direction={'row'} alignItems={'center'} gap={'5px'}>
          <PhoneIcon />
          <Typography fontSize={'20px'} color={'#056FD9'}>{headerPhone}</Typography>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} gap={'5px'}>
          <LanguageIcon />
        </Stack>
        <Stack direction={'row'} alignItems={'center'} gap={'5px'}>
          <ProfileIcon />
          <DropdownNDIS label={'Portals'} links={[{ label: headerAboveDropdown.labelLink, link: headerAboveDropdown.link }]} />
        </Stack>
        <Stack height={'42px'} width={'131px'} justifyContent={'center'} gap={'24px'}>
          <TextField size="small" label="Search" />
        </Stack>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} paddingTop={'80px'} paddingX={'5%'}>
        {headerDropdowns && !isEmpty(headerDropdowns) && headerDropdowns.map(dropdown => (
          <DropdownNDIS label={dropdown.label} links={dropdown.links} />
        ))}
        <Button sx={{ backgroundColor: '#E3B505', color: 'white', marginLeft: 'auto' }}  >{button.title}</Button>
      </Stack>
    </Stack>
  )
}

export { HeaderNDIS, type IHeaderNDIS }