import { memo, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import Card from '../../components/Card'
import { PageInterface } from '../../types'
import { restApiUri } from '../../main'

interface getCharactersInterface {
  results: any[]
}

export default memo((filter: PageInterface) => {
  const filteredFilter = {} as any

  ;(Object.keys(filter) as Array<keyof typeof filter>).forEach((item) => {
    if (!!filter[item]) {
      filteredFilter[item] = filter[item]
    }
  })

  const { isLoading, error, data, refetch } = useQuery<getCharactersInterface>({
    queryKey: ['getCharacters'],
    queryFn: () =>
      fetch(
        `${restApiUri}/character/?` + new URLSearchParams(filteredFilter as any)
      ).then((res) => res.json()),
  })

  useEffect(() => {
    refetch()
  }, [filter])

  if (isLoading) return <div>Loading</div>
  if (error) return <div>Error</div>

  return (
    <section className="h-full w-full grid grid-cols-4 gap-10">
      {data?.results?.map((character, index) => (
        <Card key={`character-${index}`} character={character} index={index} />
      ))}
    </section>
  )
})
