import { rest } from 'msw'
import { mockRest } from '../rest'

export default [
  rest.get('*/character/?*', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockRest)
    )
  })
]