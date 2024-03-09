import React from 'react'
import { CardContent, Typography, CardActions, Button, Box, Card, IconButton } from "@mui/material"
import { RightArrowIconBlue } from 'app/components/icons/right-arrow-icon/blue'
import { RightArrowIconWhite } from 'app/components/icons/right-arrow-icon/white'

interface ICardNDIS {
  title: string,
  text: string,
  variant: 'major' | 'minor' | 'outlined' | 'blue'
}

const CardNDIS = ({ title, text, variant }: ICardNDIS) => {
  const variantsConditions = {
    text: (variant === 'blue' ? '#FFFFFF' : '#056FD9'),
    arrowIcon: (variant === 'blue' ? <RightArrowIconWhite /> : <RightArrowIconBlue />),
    backgroundColor: (variant === 'blue' ? '#056FD9' : '#FFFFFF'),
    color: (variant === 'blue' ? '#FFFFFF' : '#000000'),
    renderOrangeBox: (variant === 'major' || variant === 'minor' ? true : false)
  }

  return (
    <Card sx={{ width: variant === 'major' ? '368px' : '343px', backgroundColor: variantsConditions.backgroundColor, border: '1px solid #CDD3D6', color: variantsConditions.color }}>
      {variantsConditions.renderOrangeBox && <Box sx={{ width: '100%', height: '4px', backgroundColor: '#E3B505' }} />}
      <CardContent sx={{ padding: variant === 'major' ? '32px 32px 16px 32px' : '16px 16px 8px 16px' }}>
        <Typography sx={{ fontSize: 20, fontWeight: 600, marginBottom: '16px' }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 16 }} component="div">
          {text}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: variant === 'major' ? '32px' : '16px', paddingBottom: '16px' }}>
        <IconButton>
          {variantsConditions.arrowIcon}
        </IconButton>
      </CardActions>
    </Card>
  )
}

export { CardNDIS, ICardNDIS }