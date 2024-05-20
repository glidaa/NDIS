import { ComponentConfig } from "@measured/puck"
import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, Stack } from "@mui/material"
import { red } from "@mui/material/colors"
import { useState } from "react"

interface IOptionsList {
  options: { label: string, value: string, color: 'blue' | 'red' }[],
  variant: 'checkbox' | 'radio'
}
const OptionsList = ({ options, variant }: IOptionsList) => {
  // checkbox
  const optionsValues = options?.reduce((acc, option) => {
    acc[option.value] = false
    return acc
  }, {})
  const [optionList, setOptionList] = useState({
    ...optionsValues
  })

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptionList({
      ...optionList,
      [event.target.name]: event.target.checked,
    })
  }

  //radio
  const [radioValue, setRadioValue] = useState(options[0]?.value)
  console.log("🚀 ~ OptionsList ~ radioValue:", radioValue)

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value)
  }

  return (
    <Stack px={'24px'}>
      {variant === 'checkbox' && (
        <FormGroup>
          {options?.map(option => (
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleCheckboxChange}
                  name={option.value}
                  sx={{
                    color: option?.color === 'red' ? red[900] : undefined,
                    '&.Mui-checked': {
                      color: option?.color === 'red' ? red[800] : undefined,
                    }
                  }}
                />}
              label={option.label}
            />
          ))}
        </FormGroup>
      )}
      {variant === 'radio' && (
        <RadioGroup
          name="controlled-radio-buttons-group"
          value={radioValue}
          onChange={handleRadioChange}
        >
          {options?.map(option => (
            <FormControlLabel value={option?.value} control={
              <Radio
                sx={{
                  color: option?.color === 'red' ? red[900] : undefined,
                  '&.Mui-checked': {
                    color: option?.color === 'red' ? red[800] : undefined,
                  }
                }}
              />}
              label={option?.label}
            />
          ))}
        </RadioGroup>
      )}
    </Stack>
  )
}

const OptionsListPuckConfig: ComponentConfig<IOptionsList> = {
  render: (props) => <OptionsList {...props} />,
  fields: {
    options: {
      type: 'array',
      arrayFields: {
        label: { type: 'text' },
        value: { type: 'text' },
        color: {
          type: 'radio',
          options: [
            { value: 'red', label: 'Red' },
            { value: 'blue', label: 'Blue' },
          ]
        }
      }
    },
    variant: {
      type: "radio",
      options: [
        { value: "checkbox", label: "Check Box" },
        { value: "radio", label: "Radio" }
      ]
    }
  },
  defaultProps: {
    options: [
      { label: 'Option 1', value: 'option1', color: 'blue' },
      { label: 'Option 3', value: 'option3', color: 'blue' },
      { label: 'Option 2', value: 'option2', color: 'blue' },
      { label: 'Option 4', value: 'option4', color: 'blue' }
    ],
    variant: "checkbox"
  }
}

export { type IOptionsList, OptionsList, OptionsListPuckConfig }