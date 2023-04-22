import React, { useEffect } from 'react'
// how to do query strings 
import { useParams } from 'react-router-dom'

function Posts() {
    const { id } = useParams();
    
    useEffect(() => {// this runs everytime page mounts(loads)
        async function fetchPosts(){//in react i want a async inside a useEffect i put an async function
            const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
            // console.log("mounted")
            console.log(data)
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