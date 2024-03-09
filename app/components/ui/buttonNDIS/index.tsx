import { Button } from '@mui/material'
import React from 'react'

interface IButtonNDIS {
  variant: string
  label: string
}

const ButtonNDIS = ({ variant, label }) => {
  const color = /blue/.test(variant) ? 'contained' : 'outlined'
  console.log("🚀 ~ ButtonNDIS ~ color:", color)

  return (
    <Button variant="contained" sx={{ width: '101px'}}>
      {label}
    </Button>
  )
}

export { ButtonNDIS, IButtonNDIS }