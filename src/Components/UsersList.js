import React from 'react'
import UsersItem from './UsersItem'
import { Table, TableBody, TableHead, TableRow, TableCell, Box } from '@material-ui/core'

const UsersList = ({ users }) => {

    const renderUsersList = users?.map(({username, id, age}) => <UsersItem
        username={username}
        id={id}
        key={id}
        age={age}
    />)

    if(!renderUsersList.length){
        return <Box className='noUsers'>Пользователи пока не запрошены!</Box>
    }
    
    return (
        <Table className='table'>
            <TableHead>
                <TableRow >
                    <TableCell>Идентификатор</TableCell>
                    <TableCell>Имя</TableCell>
                    <TableCell>Возраст</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {renderUsersList}
            </TableBody>
        </Table>
    )
}

export default UsersList
