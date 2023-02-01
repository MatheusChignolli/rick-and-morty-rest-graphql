export type statusEnum = 'Dead' | 'Alive' | 'unknown'

export type genderEnum = 'Female' | 'Male' | 'Genderless' | 'unknown'

export interface PageInterface {
  name?: string
  status?: statusEnum
  gender?: genderEnum
}
