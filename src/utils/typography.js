import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

// My customizations
Wordpress2016.overrideThemeStyles = () => ({
  body: {
    backgroundColor: '#3e3c3a',
    color: '#dfd9d1'
  },
  'h1': {
    fontFamily: ["Alegreya SC", "serif"].join(","),
    fontWeight: 'normal'
    // fontFamily: ["El Messiri", "serif"].join(","),
  },
  'h1, h3': {
    color: '#403e3d',
  },
  'h2, h3, h4, h5, h6': {
    fontFamily: ["Alegreya", "serif"].join(","),
    fontWeight: 'normal'
  },
  'h2, a': {
    color: '#e37a5c'
  },
  '.gatsby-resp-image-wrapper': {
    maxWidth: "700px"
  },
  '.post-item': {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '230px',
    marginBottom: '50px'
  },
  '.post-item h3': {
    flex: '1',
    marginTop: '0'
  },
  '.post-item > .gatsby-image-wrapper': {
    flex: '0 0 300px'
  },
  '.post-item-text': {
    padding: '20px'
  }
})
// Wordpress2016.headerFontFamily = ["Alegreya SC", "serif"]
Wordpress2016.bodyFontFamily = ["Sarabun", "sans-serif"]

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
