import { Link, Stack, Typography } from "@mui/material"
import { Facebook } from "app/components/icons/social-media/instagram"
import { Linkedin } from "app/components/icons/social-media/linkedin"
import { YourGovWhite } from "app/components/icons/your-gov-white"

const Footer2 = ({ footerLinksSectionOne, footerLinksSectionTwo, footerLinksSectionThree }) => {
  const handleClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={'415px'} paddingX={'20%'} bgcolor={'#22272B'} gap={'28px'}>
      <Stack>
        {footerLinksSectionOne && (
          <Stack direction={'row'} width={'100%'} gap={'24px'}>
            {footerLinksSectionOne.map(footerLink => (
              <Link onClick={() => handleClick(footerLink.link)} href={'#'}>{footerLink.label}</Link>
            ))}
          </Stack>
        )}
      </Stack>

      <Stack display={'flex'} width={'40%'} justifyContent={'space-around'} alignItems={'center'} direction={'row'}>
        {footerLinksSectionTwo && (
          <Stack direction={'row'} width={'100%'} gap={'24px'}>
            {footerLinksSectionTwo.map(footerLink => (
              <Link onClick={() => handleClick(footerLink.link)} href={'#'}>{footerLink.label}</Link>
            ))}
          </Stack>
        )}

        <Stack direction={'row'} mb={2} gap={2}>
          <Linkedin />
          <Facebook />
        </Stack>
      </Stack>

      <Stack mb={4}>
        <YourGovWhite />
      </Stack>

      <Stack width={'100%'} display={'flex'} direction={'row'}>
        {footerLinksSectionThree && (
          <>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'} gap={'24px'}>
              <Stack direction={'row'} gap={2}>
                {footerLinksSectionThree.map((footerLink, i) => {
                  if (i === footerLinksSectionThree.length - 1) return
                  return (
                    <Link onClick={() => handleClick(footerLink.link)} href={'#'}>{footerLink.label}</Link>
                  )
                })}
              </Stack>
              <Stack>
                <Link onClick={() => handleClick(footerLinksSectionThree[footerLinksSectionThree.length - 1].link)} href={'#'}>{footerLinksSectionThree[footerLinksSectionThree.length - 1].label}</Link>
              </Stack>
            </Stack>
          </>
        )}
      </Stack>
    </Stack>
  )
}

export { Footer2 }