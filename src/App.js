import './App.css'
import AddUserForm from './Components/AddUserForm'
import UsersList from './Components/UsersList'
import { Box } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import UserInfo from './Components/UserInfo'

const App = () => {

  return (
    <Box className="App">
      <Switch>
        <Route path='/users'>
          <UserInfo/>
        </Route>
        <Route path='/'>
          <AddUserForm />
          <UsersList />
        </Route>
      </Switch>
    </Box>
  )
}

export default App