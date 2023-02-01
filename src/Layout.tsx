import { ChangeEvent, ReactNode, useState } from 'react'

export default ({
  children,
}: {
  children: ({ name }: { name?: string }) => ReactNode
}) => {
  const [name, setName] = useState<string>()

  const onChangeNameFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <div className="w-full h-full">
      {children({ name })}
      <input
        className="fixed bottom-6 left-1/2 w-80 -ml-40 text-3xl bg-gray-400/50 py-4 px-8 rounded-full focus:bg-gray-400 duration-300"
        id="character-filter"
        type="text"
        onChange={onChangeNameFilter}
      />
    </div>
  )
}
