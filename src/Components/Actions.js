import React from 'react'
import { CloudDownload, Add } from '@material-ui/icons'
import { ALL_USERNAMES } from '../queries'
import { useQuery } from '@apollo/client'
import { Input, FormControl, Box, Button, FormGroup, InputLabel } from '@material-ui/core'

const Actions = ({ setUsers }) => {
    const { data } = useQuery(ALL_USERNAMES)

    const GetUsersHandler = () => {
        setUsers(data?.getAllUsers)
    }

    return (
        <FormGroup className='form'>
            <FormControl>
                <InputLabel htmlFor="username">Имя пользователя</InputLabel>
                <Input id="username" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="age">Возраст</InputLabel>
                <Input id="age" aria-describedby="my-helper-text" />
            </FormControl>
            
            <Box className='formBtnsBox'>
                <Button 
                    variant='outlined'
                    color='primary'
                    startIcon={<Add/>}
                >Добавить</Button>
                <Button 
                    variant='outlined'
                    color='primary'
                    startIcon={<CloudDownload/>}
                    onClick={GetUsersHandler}
                >Получить</Button>
            </Box>  
        </FormGroup>
    )
}

export default Actions
