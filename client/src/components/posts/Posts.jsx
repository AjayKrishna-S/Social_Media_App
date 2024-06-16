import React from 'react';
import './posts.scss';
import Post from '../post/Post.jsx';
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios.js';


const Posts = () => {

   const { data,error, isLoading } = useQuery({
    queryKey:["post"],
    queryFn:() => makeRequest.get("/posts").then((res)=>{
      return res.data;
    })});

  return (
    <div className='posts'>
      { error 
        ? "somthing went worng!" 
        : isLoading 
        ? "loading..."
        : data.map((post)=>{
          return <Post
          post = {post}
          key= {post.id}
        />
          
        })
      }
    </div>
  )
}

export default Posts