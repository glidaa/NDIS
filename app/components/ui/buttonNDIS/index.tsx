import { Button, ButtonProps, ButtonTypeMap, ExtendButtonBase, IconButton, SxProps } from '@mui/material'
import { UploadIcon } from 'app/components/icons/upload-icon'
import React from 'react'

interface IButtonNDIS extends ButtonProps {
  variant: 'blue' | 'outlined' | 'blue-disabled' |
  'outlined-disabled' | 'blue-with-icon' | 'outlined-with-icon' |
  'blue-disabled-with-icon' | 'outlined-disabled-with-icon'
  label: string
}

const ButtonNDIS = ({ variant, label, ...buttonProps }: IButtonNDIS) => {
  const labelToVariant = /blue/.test(variant) ? 'ndis' : 'ndis-outlined'
  const disabled = !!/disabled/.test(variant)
  const startIcon = /blue/.test(variant) ? <UploadIcon /> : <UploadIcon color={'#056FD9'} opacity={disabled ? '38%' : null} />
  const withIcon = /icon/.test(variant)
  return (
    <Button startIcon={withIcon && startIcon} disabled={disabled} variant={labelToVariant} sx={{ width: '101px', height: '48px', paddingX: '24px' }} {...buttonProps}>
      {label}
    </Button>
  )
}

export { ButtonNDIS, type IButtonNDIS }