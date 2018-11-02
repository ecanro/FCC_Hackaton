import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi this is the second page</h1>
    <p>Nothing to view for the moments...</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
