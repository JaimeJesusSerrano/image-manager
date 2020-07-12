import React from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'

import { Image } from '~Models/Image'
import { getNewRotateAngles } from '~Utils/index'

interface ImageWorkspaceActionsProps {
  imageSelected: Image
  setImageSelected: React.Dispatch<React.SetStateAction<Image | undefined>>
}
const ImageWorkspaceActions = ({
  imageSelected,
  setImageSelected,
}: ImageWorkspaceActionsProps) => {
  const setRotation = (newRotation: number) => {
    if (imageSelected) {
      imageSelected.setRotation(newRotation)
      setImageSelected(new Image({ ...imageSelected }))
    }
  }

  return (
    <>
      {imageSelected && (
        <SRotationButtonsContainer item xs={12}>
          <Button
            color="primary"
            component="span"
            onClick={() =>
              setRotation(getNewRotateAngles(imageSelected.rotation, -22.5))
            }
            startIcon={<RotateLeftIcon />}
          />
          <Button
            color="primary"
            component="span"
            onClick={() =>
              setRotation(getNewRotateAngles(imageSelected.rotation, 22.5))
            }
            endIcon={<RotateRightIcon />}
          />
        </SRotationButtonsContainer>
      )}
    </>
  )
}

const SRotationButtonsContainer = styled(Grid)`
  text-align: center;
`

export default ImageWorkspaceActions
