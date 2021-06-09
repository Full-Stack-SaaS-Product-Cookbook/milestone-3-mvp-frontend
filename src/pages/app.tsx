import * as React from "react"
import Layout from "../components/layout/Layout"
import { App } from "../components/pages/app/App"
import Seo from "../components/Seo"

const AppPage = () => (
  <Layout>
    <Seo title="ReduxPlate App" />
    <App/>
  </Layout>
)

export default AppPage
