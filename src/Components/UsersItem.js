import React from 'react'
import { TableRow, TableCell } from '@material-ui/core'

const UsersItem = ({ username, id, age }) => {
    return (
        <TableRow >
            <TableCell>{id}</TableCell>        
            <TableCell>{username}</TableCell>        
            <TableCell>{age}</TableCell>        
        </TableRow>
    )
}

export default UsersItem
