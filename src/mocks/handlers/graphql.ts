import { graphql } from 'msw'
import { mockGraphql } from '../graphql'

export default [
  graphql.query('Character', (req, res, ctx) => {
    return res(
      ctx.data(mockGraphql),
    )
  })
]