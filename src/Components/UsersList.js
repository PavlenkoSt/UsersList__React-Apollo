import React, { useEffect, useState } from 'react'
import UsersItem from './UsersItem'
import { Table, TableBody, TableHead, TableRow, TableCell, Box } from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { ALL_USERS } from '../queries'

const UsersList = () => {
    const { data, loading } = useQuery(ALL_USERS, {
        pollInterval: 1000
    })

    const [users, setUsers] = useState([])

    useEffect(() => {
        if(!loading){
            setUsers(data.getAllUsers)
        }
    }, [data])


    const renderUsersList = users.map(({username, id, age}) => <UsersItem
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
                users && users.length ? <Table className='table'>
                    <TableHead>
                        <TableRow >
                            <TableCell>Идентификатор</TableCell>
                            <TableCell>Имя</TableCell>
                            <TableCell>Возраст</TableCell>
                            <TableCell>Удаление</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderUsersList}
                    </TableBody>
                </Table> : ''
            }
            {
                !users.length && !loading && <Box className='noUsers'>Пользователей пока нет!</Box>
            }
        </>
    )
}

export default UsersList
