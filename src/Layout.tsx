import { ChangeEvent, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { genderEnum, PageInterface, statusEnum } from './types'

export default ({
  children,
}: {
  children: ({ name }: PageInterface) => ReactNode
}) => {
  const navigate = useNavigate()
  const [name, setName] = useState<string>()
  const [gender, setGender] = useState<genderEnum>()
  const [status, setStatus] = useState<statusEnum>()

  const onChangeNameFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const onChangeGenderFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value as genderEnum)
  }

  const onChangeStatusFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value as statusEnum)
  }

  return (
    <div className="w-full h-full">
      <button
        onClick={() => {
          navigate(-1)
        }}
        className="fixed top-6 left-6 p-4 rounded text-gray-800/70 group-hover:text-gray-800 bg-gray-200/70 border-gray-500/70 hover:bg-gray-200 group-hover:border-gray-500 hover:border-gray-500 shadow-[0px_3px_6px_rgba(0,0,0,0.4),0px_8px_13px_-4px_rgba(0,0,0,0.3),0px_-3px_0px_inset_rgba(0,0,0,0.2)]"
      >
        Voltar
      </button>
      {children({ name, status, gender })}
      <div className="group fixed flex rounded  gap-4 bottom-6 left-1/2 w-[400px] -ml-[200px] p-4 duration-300 bg-gray-300/70 hover:bg-gray-300 shadow-[0px_3px_6px_rgba(0,0,0,0.4),0px_8px_13px_-4px_rgba(0,0,0,0.3),0px_-3px_0px_inset_rgba(0,0,0,0.2)]">
        <div className="flex flex-col gap-1 flex-auto">
          <label className="text-gray-800/70 group-hover:text-gray-800">Name</label>
          <input
            className="w-full text-sm p-1 rounded duration-300 border-solid border-2 bg-gray-200/70 border-gray-500/70 hover:bg-gray-200 group-hover:border-gray-500 hover:border-gray-500 focus:bg-gray-200 focus:border-gray-500 text-gray-800/70 hover:text-gray-800 focus:text-gray-800"
            id="character-filter"
            type="text"
            onChange={onChangeNameFilter}
          />
        </div>
        <div className="flex flex-col gap-1 flex-0">
          <label className="text-gray-800/70 group-hover:text-gray-800">
            Status
          </label>
          <select
            className="text-sm h-5 box-content p-1 rounded duration-300 border-solid border-2 bg-gray-200/70 border-gray-500/70 hover:bg-gray-200 group-hover:border-gray-500 hover:border-gray-500 focus:bg-gray-200 focus:border-gray-500 text-gray-800/70 hover:text-gray-800 focus:text-gray-800"
            id="status-filer"
            onChange={onChangeStatusFilter}
          >
            <option></option>
            <option>Alive</option>
            <option>Dead</option>
            <option>unknown</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 flex-0">
          <label className="text-gray-800/70 group-hover:text-gray-800">
            Gender
          </label>
          <select
            className="text-sm h-5 box-content p-1 rounded duration-300 border-solid border-2 bg-gray-200/70 border-gray-500/70 hover:bg-gray-200 group-hover:border-gray-500 hover:border-gray-500 focus:bg-gray-200 focus:border-gray-500 text-gray-800/70 hover:text-gray-800 focus:text-gray-800"
            id="gender-filer"
            onChange={onChangeGenderFilter}
          >
            <option></option>
            <option>Female</option>
            <option>Male</option>
            <option>Genderless</option>
            <option>unknown</option>
          </select>
        </div>
      </div>
    </div>
  )
}
