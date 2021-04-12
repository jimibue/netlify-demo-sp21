import './App.css';
import axios from 'axios'

import {useEffect, useState} from 'react'

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    axios.get('https://reqres.in/api/users?page=2').then(res=>{
      setUsers(res.data.data)
    })
  },[])
  return (
    <div className="App">
        <h1>James' Resume</h1>
        <p>Yo</p>
        <pre>
          {JSON.stringify(users)}
        </pre>
    </div>
  );
}

export default App;
