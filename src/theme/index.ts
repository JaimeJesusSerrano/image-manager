import { createMuiTheme } from '@material-ui/core'
import { esES } from '@material-ui/core/locale'

interface PaletteColor {
  light?: string
  main: string
  dark?: string
  contrastText?: string
}

// Default palette colors in https://material-ui.com/es/customization/palette/
const theme = createMuiTheme({}, esES)

export default theme
