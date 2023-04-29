import React, { useEffect, useState } from "react";
// install react-router-dom when first creating react app
import axios from "axios";
import {useNavigate} from"react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  async function getUsers() {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users"); // axios.get returns my data
    setUsers(data); //now that i have the data i can set the users to the data which re-renders the users component when the user changes
  }

  useEffect(() => {
    getUsers()
  },[])
  return (
    <div className="container">
      <div className="row">
        <div className="user-list">
          {users.map((user) => ( // i used parentheses instead of curly brackets so i do not have to write return under the curly brackets.
          //network tab lets me prove the key for user id
          <div className="user" key={user.id} onClick={() => navigate(`${user.id}`)}>
             {/*navigate to the user id when i click i use naviagte for routing  */}
            <div className="user-card">
              <div className="user-card__container">
                 <h3>{user.name}</h3>
                <p>
                  <b>Email:</b> {user.email}
                </p>
                <p>
                  <b>Phone:</b> {user.phone}
                </p>
                <p>
                  <b>Website:</b>
                  {user.website}
                </p>
              </div>
            </div>
          </div>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
