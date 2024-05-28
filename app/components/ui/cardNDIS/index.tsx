import React from 'react'
import { CardContent, Typography, CardActions, Button, Box, Card, IconButton, CardTypeMap } from "@mui/material"
import { RightArrowIconBlue } from 'app/components/icons/right-arrow-icon/blue'
import { RightArrowIconWhite } from 'app/components/icons/right-arrow-icon/white'
import { OverridableComponent } from '@mui/material/OverridableComponent'

interface ICardNDIS {
  title: string,
  text: string,
  variant: 'major' | 'minor' | 'outlined' | 'blue',
  cardContainerProps?: OverridableComponent<CardTypeMap<{}, "div">>
}

const CardNDIS = ({ title, text, variant, cardContainerProps }: ICardNDIS) => {
  const color = (variant === 'blue' ? '#FFFFFF' : '#000000')
  const arrowIcon = (variant === 'blue' ? <RightArrowIconWhite /> : <RightArrowIconBlue />)
  const backgroundColor = (variant === 'blue' ? '#056FD9' : '#FFFFFF')
  const renderOrangeBox = (variant === 'major' || variant === 'minor' ? true : false)

  return (
    <Card sx={{ width: variant === 'major' ? '368px' : '343px', backgroundColor: backgroundColor, border: '1px solid #CDD3D6', color: color }} {...cardContainerProps}>
      {renderOrangeBox && <Box sx={{ width: '100%', height: '4px', backgroundColor: '#E3B505' }} />}
      <CardContent sx={{ padding: variant === 'major' ? '32px 32px 16px 32px' : '16px 16px 8px 16px' }}>
        <Typography sx={{ fontSize: 20, fontWeight: 600, marginBottom: '16px' }}>
          {title}˝
        </Typography>
        <Typography sx={{ fontSize: 16 }} component="div">
          {text}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: variant === 'major' ? '32px' : '16px', paddingBottom: '16px' }}>
        <IconButton>
          {arrowIcon}
        </IconButton>
      </CardActions>
    </Card>
  )
}

export { CardNDIS, ICardNDIS }