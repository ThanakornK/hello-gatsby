import React from "react"
import { Link, graphql } from 'gatsby'

export default ({ data }) => {
  return (
    <div>
      <h2>Hello</h2>
      <p>This blog is running on Gatsby.</p>

      <Link to="/about">Got to About Page</Link>
    </div>
  )
}