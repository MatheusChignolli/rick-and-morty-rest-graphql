import { Link } from 'react-router-dom'

const title = 'Qual pílula deseja?'

export default () => (
  <div className="flex flex-col m-auto">
    <h1 className="text-2xl text-gray-400">{title}</h1>
    <h1 className="text-2xl text-gray-400/60 -mt-4">{title}</h1>
    <h1 className="text-2xl text-gray-400/30 -mt-4">{title}</h1>
    <div className="flex justify-between mt-4">
      <Link
        className="bg-zinc-400 rounded p-2 text-gray-800 min-w-20 text-center transition-all duration-300 hover:bg-graphql hover:text-zinc-50"
        to="/graphql"
      >
        GraphQl
      </Link>
      <Link
        className="bg-zinc-400 rounded p-2 text-gray-800 min-w-20 text-center transition-all duration-300 hover:bg-rest hover:text-zinc-50"
        to="/rest"
      >
        REST
      </Link>
    </div>
  </div>
)
