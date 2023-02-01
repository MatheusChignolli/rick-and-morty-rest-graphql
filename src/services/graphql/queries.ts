import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query Character($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
          type
          dimension
          created
        }
        location {
          name
        }
        image
        episode {
          name
        }
        created
      }
    }
  }
`
