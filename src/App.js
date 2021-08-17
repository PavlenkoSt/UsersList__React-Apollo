import './App.css'
import Actions from './Components/Actions'
import UsersList from './Components/UsersList'
import { Box } from '@material-ui/core'

const App = () => {

  return (
    <Box className="App">
      <Actions />
      <UsersList />
    </Box>
  )
}

export default App