import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Graphql from './pages/Graphql'
import Home from './pages/Home'
import Rest from './pages/Rest'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/graphql',
    element: <Layout>{(props) => <Graphql {...props} />}</Layout>,
  },
  {
    path: '/rest',
    element: <Layout>{(props) => <Rest {...props} />}</Layout>,
  },
])
