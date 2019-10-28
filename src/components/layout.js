import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'

import Logo from '../../content/assets/logo.svg'

import { rhythm, scale } from "../utils/typography"

const Layout = ({location, title, children}) => {
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              <Logo className='logo'/>
            </Link>
      )
    } else {
      header = (
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              <Logo className='logo' />
            </Link>
      )
    }

  return (
    <>
         <header style={{ backgroundColor: '#dfd9d2', height: '140px', paddingTop: '1.5rem'}}>
           <div style={{ maxWidth: '800px', margin: '0 auto'}}>
       {header}
       </div>
       </header>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

// class Layout extends React.Component {
//   const logo = useStaticQuery(graphql`
//     query LogoQuery {
//       logo: file(absolutePath: { regex: "/logo.png/" }) {
//         childImageSharp {
//           fixed(width: 302, height: 125) {
//             base64
//           }
//         }
//       }
//     }
//   `)

//   render() {
//     const { location, title, children } = this.props
//     const rootPath = `${__PATH_PREFIX__}/`
//     let header

//     if (location.pathname === rootPath) {
//       header = (
//           <h1
//             style={{
//               marginTop: 0,
//             //   ...scale(1.5),
//             //   marginBottom: rhythm(1.5),
//             }}
//           >
//             <Link
//               style={{
//                 boxShadow: `none`,
//                 textDecoration: `none`,
//                 color: `inherit`,
//               }}
//               to={`/`}
//             >
//               {title}
//             </Link>
//           </h1>
//       )
//     } else {
//       header = (
//           <h1
//             style={{
//               marginTop: 0,
//             }}
//           >
//             <Link
//               style={{
//                 boxShadow: `none`,
//                 textDecoration: `none`,
//                 color: `inherit`,
//               }}
//               to={`/`}
//             >
//               {title}
//             </Link>
//           </h1>
//       )
//     }
//     return (
//       <>
//         <header style={{ backgroundColor: '#dfd9d2', height: '100px', paddingTop: '1.5rem'}}>
//           <div style={{ maxWidth: '800px', margin: '0 auto'}}>
//       {header}
//       </div>
//       </header>
//       <div
//         style={{
//           marginLeft: `auto`,
//           marginRight: `auto`,
//           maxWidth: rhythm(30),
//           padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//       </>
//     )
//   }
// }

export default Layout
