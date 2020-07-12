import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

export const getMarginToAvoidRotationCollision = (
  height: number,
  width: number
) => {
  let margin = Math.min(width, height) / 4
  if (width > height) {
    margin += (Math.max(width, height) - Math.min(width, height)) / 2
  }

  return margin
}

export const getMaxWidthAndHeightToImageByBreakpoint = (width: Breakpoint) => {
  switch (width) {
    case 'xs':
      return 200
    case 'sm':
      return 350
    case 'md':
      return 500
    case 'lg':
      return 500
    case 'xl':
      return 500
  }
}

export const getNewRotateAngles = (
  currentRotation: number,
  anglesModified: number
) => {
  let newRotation = currentRotation + anglesModified

  if (newRotation >= 360) {
    newRotation = newRotation - 360
  } else if (newRotation <= -360) {
    newRotation = newRotation + 360
  }

  return newRotation
}

export const getSlidesPerPageByBreakpoint = (width: Breakpoint) => {
  switch (width) {
    case 'xs':
      return 2
    case 'sm':
      return 3
    case 'md':
      return 4
    case 'lg':
      return 5
    case 'xl':
      return 6
  }
}