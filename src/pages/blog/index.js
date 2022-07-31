import * as React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import { withPrefix } from 'gatsby'
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section has-background-light">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
