import React from 'react'
// install react-router-dom when first creating react app

function Home() {//calling users route by calling on mount
  // https://jsonplaceholder.typicode.com/users i need to hit this API
  // create a user useState
  // create a useEffect and run it on mount
  // create a async function that calls the users API dynamically

  // once i use axios to get my data
  // i want to set the users from the useState hook that i made
  // then i am aloowed to map over the users and show 10 cards
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
