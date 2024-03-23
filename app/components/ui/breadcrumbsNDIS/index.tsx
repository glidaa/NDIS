import { Field } from "@measured/puck"
import { Button, Stack, Typography } from "@mui/material"
import { ChevronRight } from "lucide-react"

interface IBreadcrumbsNDIS {
  breadcrumbsLabels: any
}

const BreadcrumbsNDIS = ({ breadcrumbsLabels }: IBreadcrumbsNDIS) => {
  console.log("🚀 ~ BreadcrumbsNDIS ~ label:", breadcrumbsLabels)
  if (!breadcrumbsLabels) return null
  return (
    <Stack direction={'row'} px={'21px'} py={'28px'}>
      {
        breadcrumbsLabels.map((breadcrumb, i) => (
          <Stack key={i} direction={'row'}>
            <Typography
              color={breadcrumbsLabels.length - 1 !== i ? '#056FD9' : '#22272B'}
              fontWeight={600}
              sx={{
                borderBottom: breadcrumbsLabels.length - 1 !== i ? '2px solid #056FD9' : ''
              }}
            >
              {breadcrumb.label}
            </Typography>
            {breadcrumbsLabels.length - 1 !== i && <ChevronRight color="#056FD9" />}
          </Stack>
        ))
      }
    </Stack>
  )
}

export { BreadcrumbsNDIS }