import { gql } from "@apollo/client"


export const ALL_USERNAMES = gql`
    query{
        getAllUsers{
            username,
            id,
            age
        }
    }
`