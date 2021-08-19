import React from 'react'
import { TableRow, TableCell, Button } from '@material-ui/core'
import { useMutation } from '@apollo/client'
import { DELETE_USER } from '../mutations'

const UsersItem = ({ username, id, age }) => {

    const [deleteUser] = useMutation(DELETE_USER)

    const deleteHandler = () => {
        deleteUser({
            variables: {
                id
            }
        })
    }

    return (
        <TableRow >
            <TableCell>{id}</TableCell>        
            <TableCell>{username}</TableCell>        
            <TableCell>{age}</TableCell>    
            <TableCell>
                <Button 
                    onClick={() => deleteHandler()} 
                >Удалить</Button>  
            </TableCell>    
              
        </TableRow>
    )
}

export default UsersItem
