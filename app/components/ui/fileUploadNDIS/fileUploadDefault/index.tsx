import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'
import { Error } from "app/components/icons/error"
import { useState } from "react"
import { IFileUploadNDIS } from ".."

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

const FileUploadNDISDefault = ({ title, text, buttonLabel }: IFileUploadNDIS) => {
  const [uploadFile, setUploadFile] = useState(null)
  const [error, setError] = useState(null)

  const handleUploadFile = async (e) => {
    if (!e.target.files[0]) {
      setError('Invalid file type')
      return
    }

    if (e.target.files[0].size > 367_001_600) {
      setError('The selected file must be smaller than 350MB')
      return
    }

    setUploadFile(e.target.files[0])
    setError(null)
    // do some request
  }

  const handleRemoveFile = () => {
    setUploadFile(null)
  }

  return (
    <Stack gap={'8px'} justifyContent={'start'} alignContent={'start'} marginTop={'12px'}>
      <Typography width={'260px'} fontSize={'16px'} fontWeight={600} marginLeft={'24px'}>
        {title}
      </Typography>
      <Typography width={'260px'} fontSize={'16px'} fontWeight={300} marginLeft={'24px'}>
        {text}
      </Typography>
      {error && (
        <Stack alignItems={'center'} direction={'row'} height={'48px'} sx={{ backgroundColor: '#F7E7EB', marginX: '16px', paddingX: '16px' }}>
          <Error />
          <Typography ml={'8px'}>
            {error}
          </Typography>
        </Stack>
      )}
      <Button component="label" variant="ndis-outlined" sx={{ width: '126px', marginLeft: '24px' }}>
        {buttonLabel}
        <VisuallyHiddenInput onChange={handleUploadFile} type="file" accept=".jpg,.png,.pdf" />
      </Button>
      {uploadFile && (
        <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'} height={'48px'} sx={{ backgroundColor: '#F2F2F2', marginX: '16px', paddingX: '16px' }}>
          <Typography noWrap>{uploadFile?.name}</Typography>
          <Typography color={'#056FD9'} borderBottom={'2px solid #056FD9'} sx={{ '&:hover': { cursor: 'pointer' } }} onClick={handleRemoveFile}>Remove file</Typography>
        </Stack>
      )}
    </Stack>
  )
}

export default FileUploadNDISDefault