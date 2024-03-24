import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'
import { Error } from "app/components/icons/error"
import { useEffect, useRef, useState } from "react"
import { IFileUploadNDIS } from ".."
import { get } from "lodash"

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

const FileUploadNDISDragNDrop = ({ title, text, buttonLabel }: IFileUploadNDIS) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false)
  const [uploadFile, setUploadFile] = useState(null)
  const [error, setError] = useState(null)


  const handleUploadFile = async (e) => {
    const file = get(e, 'dataTransfer.files.0') || get(e, 'target.files.0')
    const fileType = get(file, 'type')
    const allowedFileTypes = ['jpeg', 'png', 'pdf']

    const fileTypeIsNotAccepted = !allowedFileTypes.some((type: string) => fileType.includes(type))

    if (!fileType || fileTypeIsNotAccepted) {
      setError('Invalid file type')
      setUploadFile(null)
      return
    }

    if (file.size > 367_001_600) {
      setError('The selected file must be smaller than 350MB')
      setUploadFile(null)
      return
    }

    setUploadFile(file)
    setError(null)

    // do something
    console.log(`uploading file...`)
  }

  const handleRemoveFile = () => {
    setUploadFile(null)
  }

  const drop = useRef(null)

  useEffect(() => {
    drop?.current?.addEventListener('dragover', handleDragOver)
    drop?.current?.addEventListener('dragleave', handleDragLeave)
    drop?.current?.addEventListener('drop', handleDrop)

    return () => {
      drop?.current?.removeEventListener('dragover', handleDragOver)
      drop?.current?.removeEventListener('dragleave', handleDragLeave)
      drop?.current?.removeEventListener('drop', handleDrop)
    }
  }, [])

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDraggingOver(true)
    console.log('dragnover')
    const { files } = e.dataTransfer

    if (files && files.length) {
      handleUploadFile(e)
    }
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!drop.current.contains(e.relatedTarget)) {
      setIsDraggingOver(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDraggingOver(false)
    const { files } = e.dataTransfer

    if (files && files.length) {
      handleUploadFile(e)
    }
  }

  return (
    <Stack sx={{ backgroundColor: isDraggingOver ? '#F2F2F2' : '#FFFFFF' }} alignItems={'center'} gap={'12px'} paddingY={'28px'} ref={drop}>
      <Typography fontSize={'13px'} fontWeight={400} width={'203px'}>Select a file or drag and drop here</Typography>
      <Typography fontSize={'12px'} color={'#CBCBCB'} mb={'12px'}>Must be PDF, file size no more than 10MB</Typography>
      {error && (
        <Stack alignItems={'center'} direction={'row'} height={'48px'} sx={{ backgroundColor: '#F7E7EB', marginX: '16px', paddingX: '16px' }}>
          <Error />
          <Typography ml={'8px'}>
            {error}
          </Typography>
        </Stack>
      )}
      <Button component="label" variant="ndis-outlined" sx={{ width: '126px' }}>
        SELECT FILE
        <VisuallyHiddenInput onChange={handleUploadFile} type="file" accept=".jpg,.png,.pdf" />
      </Button>
      {uploadFile && (
        <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'} height={'48px'} sx={{ backgroundColor: '#F2F2F2', width: '90%', marginX: '16px', paddingX: '16px' }}>
          <Typography noWrap width={'80%'}>{uploadFile?.name}</Typography>
          <Typography color={'#056FD9'} borderBottom={'2px solid #056FD9'} sx={{ '&:hover': { cursor: 'pointer' } }} onClick={handleRemoveFile}>Remove file</Typography>
        </Stack>
      )}
    </Stack>
  )
}

export default FileUploadNDISDragNDrop