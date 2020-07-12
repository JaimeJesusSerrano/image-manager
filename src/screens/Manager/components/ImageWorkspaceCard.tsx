import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CardMedia, Grid } from '@material-ui/core'

import { useWidth } from '~Hooks/useWidth'
import { Image } from '~Models/Image'
import {
  getMarginToAvoidRotationCollision,
  getMaxWidthAndHeightToImageByBreakpoint,
} from '~Utils/index'

interface ImageWorkspaceCardProps {
  imageSelected: Image
  setImageSelected: React.Dispatch<React.SetStateAction<Image | undefined>>
}
const ImageWorkspaceCard = ({ imageSelected }: ImageWorkspaceCardProps) => {
  const width = useWidth()

  const [imageLoading, setImageLoading] = React.useState(false)
  const [
    marginToAvoidRotationCollision,
    setMarginToAvoidRotationCollision,
  ] = React.useState(0)

  const currentImage = React.useRef<HTMLImageElement>(null)

  const maxWidthAndHeightToImageByBreakpoint = getMaxWidthAndHeightToImageByBreakpoint(
    width
  )

  useEffect(() => {
    setImageLoading(true)
  }, [imageSelected.url])

  useEffect(() => {
    handleMarginToAvoidRotationCollision()
  }, [width])

  const handleMarginToAvoidRotationCollision = () => {
    if (currentImage.current) {
      const marginToAvoidRotationCollision = getMarginToAvoidRotationCollision(
        currentImage.current.height,
        currentImage.current.width
      )
      setMarginToAvoidRotationCollision(marginToAvoidRotationCollision)
    }
  }

  const onLoadImage = () => {
    handleMarginToAvoidRotationCollision()
    setImageLoading(false)
  }

  return (
    <>
      {imageSelected && (
        <SImageContainer
          maxheight={maxWidthAndHeightToImageByBreakpoint}
          maxwidth={maxWidthAndHeightToImageByBreakpoint}
          item
          xs={12}
        >
          <CardMedia
            component="img"
            id="current-image"
            ref={currentImage}
            image={imageSelected.url}
            style={{
              marginBottom: marginToAvoidRotationCollision,
              marginTop: marginToAvoidRotationCollision + 10,
              transform: `rotate(${imageSelected.rotation}deg)`,
              visibility: imageLoading ? 'hidden' : 'visible',
            }}
            onLoad={onLoadImage}
          />
        </SImageContainer>
      )}
    </>
  )
}

interface SImageContainerProps {
  maxheight: number
  maxwidth: number
}
const SImageContainer = styled(Grid)<SImageContainerProps>`
  margin-top: 10px;
  text-align: center;

  img {
    height: auto;
    margin: auto;
    max-height: ${(props: SImageContainerProps) => props.maxwidth}px;
    max-width: ${(props: SImageContainerProps) => props.maxheight}px;
    width: auto;
  }
`

export default ImageWorkspaceCard
