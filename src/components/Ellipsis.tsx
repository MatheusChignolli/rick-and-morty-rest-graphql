import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

export default ({ children }: { children: string }) => (
  <ResponsiveEllipsis text={children} />
)
