import * as React from "react"
import Layout from "../components/layout/Layout"
import { Home } from "../components/pages/home/Home"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="ReduxPlate" />
    <Home/>
  </Layout>
)

export default IndexPage
