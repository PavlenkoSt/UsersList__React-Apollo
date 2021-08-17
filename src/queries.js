import { gql } from "@apollo/client"


export const GetAllUsers = gql`
    query getAllUsers{ 
        getAllUsers{
            username,
            id,
            age
        }
    }
`