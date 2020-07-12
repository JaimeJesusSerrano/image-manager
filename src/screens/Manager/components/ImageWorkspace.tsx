import React from 'react'
import { Grid } from '@material-ui/core'

import { Image } from '~Models/Image'
import ImageWorkspaceCard from '~Screens/Manager/components/ImageWorkspaceCard'
import ImageWorkspaceActions from '~Screens/Manager/components/ImageWorkspaceActions'

interface ImageWorkspaceProps {
  imageSelected: Image | undefined
  setImageSelected: React.Dispatch<React.SetStateAction<Image | undefined>>
}
const ImageWorkspace = ({
  imageSelected,
  setImageSelected,
}: ImageWorkspaceProps) => {
  return (
    <>
      {imageSelected && (
        <Grid container direction="row">
          <ImageWorkspaceActions
            imageSelected={imageSelected}
            setImageSelected={setImageSelected}
          />

          <ImageWorkspaceCard
            imageSelected={imageSelected}
            setImageSelected={setImageSelected}
          />
        </Grid>
      )}
    </>
  )
}

export default ImageWorkspace
