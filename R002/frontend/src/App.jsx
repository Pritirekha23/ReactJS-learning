import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8801/users")  
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div>
        <table style={{ padding: "50px" }}> 
          <thead>
            <tr> 
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Name</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.user_id}</td> 
                <td>{d.username}</td>
                <td>{d.email}</td>
                <td>{d.Name}</td>
                <td>{d.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
