import React from 'react'
import styled from 'styled-components'
import ReactCarousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { Grid } from '@material-ui/core'

import { useWidth } from '~Hooks/useWidth'
import { Image } from '~Models/Image'
import { getSlidesPerPageByBreakpoint } from '~Utils/index'

interface CarouselProps {
  images: Image[]
  onSelectImage: (image: Image) => void
}
const Carousel = ({ images, onSelectImage }: CarouselProps) => {
  const width = useWidth()

  const onClickImage = (event: any) => {
    const image = images.find((image) => {
      return image.url === event.target.src
    })

    if (image) {
      onSelectImage(image)
    }
  }

  return (
    <SGridContainer container direction="row">
      <Grid item xs={12}>
        <ReactCarousel
          arrows
          centered
          clickToChange
          dots
          offset={15}
          slidesPerPage={getSlidesPerPageByBreakpoint(width)}
        >
          {images && images.length
            ? images.map((image) => {
                return (
                  <SImage
                    active={image.active}
                    key={image.url}
                    onClick={onClickImage}
                    src={image.url}
                  />
                )
              })
            : ''}
        </ReactCarousel>
      </Grid>
    </SGridContainer>
  )
}

interface SImageProps {
  active: boolean
}
const SImage = styled.img<SImageProps>`
  cursor: pointer;
  opacity: ${(props: SImageProps) => (props.active ? '100%' : '40%')};
  max-height: 150px;
}
`

const SGridContainer = styled(Grid)`
  margin-bottom: 10px;
`

export default Carousel
