import FileUploadNDISDefault from "./fileUploadDefault"
import FileUploadNDISDragNDrop from "./fileUploadDragNDrop"

interface IFileUploadNDIS {
  title: string
  text: string
  buttonLabel: string
  variant?: string
}

const FileUploadNDIS = ({ title, text, buttonLabel, variant }: IFileUploadNDIS) => {
  switch (variant) {
    case 'default':
      return <FileUploadNDISDefault title={title} text={text} buttonLabel={buttonLabel} />
    case 'dragndrop':
      return <FileUploadNDISDragNDrop title={title} text={text} buttonLabel={buttonLabel} />
    default:
      return <FileUploadNDISDefault title={title} text={text} buttonLabel={buttonLabel} />
  }
}

export { FileUploadNDIS, type IFileUploadNDIS }