import * as React from "react"

import App from '../components/App'

import Layout from '../components/Layout'

import 'bootstrap/dist/css/bootstrap.min.css'

import '../style/main.scss'


// markup
const IndexPage = () => {
  return (
    <>
      <Layout>
        <App />
      </Layout>
    </>
  )
}

export default IndexPage
