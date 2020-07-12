import React from 'react'
import { Button } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image'

import ImageInput from '~Components/form/ImageInput'

interface AddImageButtonProps {
  id: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const AddImageButton = ({ id, onChange }: AddImageButtonProps) => {
  return (
    <>
      <ImageInput id={id} onChange={onChange} />
      <label htmlFor={id}>
        <Button color="primary" component="span" endIcon={<ImageIcon />}>
          Add image
        </Button>
      </label>
    </>
  )
}

export default AddImageButton
