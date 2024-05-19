import { ComponentConfig } from "@measured/puck"
import { Input, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"

interface ICustomTextField {
  label: string,
  helperText: string,
  placeholder: string
  variant: 'default' | 'withTextHelper' | 'textArea'
}

const CustomTextField = ({ label, helperText, placeholder, variant }: ICustomTextField) => {
  const [text, setText] = useState('')
  return (
    <Stack>
      {!variant || variant === 'default' && (
        <Stack width={'343px'} px={'24px'}><Typography fontSize={'16px'} fontWeight={700}>
          {label}
        </Typography>
          <TextField placeholder={placeholder} /></Stack>
      )}
      {variant === 'withTextHelper' && (
        <Stack width={'343px'} px={'24px'}><Typography fontSize={'16px'} fontWeight={700}>
          {label}
        </Typography>
          <Typography fontSize={'14px'} mb={'4px'}>
            {helperText}
          </Typography>
          <TextField placeholder={placeholder} /></Stack>
      )}
      {variant === 'textArea' && (
        <Stack width={'343px'} px={'24px'}><Typography fontSize={'16px'} fontWeight={700}>
          {label}
        </Typography>
          <Typography fontSize={'14px'} mb={'4px'}>
            {helperText}
          </Typography>
          <TextField
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setText(event.target.value);
            }}
            placeholder={placeholder}
            multiline
            rows={4}
          />
          <Typography fontSize={'14px'} mt={'4px'}>
            {text?.length} characters
          </Typography>
        </Stack>
      )}
    </Stack>
  )
}

const CustomTextFieldPuckConfig: ComponentConfig<ICustomTextField> = {
  render: (props) => <CustomTextField {...props} />,
  fields: {
    label: { type: "text" },
    helperText: { type: "text" },
    placeholder: { type: "text" },
    variant: {
      type: "radio",
      options: [
        { value: "default", label: "Default" },
        { value: "withTextHelper", label: "With Text Helper" },
        { value: "textArea", label: "Text Area" },
      ]
    }
  },
  defaultProps: {
    label: "Label",
    helperText: "Helper text",
    placeholder: "Value",
    variant: "default"
  }
}

export { type ICustomTextField, CustomTextField, CustomTextFieldPuckConfig }