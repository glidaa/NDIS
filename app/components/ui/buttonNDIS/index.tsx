import { Button, IconButton } from '@mui/material'
import { UploadIcon } from 'app/components/icons/upload-icon'
import React from 'react'

interface IButtonNDIS {
  variant: string
  label: string
}

const ButtonNDIS = ({ variant, label }) => {
  const color = /blue/.test(variant) ? 'contained' : 'outlined'
  const disabled = !!/disabled/.test(variant)
  const startIcon = /blue/.test(variant) ? <UploadIcon opacity={disabled ? '50%' : null} /> : <UploadIcon color={'#056FD9'} opacity={disabled ? '50%' : null} />

  return (
    <Button startIcon={startIcon} disabled={disabled} variant={color} sx={{ width: '101px', height: '48px', paddingX: '24px' }}>
      {label}
    </Button>
  )
}

export { ButtonNDIS, IButtonNDIS }