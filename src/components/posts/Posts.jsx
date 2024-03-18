import React from 'react';
import './posts.scss';
import Post from '../post/Post.jsx';


const Posts = () => {

  const posts = [
    {
      id:1,
      name: "Elon Musk",
      userId: 1,
      profilePicture: "https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur magnam cupiditate repudiandae id. Dolorem ipsam itaque harum. Illum voluptatum nisi voluptatibus hic ex dolore.",
      img: "https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id:2,
      name: "Elon Musk",
      userId: 1,
      profilePicture: "https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur magnam cupiditate repudiandae id. Dolorem ipsam itaque harum. Illum voluptatum nisi voluptatibus hic ex dolore.",
    }
  ];
  return (
    <div className='posts'>
      {posts.map(post=>{
        console.log(post);
        return <Post
          post = {post}  
          key = {post.id}
        />
      })}

    </div>
  )
}

export default Posts