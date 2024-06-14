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

console.log(data);
  // const posts = [
  //   {
  //     id:1,
  //     name: "Peter Parker",
  //     userId: 1,
  //     profilePicture: profile,
  //     desc: "Hello World......!,     I wanna tell you something.",
  //     img: "https://cdn.pixabay.com/photo/2022/05/15/04/36/art-7196739_1280.jpg",
  //   },
  //   {
  //     id:2,
  //     name: "The Undertaker",
  //     userId: 2,
  //     profilePicture: "https://i.pinimg.com/564x/1a/20/41/1a2041690dc846d61a6e3c39f06751aa.jpg",
  //     desc: "You can not kill that which is already dead",
  //   }
  // ];
  return (
    <div className='posts'>
      {data.map(post=>{
        return <Post
          post = {post}  
          key = {post.id}
        />
      })}

    </div>
  )
}

export default Posts