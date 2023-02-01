import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query Character($name: String, $status: String, $gender: String) {
    characters(filter: { name: $name, status: $status, gender: $gender }) {
      results {
        name
        status
        species
        type
        gender
        image
        location {
          name
        }
        origin {
          name
          type
          dimension
        }
      }
    }
  }
`
