import './comments.scss';
import jamesBond from '../../assets/images/James_Bond_29_-_Profile.webp';
import soonaPaana from '../../assets/images/hq720.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
const Comments = () => {
    const { currentUser } = useContext(AuthContext)

    const comments = [
        {
            id: 1,
            desc: "Nice costume little boy.",
            name: "james Bond",
            userId: 1,
            profilePic: jamesBond
        },
        {
            id: 2,
            desc: "Sollu....Solli paaru neethan thairiyamana aalaachea",
            name: "soona Paana",
            userId: 2,
            profilePic: soonaPaana 
        }
    ];
  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePicture} alt={currentUser.name} />
            <input type="text" placeholder='Write a comment' />
            <button>Send</button>
        </div>
        {comments.map((comment)=>{
            return (
            <div className='comment' key={comment.id}>
                <img src={comment.profilePic} />
                <div className='info'>
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>)
            
        })}
    </div>
  )
}

export default Comments