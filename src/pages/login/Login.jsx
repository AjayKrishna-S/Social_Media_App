import { useContext } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const Login = () => {
  alert('Please click "Login"')
  const { login } = useContext(AuthContext);

  const handleLogin = ()=> {
    login();
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
            <input type='text' placeholder='Username'></input>
            <input type='password' placeholder='Password'></input>
            <Link to="/"><button onClick={handleLogin}>Login</button></Link>
          </form>
        </div>
      </div>
    </div>
     
  ) 
}

export default Login