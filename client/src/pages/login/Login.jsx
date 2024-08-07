import { useContext, useState } from 'react';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const Login = () => {
  const { login } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    username:"",
    password:""
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]:e.target.value}));
  };

  const handleLogin = async(e)=> {
    e.preventDefault();

    try{
      await login(inputs);
      navigate("/")
      console.log("navigate");
    }catch(err){
      setErr(err.response.data);
    }
  };

  return ( 
    <div className="login">
      <div className="card">
        <div className="left">
           <h1>Hello World.</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro aliquid aspernatur ratione sequi maiores repellat iste. Numquam.</p>
           <span>Don't you have an account?</span>
           <Link to='/register'>
            <button>Register</button>
           </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='Username' name='username' onChange={handleChange}></input>
            <input type='password' placeholder='Password' name='password' onChange={handleChange}></input>
            {err && err} 
            <Link to="/"><button onClick={handleLogin}>Login</button></Link>
          </form>
        </div>
      </div>
    </div>
     
  ) 
}

export default Login