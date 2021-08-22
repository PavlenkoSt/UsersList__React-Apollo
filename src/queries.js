import { gql } from "@apollo/client"


export const ALL_USERS = gql`
    query getAllUsers{ 
        getAllUsers{
            username,
            id,
            age
        }
    }
`

export const ONE_USER = gql`
    query getUser($id: ID!){
        getUser(id: $id){
            username,
            id,
            age
        }
    }
`