import { useState } from 'react'
import './App.css'
import Actions from './Components/Actions'
import UsersList from './Components/UsersList'

const App = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className="App">
      <Actions 
        setUsers={setUsers}  
        setLoading={setLoading}
        setError={setError}
      />
      <UsersList
        users={users}
        loading={loading}
        error={error}
      />
    </div>
  )
}

export default App