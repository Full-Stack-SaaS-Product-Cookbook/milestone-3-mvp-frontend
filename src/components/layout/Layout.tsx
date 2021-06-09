import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Nav } from "./Nav"
import { Footer } from "./Footer"
import { ToastContainer } from "react-toastify"
import { runSearchParamChecks } from "../../helpers/URLSearchParamHelpers"
import { useEffect } from "react"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    runSearchParamChecks()
  }, [])

  return (
    <>
      <Nav siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
      <ToastContainer/>
    </>
  )
}

export default Layout
