import React from 'react'
import { CardContent, Typography, CardActions, Button, Box, Card, IconButton } from "@mui/material"
import { RightArrowIconBlue } from 'app/components/icons/right-arrow-icon/blue'
import { RightArrowIconWhite } from 'app/components/icons/right-arrow-icon/white'

export interface ICardNDISBasic {
  title: string,
  variant: 'outlined' | 'blue'
}

const CardNDISBasic = ({ title, variant }: ICardNDISBasic) => {
  return (
    <Card
      sx={{
        width: '343px',
        backgroundColor: variant === 'outlined' ? '#FFFFFF' : '#056FD9',
        border: '1px solid #CDD3D6'
      }}
    >
      <CardContent sx={{ padding: '16px 16px 0px 16px' }}>
        <Typography
          sx={{ fontSize: 20, fontWeight: 600 }}
          color={variant === 'outlined' ? "#22272B" : "#FFFFFF"}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: '16px', paddingBottom: '16px' }}>
        <IconButton>
          {
            variant === 'outlined' ? (
              <RightArrowIconBlue />
            ) : (
              <RightArrowIconWhite />
            )
          }
        </IconButton>
      </CardActions>
    </Card>
  )
}

export { CardNDISBasic, ICardNDISBasic }