import React from 'react'
import UsersItem from './UsersItem'
import { Table, TableBody, TableHead, TableRow, TableCell, Box } from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { GetAllUsers } from '../queries'

const UsersList = () => {
    const { data, loading } = useQuery(GetAllUsers)

    const renderUsersList = data?.getAllUsers?.map(({username, id, age}) => <UsersItem
        username={username}
        id={id}
        key={id}
        age={age}
    />)

    if(loading){
        return <Box className='noUsers'>Загрузка...</Box>
    }
    
    return (
        <>
            { 
                data.getAllUsers && data.getAllUsers.length && <Table className='table'>
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
            }
            {
                !data.getAllUsers.length && !loading && <Box className='noUsers'>Пользователей пока нет!</Box>
            }
        </>
    )
}

export default UsersList
