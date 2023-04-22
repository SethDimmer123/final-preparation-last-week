import React, { useEffect, useState } from "react";
// how to do query strings
import { useParams } from "react-router-dom";
import axios from "axios";

function Posts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]); // i need an empty array for the map method to work
  // setting the posts to a useState i use it to declare a variable so i can use it in the return.

  const [loading,setLoading] = useState(true)// adding a loading state
  // i set it to true because as soon as the loading mounts the
//   useEffect will be loading 
// after the fetching of the posts it will stop loading

const [searchId, setSearchId] = useState(id);

function onSearch() {
    fetchPosts(searchId)
}
//this is how to fetch posts on mount
async function fetchPosts(userId) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`
  );
  setPosts(data);
  setLoading(false)
  //the posts will re-render if loading changes
}

function onSearchKeyPress(key) {
    if(key === 'Enter'){
        onSearch()
    }
}

  useEffect(() => {
    fetchPosts();
  }, []); // id is now showing up in console i need to render posts

  return (
    <>
      <div className="post__search">
        <button>← Back</button>
        <div className="post__search--container">
          <label className="post__search--label">Search by Id</label>
          <input type="number" value={searchId} onChange={(event) => setSearchId(event.target.value)}
          onKeyPress={(event) =>  {
            if(event.key === 'Enter') {
                onSearch();
            }
          }} />
          <button onClick={() => onSearch()} >Enter</button>{/*creating a function for enter button to work */}
        </div>
      </div>
      {
        loading ? (
            new Array(10).fill(0).map((element,index) =>(// looped over the html below 10 times
      <div className="post" key={index}>
        <div className="post__title">
          <div className="post__title--skeleton"></div>
        </div>
        <div className="post__body">
          <p className="post__body--skeleton"></p>
        </div>
      </div>
            ))
        ) : (
            posts.map((post) => (
                //mapping over every post
                 <div className="post" key={post.id}>
                  <div className="post__title">{post.title}</div>
                  <p className="post__body">{post.body}</p>
                </div>
            ))
        )}
    </>
  );
}

export default Posts;

// added axios 15:49

// npm add axios
