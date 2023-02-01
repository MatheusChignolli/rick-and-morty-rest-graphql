import { memo, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import Ellipsis from '../../components/Ellipsis'
import { GET_CHARACTERS } from '../../services/graphql/queries'

interface getCharactersInterface {
  characters: {
    results: any[]
  }
}

export default memo(({ name }: { name?: string }) => {
  const { data, loading, refetch } = useQuery<getCharactersInterface>(GET_CHARACTERS)

  useEffect(() => {
    refetch({ name })
  }, [name])

  if (loading) {
    return <div>Loading</div>
  }

  return (
    <section className="h-full w-full grid grid-cols-4 gap-10">
      {data?.characters.results.map((character, index) => {
        return (
          <div
            key={`character-${index}`}
            className={`w-full rounded-md p-4 flex gap-4 flex-col bg-gray-100  shadow-gray-900/40 shadow-inner`}
          >
            <div className="flex gap-4">
              <img
                className="rounded w-40 h-40 shadow-[0px_3px_6px_rgba(0,0,0,0.4),0px_8px_13px_-4px_rgba(0,0,0,0.3),0px_-3px_0px_inset_rgba(0,0,0,0.2)]"
                src={character.image}
                alt={`Image of ${character.name}`}
              />
              <ul className="w-full">
                <li>
                  <div className="flex flex-col">
                    <label className="text-sm font-bold">Name</label>
                    <div className="text-md font-normal text-ellipsis">
                      <Ellipsis>{character.name}</Ellipsis>
                    </div>
                  </div>
                </li>
                <li className="mt-1">
                  <div className="flex flex-col">
                    <label className="text-sm font-bold">Specie</label>
                    <div className="text-md font-normal text-ellipsis">
                      <Ellipsis>
                        {`${character.species} (${character.gender})`}
                      </Ellipsis>
                    </div>
                  </div>
                </li>
                <li className="mt-1">
                  <div className="flex flex-col">
                    <label className="text-sm font-bold">Status</label>
                    <div className="text-md font-normal text-ellipsis">
                      <Ellipsis>{character.status}</Ellipsis>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <ul>
              <li>
                <div className="flex flex-col">
                  <label className="text-sm font-bold">Origin</label>
                  <div className="text-md font-normal text-ellipsis">
                    <Ellipsis>{`${character.origin.name}${
                      !!character.origin.dimension
                        ? ` - ${character.origin.dimension}`
                        : ''
                    }${
                      !!character.origin.type ? ` - ${character.origin.type}` : ''
                    }`}</Ellipsis>
                  </div>
                </div>
              </li>
              <li className="mt-1">
                <div className="flex flex-col">
                  <label className="text-sm font-bold">Location</label>
                  <div className="text-md font-normal text-ellipsis">
                    <Ellipsis>{character.location.name}</Ellipsis>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )
      })}
    </section>
  )
})