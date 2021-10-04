import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserList from './containers/Users'
import User from './containers/UserDetails'



function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    const fetchData = async () => {
      const result = await axios.get (
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(result.data);
    }
    fetchData();

  },[]);
  console.log(users);
  
  
  return (
    <Router>
      <div className="container">
    <div className="main-body">
      <Route exact path="/">
      <UserList users={users} />
      </Route>
      <Route path="/users/:id" >
      <User users={users}/>
      </Route>
      </div>
      </div>
    </Router>

  
  );
}

export default App;
