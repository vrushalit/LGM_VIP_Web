import React, { useState } from "react";

import "./styles.css";

const App = () => {
  const [data, setdata] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((data) => {
        setdata(data.data);
      });
  };

  return (
    <div>
      <header>
      <nav className="nav">
        <ul>
          <li id="logo">
            <h1>SANDBOX</h1>
          </li>
          <li>
            <button onClick={getUsers}>Get Users</button>
          </li>
          </ul>
      </nav>
      </header>   
      <ul className="grid-box">
        {data.map((ele) => {
          return (
            <li className="box" key={ele.id}>
              <img src={ele.avatar}  alt="img" key={ele.avatar} className="userImg" />
              <p className="id">Id : {ele.id}</p>
              <p className="name">First Name : {ele.first_name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;