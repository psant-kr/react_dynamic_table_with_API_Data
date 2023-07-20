import React, { useEffect, useState } from 'react';
import UserData from './components/UserData.js';
const API = "https://jsonplaceholder.typicode.com/users";

const App = () => {

  const [users, setUsers] = useState([])
  console.log(users)

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data)
      if (data.length > 0) {
        setUsers(data)
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (

    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>

      </table>
    </div>

  )
}

export default App