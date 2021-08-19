import { gql } from "@apollo/client"

export const CREATE_USER = gql`
    mutation CreateUser(
        $username: String!
        $age: Int!
    ){
        createUser(input: {
            username: $username,
            age: $age
        }){
            username
        }
    }
`

export const DELETE_USER = gql`
    mutation DeleteUser(
        $id: ID!
    ){
        deleteUser(id: $id){
            id
        }
    }
`