import React from 'react'
// install react-router-dom when first creating react app
import { useParams } from 'react-router-dom'; 

function Home() {
  // https://jsonplaceholder.typicode.com/users i need to hit this API
  const params = useParams();// gives me an object in console
  return (
    <div className="container">
  <div className="row">
    <div className="user-list">
      <div className="user">
        <div className="user-card">
          <div className="user-card__container">
            <h3>user.name</h3>
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
