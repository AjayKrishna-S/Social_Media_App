import { createContext } from 'react';
import './stories.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Stories = () => {
    const { currentUser } = useContext(AuthContext);

    const stories = [
        {
            id: "001",
            name: "elon musk",
            img: "https://images.pexels.com/photos/2350074/pexels-photo-2350074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: "002",
            name: "elon musk",
            img: "https://images.pexels.com/photos/2350074/pexels-photo-2350074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: "003",
            name: "elon musk",
            img: "https://images.pexels.com/photos/2350074/pexels-photo-2350074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: "004",
            name: "elon musk",
            img: "https://images.pexels.com/photos/2350074/pexels-photo-2350074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },

    ];



  return (
    <div className='stories'>
        <div className='story'>
                    <img src={currentUser.profilePicture} />
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
        {stories.map((storie) => {
            return(
                <div className='story'>
                    <img src={storie.img} />
                    <span>{storie.name}</span>
                </div>
            )  
        })}
    </div>
  )
}

export default Stories