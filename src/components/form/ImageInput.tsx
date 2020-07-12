import React from 'react'

interface ImageInputProps {
  id: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const ImageInput = ({ id, onChange }: ImageInputProps) => {
  return (
    <input
      accept="image/*"
      id={id}
      multiple
      onChange={onChange}
      style={{ display: 'none' }}
      type="file"
    />
  )
}

export default ImageInput
