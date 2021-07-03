import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import CloudDownload from '@material-ui/icons/CloudDownload'
import AddIcon from '@material-ui/icons/Add'

const AddForm = () => {
    return (
        <form>
            <input name='username' />    
            <input name='age' />
            <Box>
                <Button 
                    variant='outlined'
                    color='primary'
                    startIcon={<AddIcon/>}
                >Добавить</Button>
                <Button 
                    variant='outlined'
                    color='primary'
                    startIcon={<CloudDownload/>}
                >Получить</Button>
            </Box>    
        </form>
    )
}

export default AddForm
