import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello world!</h1>
    <p>Hi I'm Hector. I currently live in Houston, Tx. But I grew up in Mexico, lived in Germany for 2 years, and China for 3 years. 
      I am an electrical engineer, and currently transitioning into a full stack web developer role.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
