import React from 'react'
import { CardContent, Typography, CardActions, Button, Box, Card } from "@mui/material"
import { RightArrowIcon } from 'app/components/icons/right-arrow-icon'

const CardNDIS = ({ title, text }) => {
  return (
    <Card sx={{ width: '368px', backgroundColor: '#FFFFFF', border: '1px solid #CDD3D6' }}>
      <Box sx={{ width: '100%', height: '4px', backgroundColor: '#E3B505' }} />
      <CardContent sx={{ padding: '32px 32px 16px 32px' }}>
        <Typography sx={{ fontSize: 20, fontWeight: 600, marginBottom: '16px' }} color="#22272B">
          {title}
        </Typography>
        <Typography sx={{ fontSize: 16 }}  component="div">
          {text}
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingX: '32px', paddingBottom: '16px' }}>
        <Button size="large" startIcon={<RightArrowIcon />} />
      </CardActions>
    </Card>
  )
}

export default CardNDIS