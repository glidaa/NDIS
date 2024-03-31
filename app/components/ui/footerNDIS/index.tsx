import { Link, Stack, Typography, Box } from "@mui/material"

interface IFooterNDIS {
  footerTitle: string,
  footerText: string,
  footerLinks: {
    label: string,
    link: string;
  }[]
}

const FooterNDIS = ({ footerTitle, footerText, footerLinks }: IFooterNDIS) => {
  const handleClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <Stack bgcolor={'#22272B'} color={'white'} gap={'16px'} px={'5%'} py={'32px'}>
      <Typography fontSize={'12px'}>
        {footerTitle}
      </Typography>
      <Box border={'1px solid #FFFFFF'} width={'90%'} />
      {footerLinks && (
        <Stack direction={'row'} width={'100%'} gap={'24px'}>
          {footerLinks.map(footerLink => (
            <Link onClick={() => handleClick(footerLink.link)} href={'#'}>{footerLink.label}</Link>
          ))}
        </Stack>
      )}
      <Typography fontSize={'12px'} mt={'16px'}>{footerText}</Typography>
    </Stack>
  )
}

export { FooterNDIS, type IFooterNDIS }