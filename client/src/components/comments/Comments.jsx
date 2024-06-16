import './comments.scss';
import jamesBond from '../../assets/images/James_Bond_29_-_Profile.webp';
import soonaPaana from '../../assets/images/hq720.jpg';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
import { makeRequest } from '../../axios';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
const Comments = (postId) => {
    const { currentUser } = useContext(AuthContext)

    const { data,error, isLoading } = useQuery({
        queryKey:["comments"],
        queryFn:() => makeRequest.get("/comments?postIt"+postId).then((res)=>{

          return res.data;
        })});
        

  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePicture} alt={currentUser.name} />
            <input type="text" placeholder='Write a comment' />
            <button>Send</button>
        </div>
        {isLoading ? "Loading":   
            data.map((comment)=>{
                return (
                <div className='comment' key={comment.id}>
                    <img src={comment.profilePic} alt={comment.name}/>
                    <div className='info'>
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>{moment(comment.createdAt).fromNow()}</span>
                </div>)  
            })}
    </div>
  )
}

export default Comments