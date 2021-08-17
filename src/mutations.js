import { gql } from "@apollo/client"

export const CreateUser = gql`
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