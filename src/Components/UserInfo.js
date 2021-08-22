import { useQuery } from '@apollo/client'
import { Box, CardHeader } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ONE_USER } from '../queries'

const UserInfo = () => {
    const router = useHistory()
    const [allPath, currentId] = router.location.pathname.match(/\/users\/(.+)/)

    const { data, loading, error } = useQuery(ONE_USER, {
        variables: {
            id: currentId
        }
    })

    const [ userData, setUserData ] = useState({})
    
    useEffect(() => {
        if(data && !loading){
            setUserData({
                id: data.getUser.id,
                username: data.getUser.username,
                age: data.getUser.age
            })
        }
    }, [data])

    if(loading){
        return <Box className='noUsers'>Загрузка...</Box>
    }

    if(error){
        return <Box className='noUsers'>
            <Box>Ошибка</Box>
            <Link to='/'>На главную</Link>
        </Box>
    }

    return (
        <>
            { data && !loading &&
                <Box>
                    <CardHeader
                        title='Страница пользователя'
                        className='header'
                    />
                    <Box className='userInfo'>
                        <Box>
                            Идентификатор: { userData.id }
                        </Box>
                        <Box>
                            Имя пользователя: { userData.username }
                        </Box>
                        <Box>
                            Возраст: { userData.age }
                        </Box>
                    </Box>
                    <Link className='link' to='/'>На главную</Link>
                </Box>
            }
        </>
    )
}

export default UserInfo
