import React, { useEffect } from 'react'
// how to do query strings 
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Posts() {
    const { id } = useParams();
    
    useEffect(() => {// this runs everytime page mounts(loads)
        async function fetchPosts(){//in react i want a async inside a useEffect i put an async function
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=1")// 1 is hardcoded 
            // const response
        //  destructing my response
            // console.log("mounted")
            // console.log(response.data);//now im getting the data
            console.log(data);
        }
        fetchPosts() // call the function
    },[])
  return (
    <div>
        {id}
    </div>
  )
}

export default Posts

// added axios 15:49

// npm add axios