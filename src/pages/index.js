import * as React from "react"

import { Helmet } from 'react-helmet'

import App from '../components/App'

import 'bootstrap/dist/css/bootstrap.min.css'

import '../style/main.scss'


// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Peter J. Schmidt</title>
        <html lang="en" />
        <meta name="description" content="Portfolio Website" />
      </Helmet>
      
      <App />
    </>
  )
}

export default IndexPage
