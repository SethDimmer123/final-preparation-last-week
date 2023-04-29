import React, {useEffect} from 'react'
// install react-router-dom when first creating react app
import { useParams } from 'react-router-dom'; 

function Home() {
  // https://jsonplaceholder.typicode.com/users i need to hit this API
  const {id } = useParams();// gives me an object in console
  // console.log(fetch("https://jsonplaceholder.typicode.com/users")) //1. this will give me an error 
  // so i call it on mount.


  useEffect(() => {   // 2. calling API on mount which means the page will run everytime page loads
    async function fetchUsers() {// 4. i created an async function inside since i have a useEffect and then put the await 
      const data = await fetch("https://jsonplaceholder.typicode.com/users")// 3. i used fetch first to fetch data
      console.log(data)// i have my promise in console
      // 4. with axios i only need to await 1 time and not 2
    }
  }, []);
  return (
    <div className="container">
  <div className="row">
    <div className="user-list">
      <div className="user">
        <div className="user-card">
          <div className="user-card__container">
        3.    <h3>user.name</h3>
            <p>
              <b>Email:</b> user.email
            </p>
            <p>
              <b>Phone:</b> user.phone
            </p>
            <p>
              <b>Website:</b>
              user.website
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Home
