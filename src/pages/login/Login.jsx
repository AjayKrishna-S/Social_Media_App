import './login.scss'

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
           <h1>Hello World.</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro aliquid aspernatur ratione sequi maiores repellat iste. Numquam.</p>
           <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, officiis.</span>
           <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='Username'></input>
            <input type='password' placeholder='Password'></input>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
     
  ) 
}

export default Login