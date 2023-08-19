import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useRequest } from '../utils/useRequest'
const Post = () => {
const params = useParams()

const [req, loading, error] = useRequest( async () =>{
  const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  setPosts(resp.data)
})

useEffect(()=>{
  req()
},[])



const [posts, setPosts] = useState([]);
console.log(posts)

  return (
    <div>{posts.body}</div>
  )
}

export default Post