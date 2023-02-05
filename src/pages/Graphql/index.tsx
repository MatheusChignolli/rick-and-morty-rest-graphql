import { memo, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import Card from '../../components/Card'
import { PageInterface } from '../../types'
import { GET_CHARACTERS } from './queries'

interface getCharactersInterface {
  characters: {
    results: any[]
  }
}

export default memo((filter: PageInterface) => {
  const { data, loading, error, refetch } =
    useQuery<getCharactersInterface>(GET_CHARACTERS)

  useEffect(() => {
    refetch(filter)
  }, [filter])

  if (loading) return <div>Loading</div>
  if (error) return <div>Error</div>

  return (
    <section className="h-full w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {data?.characters.results.map((character, index) => (
        <Card key={`character-${index}`} character={character} index={index} />
      ))}
    </section>
  )
})
