import './comments.scss';
import jamesBond from '../../assets/images/James_Bond_29_-_Profile.webp';
import soonaPaana from '../../assets/images/hq720.jpg';
const Comments = () => {
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta velit itaque pariatur dolore iusto. Quod.",
            name: "james Bond",
            userId: 1,
            profilePic: jamesBond
        },
        {
            id: 2,
            desc: "Lorem t itaque pariatur dolore iusto. Quod.",
            name: "soona Paana",
            userId: 1,
            profilePic: soonaPaana 
        }
    ];
  return (
    <div className='comments'>
        {comments.map((comment)=>{
            return (<div className='comment'>
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