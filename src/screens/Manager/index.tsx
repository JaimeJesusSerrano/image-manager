import React, { useContext, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

import AppBar from '~Components/AppBar'
import AddImageButton from '~Components/form/AddImageButton'
import LoaderContext from '~Contexts/Loader.context'
import { Image } from '~Models/Image'
import { ImageCollection } from '~Models/ImageCollection'
import CarouselComponent from '~Screens/Manager/components/Carousel'
import ImageWorkspace from '~Screens/Manager/components/ImageWorkspace'

const Manager = ({}: RouteComponentProps) => {
  const [imageCollectionState, setImageCollectionState] = React.useState<
    ImageCollection
  >(new ImageCollection())
  const [imageSelected, setImageSelected] = React.useState<Image>()

  const { showLoader, hideLoader } = useContext(LoaderContext)

  useEffect(() => {
    showLoader()
    const imageCollection = new ImageCollection()
    imageCollection
      .getFromServer()
      .then(() => {
        setImageCollectionState(imageCollection)
      })
      .finally(() => {
        hideLoader()
      })
  }, [])

  const onSelectImage = (imageSelected: Image) => {
    for (const image of imageCollectionState.images) {
      // Activate new image
      image.active = image.url === imageSelected.url

      // Select new image
      if (image.active) {
        setImageSelected(image)
      }
    }

    // Update state of collection
    const newImageCollection = new ImageCollection(imageCollectionState.images)
    setImageCollectionState(newImageCollection)
  }

  const onChangeImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0]

      showLoader()
      await imageCollectionState.addImage(file, true)

      // Update state of collection
      const newImageCollection = new ImageCollection(
        imageCollectionState.images
      )
      setImageCollectionState(newImageCollection)

      const imageActivated = newImageCollection.getActivated()
      setImageSelected(imageActivated)
      hideLoader()
    }
  }

  return (
    <>
      <AppBar />
      <SGridContainer container direction="column">
        <SAddImageButtonContainer item xs={12}>
          <AddImageButton id={'image-selected'} onChange={onChangeImage} />
        </SAddImageButtonContainer>

        <SImageWorkspaceContainer item xs={12}>
          <ImageWorkspace
            imageSelected={imageSelected}
            setImageSelected={setImageSelected}
          />
        </SImageWorkspaceContainer>

        {imageCollectionState.images.length && (
          <Grid item xs={12}>
            <CarouselComponent
              images={imageCollectionState.images}
              onSelectImage={onSelectImage}
            />
          </Grid>
        )}
      </SGridContainer>
    </>
  )
}

const SAddImageButtonContainer = styled(Grid)`
  text-align: center;
`

const SImageWorkspaceContainer = styled(Grid)`
  margin-top: 10px;
  flex: 1 0 auto;
`

const SGridContainer = styled(Grid)`
  flex: 1 0 auto;
`

export default Manager
