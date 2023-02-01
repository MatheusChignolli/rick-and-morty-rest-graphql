import { Link } from 'react-router-dom'

const title = 'Qual pílula deseja?'

export default () => {
  return (
    <div className="flex flex-col">
      {['100', '60', '30'].map((size, index) => (
        <h1
          key={`title-${index}`}
          className={`text-2xl text-zinc-400/${size} ${!!index ? '-mt-4' : ''}`}
        >
          {title}
        </h1>
      ))}
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
}
